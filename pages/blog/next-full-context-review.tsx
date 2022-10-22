import { Box, Flex, Img, ListItem, SkeletonText, Text } from '@chakra-ui/react'
import { BlogToC, Paragraph, PostFooter, PostHeading, PostList, Quote } from 'components/blog/PostElements'
import { PostLayout } from 'components/blog/PostLayout'
import RelatedContent from 'components/blog/RelatedContent'
import { Code, ExternalLink, InternalLink } from 'components/reviews/common'
import NextjsAtAGlance from 'components/summaries/NextjsSummary'
import { IMG_DATA, POST_DATES, POST_TAGS, POST_VIEWS } from 'constants/blogPosts'
import { finalNextJsStats, nextjsScores } from 'constants/scores/next'
import { BlogTOCContext } from 'contexts/BlogTOCProvider'
import { MobileContext } from 'contexts/MobileProvider'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const postSEO = {
  title: "Next.js - Full Context Review",
  description: "",
  canonical: 'https://www.fullcontextdevelopment.com/blog/next-full-context-review',
  openGraph: {
    url: 'https://www.fullcontextdevelopment.com/blog/next-full-context-review',
    title: 'Next.js - Full Context Review',
    description: "An in-depth, technical and business-impact analysis of the framework",
    site_name: 'Full Context Development Blog',
    type: 'article',
        images: [
      {
        url: 'https://www.fullcontextdevelopment.com/img/blog/hotlink-ok/social/next-social.jpg',
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
    url: '/blog/remix-full-context-review',
    title: 'Remix Full Context Review',
    type: 'blog',
    date: POST_DATES.remix
  },
  {
    url: '/blog/is-it-really-delightful-full-context-analysis',
    title: 'Is It Really That Delightful? - Full Context Analysis',
    type: 'blog',
    date: POST_DATES.delightful
  }
]

const busOpSubs = [
  {
    name: 'The complexity scale', href: '#web-complexity'
  },
  {
    name: 'The complexity distribution', href: '#complexity-distribution'
  },
  {
    name: 'Next on the scale', href: '#capability'
  },
]

const strategySubs = [
  {
    name: 'The userbase-size scale', href: '#userbase-scale'
  },
  {
    name: 'Userbase reach', href: '#userbase-reach'
  },
  {
    name: 'Revenue generating factors', href: '#revenue-factors'
  },
  {
    name: 'Cost generating factors', href: '#cost-factors'
  },
]

const prodSubs = [
  {
    name: 'Build limitations', href: '#build-time-cost'
  },
  {
    name: 'Router limitations', href: '#router-limitations'
  },
  {
    name: 'Delivery speed', href: '#delivery-speed'
  },
]

const orgSubs = [
  {
    name: 'Full stack development', href: '#full-stack-support'
  },
  {
    name: 'Organizational scalability', href: '#organizational-scalability'
  },
]

const designSubs = [
  {
    name: 'Design tool integrations', href: '#design-tool-integration'
  },
  {
    name: 'Component driven development', href: '#component-driven-development'
  },
  {
    name: 'Premade components', href: '#premade-components'
  },
]

const softwareSubs = [
  {
    name: 'Architectural concerns', href: '#architectural-concerns'
  },
  {
    name: 'Scaling concerns', href: '#scaling-concerns'
  },
  {
    name: 'Project standards', href: '#project-standards'
  },
  {
    name: 'Choosing a rendering mode', href: '#rendering-mode'
  },
  {
    name: 'Persistent shared layouts', href: '#shared-layout'
  },
  {
    name: 'Frontend performance optimization', href: '#frontend-performance'
  },
  {
    name: 'Migration to Next.js', href: '#migration'
  },
  {
    name: 'Design checklist', href: '#design-checklist'
  },
]

const implementationSubs = [
  { name: 'Documentation', href: '#documentation' },
  { name: 'Community', href: '#community' },
  { name: 'Learning material', href: '#learning' },
  { name: 'Built-in features', href: '#builtin-features' },
  { name: 'API development', href: '#api' },
  { name: 'Styling', href: '#styling' },
  { name: 'Error handling', href: '#error-handling' },
  { name: 'Local development', href: '#local-development' },
  { name: 'Testing', href: '#testing' },
  { name: 'Development tools', href: '#dev-tools' },
  { name: 'IDE support', href: '#ide' },
]

const deliverySubs = [
  { name: 'Methods', href: '#delivery-methods' },
  { name: 'Static export', href: '#static' },
  { name: 'Node.js server', href: '#node' },
  { name: 'Serverless', href: '#serverless' },
  { name: 'Providers', href: '#serverless-providers' },
  { name: 'Vercel', href: '#vercel' },
  { name: 'Saving money on Vercel', href: '#save-money-on-vercel' },
  { name: 'Netlify', href: '#netlify' },
  { name: 'AWS', href: '#aws' },
]

const operationSubs = [
  { name: 'Observability', href: '#observability' },
  { name: 'Maintenance', href: '#maintenance' },
  { name: 'Customer support', href: '#customer-support' },
]
const feedbackSubs = [
  { name: 'User feedback', href: '#user-feedback' },
  { name: 'Analytics', href: '#analytics' },
  { name: 'User Insights', href: '#user-insights' },
]

const nextToCItems = [
  {
    href: '#about',
    name: 'What else Is left to be written about Next.js?'
  },
  {
    href: '#core-design',
    name: 'The core design of Next.js'
  },
  {
    href: '#review',
    name: "What's a Full Context review?"
  },
  {
    href: '#idea',
    name: "Stage 1: Business Idea",
    subItems: busOpSubs
  },
  {
    href: '#strategy',
    name: 'Stage 2: Business Strategy',
    subItems: strategySubs
  },
  {
    href: '#product',
    name: 'Stage 3: Product Strategy',
    subItems: prodSubs
  },
  {
    href: '#orgproc',
    name: 'Stage 4: Organization & Processes',
    subItems: orgSubs
  },
  {
    href: '#design',
    name: 'Stage 5: Product Design',
    subItems: designSubs
  },
  {
    href: '#software',
    name: 'Stage 6: Software Design',
    subItems: softwareSubs
  },
  {
    href: '#implementation',
    name: 'Stage 7: Implementation',
    subItems: implementationSubs
  },
  {
    href: '#delivery',
    name: 'Stage 8: Delivery',
    subItems: deliverySubs
  },
  {
    href: '#operation',
    name: 'Stage 9: Operation',
    subItems: operationSubs
  },
  {
    href: '#feedback',
    name: 'Stage 10: Feedback',
    subItems: feedbackSubs
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

export default function NextReview() {
  const [ rerender, forceRerender ] = useState(false)
  const { isMobile } = useContext(MobileContext)
  const desktopToc = useRef()
  const mobileToc = useRef()
  const [ Meme, setMeme ] = useState(null)
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
  const [ Final, setFinal ] = useState(null)
  const [ Impact, setImpact ] = useState(null)
  const [ Conclusions, setConclusions] = useState(null)
  const { desktopTocRef, mobileTocRef, showMobileMenu, toggleMobileMenu } = useContext(BlogTOCContext)

  const tocTarget = useMemo(() => {
    return isMobile ? mobileTocRef.current : desktopTocRef.current
  }, [isMobile, mobileTocRef.current, desktopTocRef.current])

  useEffect(() => { // on back-navigation the ToC doesn't render because reasons, we need to force a rerender to make it appear.
    const desktopToC = desktopToc.current
    const mobileToC = mobileToc.current
    if (desktopToC || mobileToC) {
      forceRerender(true)
    }

    const Meme = dynamic(
      () => import('../../components/reviews/next/Meme'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setMeme(() => <Meme />)

    const ReviewMethod = dynamic(
      () => import('../../components/reviews/next/ReviewMethod'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setReviewMethod(() => <ReviewMethod />)

    const BusinessIdea = dynamic(
      () => import('../../components/reviews/next/BusinessIdea'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setBusinessIdea(() => <BusinessIdea />)

    const Impact = dynamic(
      () => import('../../components/reviews/next/Impact'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setImpact(() => <Impact />)

    const Strategy = dynamic(
      () => import('../../components/reviews/next/Strategy'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setStrategy(() => <Strategy />)

    const OrgProc = dynamic(
      () => import('../../components/reviews/next/OrgProc'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setOrgProc(() => <OrgProc />)

    const Product = dynamic(
      () => import('../../components/reviews/next/Product'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setProduct(() => <Product />)

    const Design = dynamic(
      () => import('../../components/reviews/next/Design'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setDesign(() => <Design />)

    const Software = dynamic(
      () => import('../../components/reviews/next/Software'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setSoftware(() => <Software />)

    const Implementation = dynamic(
      () => import('../../components/reviews/next/Implementation'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setImplementation(() => <Implementation />)

    const Delivery = dynamic(
      () => import('../../components/reviews/next/Delivery'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setDelivery(() => <Delivery />)

    const Operation = dynamic(
      () => import('../../components/reviews/next/Operation'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setOperation(() => <Operation />)

    const Feedback = dynamic(
      () => import('../../components/reviews/next/Feedback'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setFeedback(() => <Feedback />)

    const Final = dynamic(
      () => import('../../components/reviews/next/Final'),
      { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
          <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
        </Flex>,
        ssr: false
      },
    )

    setFinal(() => <Final />)

    const Conclusions = dynamic(
      () => import('../../components/reviews/next/Conclusions'),
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
      title='Next.js - Full Context Review'
      tags={POST_TAGS.next}
      svg={svg}
      imgAlt={IMG_DATA.next.article.alt}
      imgSrc={IMG_DATA.next.article.src}
      publishDate={POST_DATES.next.published}
      updateDate={POST_DATES.next.lastUpdated}
      views={POST_VIEWS.next}
      emphasis
      toc
    >
      {rerender ? <Box pos='absolute' w='0' h='0' bg='transparent' top='-1px' left='-1px'></Box>: null}
      <NextSeo {...postSEO} />
      <>
        <BlogToC tocTarget={tocTarget} toggelOnNav={toggelOnNav} tocItems={nextToCItems} />
        {/* <RemixAtAGlance scores={remixScores} total={finalRemixStats} /> */}
        <PostHeading id='about'>
          What else is left to be written about Next.js?
        </PostHeading>
        <Paragraph minorNext>
          In 2022, that's a valid question! With the amount of post, videos, tutorials, crash courses, even books out there about it, you might wonder,
          is there anything left that's worth covering? The obvious answer is yes, there is. You are not reading another one of those
          shallow introductory posts. Here at the Full Context Development blog, I deliver something different.
          <Text mt='25px'>
            Following a well-defined evaluation method, I go from <b>technical</b> details
            to <b>real-life</b> outcomes and give you an in-depth, practical overview of how to create the most value with a given technology.
            It's also like a meta-review. I process the official and community coverage of the tools
            and document the most important concerns you have to keep in mind while working with them.
            Like a one-stop guide to best practices and handling common challenges.
          </Text>
          <Text mt='25px'>
            <b>So what about this article?</b> Besides all the above, you will learn every nitty-gritty, technical detail of Next.js
            that will influence the financial performance of your software, short-, mid- and long-term.
            These are the factors you should get right on a Next.js project in order to maximize profits.
            I will put the influence of Next over this area into numbers and show you the exact business metrics and mechanism of how it leads to
            increased revenue and reduced costs. Why? As Patrick McKenzie <ExternalLink href='https://twitter.com/patio11'>
              @patio11
            </ExternalLink> famously <ExternalLink href='https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer#:~:text=Engineers%20are%20hired%20to%20create%20business%20value%2C%20not%20to%20program%20things'>
              said
            </ExternalLink>, these are the real problems, sofware engineers are ultimately hired to solve.
            Here are the main stats right off the bat:
          </Text>
        </Paragraph>
        <NextjsAtAGlance scores={nextjsScores} total={finalNextJsStats} />
        <Paragraph minorNext mt='10px' fontSize='14px' textAlign='center' fullSize>
           <i>(Don't worry if it makes little sense now, there are instructions just a bit further down)</i>
        </Paragraph>
        <Paragraph minorNext updateStyle>
          <b>Before you dive in</b>, make sure to take a look at the Table of Contents <i>(yes, it's scrollable)</i> to check the outline and find the most interesting
          parts you don't want to miss. There are a lot of gems ahead. Some of my favourites are: A list of tools and techniques to
          improve the <InternalLink href='#frontend-performance'>frontend performance</InternalLink> of Next.js projects.
          Introductions to <InternalLink href='#api'>next-runtime</InternalLink>, a library to bring some of the goodies from Remix.run to Next.js.
          The exciting <InternalLink href='#design-tool-integration'>instant integration</InternalLink> with Framer through URL imports and Handshake.
          A <InternalLink href='#design-checklist'>design checklist</InternalLink> to help you bring out the most from Next.js projects.
          A guide to <InternalLink href='#rendering-mode'>choosing</InternalLink> a rendering mode.
          Practical tips on how to <InternalLink href='#save-money-on-vercel'>save money</InternalLink> on Vercel hosting,
          and some ideas about choosing a <InternalLink href='#serverless'>serverless provider</InternalLink> among a lot more,
           valuable and interesting facts related to the framework. But of course, the main aspect is doing a full context review. Let's get it on!
        </Paragraph>
        <PostHeading id='core-design'>
          The core design of Next.js
        </PostHeading>
        <Paragraph minorNext>
          <b>What I'm not going to do</b>: is introducing how to work with Next.js from the ground up. Instead, I will analyse the core technical
          design of the framework, especially the building blocks that are relevant in identifying its <b>influence</b> over the real-life outcomes of using it.
          Right after a quick look back on why does it exist in the first place. <i>(it's relevant)</i>
          <Quote>While this review is not an introduction, I will still name the basic elements of the framework just to be clear about what we will discuss.
            This next section might be boring if you are familiar with Next. I tried to add in useful information here and there but feel free to skip forward in this case.
          </Quote>
          <Text mt='25px'>
            <b>How it all started</b>: Do you remember the days (OK, years...) around 2015 when JavaScript fatigue was in full swing? New frameworks and build tooling were
            constantly popping into existence. People memed about choosing a project setup taking a full month.
            That was the environment where Next.js was born as an answer to these problems.
          </Text>
          <Text mt='25px'>
            And to one more fundamental issue.
            People realized SPAs are not great for SEO, but still wanted to use them for many valid reasons.
            SSR was "invented" to save the day, but it was extremely difficult to
            set it up on a React project. Not to mention in combination with the myriad of other necessary tools. <i>(Looking at you CSS-in-JS)</i>
          </Text>
          <Text mt='25px'>
            So let's see the full set of what Next.js <i>is</i> and how it solves these problems and much more.
          </Text>
          <Flex w='100%' justify='center' mt='25px' mb='10px'>
            <Zoom>
              <Img
                borderRadius='lg'
                alt="Rocket tagged 'Remix' flying up high, pulling 3 office workers, representing developers, with itself. Image caption: Remix is an insanely powerful productivity booster."
                src="/img/blog/next/what-is-next-black.png"
                width="600px"
              />
            </Zoom>
          </Flex>
          <PostList minor>
            <>
              <ListItem>
                <Text as='span' fontWeight='bold'>Server</Text>: A production ready, pre-configured Node.js backend <i>(or serverless functions on some providers)</i> to
                server your assets, do the SSR magic and host your custom APIs,
                now the <ExternalLink href='https://nextjs.org/docs/middleware'>middleware</ExternalLink> functions too.
              </ListItem>
              <ListItem>
                <Text as='span' fontWeight='bold'>Compiler</Text>: It uses Webpack and Babel under the hood, pre-configured
                to hide away all the complexity from the devs. To be more precise, in version 12 they replaced Babel with the Rust based
                 compiler <ExternalLink href='https://swc.rs/'>SWC</ExternalLink> for
                increased build and fast refresh performance but also for a smaller selection of available extensions. If you have a custom Babel configuration, it will
                fall back to use the earlier tool. (They are
                also collecting <ExternalLink href='https://github.com/vercel/next.js/discussions/30174'>feedback</ExternalLink> about
                which transformations should they port to enable wider adoption of SWC.)
                The compiler also does a lot of additional optimizations we will get to later.
              </ListItem>
              <ListItem>
                <Text as='span' fontWeight='bold'>CLI</Text>: There's the <Code>next</Code> tool to start, build, and export your app
                and another package called <Code>create-next-app</Code> to speed up your initial project setup.
                Did you know it can <ExternalLink href='https://nextjs.org/docs/api-reference/create-next-app#options'>initialize</ExternalLink> a
                new project based on any item from their
                extensive <ExternalLink href='https://github.com/vercel/next.js/tree/canary/examples'>example collection</ExternalLink> with
                the <Code>--e [name]|[github-url]</Code> option?
              </ListItem>
            </>
          </PostList>
          <Text>
            Then continue with the <i>main</i> structure of a Next.js application. The details will be discussed later at places where their influence is most relevant.
          </Text>
          <PostList minor noMb>
            <>
              <ListItem>
                <Text as='span' fontWeight='bold'>Pages</Text>: The elementary building blocks of a Next project. There are 3 flavors: static-, server rendered-
                and incrementally generated static pages.
              </ListItem>
              <ListItem>
                <Text as='span' fontWeight='bold'>Router</Text>: Declarative, file-system based routing to navigate between those pages.
                This is one of the major limiting factors of Next.
              </ListItem>
              <ListItem>
                <Text as='span' fontWeight='bold'>APIs</Text>: A very efficient way to create HTTP event handlers in your backend / serverless provider.
              </ListItem>
              <ListItem>
                <Text as='span' fontWeight='bold'>Middleware</Text>: Functions executed before handling requests to pages / APIs.
                These are running in a standard Web API based <ExternalLink href='https://nextjs.org/docs/api-reference/edge-runtime'>Edge Runtime</ExternalLink>.
                You can find a really nice collection of examples about what's possible with
                them <ExternalLink href='https://github.com/vercel/examples/tree/main/edge-functions'>here</ExternalLink>.
              </ListItem>
            </>
          </PostList>
        </Paragraph>
        <Paragraph minorNext>
          This structure and feature set increased developer productivity so much that most metaframeworks created later adopted
          the same or a very similar approach, often declaring that they are <i>inspired by Next.js</i>. This trend led to the state
          where we are now in the front-end community:
        </Paragraph>
        {Meme}
        <PostHeading id='review'>
          What's a Full Context review?
        </PostHeading>
        {ReviewMethod}
        <PostHeading id='idea' mt='60px'>
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
        <PostHeading id='score'>
          Final Score
        </PostHeading>
        {Final}
        
        <PostHeading id='impact'>
          Business Impact
        </PostHeading>
        {Impact}
        <PostHeading id='conclusions' mt='25px'>
          Conclusions
        </PostHeading>
        {Conclusions}
        <RelatedContent suggestions={relatedContent} mt='10px'/>
        <PostFooter />
      </>
    </PostLayout>
  )
}

const svg = "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMTY4Ij48ZGVmcy8+PHBhdGggZmlsbD0iIzRiMjgyYSIgZD0iTTAgMGgzMDB2MTY4SDB6Ii8+PGcgZmlsbC1vcGFjaXR5PSIuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjYgLjYpIHNjYWxlKDEuMTcxODgpIj48Y2lyY2xlIGN4PSIxNDMiIGN5PSIxMTUiIHI9IjE5MSIgZmlsbD0iIzAxMjAxZSIvPjxjaXJjbGUgcj0iMSIgZmlsbD0iIzQzNDU0NSIgdHJhbnNmb3JtPSJtYXRyaXgoNDAuNjk1MjYgMTAuMzkzNDQgLTQuNjE5NSAxOC4wODc1NiAzNi41IDExOS40KSIvPjxjaXJjbGUgcj0iMSIgZmlsbD0iIzU3MmMyYyIgdHJhbnNmb3JtPSJtYXRyaXgoNTAuNzk5MTIgLTUuNTMzNiAxLjY5MDQ1IDE1LjUxODU0IDEyMSA3NS43KSIvPjxjaXJjbGUgcj0iMSIgZmlsbD0iIzExMTIxNCIgdHJhbnNmb3JtPSJyb3RhdGUoMTU4LjQgOTcuMSA4MS40KSBzY2FsZSg2NS43NTUwNCA0OC41NTQ0OCkiLz48ZWxsaXBzZSBjeD0iMjgiIGN5PSI2MSIgZmlsbD0iIzE0MTYxNiIgcng9IjUzIiByeT0iMTkiLz48cGF0aCBmaWxsPSIjZmY1NDcyIiBkPSJNODMgNjRoMnYyNWgtMnoiLz48Y2lyY2xlIHI9IjEiIGZpbGw9IiMzMjM0MzQiIHRyYW5zZm9ybT0icm90YXRlKDY4LjEgNjguNSAxNjcuMSkgc2NhbGUoNDcuMDY4NzMgMTUuODI5NTUpIi8+PHBhdGggZmlsbD0iI2YxNDQ2MSIgZD0iTTEyNy4yIDY0LjdsLjgtLjYgMjIuOCAyOS4yLS44LjZ6Ii8+PHBhdGggZmlsbD0iI2FjMzgzZSIgZD0iTTEwNi45IDEwOC40bC0yLjMtNTUuMS0uNCAyIDMuNiA5LjJ6Ii8+PHBhdGggZmlsbD0iI2M0MzY0OSIgZD0iTTgyLjIgNjMuMmwxLjYtMS4yIDEyIDE0LjgtMS42IDEuMnoiLz48cGF0aCBmaWxsPSIjZWQ0MDUxIiBkPSJNMTU2IDYzaDN2MjVoLTN6Ii8+PGNpcmNsZSByPSIxIiBmaWxsPSIjMzUzNzM3IiB0cmFuc2Zvcm09Im1hdHJpeCgtMjIuMjY0NDQgLTkuMzEzNDIgNi40NjUyOCAtMTUuNDU1NzQgMjQ2LjMgNDUuNCkiLz48L2c+PC9zdmc+"