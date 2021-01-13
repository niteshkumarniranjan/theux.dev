import Head from 'next/head'

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const Post = ({
  title,
  slug,
  html,
  hidden,
  og,
  description,
  date,
}) => (
  <div className="py-8 mx-auto max-w-7xl">
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      {hidden && <meta name="robots" content="noindex" />}
      {date && <meta name="date" content={date} />}
    </Head>
    <article className="max-w-3xl px-4 py-4 mx-auto bg-opacity-50 rounded-lg bg-night-600">
      <span class="font-medium text-base">{date}</span>
      <h1 class="mt-4 mb-8 font-semibold text-5xl text-white">{escapeHtml(title)}</h1>
      <div className="mx-auto prose prose-lg text-white lg:prose-xl" dangerouslySetInnerHTML={{
        __html: html
      }}></div>
    </article>
  </div>
)

export default Post
