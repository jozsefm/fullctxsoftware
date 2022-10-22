import { Flex, SkeletonText } from '@chakra-ui/react'
import { IMG_DATA, POST_DATES, POST_TAGS, POST_VIEWS } from 'constants/blogPosts'
import { PostLayout } from 'components/blog/PostLayout'
import { Paragraph, PostFooter, PostHeading, Quote } from 'components/blog/PostElements'
import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { ExternalLink, InternalLink } from 'components/reviews/common'

const postSEO = {
  title: "Is It Really That Delightful? - Full Context Analysis",
  description: "Analysing Josh W. Comeau's Delightful React File/Directory Structure from a Full Context perspective",
  canonical: 'https://www.fullcontextdevelopment.com/blog/is-it-really-delightful-full-context-analysis',
  openGraph: {
    url: 'https://www.fullcontextdevelopment.com/blog/is-it-really-delightful-full-context-analysis',
    title: 'Is It Really That Delightful? - Full Context Analysis',
    description: "Analyzing Josh W. Comeau's Delightful React File/Directory Structure from a Full Context perspective",
    site_name: 'Full Context Development Blog',
    type: 'article',
    images: [
      {
        url: 'https://www.fullcontextdevelopment.com/img/blog/hotlink-ok/social/delightful.jpg',
        width: 1600,
        height: 900,
        alt: 'Is It Really That Delightful? - Full Context Analysis',
        type: 'image/jpeg',
      },
    ],
  }
}

export default function DelightfulReaction() {
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
      title='Is It Really That Delightful? - Full Context Analysis'
      tags={POST_TAGS.delightful}
      svg={svg}
      imgAlt={IMG_DATA.delightful.article.alt}
      imgSrc={IMG_DATA.delightful.article.src}
      publishDate={POST_DATES.delightful.published}
      updateDate={POST_DATES.delightful.lastUpdated}
      views={POST_VIEWS.delightful}
      emphasis
    >
      <NextSeo {...postSEO} />
      <>
        <PostHeading id='source'>
          The source material
        </PostHeading>
        <Paragraph>
          Josh W. Comeau (<ExternalLink href='https://twitter.com/joshwcomeau'>@joshwcomeau</ExternalLink>) recently published
          a <ExternalLink href='https://www.joshwcomeau.com/react/file-structure/'>post</ExternalLink> about his preferred
          React project structure. It's titled:
          <Quote>Delightful React File/Directory Structure</Quote>
          It got quite popular, so I thought it's the perfect opportunity to quickly hop in,
          take a look at his approach from the big picture perspective and maybe teach all of us a few valuable lessons about
          how software engineering decisions affect real-life outcomes. If you want, you can jump straight to the <InternalLink href='#summary'>summary</InternalLink>.
        </Paragraph>
        <PostHeading id='big-picture'>
          What's this big picture?
        </PostHeading>
        {BigPicture}
        <PostHeading id='breakdown'>
          Let's break it down
        </PostHeading>
        {BreakDown}
        <PostHeading id='delight'>
          Where's the delight?
        </PostHeading>
        {WheresDelight}
        <PostHeading id='summary'>
          Summary
        </PostHeading>
        {Summary}
        <PostFooter />
      </>
    </PostLayout>
  )
}

const svg = "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMTY4Ij48ZGVmcy8+PHBhdGggZmlsbD0iIzMzMjE0MiIgZD0iTTAgMGgzMDB2MTY4SDB6Ii8+PGcgZmlsbC1vcGFjaXR5PSIuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjYgLjYpIHNjYWxlKDEuMTcxODgpIj48Y2lyY2xlIHI9IjEiIGZpbGw9IiMxOTk4YjEiIHRyYW5zZm9ybT0ibWF0cml4KDEwMC41OTMyNiAxMjAuODUzIC05NS4zMDEzNSA3OS4zMjUwNyAxNTIgNjIuOCkiLz48ZWxsaXBzZSBjeD0iMTMxIiBjeT0iNjAiIGZpbGw9IiNlMjg5N2QiIHJ4PSIyMyIgcnk9IjM1Ii8+PGNpcmNsZSByPSIxIiBmaWxsPSIjMzUwMDAwIiB0cmFuc2Zvcm09Im1hdHJpeCgxNC45NDU4MyAtOS45Njc2MyAxNC42MTkxOSAyMS45MjA1NCAxMTkuMyAxMDApIi8+PGNpcmNsZSByPSIxIiBmaWxsPSIjMDAzZDU2IiB0cmFuc2Zvcm09InJvdGF0ZSgtNy45IDY3Ny4xIC0yNDQuMSkgc2NhbGUoNTUuNTg5ODUgMjI1Ljk2OTg4KSIvPjxjaXJjbGUgcj0iMSIgZmlsbD0iIzFiODFhYiIgdHJhbnNmb3JtPSJtYXRyaXgoNTEuMjY2MSAtNjkuNzc3NSA3Ny42Njc4MiA1Ny4wNjMyIDIzNC42IDMwLjMpIi8+PGNpcmNsZSByPSIxIiBmaWxsPSIjODM1ZjY5IiB0cmFuc2Zvcm09Im1hdHJpeCgtMzMuNTk0MyAtLjU0Nzg0IC4xOTMwMyAtMTEuODM2NiA5OS44IDgxLjgpIi8+PHBhdGggZmlsbD0iI2ZmY2VhZSIgZD0iTTEyMyA2NGwxMC00MCA3IDQ3eiIvPjxwYXRoIGZpbGw9IiNjMzg2ODUiIGQ9Ik0xMzkgODloNDd2OWgtNDd6Ii8+PGNpcmNsZSByPSIxIiBmaWxsPSIjMDM1NzdhIiB0cmFuc2Zvcm09Im1hdHJpeCgtOS42MDcxNyAtMjkuMjIwMzggMTMuNTc4NDIgLTQuNDY0MzYgMTA1LjggMjIuNCkiLz48ZWxsaXBzZSBjeD0iMTIyIiBjeT0iMTAzIiByeD0iMTgiIHJ5PSIxMSIvPjxjaXJjbGUgcj0iMSIgZmlsbD0iIzBhM2U1NyIgdHJhbnNmb3JtPSJtYXRyaXgoLTM1LjYyMjggOC43NDk4IC0yOS45MTc5NCAtMTIxLjgwNDAyIDI0IDkwLjUpIi8+PHBhdGggZmlsbD0iI2QxYjRhZCIgZD0iTTYzIDgybDE5LTEzIDYgMTF6Ii8+PC9nPjwvc3ZnPg=="