import { SidebarLayout } from '@/layouts/SidebarLayout'
import twitterCardScreencasts from '@/img/twitter-large-card.png'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Title } from '@/components/Title'
import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
  require.context('../pages/screencasts/?meta=title,shortTitle,published', true, /\.mdx$/),
  'screencasts'
)

const nav = {}

export function CourseLayout(props) {
  const router = useRouter()

  return (
    <>
      <Title
        suffix={
          router.pathname === '/screencasts'
            ? undefined
            : 'Create a online Shop with Laravel Shopper'
        }
      >
        {props.layoutProps.meta.metaTitle || props.layoutProps.meta.title}
      </Title>
      <Head>
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`https://docs.laravelshopper.io.com${twitterCardScreencasts}`}
        />
        <meta
          key="og:image"
          property="og:image"
          content={`https://docs.laravelshopper.io${twitterCardScreencasts}`}
        />
      </Head>
      <SidebarLayout nav={nav} fallbackHref="/screencasts/coming-soon" {...props} />
    </>
  )
}
