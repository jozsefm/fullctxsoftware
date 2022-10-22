import {
  Container,
  Flex,
  Heading
} from '@chakra-ui/react'
import { BlogPost } from 'components/blog/BlogPost'
import { QuickBit } from 'components/blog/QuickBit'
import { IMG_DATA, POST_DATES, POST_TAGS, POST_VIEWS, QB_DATES, QB_STATUSES } from 'constants/blogPosts'
import { BackgroundContext } from 'contexts/BackgroundProvider'
import fs from 'fs'
import { getBase64Svg } from 'lib/server/getBase64Svg'
import { NextSeo } from 'next-seo'
import { join } from 'path'
import { useContext, useEffect } from 'react'

const blogSEO = {
  title: "Blog • Full Context Development",
  description: "The best source of ideas about software development using a full context perspective",
  canonical: 'https://www.fullcontextdevelopment.com/blog',
  openGraph: {
    url: 'https://www.fullcontextdevelopment.com/blog',
    title: 'Full Context Development Blog',
    description: 'The original source of Full Context Development ideas',
    site_name: 'Full Context Development Blog'
  }
}

const marginTops = ['94px !important', '94px !important', '100px !important', '91px !important']

const layoutDir: any = {
  base: 'column-reverse',
  lg: 'row'
}

const headerDir: any = {
  base: 'column',
  lg: 'row'
}

const headerH: any = {
  base: 'auto',
  lg: '100px'
}

const quickBitDir: any = {
  base: 'row',
  lg: 'column'
}

const quickBitW: any = {
  base: '100%',
  lg: '35%'
}

const quickBitH: any = {
  base: '215px',
  lg: 'auto'
}

const quickBitMaxW: any = {
  base: '100%',
  lg: '500px'
}

const qbMx: any = {
  base: '30px',
  lg: '0'
}

const contentMinW: any = {
  base: '100%',
  lg: 'max(65%, calc(100% - 500px))'
}

const qbOverflow: any = {
  base: 'scroll',
  lg: 'visible'
}

const headerQbMt: any = {
  base: '15px',
  lg: '0'
}

const headerQbFs: any = {
  base: '1.3rem',
  lg: '36px'
}

const headerQbFontStyle: any = {
  base: 'italic',
  lg: 'normal'
}

const blogJustify: any = {
  base: 'center',
  lg: 'flex-start'
}

const blogPl: any = {
  base: '0',
  lg: '5.5%'
}

const ArticleList = ({ encodedSvgs }) => {
  const { setBgView } = useContext(BackgroundContext)

  useEffect(() => {
    setBgView('blog')
  }, [])

  return (
    <Flex  wrap='wrap' w='100%'>
      <Flex flexDirection={headerDir} w='100%' mt={marginTops} h={headerH} align='center'>
        <Heading
          as='h1'
          w='100%'
          minW='max(65%, calc(100% - 500px))'
          maxW='60ch'
          display='flex'
          alignItems='center'
          justifyContent={blogJustify}
          pl={blogPl}
          textAlign='center'
        >
          Full Context Development Blog
        </Heading>
        <Heading
          as='h1'
          w='100%'
          maxW='500px'
          display='flex' 
          alignItems='center' 
          justifyContent='center'
          mt={headerQbMt} 
          fontSize={headerQbFs}
          fontStyle={headerQbFontStyle}
          >
            Quick Bits
          </Heading>
      </Flex>
      <Flex flexDirection={layoutDir} w='100%'>
        <Container w='100%' minW={contentMinW} minH='100vh' m='0' p='0 4% 0 4%'>
          <NextSeo {...blogSEO} />
          {/* <BlogPost
            attribution={null}
            title='Remix vs Next - Who Is The King Of React Frameworks?'
            description="
              The only Remix vs Next comparison you ever needed. Let's see how does the battle for the throne of React metaframeworks
              plays out from a Full Context perspective? Will Remix defeat the current champion?
              "
            link='/blog/remix-vs-next-full-context-comparison'
            tags={POST_TAGS.remixVsNext}
            imageSrc={IMG_DATA.remixVsNext.preview.src}
            imageAlt={IMG_DATA.remixVsNext.preview.alt}
            svg={encodedSvgs.remixReview}
            authorSvg={encodedSvgs.author}
            date={POST_DATES.remixVsNext.published}
            views={POST_VIEWS.remixVsNext}
          /> */}
          <BlogPost
            attribution={null}
            title='Next.js - Full Context Review'
            description="
              The highly requested review of Next.js, the currently reigning king of React metaframeworks. Let's see
              why it is the rightful holder of this title and find out when and why you might actually not want to use it.
              "
            link='/blog/next-full-context-review'
            tags={POST_TAGS.next}
            imageSrc={IMG_DATA.next.preview.src}
            imageAlt={IMG_DATA.next.preview.alt}
            svg={encodedSvgs.nextReview}
            authorSvg={encodedSvgs.author}
            date={POST_DATES.next.published}
            views={POST_VIEWS.next}
          />
          <BlogPost
            attribution={null}
            title="Full Context Analysis Of Josh W. Comeau's React Project Structure"
            description="
              Many of you know Josh, he is famous for his CSS-for-JS-devs course and React educational background.
              Here I take a quick look at his latest blog post to analyse how his advice performs from a Full Context perspective
              and to teach some valuable lessons about the relationships between coding decisions and real world outcomes.
              "
            link='/blog/is-it-really-delightful-full-context-analysis'
            tags={POST_TAGS.delightful}
            imageSrc={IMG_DATA.delightful.preview.src}
            imageAlt={IMG_DATA.delightful.preview.alt}
            imgBorder='3px solid #24799e'
            svg={encodedSvgs.delightfulPreview}
            authorSvg={encodedSvgs.author}
            date={POST_DATES.delightful.published}
            views={POST_VIEWS.delightful}
          />
          <BlogPost
            attribution={<>
              <a target='_blank' href="https://remix.run/">The Remix logo and all associated rights are owned by the folks at remix.run</a>
            </>}
            title='Remix - Full Context Review'
            description="
              In early 2022, Remix is the hot, new React meta-framework everyone seems to be excited about.
              It's created by reputable developers, evangelized by famous open-source engineers and challenges
              the established players on the field. The full context review will show you how Remix can affect your project's
              financial performance through it's technical properties and help you to evaluate if adopting it is the right choice.
              "
            link='/blog/remix-full-context-review'
            tags={POST_TAGS.remix}
            imageSrc={IMG_DATA.remix.preview.src}
            imageAlt={IMG_DATA.remix.preview.alt}
            svg={encodedSvgs.remixReview}
            authorSvg={encodedSvgs.author}
            date={POST_DATES.remix.published}
            views={POST_VIEWS.remix}
          />
          {/* <BlogPost
            attribution={<>
              Photo by <a target='_blank' href="https://unsplash.com/@pakata?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pakata Goh</a> on <a target='_blank' href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      
            </>}
            title='You are not paid to write code'
            description="
              What's the ultimate task of a software engineer? Our contracts are usually about programming and
              shipping software, but is that really it? Code is not poetry. The end users don't pay to read it.
              Software is more than a set of requirements. We can deliver everything that's asked and still ruin a project.
              Then how can we know we are really doing what we are supposed to do?
              "
            link='/blog/you-are-not-paid-to-write-code'
            tags={POST_TAGS.notCode}
            imageSrc={IMG_DATA.notCode.src}
            imageAlt={IMG_DATA.notCode.alt}
            svg={encodedSvgs.notCode}
            authorSvg={encodedSvgs.author}
            date={POST_DATES.notCode.published}
          /> */}
          {/* <BlogPost
            attribution={<>
              Photo by <a target='_blank' href="https://unsplash.com/@ikukevk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kevin Ku</a> on <a target='_blank' href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </>}
            title='What is Full Context Development and why do you need it?'
            description="
              Nowadays it's harder than ever to make optimal tech decisions. We are constantly bombarded with newer
              and newer tools, be it programming languages, frameworks or libraries. Most of
              them are pushed with hype so finding their real benefits in your situation is challenging.
              That's why we need an easy to follow system to analyze the real impact of programming tools.
              Enter Full Context Software Development."
            link='/blog/what-is-full-context-development'
            tags={POST_TAGS.why}
            imageSrc={IMG_DATA.why.src}
            imageAlt={IMG_DATA.why.alt}
            svg={encodedSvgs.why}
            authorSvg={encodedSvgs.author}
            date={POST_DATES.why.published}
          /> */}
          <BlogPost
            attribution={<>
              Photo by <a target='_blank' href="https://unsplash.com/@spacex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">SpaceX</a> on <a target='_blank' href="https://unsplash.com/s/photos/rocket?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </>}
            title='Solo launching an online product as a Frontend developer - Part 1'
            description="After nearly 2 years in the making, the Full Context Development Online Book is available in early access!
            I share my experience about creating an online product from scratch by myself.
            The series will be packed with the lessons learned I wish I had known before starting."
            link='/blog/solo-launching-online-product'
            tags={POST_TAGS.launch}
            imageSrc={IMG_DATA.launch.src}
            imageAlt={IMG_DATA.launch.alt}
            svg={encodedSvgs.launching}
            authorSvg={encodedSvgs.author}
            date={POST_DATES.launch.published}
            views={POST_VIEWS.launch}
          />
        </Container>
        <Flex w={quickBitW} my={qbMx} maxW={quickBitMaxW} flexDirection={quickBitDir} align='center' overflow={qbOverflow} h={quickBitH}>
          <QuickBit
            date={QB_DATES.leetHarmful}
            title='Leetcode Considered Harmful'
            description="I'm going to show you an unseen downside of using leetcode tasks for interviewing software engineers"
            link='/qb/leetcode-considered-harmful'
            completed={QB_STATUSES.leetHarmful}
          />
          <QuickBit
            date={QB_DATES.interviewTaboo}
            title='Breaking a Taboo: Software Engineering Interviews Are Only Good For...'
            description='I have done a month of full time interviewing and came to an interesting realization.'
            link='/qb/software-engineering-interviews-are-only-good-for'
            completed={QB_STATUSES.interviewTaboo}
          />
          <QuickBit
            date={QB_DATES.eastToWest}
            title='From Eastern Europe to The West as a Software Engineer'
            description='Cultural differences I noticed as a Hungarian while applying to western jobs and a little bit of my life story.'
            link='/qb/from-eastern-europe-to-the-west-as-a-software-engineer'
            completed={QB_STATUSES.eastToWest}
          />
          <QuickBit
            date={QB_DATES.future}
            title='The Future of Full Context Software Development in 2022'
            description="Lots of things changed during the last few months, here's how they affect the future of the product."
            link='/qb/the-future-of-full-context-software-development-2022'
            completed={QB_STATUSES.future}
          />
          {/* <QuickBit
            date={QB_DATES.remixDirtySecret}
            title='The Dirty Little Secret Of Remix Run'
            description="While working on my review I realized there's something the authors are trying to hide from you."
            link='/quick-bits/remix-cant-spa'
          /> */}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ArticleList

export async function getStaticProps() {
  const svgFolder = join(process.cwd(), '/preview/blog')
  const encodedSvgs = {}
  try {
    const files = fs.readdirSync(svgFolder)
    files.forEach(file => {
      const fileContents = fs.readFileSync(join(svgFolder, file), { encoding:'utf8' })
      const buffer = Buffer.from(fileContents, 'utf-8')
      encodedSvgs[file.replace('.svg', '')] = buffer.toString('base64')
    })
    encodedSvgs['author'] = getBase64Svg('/preview/joe2.svg')
  } catch (err) {
      console.error(err)
  }

  return {
    props: {
      encodedSvgs
    },
  }
}