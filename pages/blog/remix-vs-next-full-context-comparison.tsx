import { Flex, SkeletonText } from '@chakra-ui/react'
import { IMG_DATA, POST_DATES, POST_TAGS, POST_VIEWS } from 'constants/blogPosts'
import { PostLayout } from 'components/blog/PostLayout'
import { Paragraph, PostFooter, PostHeading, Quote } from 'components/blog/PostElements'
import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { ExternalLink, InternalLink } from 'components/reviews/common'

const postSEO = {
  title: "Remix vs Next.js - Full Context Comparison",
  description: "",
  canonical: 'https://www.fullcontextdevelopment.com/blog/remix-vs-next-full-context-comparison',
  openGraph: {
    url: 'https://www.fullcontextdevelopment.com/blog/remix-vs-next-full-context-comparison',
    title: '',
    description: "",
    site_name: 'Full Context Development Blog',
    type: 'article',
    images: [
      {
        url: '',
        width: 1600,
        height: 900,
        alt: '',
        type: 'image/jpeg',
      },
    ],
  }
}

export default function RemixVsNext() {
  const [ BigPicture, setBigPicture ] = useState(null)
  const [ BreakDown, setBreakDown ] = useState(null)
  const [ WheresDelight, setWheresDelight ] = useState(null)
  const [ Summary, setSummary ] = useState(null)

  useEffect(() => {
    const BigPicture = dynamic(
      () => import('../../components/posts/delightful/BigPicture'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setBigPicture(() => <BigPicture />)

    const BreakDown = dynamic(
      () => import('../../components/posts/delightful/BreakDown'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setBreakDown(() => <BreakDown />)

    const WheresDelight = dynamic(
      () => import('../../components/posts/delightful/WheresDelight'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setWheresDelight(() => <WheresDelight />)

    const Summary = dynamic(
      () => import('../../components/posts/delightful/Summary'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setSummary(() => <Summary />)
  }, [])

  return (
    <PostLayout
      title='Remix vs Next.js - Full Context Comparison'
      tags={POST_TAGS.remixVsNext}
      svg={svg}
      imgAlt={IMG_DATA.remixVsNext.article.alt}
      imgSrc={IMG_DATA.remixVsNext.article.src}
      publishDate={POST_DATES.remixVsNext.published}
      updateDate={POST_DATES.remixVsNext.lastUpdated}
      views={POST_VIEWS.remixVsNext}
      emphasis
    >
      <NextSeo {...postSEO} />
      <>
        <PostHeading id='about'>
          Hi there,
        </PostHeading>
        <Paragraph>
          I see what you did there! You found an article just in the making. I know many people are looking forward to it.
          I'm working hard to get this out soon! Consider subscribing to the newsletter to get notified when it's ready!
        </Paragraph>
        <PostFooter />
      </>
    </PostLayout>
  )
}

const svg = "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMTY4Ij48ZGVmcy8+PHBhdGggZmlsbD0iIzYwMzQyYiIgZD0iTTAgMGgzMDB2MTY4SDB6Ii8+PGcgZmlsbC1vcGFjaXR5PSIuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjYgLjYpIHNjYWxlKDEuMTcxODgpIj48Y2lyY2xlIGN4PSIxMTYiIGN5PSIzOSIgcj0iMTc1IiBmaWxsPSIjMDAyMDJjIi8+PGNpcmNsZSByPSIxIiBmaWxsPSIjZGFhOWFmIiB0cmFuc2Zvcm09Im1hdHJpeCg3LjU4MTcyIDM0LjE5MDM2IC0xOC4wMTUzNiAzLjk5NDkgMTUyLjcgNzAuNykiLz48cGF0aCBmaWxsPSIjYTE3ZDgzIiBkPSJNOTAgOTBsNzYtNDktMzcgNjR6Ii8+PGVsbGlwc2UgY3g9IjY0IiBjeT0iNDQiIGZpbGw9IiMxODFhMWIiIHJ4PSI3OSIgcnk9IjQ1Ii8+PGNpcmNsZSByPSIxIiBmaWxsPSIjYzA5OTlkIiB0cmFuc2Zvcm09InJvdGF0ZSg3Mi43IDE4LjggMTczLjEpIHNjYWxlKDQuMTg4MDUgMjAuNDkwMjIpIi8+PHBhdGggZmlsbD0iI2Y0YzRhNyIgZD0iTTE0NC45IDc5LjRsNS0zOS4yIDEyLjEgNS02LjggMzAuOHoiLz48Y2lyY2xlIHI9IjEiIGZpbGw9IiMxMDExMTEiIHRyYW5zZm9ybT0ibWF0cml4KC0xOS40NjkyMyA1NS40ODI4NCAtMjkuNDY3MTkgLTEwLjM0MDIgMjMwIDEyMi41KSIvPjxwYXRoIGZpbGw9IiMwNDA4MDYiIGQ9Ik0xNTYuMiA2MWwxMy4yLTI0LjYgMTIuNCA2LjUtMTMuMiAyNC43eiIvPjxwYXRoIGZpbGw9IiMzYjYyOGUiIGQ9Ik0xMjEuNiAxMTguNmwzLjcgOS4yTDE2MyAxMzFsLTMuNC0xMnoiLz48cGF0aCBkPSJNMTI5LjIgMTE4LjZsLjYtMTggMjUgLjgtLjYgMTh6Ii8+PHBhdGggZmlsbD0iIzFjMWIxYyIgZD0iTTEyNC45IDcwLjdMLTE2IDEwOC45IDguNiAyNy43bDExMS4zIDY0eiIvPjxlbGxpcHNlIGN4PSIxMzciIGN5PSI3MSIgZmlsbD0iI2I4OTNhMyIgcng9IjEzIiByeT0iMTAiLz48L2c+PC9zdmc+"