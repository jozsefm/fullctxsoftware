import { Flex, Image as ChakraImage } from '@chakra-ui/react'
import { Paragraph, Quote } from 'components/blog/PostElements'
import Image from 'next/image'
import { stage5score } from 'constants/scores/remix'
import { ExternalLink, ImageContribution, ImageWrapper, SubScore } from 'components/reviews/common'
import { remixUpdates } from './updates'

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
      <Paragraph mb='0'>
        <b>Short description</b>: It's about well, ... designing the look & feel of the product from every relevant aspect.
        The output of this stage can include: UI / Visual design, Interaction design, Information architecture and more.
        There really are just 2 related technical concerns of software development. First is tech stack integration with the design tools.
        Second is options to buy vs. build.
        <Quote>Honest Disclaimer: I have no affiliate relationship with- or any other financial benefit from the products I'm going to mention in the review.</Quote>
      </Paragraph>
      <Paragraph minorNext>
        <b>Remix</b>: Remix is nothing special in this regard, however, it has the whole React ecosystem at its fingertip.
        That is an absolute beast from both the integrations and build vs buy options.
        To enable rapidly iterating with designs, there are <ExternalLink href='https://builderx.io/'>specialized</ExternalLink> <ExternalLink href='https://reactstudio.com/'>React</ExternalLink> <ExternalLink href='http://reactide.io/'>IDEs</ExternalLink> for
        integrating UI design and code development, tools to export <ExternalLink href='https://www.figma.com/community/plugin/959795830541939498/Figma-to-React-Component'>Figma</ExternalLink> <ExternalLink href='https://www.figmachine.com/'>designs</ExternalLink> as
        React components, even in <ExternalLink href='https://www.figma.com/community/plugin/1087200717679287673/FireJet---React-%2B-TypeScript-Export'>
          TypeScript
        </ExternalLink> or <ExternalLink href='https://react-figma.dev/'>vice versa</ExternalLink>. Similar
        tools exist for <ExternalLink href='https://sketch2react.io/'>Sketch</ExternalLink> and <ExternalLink href='https://www.animaapp.com/features/code'>Adobe XD</ExternalLink>.
      </Paragraph>
      <Paragraph minorNext>
        You have support for <ExternalLink href='https://react-proto.github.io/react-proto/'>quick prototyping</ExternalLink> and there are also tools like <ExternalLink href='https://storybook.js.org/'>Storybook</ExternalLink> and <ExternalLink href='https://bit.dev/'>Bit</ExternalLink> that
        support component driven development and possibly setting up your own design system.
      </Paragraph>
      <Paragraph minorNext>
        The options to buy - or simply use - pre-made templates, themes and component frameworks are best in class too.
        There are tons of top-notch <ExternalLink href='https://github.com/brillout/awesome-react-components#ui-frameworks'>UI libraries</ExternalLink> and <ExternalLink href='https://themeforest.net/search/react?sort=sales'>Site templates</ExternalLink> available
        to choose from. <i>(And of course you can use <ExternalLink href='https://tailwindui.com/'>Tailwind</ExternalLink> too, which is the community favorite
        styling solution for Remix.)</i>
      </Paragraph>
      <Paragraph>
        So a Remix project can benefit from a vast ecosystem of tools to help improve the efficiency of designing and delivering web sites and application.
        The only trouble you might face is with site templates that are set up to use other metaframeworks such as Next.js and Gatsby or simply CRA
        and tools that require <ExternalLink href='https://remix.run/docs/en/v1/guides/styling#css-ecosystem-and-performance'>bundler integration</ExternalLink>.
      </Paragraph>
      <Paragraph update={remixUpdates[1]} minorNext>
        Since publishing the post I came across <ExternalLink href='https://plasmic.app'>Plasmic</ExternalLink>, a no-code,
        visual page builder that has dedicated <ExternalLink href='https://docs.plasmic.app/learn/remix-quickstart/'>Remix integration</ExternalLink>.
      </Paragraph>
      <SubScore data={stage5score}/>
    </>
  )
}