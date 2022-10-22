import { Flex, Image as ChakraImage } from '@chakra-ui/react'
import { Paragraph } from 'components/blog/PostElements'
import Image from 'next/image'
import { stage10score } from 'constants/scores/remix'
import { ExternalLink, ImageContribution, ImageWrapper, SubScore } from 'components/reviews/common'

export default function Feedback() {
  return (
    <>
      <ImageWrapper >
        <Image priority layout='fill' src='/img/blog/remix/feedback.jpg' objectFit='cover' objectPosition='0 13%'/>
        <Flex pos='relative' zIndex='2' margin='0 auto' right='-12px' align='center'>
          <ChakraImage className='svg' width='90px' height='90px' src='/img/blog/remix/feedback.svg' />
        </Flex>
      </ImageWrapper>
      <ImageContribution><a href='https://www.freepik.com/vectors/label' target='_blank'>Label vector created by freepik - www.freepik.com</a></ImageContribution>
      <Paragraph minorNext>
        <b>Short description</b>: The final phase is about collecting technical and user feedback about the usage of the product.
        The goal is to turn these into actionable insights, learning the best ways to extend or improve the solution.
        The developer concerns are about how well can we collect and process these data.
      </Paragraph>
      <Paragraph minorNext>
        <b>Remix</b>: Strictly speaking, the last stage is also outside of the responsibility of these types of frameworks. However
        you can integrate everything that the native web platform offers, so let's take a quick look at the options.
      </Paragraph>
      <Paragraph minorNext id='user-feedback'>
        <b>User feedback</b>: One of the most valuable assets for any commercial product. It can be collected through
        reviews, surveys, in-app messaging, emails, even phone calls and SMS. There's an endless number of 3rd party solutions
        in this category, but some of the major ones are: <ExternalLink href='https://feedier.com/platform'>
          Feedier
        </ExternalLink>, <ExternalLink href='https://userpilot.com/product/user-sentiment'>
          Userpilot
        </ExternalLink>, <ExternalLink href='https://www.apptentive.com/features/apptentive-for-web/'>
          Apptentive
        </ExternalLink>, <ExternalLink href='https://instabug.com/product/user-surveys'>
          Instabug
        </ExternalLink>, <ExternalLink href='https://www.appcues.com/use-case/nps-surveys'>
          Appcues
        </ExternalLink> or <ExternalLink href='https://www.appzi.com/'>
          Appzi
        </ExternalLink>. You can also use the already mentioned ReveChat and Marker.io for this purpose.
      </Paragraph>
      <Paragraph minorNext>
        There are simpler tools with explicit React support like: <ExternalLink href='https://feedback.fish/help/react'>
          Feedback Fish
        </ExternalLink>, <ExternalLink href='https://github.com/rishipr/feeder-react-feedback'>
          Feeder
        </ExternalLink> or <ExternalLink href='https://github.com/markmur/react-slack-feedback'>
          React Slack Feedback
        </ExternalLink>.
      </Paragraph>
      <Paragraph minorNext id='analytics'>
        <b>Analytics:</b> You might want to have fine grained insights into the  usage patterns of the application.
        Who are your users? Where are they coming from? There are many options but the most well known is of course <ExternalLink href='analytics.google.com'>
          Google Analytics
        </ExternalLink>. You might want to be GDPR compliant and use <ExternalLink href='https://matomo.org/'>
          Matomo
        </ExternalLink> or go even more privacy focused with <ExternalLink href='https://plausible.io/'>
          Plausible
        </ExternalLink> and <ExternalLink href='https://usefathom.com/'>
          Fathom Analytics
        </ExternalLink> while staying GDPR complaint too.
      </Paragraph>
      <Paragraph minorNext id='user-insights'>
        <b>User insights:</b> Gaining rich insights into customer journeys, conversion and engagement statistics
        are essential to many businesses and is supported by tools such as <ExternalLink href='https://www.hotjar.com/'>
          Hotjar
        </ExternalLink>, <ExternalLink href='https://www.plerdy.com/'>
          Plerdy
        </ExternalLink>, <ExternalLink href='https://mouseflow.com/'>
          Mouseflow
        </ExternalLink>, <ExternalLink href='https://www.freshworks.com/crm/features/event-tracking/'>
          Freshmarketer
        </ExternalLink> and the GDPR compliant <ExternalLink href='https://hockeystack.com/'>
          HockeyStack
        </ExternalLink>.
      </Paragraph>
      <Paragraph minorNext>
        All in all, the availability of the tools built for the web is an awesome, but very much expected, standard property
        of these metaframeworks. It's only worth noting, as your options could be more restricted if Remix was targeting a different platform. <i>
          (eg. Linux desktop)
        </i>
      </Paragraph>
      <SubScore data={stage10score}/>
    </>
  )
}