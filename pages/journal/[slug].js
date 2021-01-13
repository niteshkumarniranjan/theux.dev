import Post from '../../components/Post'
import getJournals from '../../lib/get-journals'
import renderMarkdown from '../../lib/render-markdown'

const JournalPage = props => {
  return <Post {...props} />
}

export const getStaticProps = ({ params: { slug } }) => {
  const journals = getJournals()
  const journalIndex = journals.findIndex(p => p.slug === slug)
  const journal = journals[journalIndex]
  const { body, ...rest } = journal

  return {
    props: {
      ...rest,
      html: renderMarkdown(body)
    }
  }
}

export const getStaticPaths = () => {
  return {
    paths: getJournals().map(p => `/journal/${p.slug}`),
    fallback: false
  }
}

export default JournalPage
