import { Flex, Image as ChakraImage, ListItem, Text } from '@chakra-ui/react'
import { Paragraph, PostList } from 'components/blog/PostElements'
import { Code, ExternalLink, ImageContribution, ImageWrapper, ProductDescription, SubScore } from 'components/reviews/common'
import { stage3score } from 'constants/scores/next'
import Image from 'next/image'

export default function Product() {
  return (
    <>
      <ImageWrapper>
        <Image priority layout='fill' src='/img/blog/remix/product11.jpg' objectFit='cover' objectPosition='0 49%'/>
        <Flex pos='relative' zIndex='2' margin='0 auto' right='-12px' align='center'>
          <ChakraImage className='svg' width='90px' height='90px' src='/img/blog/remix/product.svg' />
        </Flex>
      </ImageWrapper>
      <ImageContribution><a href='https://www.freepik.com/vectors/infographic' target='_blank'>Infographic vector created by freepik - www.freepik.com</a></ImageContribution>
      <ProductDescription />
      <Paragraph minorNext>
        There are only two technical factors that can limit your product/feature options when working on a Next.js project are:
      </Paragraph>
      <Paragraph minorNext id='build-time-cost'>
        <b>Build -time and -costs</b>: You can hit a build -time or even -cost wall if you go with SSG on a large-enough project with frequently updated
        content. <i>(page numbers are in the thousands.)</i> ISR
        is there to the rescue, but then you have to count with the resource usage costs of regeneration (especially on serverless providers),
        and the same goes for SSR. <i>Josip <ExternalLink href='https://josipmisko.com/next-js#nextjs-disadvantages'>testifies</ExternalLink>.</i> You
        need to balance these factors based on your budget to ensure the feasibility of the product.
      </Paragraph>
      <Paragraph minorNext id='router-limitations'>
        <b>Router limitations</b>: This is a technical detail which can only become a show-stopper in very few cases, nonetheless, it might affect you.
        The built-in, file-based router cannot provide "real" client-side dynamic navigation. If your application <b>*really*</b> needs that,
        then take a look at <ExternalLink href='https://colinhacks.com/essays/building-a-spa-with-nextjs'>
          this guide
        </ExternalLink> showing how to integrate <Code>react-router</Code> with Next.js.
        If that still doesn't meet your needs <i>(main drawback: lack of initial SSR)</i> than it's sadly time to say goodbye to this framework.
        <Text mt='25px'>
          What do I mean by the router not supporting SPA navigation?
          Next.js either creates the pre-built HTML for a page (SSG) or uses server-side rendering to deliver it. The second option can use
          dynamic runtime path parameters, while the first works only with known paths even if those are fetched dynamically during the build step.
          This way you can't deliver "truly" SPA style, dynamic, client-side transitions, only if you use query parameters instead of the URL path, like this:
        </Text>
          <PostList minor noMb listStyleType='none' mt='40px'>
            <>
              <ListItem>
                ❌ <Code>/product-category/shoes/1</Code> =&gt; ONLY SSG OR SSR
              </ListItem>
              <ListItem>
                ✅ <Code>/product-category?category=shoes&page=1</Code> =&gt; YOU IMPLEMENT CSR
              </ListItem>
            </>
          </PostList>
      </Paragraph>
      <Paragraph minorNext id='delivery-speed'>
        <b>Delivery speed</b>: As for the roadmap part, the fact that you have to custom build your product can rule out Next.js in a few cases when time-to-market is
        the top priority.
        Quick prototyping, MVP development up to Level 2 complexity and simple static sites (like company landing pages)
        can often be much more effectively delivered with purpose made tools. 
        <Text mt='25px'>
          However, Next.js is not completely without merit in this regard. There are community developed packages
          to help you increase productivity by a huge margin, so your roadmap can be more tight than with a <i>truly</i> custom built
          application. <i>(No framework involved.)</i> Here's a curated list of such
          resources: <ExternalLink href='https://github.com/unicodeveloper/awesome-nextjs'>
            Awesome Next.js
          </ExternalLink>
        </Text>
      </Paragraph>
      <SubScore data={stage3score}/>
    </>
  )
}