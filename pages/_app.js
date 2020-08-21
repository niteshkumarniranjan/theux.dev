import Head from "next/head"
import "../assets/css/tailwind.css"
import Header from "../components/Header"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=qAMqgwqpdv"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=qAMqgwqpdv"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=qAMqgwqpdv"
        />
        <link rel="manifest" href="/site.webmanifest?v=qAMqgwqpdv" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg?v=qAMqgwqpdv"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon.ico?v=qAMqgwqpdv" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#121212"></meta>
      </Head>
      <div className="flex flex-col min-h-screen overflow-x-hidden font-sans antialiased text-white bg-night-700">
        <Header />
        <div className="flex-1" style={{ marginTop: 98 }}>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default MyApp
