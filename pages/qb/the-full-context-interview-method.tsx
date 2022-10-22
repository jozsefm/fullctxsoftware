import { Paragraph, PostFooter } from 'components/blog/PostElements'
import { QbLayout } from 'components/qb/QbLayout'
import { QB_DATES, QB_STATUSES } from 'constants/blogPosts'
import { NextSeo } from 'next-seo'

const postSEO = {
  title: "The Full Context Interview Method",
  description: "A better way to assess the impact of hiring a software engineer",
  canonical: 'https://www.fullcontextdevelopment.com/qb/the-full-context-interview',
  openGraph: {
    url: 'https://www.fullcontextdevelopment.com/qb/the-full-context-interview',
    title: 'The Full Context Interview Method',
    description: "A better way to assess the impact of hiring a software engineer",
    site_name: 'Full Context Development Quick Bits',
    type: 'article',
    // images: [
    //   {
    //     url: 'https://www.fullcontextdevelopment.com/img/qb/hotlink-ok/leetcodeSocial.jpg',
    //     width: 1600,
    //     height: 900,
    //     alt: 'Leetcode Considered Harmful',
    //     type: 'image/jpeg',
    //   },
    // ],
  }
}

export default function TheFullContextInterview() {
  return (
    <QbLayout
      title='The Full Context Interview Method'
      publishDate={QB_DATES.fullctxIntreview.published}
      updateDate={QB_DATES.fullctxIntreview.lastUpdated}
      completed={QB_STATUSES.fullctxIntreview}
    >
      <NextSeo {...postSEO} />
      <>
        <Paragraph minorNext>
          This is an upcoming article, nothing is here yet.
        </Paragraph>
        <PostFooter />
      </>
    </QbLayout>
  )
}