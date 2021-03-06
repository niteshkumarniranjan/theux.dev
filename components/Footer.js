import Link from "next/link"

const styles = {
  twitter: {
    boxShadow: "0 0 0 1px rgba(0,145,255,.2)",
  },
  insta: {
    boxShadow: "0 0 0 1px rgba(198,104,207,.2)",
  },
  dribble: {
    boxShadow: "0 0 0 1px rgba(198,104,207,.2)",
  },
  github: {
    boxShadow: "0 0 0 1px rgba(40,43,48,.9)",
  },
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 26 23" width={24} height={24} {...props}>
      <path
        fill="#2C99F8"
        fillRule="evenodd"
        d="M8.177 22.292c9.812 0 15.177-8.335 15.177-15.563 0-.237-.005-.472-.015-.707A11.004 11.004 0 0026 3.19c-.956.435-1.984.729-3.063.86a5.467 5.467 0 002.345-3.025 10.539 10.539 0 01-3.387 1.328A5.268 5.268 0 0018.001.625c-2.946 0-5.334 2.45-5.334 5.47 0 .428.046.846.138 1.246C8.37 7.112 4.44 4.936 1.809 1.626a5.562 5.562 0 00-.722 2.75c0 1.897.942 3.573 2.374 4.553a5.196 5.196 0 01-2.416-.685v.07c0 2.65 1.838 4.861 4.279 5.362a5.217 5.217 0 01-2.41.094c.68 2.173 2.649 3.755 4.984 3.8A10.534 10.534 0 010 19.834a14.83 14.83 0 008.177 2.457"
      />
    </svg>
  )
}

function InstaIcon(props) {
  return (
    <svg viewBox="0 0 26 26" width={24} height={24} {...props}>
      <path
        fill="#C668CF"
        d="M13.001 0c-3.53 0-3.973.015-5.36.079C6.257.142 5.312.36 4.486.683a6.366 6.366 0 00-2.303 1.499 6.382 6.382 0 00-1.5 2.302C.36 5.311.14 6.256.077 7.64.016 9.026 0 9.47 0 13c0 3.53.016 3.972.079 5.359.063 1.384.282 2.329.604 3.155a6.37 6.37 0 001.499 2.303 6.366 6.366 0 002.302 1.5c.827.322 1.772.541 3.156.604C9.026 25.985 9.47 26 13 26c3.53 0 3.972-.015 5.359-.079 1.384-.063 2.33-.282 3.157-.604a6.36 6.36 0 002.301-1.5 6.382 6.382 0 001.5-2.303c.32-.826.54-1.771.604-3.155.063-1.386.079-1.828.079-5.359 0-3.53-.016-3.974-.079-5.36-.065-1.384-.284-2.329-.604-3.156a6.38 6.38 0 00-1.5-2.302 6.354 6.354 0 00-2.302-1.5c-.829-.321-1.774-.54-3.158-.603C16.97.015 16.529 0 12.997 0h.004zm-1.186 2.17H13c3.529 0 3.947.013 5.34.076 1.289.059 1.988.274 2.454.455a4.09 4.09 0 011.518.989c.463.462.75.903.99 1.52.18.465.396 1.164.454 2.453.064 1.393.077 1.812.077 5.339s-.013 3.945-.077 5.339c-.059 1.288-.274 1.988-.455 2.453a4.086 4.086 0 01-.989 1.518 4.087 4.087 0 01-1.518.989c-.466.181-1.165.396-2.454.455-1.393.063-1.811.077-5.34.077s-3.947-.014-5.34-.077c-1.288-.06-1.988-.275-2.454-.456a4.093 4.093 0 01-1.52-.988 4.096 4.096 0 01-.988-1.52c-.181-.465-.397-1.164-.455-2.453-.064-1.393-.076-1.811-.076-5.34 0-3.53.012-3.946.076-5.34.059-1.288.274-1.988.455-2.453a4.09 4.09 0 01.989-1.52 4.101 4.101 0 011.52-.99c.465-.181 1.165-.396 2.453-.455 1.22-.055 1.692-.072 4.155-.074v.003zm7.956 2.164a1.354 1.354 0 100 2.709 1.354 1.354 0 000-2.71zM13 6.5a6.5 6.5 0 100 13.002A6.5 6.5 0 0013 6.5zm0 2.167a4.333 4.333 0 110 8.666 4.333 4.333 0 010-8.666z"
      />
    </svg>
  )
}

function DribbleIcon(props) {
  return (
    <svg viewBox="0 0 26 26" width={24} height={24} {...props}>
      <path
        fill="#EC4989"
        d="M24.676 10.602a12.026 12.026 0 010 4.799 11.9 11.9 0 01-1.796 4.264 12.06 12.06 0 01-1.453 1.763 12.1 12.1 0 01-1.764 1.453A11.874 11.874 0 0113 24.917a11.88 11.88 0 01-2.4-.244 11.737 11.737 0 01-2.24-.694 11.94 11.94 0 01-7.037-8.578 12.057 12.057 0 010-4.8A11.856 11.856 0 013.12 6.339 11.998 11.998 0 016.336 3.12c.637-.432 1.318-.8 2.025-1.1a11.94 11.94 0 017.039-.694c.765.156 1.519.391 2.24.694.706.3 1.387.668 2.023 1.1a11.93 11.93 0 015.013 7.48zm-7.778 3.677c1.457 4 2.049 7.259 2.162 7.929 2.492-1.683 4.408-4.35 4.902-7.445-.23-.075-3.479-1.058-7.064-.484zm-3.897 9.824c1.536 0 3.002-.315 4.334-.88-.165-.971-.809-4.37-2.371-8.43l-.075.024c-6.585 2.294-8.713 6.935-8.713 6.935s-.102-.075-.249-.194a11.059 11.059 0 007.074 2.545zM1.897 12.999a11.06 11.06 0 002.84 7.414s3.04-5.39 9.031-7.325c.145-.049.29-.093.437-.133a36.623 36.623 0 00-.9-1.888c-5.716 1.71-11.201 1.587-11.399 1.582-.003.116-.009.233-.009.35zM8.371 2.961c-3.097 1.461-5.515 4.312-6.235 7.751.292.005 5.028.062 10.359-1.355A66.403 66.403 0 008.37 2.96zm6.017 5.728c4.192-1.57 5.917-3.978 5.945-4.02A11.058 11.058 0 0013 1.9c-.902 0-1.923.11-2.762.313.167.22 2.252 2.99 4.15 6.477zm1.835 3.836c3.814-.48 7.716.329 7.877.364a11.058 11.058 0 00-2.526-6.94c-.021.03-1.945 2.604-6.33 4.394.259.528.508 1.066.739 1.61.082.192.16.383.24.572zm9.514-2.141a13.119 13.119 0 010 5.235 12.981 12.981 0 01-1.958 4.652 13.152 13.152 0 01-1.586 1.923 13.2 13.2 0 01-1.924 1.585c-.694.47-1.437.873-2.208 1.198-.786.334-1.608.587-2.443.757a12.93 12.93 0 01-2.617.266c-.882 0-1.763-.089-2.619-.266a12.804 12.804 0 01-2.443-.757A13.025 13.025 0 01.263 15.62a13.153 13.153 0 010-5.235 12.934 12.934 0 011.958-4.652 13.089 13.089 0 013.509-3.51 13.11 13.11 0 012.209-1.2 13.025 13.025 0 017.679-.756c.835.17 1.657.426 2.443.757.77.327 1.514.729 2.208 1.2a13.016 13.016 0 015.468 8.16zM13 23.834c5.983 0 10.833-4.85 10.833-10.834 0-5.983-4.85-10.833-10.833-10.833C7.017 2.167 2.167 7.017 2.167 13c0 5.983 4.85 10.833 10.833 10.833z"
      />
    </svg>
  )
}

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 26 26" width={24} height={24} {...props}>
      <path
        fill="#757575"
        fillRule="evenodd"
        d="M13 0C5.817 0 0 5.817 0 13c0 5.753 3.721 10.611 8.889 12.334.65.114.894-.276.894-.618 0-.309-.017-1.332-.017-2.421-3.266.601-4.111-.796-4.371-1.528-.146-.373-.78-1.527-1.332-1.836-.455-.244-1.105-.845-.017-.861 1.024-.016 1.755.942 1.999 1.332 1.17 1.967 3.039 1.414 3.786 1.073.114-.845.455-1.414.829-1.739-2.893-.325-5.915-1.446-5.915-6.418 0-1.414.504-2.584 1.332-3.494-.13-.325-.585-1.658.13-3.445 0 0 1.09-.341 3.576 1.332a12.063 12.063 0 013.25-.439c1.104 0 2.21.147 3.25.44 2.486-1.69 3.575-1.333 3.575-1.333.715 1.787.26 3.12.13 3.445.828.91 1.332 2.063 1.332 3.494 0 4.988-3.039 6.093-5.931 6.418.471.406.877 1.186.877 2.405 0 1.739-.016 3.137-.016 3.575 0 .341.244.748.894.618C22.279 23.61 26 18.736 26 13c0-7.183-5.817-13-13-13z"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-center py-6 space-x-6">
          <Link href="https://twitter.com/niranjannitesh">
            <a
              target="_blank"
              rel="nofollow"
              className="p-2.5 rounded-full transition-all duration-100 ease-in hover:bg-twitter"
              style={styles.twitter}
            >
              <TwitterIcon />
            </a>
          </Link>
          <Link href="https://www.instagram.com/theux.dev">
            <a
              target="_blank"
              rel="nofollow"
              className="p-2.5 rounded-full transition-all duration-100 ease-in hover:bg-insta"
              style={styles.insta}
            >
              <InstaIcon />
            </a>
          </Link>
          <Link href="https://dribbble.com/niteshkumarniranjan">
            <a
              target="_blank"
              rel="nofollow"
              className="p-2.5 rounded-full transition-all duration-100 ease-in hover:bg-dribble"
              style={styles.dribble}
            >
              <DribbleIcon />
            </a>
          </Link>
          <Link href="https://github.com/niteshkumarniranjan">
            <a
              target="_blank"
              rel="nofollow"
              className="p-2.5 rounded-full transition-all duration-100 ease-in hover:bg-github"
              style={styles.github}
            >
              <GithubIcon />
            </a>
          </Link>
        </div>
        <div className="text-sm text-center">
          <span className="text-white text-opacity-75">
            &copy; 2020 All rights reserved. – &nbsp;
          </span>
          Designed & Coded by{" "}
          <Link href="/">
            <a className="link">Nitesh Kumar Niranjan</a>
          </Link>
        </div>
      </div>
    </footer>
  )
}
