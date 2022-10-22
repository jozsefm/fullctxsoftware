import { Paragraph, PostFooter } from 'components/blog/PostElements'
import { QbLayout } from 'components/qb/QbLayout'
import { ExternalLink } from 'components/reviews/common'
import { QB_DATES, QB_STATUSES } from 'constants/blogPosts'
import { NextSeo } from 'next-seo'

const postSEO = {
  title: "The Future of Full Context Software Development in 2022",
  description: "After turbulent months a new path is now clear, but it's not what I expected.",
  canonical: 'https://www.fullcontextdevelopment.com/qb/the-future-of-full-context-software-development-2022',
  openGraph: {
    url: 'https://www.fullcontextdevelopment.com/qb/the-future-of-full-context-software-development-2022',
    title: 'The Future of Full Context Software Development in 2022',
    description: "TAfter turbulent months a new path is now clear, but it's not what I expected.",
    site_name: 'Full Context Development Quick Bits',
    type: 'article',
    // images: [
    //   {
    //     url: 'https://www.fullcontextdevelopment.com/img/qb/hotlink-ok/interviewsSocial.jpg',
    //     width: 1600,
    //     height: 900,
    //     alt: 'The Future of Full Context Software Development in 2022',
    //     type: 'image/jpeg',
    //   },
    // ],
  }
}

export default function FutureOfFullContext() {
  return (
    <QbLayout
      title='The Future of Full Context Software Development in 2022'
      publishDate={QB_DATES.future.published}
      updateDate={QB_DATES.future.lastUpdated}
      completed={QB_STATUSES.future}
    >
      <NextSeo {...postSEO} />
      <>
        <Paragraph minorNext>
          <b>I will be honest here</b> the book didn't do well enough for me to sustain working on it full time.
          I will extend this article later to share more details, but for now I want to announce that the online book
          officially transitioned into side-project status.
        </Paragraph>
        <Paragraph minorNext>
          I will be working on it, but at a much lower rate than previously. As I settle in my new situation I will
          estimate more precisely how can I progress with it from now on.
        </Paragraph>
        <Paragraph minorNext>
          For those who wonder I will be starting as a Senior Frontend Engineer at <ExternalLink href='https://snowplowanalytics.com/'>Snowplow Analytics</ExternalLink> in
          just a few days.
        </Paragraph>
        <PostFooter />
      </>
    </QbLayout>
  )
}