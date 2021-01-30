import Head from "next/head"

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

const Post = ({ title, slug, html, hidden, og, description, date }) => {
  const api = "https://i.microlink.io/"
  const cardUrl = `https://cards.microlink.io/?preset=paco&logo=https%3A%2F%2Fsvgshare.com%2Fi%2FT4R.svg&title=${title.replace(
    " ",
    "+"
  )}`
  const image = `${api}${encodeURIComponent(cardUrl)}`

  return (
    <div className="py-8 mx-auto max-w-7xl">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        {hidden && <meta name="robots" content="noindex" />}
        {date && <meta name="date" content={date} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="article" />
        <meta name="image" content={image} />
        <meta itemprop="image" content={image} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:creator" content="@niranjannitesh" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta property="og:image" content={image} />
      </Head>
      <article className="max-w-3xl px-4 py-4 mx-auto bg-opacity-50 rounded-lg bg-night-600">
        <span class="font-medium text-base">{date}</span>
        <h1 class="mt-4 mb-8 font-semibold text-5xl text-white">
          {escapeHtml(title)}
        </h1>
        <div
          className="mx-auto prose prose-lg text-white lg:prose-xl"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        ></div>
      </article>
    </div>
  )
}

export default Post
