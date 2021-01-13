import getJournals from '../../lib/get-journals'
import Link from 'next/link'

const JournalsPage = props => {
  return <main className="py-10 mx-auto max-w-7xl">
    <div className="max-w-3xl mx-auto">
      {
        props.posts.map(({ slug, title, description, ...post }) => {
          const date = new Date(post.date).toLocaleDateString('default', {
            month: 'numeric',
            day: 'numeric'
          })
          return <Link href={`/journal/${slug}`}>
            <a title={title} className="flex py-12 pt-4 border-t border-gray-700 group">
              <div className="text-gray-400" style={{ flexBasis: '5rem' }}>
                {date}
              </div>
              <div>
                <p className="text-2xl font-bold transition-colors group-hover:text-gray-400">{title}</p>
                {description && (
                  <p className="mt-1 text-lg text-gray-400">{description}</p>
                )}
              </div>
            </a>
          </Link>
        })
      }
    </div>
  </main>
}

export const getStaticProps = () => {
  const posts = getJournals()

  return {
    props: {
      posts
    }
  }
}

export default JournalsPage
