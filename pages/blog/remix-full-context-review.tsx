import { Box, Flex, SkeletonText, Text } from '@chakra-ui/react'
import { BlogToC, Paragraph, PostFooter, PostHeading } from 'components/blog/PostElements'
import { PostLayout } from 'components/blog/PostLayout'
import RelatedContent from 'components/blog/RelatedContent'
import { InternalLink } from 'components/reviews/common'
import RemixAtAGlance from 'components/summaries/RemixSummary'
import { IMG_DATA, POST_DATES, POST_TAGS, POST_VIEWS } from 'constants/blogPosts'
import { finalRemixStats, remixScores } from 'constants/scores/remix'
import { BlogTOCContext } from 'contexts/BlogTOCProvider'
import { MobileContext } from 'contexts/MobileProvider'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { useCallback, useContext, useEffect, useMemo, useState } from 'react'

const postSEO = {
  title: "Remix - Full Context Review",
  description: "Find out how can Remix Run influence your project financially and how does it stand out from other React metaframeworks",
  canonical: 'https://www.fullcontextdevelopment.com/blog/remix-full-context-review',
  openGraph: {
    url: 'https://www.fullcontextdevelopment.com/blog/remix-full-context-review',
    title: 'Remix - Full Context Review',
    description: "An in-depth, technical, business-impact analysis and introduction of the framework",
    site_name: 'Full Context Development Blog',
    type: 'article',
    images: [
      {
        url: 'https://www.fullcontextdevelopment.com/img/blog/hotlink-ok/social/remix-social.jpg',
        width: 1600,
        height: 900,
        alt: 'Remix - Full Context Review',
        type: 'image/png',
      },
    ],
  }
}

const relatedContent = [
  {
    url: '/blog/next-full-context-review',
    title: 'Next.js Full Context Review',
    type: 'blog',
    date: POST_DATES.next
  },
  {
    url: '/blog/is-it-really-delightful-full-context-analysis',
    title: 'Is It Really That Delightful? - Full Context Analysis',
    type: 'blog',
    date: POST_DATES.delightful
  }
]

const sfItems = [{name: 'Migration', href: '#migration'}]
const implItems = [
  { name: 'Documentation', href: '#documentation' },
  { name: 'Community', href: '#community' },
  { name: 'Built-in features', href: '#builtin-features' },
  { name: 'Styling', href: '#styling' },
  { name: 'Error handling', href: '#error-handling' },
  { name: 'Local development', href: '#local-development' },
  { name: 'Productivity', href: '#productivity' },
  { name: 'Code quality', href: '#code-quality' },
]
const oplItems = [
  { name: 'Observability', href: '#observability' },
  { name: 'Maintenance', href: '#maintenance' },
  { name: 'Customer support', href: '#customer-support' },
]
const fblItems = [
  { name: 'User feedback', href: '#user-feedback' },
  { name: 'Analytics', href: '#analytics' },
  { name: 'User insights', href: '#user-insights' },
]

const nextToCItems = [
  {
    href: '#about',
    name: 'The Ultimate Adoption Guide'
  },
  {
    href: '#glance',
    name: 'Remix in Numbers'
  },
  {
    href: '#fullcontext',
    name: "What's This Full Context Stuff?"
  },
  {
    href: '#remix',
    name: 'What is Remix?'
  },
  {
    href: '#framework',
    name: 'The Core Framework Design'
  },
  {
    href: '#review',
    name: 'The Review Method'
  },
  {
    href: '#idea',
    name: 'Stage 1: Business Idea'
  },
  {
    href: '#strategy',
    name: 'Stage 2: Business Strategy'
  },
  {
    href: '#product',
    name: 'Stage 3: Product Strategy'
  },
  {
    href: '#orgproc',
    name: 'Stage 4: Organization & Processes'
  },
  {
    href: '#design',
    name: 'Stage 5: Product Design'
  },
  {
    href: '#software',
    name: 'Stage 6: Software Design',
    subItems: sfItems
  },
  {
    href: '#implementation',
    name: 'Stage 7: Implementation',
    subItems: implItems
  },
  {
    href: '#delivery',
    name: 'Stage 8: Delivery'
  },
  {
    href: '#operation',
    name: 'Stage 9: Operation',
    subItems: oplItems
  },
  {
    href: '#feedback',
    name: 'Stage 10: Feedback',
    subItems: fblItems
  },
  {
    href: '#procon',
    name: 'Pros & Cons'
  },
  {
    href: '#score',
    name: 'Final Score'
  },
  {
    href: '#impact',
    name: 'Business Impact'
  },
  {
    href: '#conclusions',
    name: 'Conclusions'
  },
]

const RemixReview = () => {
  const [ rerender, forceRerender ] = useState(false)
  const { isMobile } = useContext(MobileContext)
  const [ Meme, setMeme ] = useState(null)
  const [ RemixRun, setRemixRun ] = useState(null)
  const [ Framework, setFramework ] = useState(null)
  const [ ReviewMethod, setReviewMethod ] = useState(null)
  const [ BusinessIdea, setBusinessIdea ] = useState(null)
  const [ Strategy, setStrategy ] = useState(null)
  const [ OrgProc, setOrgProc ] = useState(null)
  const [ Product, setProduct ] = useState(null)
  const [ Design, setDesign ] = useState(null)
  const [ Software, setSoftware ] = useState(null)
  const [ Implementation, setImplementation ] = useState(null)
  const [ Delivery, setDelivery ] = useState(null)
  const [ Operation, setOperation ] = useState(null)
  const [ Feedback, setFeedback ] = useState(null)
  const [ ProCon, setProCon ] = useState(null)
  const [ Final, setFinal ] = useState(null)
  const [ Impact, setImpact ] = useState(null)
  const [Conclusions, setConclusions] = useState(null)
  const { desktopTocRef, mobileTocRef, showMobileMenu, toggleMobileMenu } = useContext(BlogTOCContext)
  
  const tocTarget = useMemo(() => {
    return isMobile ? mobileTocRef.current : desktopTocRef.current
  }, [isMobile, mobileTocRef.current, desktopTocRef.current])

  useEffect(() => { // on back-navigation the ToC doesn't render because reasons, we need to force a rerender to make it appear.
    const deskToC = desktopTocRef.current
    const mobTocRef = mobileTocRef.current
    if (deskToC || mobTocRef) {
      forceRerender(true)
    }

    const Meme = dynamic(
      () => import('../../components/reviews/remix/Meme'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setMeme(() => <Meme />)
    
    const RemixRun = dynamic(
      () => import('../../components/reviews/remix/RemixRun'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setRemixRun(() => <RemixRun />)

    const Framework = dynamic(
      () => import('../../components/reviews/remix/Framework'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setFramework(() => <Framework />)

    const ReviewMethod = dynamic(
      () => import('../../components/reviews/remix/ReviewMethod'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setReviewMethod(() => <ReviewMethod />)

    const BusinessIdea = dynamic(
      () => import('../../components/reviews/remix/BusinessIdea'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setBusinessIdea(() => <BusinessIdea />)

    const Impact = dynamic(
      () => import('../../components/reviews/remix/Impact'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setImpact(() => <Impact />)

    const Strategy = dynamic(
      () => import('../../components/reviews/remix/Strategy'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setStrategy(() => <Strategy />)

    const OrgProc = dynamic(
      () => import('../../components/reviews/remix/OrgProc'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setOrgProc(() => <OrgProc />)

    const Product = dynamic(
      () => import('../../components/reviews/remix/Product'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setProduct(() => <Product />)

    const Design = dynamic(
      () => import('../../components/reviews/remix/Design'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setDesign(() => <Design />)

    const Software = dynamic(
      () => import('../../components/reviews/remix/Software'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setSoftware(() => <Software />)

    const Implementation = dynamic(
      () => import('../../components/reviews/remix/Implementation'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setImplementation(() => <Implementation />)

    const Delivery = dynamic(
      () => import('../../components/reviews/remix/Delivery'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setDelivery(() => <Delivery />)

    const Operation = dynamic(
      () => import('../../components/reviews/remix/Operation'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setOperation(() => <Operation />)

    const Feedback = dynamic(
      () => import('../../components/reviews/remix/Feedback'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setFeedback(() => <Feedback />)

    const ProCon = dynamic(
      () => import('../../components/reviews/remix/ProCon'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setProCon(() => <ProCon />)

    const Final = dynamic(
      () => import('../../components/reviews/remix/Final'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setFinal(() => <Final />)

    const Conclusions = dynamic(
      () => import('../../components/reviews/remix/Conclusions'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setConclusions(() => <Conclusions />)
  }, [])

  const toggleMobileMenuOnTocNavigation = useCallback(() => {
    if (showMobileMenu) {
      toggleMobileMenu()
    }
  }, [showMobileMenu, toggleMobileMenu])

  const toggelOnNav = toggleMobileMenuOnTocNavigation

  return (
    <PostLayout
      title='Remix - Full Context Review'
      tags={POST_TAGS.remix}
      svg={svg}
      imgAlt={IMG_DATA.remix.article.alt}
      imgSrc={IMG_DATA.remix.article.src}
      publishDate={POST_DATES.remix.published}
      updateDate={POST_DATES.remix.lastUpdated}
      views={POST_VIEWS.remix}
      emphasis
      toc
    >
      {rerender ? <Box pos='absolute' w='0' h='0' bg='transparent' top='-1px' left='-1px'></Box>: null}
      <NextSeo {...postSEO} />
      <BlogToC tocTarget={tocTarget} toggelOnNav={toggelOnNav} tocItems={nextToCItems} />
      <>
        <Box w='100%'>
          <PostHeading id='about'>
            The Ultimate Adoption Guide
          </PostHeading>
          <Paragraph>
            This is an in-depth analysis, intended to help technical decision makers in evaluating how well Remix can
            serve their project needs. It introduces the framework, then takes a deep dive into its technical capabilities and unique
            architectural choices while walking through the <InternalLink href='/code-to-money-roadmap' newTab>Code to Money Roadmap</InternalLink> to
            identify the business impact of Remix over every aspect of the software development process. <Text as='span' fontFamily='Roboto' fontStyle='italic'>
              (If you are not familiar with the Roadmap, don't worry. I will briefly explain every
              relevant idea as we go.)
            </Text> By the time you finish reading the review, you will have all the information necessary to
            make an objective decision about adoption and also you will be ready to convince any manager
            that might stand in your way.
            We will discover what kind of projects can benefit the most from using this framework and which types
            can't utilize its strengths. You will learn about the real life influence of Remix over the user experience,
            developer experience, organizational performance and, consequently, the expected financial results.
            Does it sound good? Then... let's do some more introduction. 😉 — right after the short summary:
          </Paragraph>
          <RemixAtAGlance scores={remixScores} total={finalRemixStats} />
          <PostHeading id='fullcontext' mt='50px'>
            What's this Full Context stuff?
          </PostHeading>
          <Paragraph minorNext>
            As this is the first Full Context Review™ out there and virtually nobody knows what does that mean,
            let me get it out of the way. It's not your regular tech review. I created this article using the Full Context method,
            which is a well-defined system for analyzing programming tools and technologies.
            You won't be reading small code snippets showcasing how to do the simplest of stuff with Remix, then concluding it's awesome.
            What we do here is going though each and every technical factor that contributes into the financial performance of your
            software product, be it framework architecture, the quality of produced application code, the efficiency of working with Remix,
            how well it can integrate into your existing workflows and utilize existing skills among many, many other considerations. The nice thing about
            the Full Context approach is that, it provides structure and guidance for doing this without missing any important factor.
          </Paragraph>
          <Paragraph>
            But to be honest with you, thanks to this the article became quite long. On more than a few occasions it
            goes beyond Remix, as it also covers project concerns that are influenced by but not directly related to the framework.
            A few examples are: observability, product design and business strategy.
            At times, it contains exciting information you won't even find in the official docs. Other times, it will go on and on
            about things not relevant or interesting to you.
            In a sense, it pains me, but the real goal of this review is not take you on an exciting journey but to help you
            get actual work done. If what you need are structured, objective insights that you can take with yourself into any serious discussion,
            this is the material you are looking for.
            Otherwise you can 20/80 the article by reading only the Stage Scores
            and the Summary at the end. It will be worth it either way. Let's find out together if both you and Remix swiped right.
          </Paragraph>
        </Box>
        {Meme}
        <PostHeading id='remix'>
          What is Remix Run?
        </PostHeading>
        {RemixRun}
        <PostHeading id='framework'>
          The core framework design
        </PostHeading>
        {Framework}
        <PostHeading id='review'>
          The review method
        </PostHeading>
        {ReviewMethod}
        <PostHeading id='idea'>
          Stage 1: Business Idea
        </PostHeading>
        {BusinessIdea}
        <PostHeading id='strategy'>
          Stage 2: Business Vision & Mission & Strategy
        </PostHeading>
        {Strategy}
        <PostHeading id='product'>
          Stage 3: Product Strategy & Roadmap
        </PostHeading>
        {Product}
        <PostHeading id='orgproc'>
          Stage 4: Organization & Processes
        </PostHeading>
        {OrgProc}
        <PostHeading id='design'>
          Stage 5: Product Design
        </PostHeading>
        {Design}
        <PostHeading id='software'>
          Stage 6: Software Design
        </PostHeading>
        {Software}
        <PostHeading id='implementation'>
          Stage 7: Implementation & QA
        </PostHeading>
        {Implementation}
        <PostHeading id='delivery'>
          Stage 8: Delivery
        </PostHeading>
        {Delivery}
        <PostHeading id='operation'>
          Stage 9: Operation
        </PostHeading>
        {Operation}
        <PostHeading id='feedback'>
          Stage 10: Feedback
        </PostHeading>
        {Feedback}
        <PostHeading id='procon'>
          Pros &amp; Cons
        </PostHeading>
        {ProCon}
        <PostHeading id='score'>
          Final Score
        </PostHeading>
        {Final}
        <PostHeading id='impact'>
          Business Impact
        </PostHeading>
        {Impact}
        <PostHeading id='conclusions' mt='20px'>
          Conclusions
        </PostHeading>
        {Conclusions}
        <RelatedContent suggestions={relatedContent} mt='10px'/>
        <PostFooter />
      </>
    </PostLayout>
  )
}

export default RemixReview

const svg = "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMTY4Ij48ZGVmcy8+PHBhdGggZmlsbD0iIzQ2NDM0NCIgZD0iTTAgMGgzMDB2MTY4SDB6Ii8+PGcgZmlsbC1vcGFjaXR5PSIuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjYgLjYpIHNjYWxlKDEuMTcxODgpIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNzMgNjRoMTExdjIySDczeiIvPjxlbGxpcHNlIGN4PSIxMzkiIGN5PSIxMjIiIGZpbGw9IiMwNjA1MDYiIHJ4PSIyNTUiIHJ5PSIzOCIvPjxjaXJjbGUgcj0iMSIgZmlsbD0iIzA5MDkwOSIgdHJhbnNmb3JtPSJtYXRyaXgoLTI1Mi41NTkxIDM1LjE5ODA1IC02LjM2NjA2IC00NS42Nzg4NyA5MyAyMC4zKSIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMTIuOSA3Ny40bC00Ny0xOS4yIDguNy0yLjkgMTMuOCAxLjZ6Ii8+PHBhdGggZmlsbD0iIzEwMGYxMCIgZD0iTTE4MC41IDc1LjNMMjIwIDIxLjFsNjUuNiA0Ny42LTM5LjQgNTQuMnoiLz48Y2lyY2xlIHI9IjEiIGZpbGw9IiMwZTBjMGUiIHRyYW5zZm9ybT0ibWF0cml4KC00My45NDg5NCAtMy43MjM3NSAxLjgwNTQgLTIxLjMwNzg4IDI1IDcyLjkpIi8+PHBhdGggZmlsbD0iI2VkZWZlZSIgZD0iTTEwMyA4M2w0Ny0xOC04NiA1eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xNTUgNTZoOHYyMmgtOHoiLz48cGF0aCBkPSJNMTMyLjQgODYuM2wtNiAuMy0uOC0xNyA2LS4yeiIvPjxwYXRoIGZpbGw9IiMzMTMwMzEiIGQ9Ik00NS4xIDE1OUwxMDAgNTUuN2wtNi41IDIyLjUtMTA1LTE3Ljd6Ii8+PHBhdGggZmlsbD0iI2ZhZmFmYSIgZD0iTTkwLjcgNTQuNmwxMS42LTEuMi0zNC41IDUuMSAyNi43IDkuN3oiLz48ZWxsaXBzZSBjeD0iMTQzIiBjeT0iOTkiIGZpbGw9IiMxODE3MTciIHJ4PSI0IiByeT0iMzAiLz48L2c+PC9zdmc+"