import { SidebarLayout } from '@/layouts/SidebarLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import twitterSquare from '@/img/twitter-square.png'
import { Title } from '@/components/Title'
import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
  'docs'
)

const nav = {
  Prologue: [
    pages['release-notes'],
    // pages['upcoming-changes'],
    pages['contribution-guide'],
    pages['roadmap'],
    // pages['upgrade'],
  ],
  'Getting started': [
    pages['requirements'],
    pages['installation'],
    pages['configuration']
  ],
  'Concepts': [
    pages['channels'],
    pages['locations'],
    pages['roles-permissions'],
    pages['two-factor'],
    pages['store-setting'],
  ],
  'Admin Panel': [
    pages['brands'],
    pages['categories'],
    pages['collections'],
    pages['attributes'],
    pages['products'],
    pages['variants'],
    pages['orders'],
    pages['cart'],
    pages['customers'],
    pages['reviews'],
  ],
}

export function DocumentationLayout(props) {
  const router = useRouter()

  return (
    <>
      <Title suffix={router.pathname === '/' ? undefined : 'Laravel Shopper'}>
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
