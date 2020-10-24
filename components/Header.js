import { useState, useEffect } from "react"
import Transition from "./Transition"
import Link from "next/link"

function LogoIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 65 25" {...props}>
      <path
        fill="#fff"
        d="M23.52 19.968h2.112c.48 0 .72.24.72.72v2.352c0 .48-.24.72-.72.72h-5.376c-.384 0-.624-.24-.72-.72l-.432-2.688c-2.048 2.656-4.736 3.984-8.064 3.984-5.184 0-7.776-2.72-7.776-8.16V3.936H.72c-.48 0-.72-.24-.72-.72V.72C0 .24.24 0 .72 0h7.2c.48 0 .72.24.72.72v14.016c0 1.92.24 3.296.72 4.128.512.8 1.568 1.2 3.168 1.2 1.632 0 2.976-.48 4.032-1.44s1.584-2.048 1.584-3.264V3.936H15.12c-.48 0-.72-.24-.72-.72V.72c0-.48.24-.72.72-.72h7.68c.48 0 .72.24.72.72v19.248zM52.734.72v2.496c0 .48-.24.72-.72.72h-2.88l-5.376 7.2 5.424 8.832h3.312c.48 0 .72.24.72.72v2.352c0 .48-.24.72-.72.72h-6.288c-.448 0-.816-.208-1.104-.624l-4.704-7.968-3.504 4.8h2.64c.48 0 .72.24.72.72v2.352c0 .48-.24.72-.72.72h-9.936c-.48 0-.72-.24-.72-.72v-2.352c0-.48.24-.72.72-.72h2.496l6.096-8.112-4.8-7.92h-3.072c-.48 0-.72-.24-.72-.72V.72c0-.48.24-.72.72-.72h6c.48 0 .832.208 1.056.624l4.224 7.44 3.072-4.128h-1.776c-.48 0-.72-.24-.72-.72V.72c0-.48.24-.72.72-.72h9.12c.48 0 .72.24.72.72z"
      />
      <path
        fill="#D70652"
        d="M63.728 23.712c-.64.64-1.52.96-2.64.96s-2-.304-2.64-.912c-.64-.64-.96-1.424-.96-2.352 0-.96.336-1.76 1.008-2.4.672-.64 1.536-.96 2.592-.96s1.92.304 2.592.912c.672.608 1.008 1.392 1.008 2.352s-.32 1.76-.96 2.4z"
      />
    </svg>
  )
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M3 6h18v1.5H3z" />
      <path d="M3 11h18v1.5H3z" />
      <path d="M9 16h12v1.5H9z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>
  )
}

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M18.728 17.728L6 5 4.94 6.06 17.666 18.79l1.06-1.061z" />
      <path d="M17.728 5.272L5 18l1.06 1.06L18.79 6.334l-1.061-1.06z" />
    </svg>
  )
}

export default function Header() {
  const [menu, setMenu] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  function handleScroll(e) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    setScrollPosition(scrollTop)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-10 px-6 border-b border-transparent-1 bg-pattern bg-night-700">
      <div
        className={`flex items-center justify-between py-8 mx-auto max-w-7xl transition-all duration-200`}
      >
        <Link href="/">
          <a>
            <LogoIcon className="flex-shrink-0 h-5" />
          </a>
        </Link>
        <nav className="relative lg:hidden">
          <button
            className="w-8 h-8 p-1 duration-75 transform rounded-sm focus:outline-none active:scale-95"
            onClick={() => setMenu(!menu)}
          >
            <MenuIcon className="fill-current" />
          </button>

          <div className="absolute top-0 right-0">
            <Transition
              show={menu}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-90"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-75"
            >
              <div className="w-48 py-8 mt-4 mr-4 origin-top-right rounded shadow-2xl bg-night-800">
                <div className="flex flex-col space-y-6 text-center">
                  <div>
                    <Link href="/">
                      <a
                        className="text-sm font-medium tracking-wider uppercase link"
                        onClick={() => setMenu(false)}
                      >
                        Home
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/blog">
                      <a
                        className="text-sm font-medium tracking-wider uppercase link"
                        onClick={() => setMenu(false)}
                      >
                        Blog
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/projects">
                      <a
                        className="text-sm font-medium tracking-wider uppercase link"
                        onClick={() => setMenu(false)}
                      >
                        Projects
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/journal">
                      <a
                        className="text-sm font-medium tracking-wider uppercase link"
                        onClick={() => setMenu(false)}
                      >
                        Journal
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href="/contact">
                      <a
                        className="text-sm font-medium tracking-wider uppercase link"
                        onClick={() => setMenu(false)}
                      >
                        Contact
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Transition>
            <Transition
              show={menu}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-110"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <button
                className="absolute top-0 right-0 z-0 w-8 h-8 p-1 bg-pink-500 rounded-sm shadow focus:outline-none"
                onClick={() => {
                  setMenu(false)
                }}
              >
                <CloseIcon className="fill-current" />
              </button>
            </Transition>
          </div>
        </nav>
        <nav className="hidden space-x-4 lg:flex">
          <Link href="/">
            <a className="text-sm font-medium tracking-wider text-white text-opacity-75 uppercase link hover:text-white">
              Home
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-sm font-medium tracking-wider text-white text-opacity-75 uppercase link hover:text-white">
              Blog
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-sm font-medium tracking-wider text-white text-opacity-75 uppercase link hover:text-white">
              Projects
            </a>
          </Link>
          <Link href="/journal">
            <a className="text-sm font-medium tracking-wider text-white text-opacity-75 uppercase link hover:text-white">
              Journal
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-sm font-medium tracking-wider text-white text-opacity-75 uppercase link hover:text-white">
              Contact
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
