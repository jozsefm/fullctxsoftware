import { Flex, Image as ChakraImage, Text } from '@chakra-ui/react'
import { Paragraph, Quote } from 'components/blog/PostElements'
import { DesignDescription, ExternalLink, ImageContribution, ImageWrapper, SubScore } from 'components/reviews/common'
import { stage5score } from 'constants/scores/next'
import Image from 'next/image'

export default function Design() {
  return (
    <>
      <ImageWrapper overlay='#00000066'>
        <Image priority layout='fill' src='/img/blog/remix/design2.jpg' objectFit='cover' objectPosition='0 0'/>
        <Flex pos='relative' zIndex='2' margin='0 auto' right='-12px' align='center'>
          <ChakraImage className='svg' width='90px' height='90px' src='/img/blog/remix/design.svg' />
        </Flex>
      </ImageWrapper>
      <ImageContribution>Photo by <a href="https://unsplash.com/@themephotos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank'>Theme Photos</a> on <a href="https://unsplash.com/s/photos/design?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank'>Unsplash</a></ImageContribution>
      <DesignDescription />
      <Quote smallM ><>Honest Disclaimer: I <s>sadly</s> have no affiliate relationship with- or any other financial benefit from the products I'm going to mention in the review.</></Quote>
      <Paragraph minorNext>
        Next.js is not too special in this regard, however, it has the whole React ecosystem at its fingertip.
        That is an absolute beast from both the integrations and build vs buy options.
      </Paragraph>
      <Paragraph minorNext id='design-tool-integration'>
        <b>Design tool integrations</b>: To enable rapidly iterating with designs, there are <ExternalLink href='https://builderx.io/'>specialized</ExternalLink> <ExternalLink href='https://reactstudio.com/'>React</ExternalLink> <ExternalLink href='http://reactide.io/'>IDEs</ExternalLink> for
        integrating UI design and code development, tools to export <ExternalLink href='https://www.figma.com/community/plugin/959795830541939498/Figma-to-React-Component'>Figma</ExternalLink> <ExternalLink href='https://www.figmachine.com/'>designs</ExternalLink> as
        React components, even in <ExternalLink href='https://www.figma.com/community/plugin/1087200717679287673/FireJet---React-%2B-TypeScript-Export'>
          TypeScript
        </ExternalLink> or <ExternalLink href='https://react-figma.dev/'>vice versa</ExternalLink>. Similar
        tools exist <ExternalLink href='https://www.overlay-tech.com/'>for</ExternalLink> <ExternalLink href='https://sketch2react.io/'>
          Sketch
        </ExternalLink> and <ExternalLink href='https://www.animaapp.com/features/code'>Adobe XD</ExternalLink>.
        There's a visual page & component builder called <ExternalLink href='https://docs.plasmic.app/learn/nextjs-quickstart'>Plasmic</ExternalLink> that
        has dedicated Next.js integration.
        <Text mt='25px'>
          Next.js can stand out from the generic React ecosystem thanks to a very powerful integration option
          enabled by the experimental feature <ExternalLink href='https://nextjs.org/docs/api-reference/next.config.js/url-imports'>
            URL Imports
          </ExternalLink> and a beta functionality of <ExternalLink href='https://www.framer.com/'>
            Framer
          </ExternalLink> called <ExternalLink href='https://www.framer.com/docs/guides/handshake/'>
            Handshake
          </ExternalLink>. This thing has huge potential, in my opinion. Framer generates React code automatically from your design
          and exposes a versioned ESM module through a URL that you can use to import the component directly to your Next.js app.
          Here's an <ExternalLink href='https://github.com/framer/next.js'>example project</ExternalLink> if you are interested in
          how does it work at the code level.
          For the right type of components, this can be a huge productivity and utilization booster.
        </Text>
      </Paragraph>
      <Paragraph minorNext id='component-driven-development'>
        <b>Component driven development</b>: You have support for <ExternalLink href='https://react-proto.github.io/react-proto/'>quick prototyping</ExternalLink> and there are also tools like <ExternalLink href='https://storybook.js.org/'>Storybook</ExternalLink> and <ExternalLink href='https://bit.dev/'>Bit</ExternalLink> that
        support component driven development and possibly setting up your own design system.
        Next gen tooling also started to appear in this space like <ExternalLink href='https://www.ladle.dev/'>Laddle</ExternalLink> that uses Vite and esbuild internally.
      </Paragraph>
      <Paragraph minorNext id='premade-components'>
        <b>Pre-made components</b>: The options to buy - or simply use - pre-made templates, themes and component frameworks are best in class too.
        There are tons of top-notch <ExternalLink href='https://github.com/brillout/awesome-react-components#ui-frameworks'>UI libraries</ExternalLink> and <ExternalLink href='https://themeforest.net/search/react?sort=sales'>Site templates</ExternalLink> available
        to choose from. Including <ExternalLink href='https://tailwindui.com/'>Tailwind</ExternalLink>.
      </Paragraph>
      <Paragraph>
        So a Next.js project can benefit from a vast ecosystem of tools to help improve the efficiency of designing and delivering web sites and application.
      </Paragraph>
      <SubScore data={stage5score}/>
    </>
  )
}