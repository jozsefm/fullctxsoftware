import { Text } from '@chakra-ui/react'
import { Paragraph } from 'components/blog/PostElements'
import 'react-medium-image-zoom/dist/styles.css'
import { ExternalLink, InternalLink } from '../common'

const endMb = {
  base: '25px',
  md: '0'
}

export default function Conclusions() {
  return (
    <>
      <Paragraph minorNext>
        In summary, Next.js is a bulletproof choice for all web projects. It's hard to find any meaningful criticism of it. Of course
        it won't help with things it was not meant to do like data visualization, animation or other highly interactive stuff.
        Level 4 complexity projects are out of its scope.
        It provides limited help on the backend side. Frameworks such as <ExternalLink href='https://blitzjs.com/'>Blitz.js</ExternalLink> offer way more tools to
        ease everyday development tasks of that part.
        It also has <ExternalLink href='https://github.com/vercel/next.js/issues?q=is%3Aissue+is%3Aopen+sort%3Acomments-desc'>
          more than 1k
        </ExternalLink> open issues on GitHub but that's a standard amount for these types of tools. Finally, there are certain limitations to its
        router that can only be solved by using SSR, as you might have learned from the <InternalLink href='#capability'>SingleStore post</InternalLink> in the Business Opportunity section,
        combine it with no real need for the rendering modes Next provides you might end up in a similar situation and decide against using it.
        Besides these, I have no other complaints. 
        <Text mt='25px'>
          Contrast it with the best-in-class support provided by Vercel and the wider community <i>(collaboration with teams at Google and Facebook...)</i>,
          constant innovation driving state-of-the-art frontend development practices and all the benefits we covered in the review
          and I believe my conclusion is clearly justified. It makes a lot of financial sense to use it for all but the smallest of projects.
          Its greatest strength is the level of developer productivity it provides, together with significant customer experience improvements.
          If your product plans for the long run and will <i>(or already had)</i> scale<i>(d)</i> up organization wise, it's one of the top frameworks to choose today.
        </Text>
      </Paragraph>
      <Paragraph>
        With this, I conclude the second full context review! How was it? Let me know in the comments! I appreciate any and all feedback as I plan
        to improve the review format for delivering more insights in a more engaging way.
        If you would like to read a similar article about some other technology, let me know that as well. Thanks and keep safe Everyone!
      </Paragraph>
      <Paragraph updateStyle>
        <b>P.S.</b>: I'm extremely grateful that I had the capacity to write this review, it took me more than 2 weeks of full time work.
        If you enjoyed reading it and/or gained something of value from the post, please consider sharing it on social media.
        I take that as huge sign of appreciation of my efforts and would bring a lot of joy to my day. A heartfelt thank you for
        spending your precious time with my work and especially if you share it with others! <i>-- Joe</i>
      </Paragraph>
    </>
  )
}