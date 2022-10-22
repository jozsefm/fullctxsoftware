import { Flex, Image as ChakraImage } from '@chakra-ui/react'
import { Paragraph, Quote } from 'components/blog/PostElements'
import Image from 'next/image'
import { stage3score} from 'constants/scores/remix'
import { Code, ExternalLink, ImageContribution, ImageWrapper, SubScore } from 'components/reviews/common'

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
      <Paragraph minorNext>
        <b>Short description</b>: Researching and defining the high-level goals of the product development and the strategic/feature roadmap.
        From the developer perspective, we are interested in finding the technology properties that might constraint what kind of features
        are efficient to implement. On a project, we also want to make sure the roadmap takes these into account.
      </Paragraph>
      <Paragraph minorNext>
        <b>Remix</b>: Here we will dive deeper into the only limitation of the Remix architecture that
        you should take into consideration when assessing the required development effort.
      </Paragraph>
      <Paragraph minorNext>
        There's only a <ExternalLink href='https://remix.run/docs/en/v1/guides/data-loading#data-libraries'>slight hint</ExternalLink> in the docs
        about this concern:
        <Quote>
          If you're using global state management libraries like redux, primarily for interacting with data on the server,
          it's also unlikely you'll need those.
        </Quote>
        This means that the Remix data conventions are best suited to handle data that lives on the server.
        Most typical enterprise applications fall into this category. However, when you need to manage complex, global data
        on the client side, you need to feed it "from Remix" and if you want to keep using the framework created route APIs, you
        have to manually hook up with them. This might become burdensome because Remix can't offer a lot of its built-in
        optimizations when some of your UI state/models are not managed by the framework.
        It can't do things like server side rendering or automatically ensuring that the UI is in sync with the data on the server,
        among <ExternalLink href='https://remix.run/docs/en/v1/guides/data-loading#data-libraries'>many others</ExternalLink>.
      </Paragraph>
      <Paragraph minorNext>
        <i>
          Explanation: any client side changes you make on a view/route of your app that is not "stored" in the Remix provided
          state management tools will be lost after a server render triggered by an action or URL change, as long as it lives in
          the same React component that gets updated. A typical example is any data you fetch on the client side from a 3rd party API.
          Putting these into, for example, a Redux store won't help as it doesn't automatically send its data to the server so there's no way
          Remix can correctly server rendered the app. Client side caching or storing stuff in the session might help you out
          for smaller things, but not on the scale required by complex applications.
        </i>
      </Paragraph>
      <Paragraph minorNext>
        I have not tried to handle this kind of situation in practice, but I think the most annoying part is that the only official way to
        interact with your route APIs without a <Code>form</Code> in Remix is the <Code>useFetcher</Code> hook. This is also the only way
        to get data from a loader without browser navigation. The real pain is that it's a hook. You can only use it inside React components
        which might make it really awkward or even impossible to use the framework provided loaders/actions from Redux action creators/middleware
        or anything that lives outside of the component world.
      </Paragraph>
      <SubScore data={stage3score}/>
    </>
  )
}