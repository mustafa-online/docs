import Link from 'next/link'
import { useRouter } from 'next/router'
import { VersionSwitcher } from '@/components/VersionSwitcher'
import { createContext, forwardRef, useRef } from 'react'
import clsx from 'clsx'

export const SidebarContext = createContext()

const NavItem = forwardRef(({ href, children, isActive, isPublished, fallbackHref }, ref) => {
  return (
    <li className="mb-3 lg:mb-1" ref={ref}>
      <Link href={isPublished ? href : fallbackHref}>
        <a
          className={clsx('px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block', {
            'text-blue-600 font-medium': isActive,
            'hover:translate-x-2px hover:text-gray-900 text-gray-500 font-medium':
              !isActive && isPublished,
            'hover:translate-x-2px text-gray-400 font-medium': !isActive && !isPublished,
          })}
        >
          <span
            className={clsx('rounded absolute inset-0 bg-blue-200', {
              'opacity-25': isActive,
              'opacity-0': !isActive,
            })}
          />
          <span className="relative">{children}</span>
        </a>
      </Link>
    </li>
  )
})

function Nav({ nav, children, fallbackHref }) {
  const router = useRouter()
  const activeItemRef = useRef()
  const scrollRef = useRef()

  return (
    <nav
      id="nav"
      ref={scrollRef}
      className="px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)"
    >
      <div className="relative -mx-2 w-24 mb-8 lg:hidden">
        <VersionSwitcher />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <TopLevelNav />
      {children}
      {nav &&
        Object.keys(nav)
          .map((category) => {
            let publishedItems = nav[category].filter((item) => item.published !== false)
            if (publishedItems.length === 0 && !fallbackHref) return null
            return (
              <div className="mb-8" key={category}>
                <h5
                  className={clsx(
                    'mb-3 lg:mb-4 uppercase tracking-wide font-bold text-sm lg:text-xs',
                    {
                      'text-gray-600': publishedItems.length > 0,
                      'text-gray-500': publishedItems.length === 0,
                    }
                  )}
                >
                  {category}
                </h5>
                <ul>
                  {(fallbackHref ? nav[category] : publishedItems).map((item, i) => (
                    <NavItem
                      key={i}
                      href={item.href}
                      isActive={item.href === router.pathname}
                      ref={item.href === router.pathname ? activeItemRef : undefined}
                      isPublished={item.published !== false}
                      fallbackHref={fallbackHref}
                    >
                      {item.shortTitle || item.title}
                    </NavItem>
                  ))}
                </ul>
              </div>
            )
          })
          .filter(Boolean)}
    </nav>
  )
}

const TopLevelAnchor = forwardRef(({ children, href, className, icon, isActive, onClick }, ref) => {
  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      className={clsx(
        'flex items-center px-2 -mx-2 py-1 hover:text-gray-900 font-medium',
        className,
        {
          'text-gray-600': !isActive,
          'text-gray-900': isActive,
        }
      )}
    >
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
        {icon}
      </svg>
      <span className="ml-3">{children}</span>
    </a>
  )
})

function TopLevelLink({ href, as, ...props }) {
  if (/^https?:\/\//.test(href)) {
    return <TopLevelAnchor href={href} {...props} />
  }

  return (
    <Link href={href} as={as} passHref>
      <TopLevelAnchor {...props} />
    </Link>
  )
}

function TopLevelNav() {
  let { pathname } = useRouter()
  let current = pathname.split('/')[1]

  return (
    <div className="mb-10">
      <TopLevelLink
        href="/docs/installation"
        isActive={current === '' || current === 'docs'}
        icon={
          <>
            <path
              d="M18 2H8a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM6 6a2 2 0 0 1 2-2h10v10H8a3.91 3.91 0 0 0-2 .56V6zm2 14a2 2 0 1 1 0-4h10v4H8zm2-12h4a1 1 0 1 0 0-2h-4a1 1 0 0 0 0 2z"
              fill="url(#1-doc)"
            />
            <defs>
              <linearGradient
                id="1-doc"
                x1="5.712"
                y1="12"
                x2="16.182"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6875F5" />
                <stop offset=".513" stopColor="#3F83F8" />
                <stop offset="1" stopColor="#1A56DB" />
              </linearGradient>
            </defs>
          </>
        }
      >
        Documentation
      </TopLevelLink>
      <TopLevelLink
        href="/screencasts"
        isActive={current === 'screencasts'}
        className="mt-3 lg:mt-1"
        icon={
          <>
            <path
              d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1z"
              stroke="url(#1-screen)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="1-screen"
                x1="4.926"
                y1="12"
                x2="16.704"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6875F5" />
                <stop offset=".513" stopColor="#3F83F8" />
                <stop offset="1" stopColor="#1A56DB" />
              </linearGradient>
            </defs>
          </>
        }
      >
        Screencasts
      </TopLevelLink>
      <TopLevelLink
        href="/community"
        isActive={current === 'community'}
        className="mt-3 lg:mt-1"
        icon={
          <>
            <path
              d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a1.995 1.995 0 0 1-1.414-.586m0 0L11 14h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4l.586-.586z"
              stroke="url(#1-community)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="1-community"
                x1="4.926"
                y1="13"
                x2="16.704"
                y2="13"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6875F5" />
                <stop offset=".513" stopColor="#3F83F8" />
                <stop offset="1" stopColor="#1A56DB" />
              </linearGradient>
            </defs>
          </>
        }
      >
        Community
      </TopLevelLink>
      <TopLevelLink
        href="/team"
        isActive={current === 'team'}
        className="mt-3 lg:mt-1"
        icon={
          <>
            <path
              d="M12 4.354a4 4 0 1 1 0 5.292M15 21H3v-1a6 6 0 1 1 12 0v1zm0 0h6v-1a6 6 0 0 0-9-5.197M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"
              stroke="url(#1-team)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="1-team"
                x1="4.926"
                y1="12"
                x2="16.704"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6875F5" />
                <stop offset=".513" stopColor="#3F83F8" />
                <stop offset="1" stopColor="#1A56DB" />
              </linearGradient>
            </defs>
          </>
        }
      >
        Team
      </TopLevelLink>
      <TopLevelLink
        href="/sponsors"
        isActive={current === 'sponsors'}
        className="mt-3 lg:mt-1"
        icon={
          <>
            <path
              d="M3.343 7.778a4.5 4.5 0 0 1 7.339-1.46L12 7.636l1.318-1.318a4.5 4.5 0 0 1 6.364 6.364L12 20.364l-7.682-7.682a4.499 4.499 0 0 1-.975-4.904z"
              stroke="url(#1-sponsor)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="1-sponsor"
                x1="4.926"
                y1="12.682"
                x2="16.705"
                y2="12.682"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6875F5" />
                <stop offset=".513" stopColor="#3F83F8" />
                <stop offset="1" stopColor="#1A56DB" />
              </linearGradient>
            </defs>
          </>
        }
      >
        Sponsors
      </TopLevelLink>
      <TopLevelLink
        href="/support"
        isActive={current === 'support'}
        className="mt-3 lg:mt-1"
        icon={
          <>
            <path
              d="M18.364 5.636l-3.536 3.536m3.536-3.536a9 9 0 0 0-12.728 0m12.728 0a9 9 0 0 1 0 12.728m-3.536-9.192a4 4 0 0 0-5.656 0m5.656 0a4 4 0 0 1 0 5.656m0 0l3.536 3.536m-3.536-3.536a4 4 0 0 1-5.656 0m9.192 3.536a9 9 0 0 1-12.728 0m3.536-9.192L5.636 5.636m3.536 3.536a4 4 0 0 0 0 5.656M5.636 5.636a9 9 0 0 0 0 12.728m3.536-3.536l-3.536 3.536"
              stroke="url(#1-sponsor)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="1-sponsor"
                x1="4.926"
                y1="12"
                x2="16.704"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6875F5" />
                <stop offset=".513" stopColor="#3F83F8" />
                <stop offset="1" stopColor="#1A56DB" />
              </linearGradient>
            </defs>
          </>
        }
      >
        Support
      </TopLevelLink>
    </div>
  )
}

export function SidebarLayout({ children, navIsOpen, setNavIsOpen, nav, sidebar, fallbackHref }) {
  return (
    <SidebarContext.Provider value={{ nav, navIsOpen, setNavIsOpen }}>
      <div className="w-full max-w-screen-xl mx-auto px-6">
        <div className="lg:flex -mx-6">
          <div
            id="sidebar"
            className={clsx(
              'fixed inset-0 h-full z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5 pt-16 transition duration-200 ease-in-out',
              {
                hidden: !navIsOpen,
              }
            )}
          >
            <div
              id="navWrapper"
              className="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:sticky lg:bg-transparent overflow-hidden lg:top-16 bg-white"
            >
              <Nav nav={nav} fallbackHref={fallbackHref}>
                {sidebar}
              </Nav>
            </div>
          </div>
          <div
            id="content-wrapper"
            className={clsx(
              'min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5 transition duration-200 ease-in-out',
              {
                'overflow-hidden max-h-screen fixed': navIsOpen,
              }
            )}
          >
            <div id="content">
              <div id="app" className="flex">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarContext.Provider>
  )
}
