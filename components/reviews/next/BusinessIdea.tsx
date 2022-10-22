import { chakra, Flex, Image as ChakraImage, Img, Link, Text } from '@chakra-ui/react'
import { Paragraph } from 'components/blog/PostElements'
import { BusinessIdeaDescription, Code, ExternalLink, ImageContribution, ImageWrapper, linkHoverStyle, linkTransition, SubScore } from 'components/reviews/common'
import { stage1score } from 'constants/scores/next'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function BusinessIdea() {
  return (
    <>
      <ImageWrapper>
        <Image priority layout='fill' src='/img/blog/remix/idea2.jpg' objectFit='cover' objectPosition='0 57%' alt='Blurred out image of glass-front skyscrapers towering over the viewer'/>
        <Flex pos='relative' zIndex='2' margin='0 auto' align='center'>
          <ChakraImage className='svg' width='90px' height='90px' src='/img/blog/remix/idea.svg' alt='Drawing of a man in business suite with a lightbulb over the head to represent a business idea.' />
        </Flex>
      </ImageWrapper>
      <ImageContribution>Photo by <a href="https://unsplash.com/@flo_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank'>Floriane Vita</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank'>Unsplash</a></ImageContribution>
      <BusinessIdeaDescription />
      <Paragraph minorNext>
        This stage is more of a formality than useful information as Next.js is a well-known technology.
        The capabilities to meet the requirements of this phase, however, are major contributors in a tool's final score,
        so let's get over this quickly and dive into the more interesting parts.
      </Paragraph>
      <Paragraph minorNext>
        Next.js is a React metaframework used to deliver full-stack web- apps or sites.
        You could, in-theory, use it as an "API only" server, but it's not made for that use-case.
        It's capable of providing the basic business opportunity for any web-based project.
      </Paragraph>
      <Paragraph minorNext>
        Where it doesn't give you any specialized help are projects that focus on more than HTML content.
        Think in-browser games, data visualization or applications with lots of client-side logic like spreadsheet or rich text editors.
        Another out-of-focus area is purely backend products. Good examples are API-as-a-service businesses like Stripe, Cloudinary, etc... 
        This is not a criticism of the framework, it's just defining its scope. Plus, this is in line with the standard
        feature set of the frameworks in its category.
      </Paragraph>
      <Paragraph minorNext>
        Next is a powerful tool to deliver highly dynamic content to the users because it's a server side technology and
        can be hosted across a wide range of providers. This strength comes in handy for projects that do a lot of
        location-based customization like A/B testing, serving personalized ads or simply internationalization,
        even if otherwise all the site is a landing page.
      </Paragraph>
      <Paragraph minorNext>
        Its architecture is also a good fit for apps mostly behind authentication where you have to ensure each
        page view is done by a logged in user. As Next.js offers you full control over the <Code>&lt;head&gt;</Code> tag
        and can generate static pages, you are all set to deliver SEO optimized products with it.
      </Paragraph>
      <Paragraph minorNext>
        The SSG capability makes it a particularly good fit for public, mostly static or rarely updated content as well.
        Next also supports delivering AMP pages out-of-the-box, with the <Code>next/amp</Code> module.
      </Paragraph>
      <Paragraph minorNext id='web-complexity'>
        <b>The complexity scale</b>: This is my list to define and categorize the different types of
        web projects and describe what a given technology can support. We will map the capabilities of Next.js on it soon.
        It's quite big in size, so consider <Link
          href='/img/blog/review/web-complexity-scale.png'
          download='web-complexity-scale.png'
          aria-label='Directly download the web project complexity image'
          textDecor='underline'
          _hover={linkHoverStyle}
          transition={linkTransition}
        >
          downloading
        </Link> to
        have the best viewing experience. (<i>You are free to use it however you like respecting the CC license below.</i>)
      </Paragraph>
      <Flex w='100%' justify='center' mb='40px'>
        <chakra.figure display='flex' alignItems='center' flexDirection='column'>
          <Zoom>
            <Img
              borderRadius='lg'
              alt="The standard scale of frontend project complexity. It defines 4 levels: 1 - static content, such as a simple blog. 2 - dynamic content, such as a webshop or news site. 3 - web applications like Discord, Skype or MS Excel Online. 4 - global platforms like Google, Amazon, Youtube and Facebook."
              src="/img/blog/review/web-complexity-scale.png"
              width="600px"
            />
          </Zoom>
          <chakra.figcaption display='flex' flexWrap='wrap' justifyContent='center' fontSize='0.7rem' mt='15px' color='#666'>
            <Link rel="license" target='_blank' href="http://creativecommons.org/licenses/by-sa/4.0/">
              <Img alt="Creative Commons License" borderWidth='0' src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" />
            </Link>
            <Text mx='5px'>This work is licensed under a</Text>
            <Link rel="license" target='_blank' href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</Link>.
          </chakra.figcaption>
        </chakra.figure>
      </Flex>
      <Paragraph minorNext id='complexity-distribution'>
        <b>The web complexity distribution</b>: I don't have hard facts to back this up, but
        I'm quite sure the real proportions are not far off. This is helpful to understand not just the type
        but the amount of projects that are supported by a technology.
        You can download it <Link
          href='/img/blog/review/distribution.png'
          download='distribution.png'
          aria-label='Directly download the distribution of webapps by complexity image'
          textDecor='underline'
          _hover={linkHoverStyle}
          transition={linkTransition}
        >
          here
        </Link>. (<i>This is also free to use.</i>)
      </Paragraph>
      <Flex w='100%' justify='center' mb='40px'>
        <chakra.figure display='flex' alignItems='center' flexDirection='column'>
          <Zoom>
            <Img
              borderRadius='lg'
              alt="The distribution of complexity categories on a bell curve: roughly 25% for Stage 1, 50% for Stage 2, 25% for Stage 3 and 0.01% for Stage 4."
              src="/img/blog/review/distribution.png"
              width="600px"
            />
          </Zoom>
          <chakra.figcaption display='flex' flexWrap='wrap' justifyContent='center' fontSize='0.7rem' mt='15px' color='#666'>
            <Link rel="license" target='_blank' href="http://creativecommons.org/licenses/by-sa/4.0/">
              <Img alt="Creative Commons License" borderWidth='0' src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" />
            </Link>
            <Text mx='5px'>This work is licensed under a</Text>
            <Link rel="license" target='_blank' href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</Link>.
          </chakra.figcaption>
        </chakra.figure>
      </Flex>
      <Paragraph minorNext id='capability'>
        <b>Next.js on the scale</b>: This is how I see the match of the framework for the whole range of possible projects. <i>(Reasoning comes after the image)</i>
      </Paragraph>
      <Flex w='100%' justify='center' mb='40px'>
        <Zoom>
          <Img
            borderRadius='lg'
            alt="How good fit is Next.js for the different parts of the complexity scale: Level 1 - good enough for singe page static sites, ideal for multi page static sites. Level 2 - ideal for every type of dynamic website. Level 3 - good enough for basic S.P.A.s, possible to use but great for complex client side apps. Level 4 - Not possible."
            src="/img/blog/next/next-complexity-range.png"
            width="600px"
          />
        </Zoom>
      </Flex>
      <Paragraph minorNext>
        The real questions you might have are about Level 3 and Level 4. Or am I wrong? Let me know.
        Level 3 is mostly gray not because it's impossible to write MS Office and Slack using Next.js but simply
        because the SSR, SSG and the numerous optimizations done by the framework are not really solving the fundamental problems
        that make developing heavy SPAs
        hard. <i>(Here's an example from <ExternalLink href='https://www.singlestore.com/blog/moving-from-next-js/'>SingleStore</ExternalLink>.)</i> Also,
        there are other frameworks that can create smaller bundles
        and have better performance than what React delivers. <i>(cough... cough... Svelte... cough...)</i>
      </Paragraph>
      <Paragraph minorNext >
        Level 4 is less of a surprise, I guess. The key problem here is that Next.js takes on too much responsibility and hides away those concerns from the developers.
        For world-class products, you need <Text as='span' fontWeight='bold'>total control</Text> over every aspect of your work.
        It's no wonder that Big Tech companies buy and operate their own infrastructure, develop their own programming languages, frameworks
        and even their CI/CD pipelines.
        They need to be able to tweak every aspect of the final product, including the development and delivery processes, which is not possible with these kinds of frameworks.
      </Paragraph>
      <SubScore data={stage1score}/>
    </>
  )
}