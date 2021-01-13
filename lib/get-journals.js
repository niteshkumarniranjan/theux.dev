import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export default () => {
  const posts = fs
    .readdirSync('./journal/')
    .filter(file => path.extname(file) === '.md')
    .map(file => {
      const postContent = fs.readFileSync(`./journal/${file}`, 'utf8')
      const { data, content } = matter(postContent)

      if (data.published === false) {
        return null
      }

      return { ...data, body: content }
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  // Metadata for searching posts
  const meta = posts.map(p => ({ ...p, body: null }))
  fs.writeFileSync(
    path.resolve(process.cwd(), 'data/journal.json'),
    JSON.stringify(meta)
  )

  return posts
}
