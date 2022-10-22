import { Flex, Image as ChakraImage } from '@chakra-ui/react'
import { Paragraph } from 'components/blog/PostElements'
import Image from 'next/image'
import {  stage2score } from 'constants/scores/remix'
import { ImageContribution, ImageWrapper, SubScore } from 'components/reviews/common'

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
      <Paragraph minorNext>
        <b>Short description</b>: The long and middle-term goals of the company. Our interest is at the strategy level. The most important
        factors we should gather here are: The specific user types/groups we are targeting right now and what makes each of them happy?
        We should then further infer the necessary technical properties to reach and satisfy them. (Customer satisfaction focus)
        The other, usual components of IT strategy are the specific goals to increase revenue or decrease costs.
        We should understand the high-level technical factors that play into each.
      </Paragraph>
      <Paragraph minorNext>
        <b>Remix</b>: The relevant characteristics of Remix in this regard are that it's built to leverage edge technology,
        and its focus on providing as-fast-as-possible loading speeds. Why?
        Because your strategic goals should be able to benefit from these to realize the most significant benefits of using Remix. 
      </Paragraph>
      <Paragraph minorNext>
        If your customer base is strictly located in a geographical region that one or two data centers can typically cover,
        it doesn't make any sense to deploy your site around the world. This includes projects for any kind of local businesses and
        organizations, or even national corporations and governments in smaller countries, but also company internal tools.
      </Paragraph>
      <Paragraph minorNext>
        So Remix really shines on projects that serve a geographically large area, the best if it's a global product.
        Ideally, your business should be able to benefit financially from the fast loading speed of your site.
        While it's generally a good thing for any web product, there are businesses especially sensitive in this regard.
        Good examples are global e-commerce sites, primarily engagement based products (offering valuable information to
        the visitors while operating from ad-based revenue: news, social-media, blogs, reviews, etc...)
        or really any world-class brand that can't afford to lose face with a poor user experience.
      </Paragraph>
      <Paragraph minorNext>
        If some of your user base will be located in 3rd world countries or in general somewhere with low-quality internet access,
        the reduced network payload and reduced latency provided by Remix at the edge will support your customers very well.
      </Paragraph>
      <Paragraph minorNext>
        When the stategy involves improving revenue through customer experience, user engagement, or similar fine-grained metrics like
        conversion-rate, products can usually benefit from the snappy loading or optimistic UI updates Remix can help you deliver. 
      </Paragraph>
      <Paragraph minorNext>
        On the other hand, when the strategic goals include optimizing production costs, Remix, simply because it's relatively
        new, is a risky choice. We have no examples of how it works out at scale in large organizations. However, by the end of the review,
        you will have a general sense about the likely outcomes.
      </Paragraph>
      <SubScore data={stage2score}/>
    </>
  )
}