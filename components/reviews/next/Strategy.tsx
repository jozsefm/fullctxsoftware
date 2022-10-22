import { chakra, Flex, Image as ChakraImage, Img, Link, ListItem, Text } from '@chakra-ui/react'
import { Paragraph, PostList, Quote } from 'components/blog/PostElements'
import { ExternalLink, ImageContribution, ImageWrapper, linkHoverStyle, linkTransition, StrategyDescription, SubScore } from 'components/reviews/common'
import { stage2score } from 'constants/scores/next'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function Strategy() {
  return (
    <>
      <ImageWrapper>
        <Image priority layout='fill' src='/img/blog/remix/strategy1.jpg' objectFit='cover' objectPosition='0 91%'/>
        <Flex pos='relative' zIndex='2' margin='0 auto' right='-12px' align='center'>
          <ChakraImage className='svg' width='90px' height='90px' src='/img/blog/remix/strategy.svg' />
        </Flex>
      </ImageWrapper>
      <ImageContribution><a href='https://www.freepik.com/photos/people' target='_blank'>People photo created by tirachardz - www.freepik.com</a></ImageContribution>
      <StrategyDescription />
      <Paragraph minorNext>
        The relevant characteristics of Next.js in this regard are that it's built to run as a standalone Node.js server
        but it's possible to turn on "serverless mode" when deployed on <ExternalLink href='https://vercel.com/solutions/nextjs'>
          Vercel
        </ExternalLink>, on <ExternalLink href='https://www.netlify.com/with/nextjs/'>
          Netlify
        </ExternalLink> thanks to the default <ExternalLink href='https://github.com/netlify/netlify-plugin-nextjs'>
          build plugin
        </ExternalLink> or
        with a bit more effort through <ExternalLink href='https://github.com/serverless-nextjs/serverless-next.js'>Serverless Next</ExternalLink> running
        directly on AWS. (<i>Read their architectural introduction in the repo readme.</i>)
        <Text mt='25px'>
          The other 3 are its maturity, the laser-focus on improving site performance and developer experience. Why? Because these are the main contributors
          to the influence of the framework over the cost and revenue factors.
        </Text>
      </Paragraph>
      <Paragraph minorNext id='userbase-scale'>
        <b>The userbase scale</b>: This is how I categorize the distinct scales of userbase-size, relevant to which business cases are supported
        by a technology. The categories are more malleable than in the case of complexity. It's more like a generic outline, but I'm sure
        you won't have problems placing your project on it.
        (<i>Again you are free to <Link
          href='/img/blog/review/userbase-scale.png'
          download='userbase-scale.png'
          aria-label='Directly download the web project complexity image'
          textDecor='underline'
          _hover={linkHoverStyle}
          transition={linkTransition}
        >
          download
        </Link> and use it however you like respecting the CC license below.</i>)
      </Paragraph>
      <Flex w='100%' justify='center' mb='40px'>
        <chakra.figure display='flex' alignItems='center' flexDirection='column'>
          <Zoom>
            <Img
              borderRadius='lg'
              alt="The standard scale of userbase size. It defines 4 levels: 1 - local - between 0 and 1 million users. 2 - national - between 1 and 10 million users. 3 - multi national - between 10 and 100 million users. 4 - global - a 100 plus users."
              src="/img/blog/review/userbase-scale.png"
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
      <Paragraph minorNext id='userbase-reach'>
        <b>The userbase reach of Next.js</b>: How the capabilities of a Next.js project match up with the different userbase-size categories. <i>(Reasoning comes after the image)</i>
      </Paragraph>
      <Flex w='100%' justify='center' mb='40px'>
        <Zoom>
          <Img
            borderRadius='lg'
            alt="How good fit is Next.js for the different parts of the userbase size scale: Level 1 - optimal. Level 2 - optimal. Level 3 - optimal. Level 4 - good enugh."
            src="/img/blog/next/next-userbase-coverage.png"
            width="600px"
          />
        </Zoom>
      </Flex>
      <Paragraph minorNext>
        Thanks to the standalone Node.js server, you can easily deploy your application to a cheap hosting provider to support
        the small, local business use-case. Containerizing enables you to scale your application to meet higher demands and the
        serverless options help you in reaching even a global audience while keeping the operational burden low.
        <Text mt='25px'>
          When you don't need SSR/ISR or custom APIs, you can simply statically pregenerate your site and deploy it to a CDN or any other
          kind of hosting that matches your project needs. In this situation, Next covers every category of the userbase-size.
        </Text>
        <Text mt='25px'>
          I don't consider Level 4 optimal, however, as you have better tools for generating optimized SSG content like <ExternalLink href='https://astro.build/'>Astro</ExternalLink> or
          simply because, as in the case of complexity, you might need more control over your application architecture
          when delivering to such a vast audience. It can do it but not on the quality level required by global platform-scale apps. <i>
            (But honestly, that's not such big of a deal, what are the chances of our projects turning into the next TikTok or Twitter anyway?)
          </i> In summary:
        </Text>
        <Quote noMb>
          Next.js can scale your project from a single person to the entire world if needed.
        </Quote>
      </Paragraph>
      <Paragraph minorNext id='revenue-factors'>
        <b>Revenue generating factors</b>: As with any software Next generates revenue by solving the problem of the users / helping
        them to get their tasks done. There's a single involved property: <b>Customer Experience</b>. Let's see how Next.js improves it:
        <PostList minor noMb>
          <>
            <ListItem>
              <Text as='span' fontWeight='bold'>Top site performance</Text>: Built in application and code level optimizations
              that improve user experience along with the support for deployment in top-notch infrastructure enables meeting the high expectations
              of today's customers.
            </ListItem>
            <ListItem>
              <Text as='span' fontWeight='bold'>High delivery performance</Text>: Out-of-the box support for common
              optimizations that takes a lot of programmer effort, a quick development feedback loop, standardized way of structuring your application
              and the high level of community support leads to
              fast time to market that enables fast reaction to changing customer needs and improved product market fit.
            </ListItem>
          </>
        </PostList>
      </Paragraph>
      <Paragraph minorNext id='cost-factors'>
        <b>Cost generating factors</b>: This is also general, the 2 sources of costs for any software project <i>(related
        to our role)</i> are:
        <PostList minor noMb>
          <>
            <ListItem>
              <Text as='span' fontWeight='bold'>Development</Text>: Local development is efficient thanks to the best-in-class dev tooling,
              there are 3rd party, pre-made UI resources available to speed up product delivery, however you don't have tools that enable
              clients to make modification to a delivered project like an online sitebuilder <i>(WiX)</i> or in-app drag-and-drop editor/plugin system <i>(WordPress)</i> so
              everything has to be custom-built. When it comes to hiring, your chances are great with Next.js thanks to its popularity,
              so this cost factor is also quite well optimized.
            </ListItem>
            <ListItem>
              <Text as='span' fontWeight='bold'>Operations</Text>: You have a wide selection of hosting providers and architectural setups available
              when working with Next.js so you can fine-tune the operational costs to match your project needs. You can go from a free static site on
              GitHub Pages to a SaaS that burns cash like Google does. Also, there are platforms with specific integrations for Next to increase the
              efficiency of DevOps tasks. Maintainability is quite high as Next provides sane defaults for your project structure, further lowering long-term costs.
              Also, you can bet on the longevity of official support, the company behind the framework, Vercel, is best-in-class in this regard.
            </ListItem>
          </>
        </PostList>
      </Paragraph>
      <Paragraph minorNext>
        When the strategic goals involve improving revenue through customer satisfaction, user engagement, or similar fine-grained metrics like
        conversion-rate, products can usually benefit from the optimizations Next.js delivers out-of-the-box, the adaptable rendering strategy
        and the high-performance hosting options.
      </Paragraph>
      <Paragraph minorNext>
        Next.js is also a low-risk bet for companies of any size as it has industry wide adoption
        including <ExternalLink href='https://nextjs.org/case-studies/hulu'>
          HULU
        </ExternalLink>, Marvel, Twitch, Binance, IGN, Audible, Auth0
        and <ExternalLink href='https://nextjs.org/showcase'>many more</ExternalLink>. It's supported by teams at React and Google,
        so long-term outlooks are as good as it gets.
      </Paragraph>
      <SubScore data={stage2score}/>
    </>
  )
}