import { Flex, Image as ChakraImage } from '@chakra-ui/react'
import { Paragraph } from 'components/blog/PostElements'
import Image from 'next/image'
import { stage1score } from 'constants/scores/remix'
import { ExternalLink, ImageContribution, ImageWrapper, SubScore } from 'components/reviews/common'


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
      <Paragraph minorNext>
        <b>Short description</b>: The main delivery goal of the project. On the most fundamental level, it's a product idea,
        a solution to a real-world problem. In an established project, it means new features and improvements.
        The most relevant technical question is: What are the software qualities our product should have to create
        the best solution out there? (Problem focus) And how well can the tech we use deliver them?
      </Paragraph>
      <Paragraph minorNext>
        <b>Remix</b>: By now, you all know that Remix is a tool to deliver
        full-stack web-based software (apps or sites). You could definitely use it as "only" a server
        and there are some <ExternalLink href='https://remix.run/docs/en/v1/guides/resource-routes'>documented uses</ExternalLink> for
        that, but it's not the point of the framework. So stating the obvious, it's made to create online products.
        The interesting part is to find out which are the business cases Remix is most suited for. We will identify them
        as we walk down the road.
      </Paragraph>
      <Paragraph minorNext>
        From the point of view of this stage, Remix is capable of providing the basic business opportunity for any web-based project.
        On a side-note, this means it will be used for any kind of web-based project, even those it's not the best match for.
        This is not necessarily a bad thing, <i>(for the community)</i> often this leads to innovation within an ecosystem.
      </Paragraph>
      <Paragraph minorNext>
        Where Remix doesn't give you any specialized help are projects that focus on more than HTML content.
        Think in-browser games, data visualization or applications with lots of client-side logic like spreadsheet or rich text editors.
        Another out-of-focus area is purely backend products. Good examples are API-as-a-service businesses like Stripe, Cloudinary, etc... 
        This is not a criticism of the framework, it's just defining its scope. Plus, this is in line with the standard
        feature set of the frameworks in its category.
      </Paragraph>
      <Paragraph minorNext>
        Thanks to fully supporting edge infrastructure and operating as a server, it's a powerful tool to serve
        highly dynamic content to the users. This strength comes in handy for projects that do a lot of
        location-based customization like A/B testing, serving personalized ads or simply internationalization,
        even if otherwise all the site is a landing page. It's architecture is also a good fit for apps mostly
        behind authentication where you have to ensure each page view is done by a logged in user.
      </Paragraph>
      <Paragraph minorNext>
        But this approach makes Remix a not particularly good fit for public, mostly static and rarely updated content. <i>
          (Rare means, the frequency of deployments doesn't lead to costs comparable to operating a Remix based project.)
        </i> It can serve these as well with no problem, and because Remix is marketed for developers it will surely be used for these
        kinds of projects, but its strengths can't really shine there. <i>
          (More on that later.)
        </i> I will suggest some alternative solutions that can offset the
        downsides of Remix at the end.
      </Paragraph>
      <Paragraph minorNext>
        As a minor plus for business opportunities, its capability to work without JS can make it desirable in
        the narrow domain of online privacy centric products where your users are more likely to visit you with JS disabled.
      </Paragraph>
      <SubScore data={stage1score}/>
    </>
  )
}