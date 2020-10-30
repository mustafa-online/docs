import Link from 'next/link'
import { VersionSwitcher } from '@/components/VersionSwitcher'
import { Search } from '@/components/Search'
import clsx from 'clsx'

export function Header({ navIsOpen, onNavToggle }) {
  return (
    <div>
      <div id="header">
        <div className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center">
          <div className="w-full max-w-screen-xl relative mx-auto px-6">
            <HeaderInner navIsOpen={navIsOpen} onNavToggle={onNavToggle} />
          </div>
        </div>
      </div>
    </div>
  )
}

function HeaderInner({ navIsOpen, onNavToggle }) {
  return (
    <div className="flex items-center -mx-6">
      <div className="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
        <div className="flex items-center">
          <Link href="/">
            <a className="flex items-center lg:mr-4">
              <svg
                className="w-auto h-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 108 270.1"
              >
                <path fill="#1a56db" d="M0 125v42l36 20v-83z" />
                <path fill="#1c64f2" d="M0 125l36-21V63L0 42z" />
                <path fill="#1a56db" d="M72 166v42l36 20v-83z" />
                <path fill="#1a56db" d="M72 207.5l36-21v-41l-36-21z" />
                <path fill="#1c64f2" d="M36 145v42l72-42-36-20z" />
                <path fill="#1c64f2" d="M72 125l36 20v-41z" />
                <path fill="#76a9fa" d="M72 42l36 21V21zM36 228.5l-36 21v-42z" />
                <path fill="#a4cafe" d="M72 125l36-21-36-21z" />
                <path fill="#c3ddfd" d="M36 104l36 21V83z" />
                <path fill="#1c64f2" d="M72 0v42l36-21z" />
                <path fill="#1a56db" d="M72 0L36 21 0 42l36 21 36-21zM36 270.1v-42l-36 21z" />
                <path fill="#1c64f2" d="M36 270.1l36-21 36-21-36-21-36 21z" />
                <path fill="#e1effe" d="M36 104l36 21-36 20z" />
              </svg>
              <span className="hidden md:block font-medium text-base text-gray-900 ml-4">
                Documentation
              </span>
            </a>
          </Link>
        </div>
      </div>
      <div className="flex flex-grow min-w-0 lg:w-3/4 xl:w-4/5">
        <div className="w-full min-w-0 lg:px-6 xl:w-3/4 xl:px-12">
          <Search />
        </div>
        <button
          type="button"
          id="sidebar-open"
          className={clsx(
            'flex px-6 items-center lg:hidden text-gray-500 focus:outline-none focus:text-gray-700',
            {
              hidden: navIsOpen,
            }
          )}
          onClick={() => onNavToggle(true)}
          aria-label="Open site navigation"
        >
          <svg
            className="fill-current w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <button
          type="button"
          id="sidebar-close"
          className={clsx(
            'flex px-6 items-center lg:hidden text-gray-500 focus:outline-none focus:text-gray-700',
            {
              hidden: !navIsOpen,
            }
          )}
          onClick={() => onNavToggle(false)}
          aria-label="Close site navigation"
        >
          <svg
            className="fill-current w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
        <div className="hidden lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6">
          <div className="relative mr-4">
            <VersionSwitcher />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div className="flex justify-start items-center text-gray-500">
            <a
              className="flex items-center hover:text-gray-700 mr-5"
              href="https://github.com/shopperlabs"
            >
              <svg
                className="fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>GitHub</title>
                <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0" />
              </svg>
            </a>
            <a
              className="flex items-center hover:text-gray-700 mr-5"
              href="https://twitter.com/laravelshopper"
            >
              <svg
                className="fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Twitter</title>
                <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84" />
              </svg>
            </a>
            <a className="flex items-center hover:text-gray-700" href="https://discord.gg/vXKBTdKRxc">
              <svg
                className="fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 146 146"
              >
                <title>Discord</title>
                <path
                  d="M107.75 125.001s-4.5-5.375-8.25-10.125c16.375-4.625 22.625-14.875 22.625-14.875-5.125 3.375-10 5.75-14.375 7.375-6.25 2.625-12.25 4.375-18.125 5.375-12 2.25-23 1.625-32.375-.125-7.125-1.375-13.25-3.375-18.375-5.375-2.875-1.125-6-2.5-9.125-4.25-.375-.25-.75-.375-1.125-.625-.25-.125-.375-.25-.5-.375-2.25-1.25-3.5-2.125-3.5-2.125s6 10 21.875 14.75c-3.75 4.75-8.375 10.375-8.375 10.375-27.625-.875-38.125-19-38.125-19 0-40.25 18-72.875 18-72.875 18-13.5 35.125-13.125 35.125-13.125l1.25 1.5c-22.5 6.5-32.875 16.375-32.875 16.375s2.75-1.5 7.375-3.625c13.375-5.875 24-7.5 28.375-7.875.75-.125 1.375-.25 2.125-.25 7.625-1 16.25-1.25 25.25-.25 11.875 1.375 24.625 4.875 37.625 12 0 0-9.875-9.375-31.125-15.875l1.75-2S110 19.626 128 33.126c0 0 18 32.625 18 72.875 0 0-10.625 18.125-38.25 19zM49.625 66.626c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875.125-7.625-5.625-13.875-12.75-13.875zm45.625 0c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875s-5.625-13.875-12.75-13.875z"
                  fillRule="nonzero"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
