import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>theux.dev - Nitesh Kumar Niranjan</title>
      </Head>
      <div className="mx-auto max-w-7xl">
        <section className="lg:mt-20 lg:items-center lg:justify-between lg:flex">
          <div className="w-full lg:w-3/5 lg:pr-24">
            <h1 className="text-2xl font-bold leading-relaxed lg:text-4xl">
              👋 &nbsp;Hey there,
              <br />
              my name is Nitesh Kumar Niranjan.
              <br />
              I'm an 18-year-old designer, developer and tinker. <br />
            </h1>
          </div>
          <div className="w-full mt-10 lg:mt-0 lg:w-2/5">
            <div className="relative py-10 border border-pink-500">
              <span className="absolute top-0 left-0 w-2 h-2 -mt-1 -ml-1 border border-pink-500 bg-night-700"></span>
              <span className="absolute top-0 right-0 w-2 h-2 -mt-1 -mr-1 border border-pink-500 bg-night-700"></span>
              <span className="absolute bottom-0 left-0 w-2 h-2 -mb-1 -ml-1 border border-pink-500 bg-night-700"></span>
              <span className="absolute bottom-0 right-0 w-2 h-2 -mb-1 -mr-1 border border-pink-500 bg-night-700"></span>
              <img
                className="-mb-10"
                src={require("../assets/imgs/sapians.svg")}
                alt="This is how I imagine my-self."
              />
              <div className="absolute inset-x-0 bottom-0 flex justify-center w-full -mb-2.5">
                <span className="px-1 text-sm border border-pink-500 bg-night-700">
                  This is how I imagine my-self.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
