import { SidebarLayout } from '@/layouts/SidebarLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import twitterSquare from '@/img/twitter-square.png'
import { Title } from '@/components/Title'
import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/extends/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'extends'
)

const nav = {
  'Admin Panel': [
    pages['routes'], pages['navigation'], pages['controllers'],
  ],
  Components: [
    pages['notifications'], pages['forms'], pages['modals'], pages['empty-state'],
  ],
}

export function ExtendingLayout(props) {
  const router = useRouter()

  return (
    <>
      <Title suffix={router.pathname === '/extending' ? undefined : 'Extending Laravel Shopper'}>
        {props.layoutProps.meta.metaTitle || props.layoutProps.meta.title}
      </Title>
      <Head>
        <meta key="twitter:card" name="twitter:card" content="summary" />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`https://docs.laravelshopper.io${twitterSquare}`}
        />
      </Head>
      <SidebarLayout nav={nav} {...props} />
    </>
  )
}
