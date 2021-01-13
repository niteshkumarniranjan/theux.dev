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
}) => {
  const api = 'https://i.microlink.io/';
  const cardUrl = `https://cards.microlink.io/?preset=paco&title=${title.replace(' ', '+')}&logo=https%3A%2F%2Fsvgur.com%2Fi%2FT5t.svg&domain=https%3A%2F%2Ftheux.dev&p=2gJ3PEZsZXgKICBzeD17ewogICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJywKICAgIGJnOiBxdWVyeS5iZywKICAgIGNvbG9yOiBxdWVyeS5jb2xvciwKICAgIHBhZGRpbmc6IDgwLAogIH19Cj4KICA8RmxleAogICAgc3g9e3sKICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywKICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJywKICAgIH19CiAgPgogICAgPExpbmsKICAgICAgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnCiAgICAgIHJlbD0nc3R5bGVzaGVldCcKICAgIC8-CiAgICA8VGV4dAogICAgICBzeD17ewogICAgICAgIGZvbnRGYW1pbHk6ICdJbnRlcicsCiAgICAgICAgZm9udFNpemU6IDY3LAogICAgICAgIGZvbnRXZWlnaHQ6IDcwMCwKICAgICAgICBsaW5lSGVpZ2h0OiAnMTAwJScsCiAgICAgICAgbGV0dGVyU3BhY2luZzogJy00cHgnLAogICAgICAgIGZsZXg6ICcwIDEgNjAlJywKICAgICAgfX0KICAgID4KICAgICAge3F1ZXJ5LnRpdGxlfQogICAgPC9UZXh0PgogICAgPEltYWdlIHN0eWxlPXt7IHdpZHRoOiAnODBweCcgfX0gc3JjPXtxdWVyeS5sb2dvfSAvPgogIDwvRmxleD4KPC9GbGV4Pg`;
  const image = `${api}${encodeURIComponent(cardUrl)}`;

  return <div className="py-8 mx-auto max-w-7xl">
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      {hidden && <meta name="robots" content="noindex" />}
      {date && <meta name="date" content={date} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="image" content={image} />
      <meta itemprop="image" content={image} />
      <meta name="twitter:image" content={image} />
      <meta property="og:image" content={image} />
    </Head>
    <article className="max-w-3xl px-4 py-4 mx-auto bg-opacity-50 rounded-lg bg-night-600">
      <span class="font-medium text-base">{date}</span>
      <h1 class="mt-4 mb-8 font-semibold text-5xl text-white">{escapeHtml(title)}</h1>
      <div className="mx-auto prose prose-lg text-white lg:prose-xl" dangerouslySetInnerHTML={{
        __html: html
      }}></div>
    </article>
  </div>
}

export default Post
