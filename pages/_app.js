import Head from "next/head"
import "../assets/css/tailwind.css"
import Header from "../components/Header"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
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
        <meta name="theme-color" content="#121212" />
      </Head>
      <div className="flex flex-col min-h-screen font-sans antialiased text-white bg-night-700 bg-pattern">
        <Header />
        <main className="flex-1 px-6 pb-10" style={{ paddingTop: 85 }}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MyApp
