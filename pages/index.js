import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>theux.dev - Nitesh Kumar Niranjan</title>
      </Head>
      <div className="mx-auto max-w-7xl">
        <section
          className="lg:items-center lg:justify-between lg:flex"
          style={{ height: "calc(100vh - 360px)", minHeight: 600 }}
        >
          {/* Intro */}
          <div className="w-full lg:w-3/5 lg:pr-24">
            <h1 className="text-2xl font-bold leading-relaxed lg:text-4xl">
              👋 &nbsp;Hey there,
              <br />
              my name is Nitesh Kumar Niranjan.
              <br />
              I'm an 18-year-old{" "}
              <strike className="font-normal">
                designer, developer and tinker
              </strike>{" "}
              hacker. <br />
            </h1>
          </div>
          {/* Image */}
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
        <section className="mt-20">
          {/* Heading */}
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold lg:text-2xl">Projects</h3>
            <span className="flex-1 h-px mx-4 bg-white bg-opacity-25"></span>
            <span className="flex items-center justify-center w-10 h-10 bg-opacity-25 rounded-lg lg:w-12 lg:h-12 bg-night-800">
              <svg
                className="w-6 h-6 text-white text-opacity-25 lg:w-8 lg:h-8"
                fill="currentColor"
                viewBox="0 0 26 26"
              >
                <path d="M9.296 2.048l4.272 8.4L17.696 2l3.312 1.776-5.808 8.112 9.744-.72v3.888l-9.456-.768 5.568 7.728-3.216 1.872-4.464-8.592-4.224 8.592-3.456-1.872 5.808-7.728L2 15.056v-3.888l9.504.816-5.52-8.064 3.312-1.872z" />
              </svg>
            </span>
          </div>
          {/* Projects List */}
          <div className="mt-4">
            <div className="flex items-start p-4 rounded-lg lg:items-center bg-night-600">
              <div className="flex items-center justify-center flex-shrink-0 w-20 h-20 p-1 bg-white border rounded">
                <img
                  src="https://res.cloudinary.com/nowandme/image/upload/v1591626087/nowandme_logo_wqcnjb.png"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <a
                  href="https://nowandme.com"
                  className="inline-flex items-center leading-6 border-b border-transparent hover:border-gray-500"
                  target="_blank"
                >
                  <h3 className="font-medium lg:text-xl">Now&Me</h3>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <p className="text-sm text-night-300 lg:text-base">
                  A social network style platform dedicated to improve mental
                  wellbeing of an individual.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-20">
          {/* Heading */}
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold lg:text-2xl">Blogs</h3>
            <span className="flex-1 h-px mx-4 bg-white bg-opacity-25"></span>
            <span className="flex items-center justify-center w-10 h-10 bg-opacity-25 rounded-lg lg:w-12 lg:h-12 bg-night-800">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 text-white text-opacity-25 lg:w-8 lg:h-8"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </span>
          </div>
          {/* Blog Posts List */}
          <div className="flex flex-wrap -mx-6">
            <div className="flex w-full p-6 lg:w-1/3">
              <div className="p-4 rounded-lg bg-night-600">
                <span className="inline-block mb-2 text-xs font-bold tracking-wide">
                  Apr 12, 2019
                </span>
                <h3 className="text-lg font-semibold">
                  TailwindCSS: Easy UI development
                </h3>
                <p className="mt-3 text-night-300">
                  How tailwindcss changed how I design websites and improved my
                  productivity.
                </p>
                <a
                  href="https://nowandme.com"
                  className="inline-flex items-center mt-6 leading-6 border-b border-transparent hover:border-gray-500"
                  target="_blank"
                >
                  Read more
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex w-full p-6 lg:w-1/3">
              <div className="p-4 rounded-lg bg-night-600">
                <span className="inline-block mb-2 text-xs font-bold tracking-wide">
                  July 25, 2018
                </span>
                <h3 className="text-lg font-semibold">
                  UI Design Guide for Non-Designers
                </h3>
                <p className="mt-3 text-night-300">
                  When we think about UI design, we think of about some fancy
                  colors, styles, and layouts...
                </p>
                <a
                  href="https://nowandme.com"
                  className="inline-flex items-center mt-6 leading-6 border-b border-transparent hover:border-gray-500"
                  target="_blank"
                >
                  Read more
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex w-full p-6 lg:w-1/3">
              <div className="p-4 rounded-lg bg-night-600">
                <span className="inline-block mb-2 text-xs font-bold tracking-wide">
                  July 17, 2018
                </span>
                <h3 className="text-lg font-semibold">
                  Intro to Machine Learning
                </h3>
                <p className="mt-3 text-night-300">
                  Linear regression is a very simple approach for supervised
                  learning to predict real-world values.
                </p>
                <a
                  href="https://nowandme.com"
                  className="inline-flex items-center mt-6 leading-6 border-b border-transparent hover:border-gray-500"
                  target="_blank"
                >
                  Read more
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
