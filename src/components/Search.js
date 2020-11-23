import { useState, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react'

function Hit({ hit, children }) {
  return (
    <Link href={hit.url}>
      <a>{children}</a>
    </Link>
  )
}

export function Search() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const searchButtonRef = useRef()
  const [initialQuery, setInitialQuery] = useState(null)

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  const onInput = useCallback(
    (e) => {
      setIsOpen(true)
      setInitialQuery(e.key)
    },
    [setIsOpen, setInitialQuery]
  )

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  })

  return (
    <div className="relative">
      <Head>
        <link rel="preconnect" href="https://BH4D9OD16A-dsn.algolia.net" crossOrigin="true" />
      </Head>
      <button
        ref={searchButtonRef}
        onClick={onOpen}
        className="transition-colors duration-100 ease-in-out text-gray-600 py-2 pr-12 pl-10 block w-full appearance-none leading-normal border border-transparent rounded-lg focus:outline-none text-left select-none truncate focus:bg-white border-gray-200 focus:border-gray-300 bg-gray-50"
      >
        Search <span className="hidden sm:inline">the docs</span>
      </button>
      {isOpen &&
        createPortal(
          <DocSearchModal
            initialQuery={initialQuery}
            initialScrollY={window.scrollY}
            searchParameters={{
              facetFilters: 'version:v1',
              distinct: 1,
            }}
            onClose={onClose}
            indexName="laravelshopper"
            apiKey="9748bc4e11fc78e9235b915f5bbd7907"
            appId="BH4D9OD16A"
            navigator={{
              navigate({ suggestionUrl }) {
                setIsOpen(false)
                router.push(suggestionUrl)
              },
            }}
            hitComponent={Hit}
            transformItems={(items) => {
              return items.map((item) => {
                // We transform the absolute URL into a relative URL to
                // leverage Next's preloading.
                const a = document.createElement('a')
                a.href = item.url

                return {
                  ...item,
                  url: `${a.pathname}${a.hash}`,
                }
              })
            }}
          />,
          document.body
        )}
      <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
        <svg
          className="fill-current pointer-events-none text-gray-600 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
      </div>
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <span className="text-gray-500 sm:text-sm sm:leading-5 inline-flex items-center">
          <span>
            <kbd
              className="border border-gray-300 mr-1 bg-gray-100 align-middle p-0 inline-flex justify-center items-center  text-xs text-center rounded group-hover:border-gray-300 transition duration-150 ease-in-out "
              style={{ minWidth: '1.8em' }}
            >
              /
            </kbd>
          </span>
          <span className="mx-1">or</span>
          <span>
            <kbd
              className="border border-gray-300 mr-1 bg-gray-100 align-middle p-0 inline-flex justify-center items-center  text-xs text-center rounded group-hover:border-gray-300 transition duration-150 ease-in-out "
              style={{ minWidth: '1.8em' }}
            >
              ⌘
            </kbd>
            <kbd
              className="border border-gray-300 bg-gray-100 align-middle p-0 inline-flex justify-center items-center  text-xs text-center ml-auto mr-0 rounded group-hover:border-gray-300 transition duration-150 ease-in-out "
              style={{ minWidth: '1.8em' }}
            >
              K
            </kbd>
          </span>
        </span>
      </div>
    </div>
  )
}
