import Head from 'next/head'

export default function ContactPage() {
  return <>
    <Head>
      <title>Contact - theux.dev</title>
    </Head>
    <main className="mx-auto max-w-7xl">
      <p className="mb-5">
        Get in touch.
      </p>
      <blockquote className="pl-4 border-l-2"><a href="mailto:hello@theux.dev?subject=Hello" class="italic">hello@theux.dev</a></blockquote>
    </main>
  </>
}
