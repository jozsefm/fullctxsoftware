import { Flex, Image as ChakraImage, ListItem, UnorderedList } from '@chakra-ui/react'
import { Paragraph } from 'components/blog/PostElements'
import { Code, ExternalLink, ImageContribution, ImageWrapper, SubScore, ulMr } from 'components/reviews/common'
import { stage9score } from 'constants/scores/remix'
import Image from 'next/image'

export default function Operation() {
  return (
    <>
      <ImageWrapper >
        <Image priority layout='fill' src='/img/blog/remix/operation2.jpg' objectFit='cover' objectPosition='0 65%'/>
        <Flex pos='relative' zIndex='2' margin='0 auto' right='-12px' align='center'>
          <ChakraImage className='svg' width='90px' height='90px' src='/img/blog/remix/operation.svg' />
        </Flex>
      </ImageWrapper>
      <ImageContribution><a href='https://www.freepik.com/vectors/internet' target='_blank'>Internet vector created by macrovector - www.freepik.com</a></ImageContribution>
      <Paragraph minorNext>
        <b>Short description</b>: This stage is about keeping the product functional for the end users, monitoring its characteristics, detecting and reacting
        to issues, and offering customer support. We are interested in finding any technical property that influences how well you can perform these activities. 
      </Paragraph>
      <Paragraph minorNext>
        <b>Remix</b>: The framework itself has nothing to offer in this area and that's fine. This is usually a responsibility handled by separate tools.
        The JS/React ecosystem paired with the wide variety of supported hosting providers spoils us in this regard.
      </Paragraph>
      <Paragraph minorNext id='observability'>
        <b>Observability</b>: You won't have a hard time finding the right observability tools for your needs with Remix.
        The multifaceted industry leading solutions like <ExternalLink href='https://opentelemetry.io/'>OpenTelemetry</ExternalLink>, <ExternalLink href='https://newrelic.com/'>NewRelic</ExternalLink>, <ExternalLink href='https://www.datadoghq.com/'>DataDog</ExternalLink>, <ExternalLink href='https://sematext.com/'>SemaText</ExternalLink>, <ExternalLink href='https://www.dynatrace.com/'>Dynatrace</ExternalLink>, <ExternalLink href='https://sentry.io/'>Sentry</ExternalLink> or <ExternalLink href='https://stackify.com/'>Stackify</ExternalLink> are
        all available in most cloud providers and through classic client and server-side libraries/SDKs.
        There are also good open source and self-hostable alternatives like: <ExternalLink href='https://posthog.com/'>PostHog</ExternalLink> and <ExternalLink href='https://signoz.io/'>SigNoz</ExternalLink>.
      </Paragraph>
      <Paragraph minorNext>
        Most of the major cloud providers have their own full-fledged observability offering, so <ExternalLink href='https://aws.amazon.com/products/management-and-governance/use-cases/monitoring-and-observability'>
          AWS
        </ExternalLink>, <ExternalLink href='https://docs.microsoft.com/en-us/azure/api-management/observability'>
          Azure
        </ExternalLink> and <ExternalLink href='https://cloud.google.com/products/operations'>
          GCP
        </ExternalLink> got you covered without the need for using any 3rd party tools.
      </Paragraph>
      <Paragraph minorNext>
        Some platforms offer React specific integrations to help you even further, like: <ExternalLink href='https://sentry.io/for/react/'>
          Sentry
        </ExternalLink>, <ExternalLink href='https://docs.microsoft.com/en-us/azure/azure-monitor/app/javascript-react-plugin'>
          Azure
        </ExternalLink> <ExternalLink href='https://www.aaron-powell.com/posts/2019-10-04-implementing-monitoring-in-react-using-appinsights/'>
          AppInsights
        </ExternalLink>, <ExternalLink href='https://www.atatus.com/monitor/react'>
          Atatus
        </ExternalLink> and <ExternalLink href='https://docs.logrocket.com/docs/react-plugin'>
          LogRocket
        </ExternalLink>.
      </Paragraph>
      <Paragraph minorNext id='maintenance'>
        <b>Maintenance</b>: From the maintenance point of view, the situation is even more dependent on the chosen deployment target.
        Ranging from your own managed hosting of a Node.js backend through containerized deployments with Docker, to the
        semi or fully managed cloud and edge platforms, the volume and price of the required maintenance effort varies greatly.
        Let's briefly check the best, the worst and the most popular ways of running a Remix project.
      </Paragraph>
      <Paragraph minorNext>
        Kent personally, and both the official blog and docs advocate for the use of Fly. The official <ExternalLink href='https://github.com/remix-run/remix/tree/main/packages/create-remix/templates/fly-stack'>
          starter template
        </ExternalLink> works through deploying a Node based Docker container
        with your application code on top of it. They also pack in a PostgreSQL database for good measure.
        This way Remix can act as its <ExternalLink href='https://remix.run/blog/remix-vs-next#why-the-apps-are-fast'>own CDN</ExternalLink> custom
        tailored to your needs. If you go down this route, keep in mind that now it's you who has to operate a CDN. of course, most of it is
        automated by the infrastructure providers but nonetheless, it's your responsibility to plan and take care of this functionality.
      </Paragraph>
      <Paragraph minorNext>
        Fly can help you <ExternalLink href='https://fly.io/docs/reference/scaling/#autoscaling'>
          auto-scale
        </ExternalLink> and <ExternalLink href='https://fly.io/docs/reference/metrics/'>
          monitor
        </ExternalLink> your applications. Working with it is mainly a configuration file and CLI based experience and
        requires more effort than some of the other alternatives like Vercel or CloudFlare Pages but is way more efficient
        than trying to manually achieve the same setup and offers greater customization and control over your stack.
      </Paragraph>
      <Paragraph minorNext>
        These are the other two scenarios we are interested in, manual operations as the worst case and
        using an end-to-end integrated solution like Netlify or Architect where you <Code>push</Code> to Git or type <Code>deploy --production</Code> to
        a CLI and everything else is taken care of by the tools.
      </Paragraph>
      <Paragraph minorNext>
        For the bare bones solution, you are most likely to use a Docker image and deploy it somewhere like <ExternalLink href='https://www.heroku.com/'>
          Heroku
        </ExternalLink>, <ExternalLink href='https://www.digitalocean.com/'>
          DigitalOcean
        </ExternalLink>, or your own VM / hardware. You will either use the host's observability and maintenance solutions or go down
        the <ExternalLink href='https://geekflare.com/nodejs-monitoring-tools/'>
          classic
        </ExternalLink> <ExternalLink href='https://medium.com/iquii/good-practices-for-high-performance-and-scalable-node-js-applications-part-1-3-bb06b6204197'>
          way
        </ExternalLink> of DIY. This option has the highest upfront cost and highest risk but comes with the lowest monthly bill (when you get it right).
      </Paragraph>
      <Paragraph minorNext>
        The high-end setup uses an integrated CI/CD, cloud hosting and compute platform with 0 maintenance needs, built-in CDN and web security
        solutions and a bunch of zero setup extras, hard to put into a full sentence:
        <Flex justify='flex-start' my='10px'>
          <UnorderedList pl='0px' ml='30px' mr={ulMr} spacing={2} lineHeight={1.3} >
            <ListItem>
              Immutable deployments
            </ListItem>
            <ListItem>
              Analytics
            </ListItem>
            <ListItem>
              Performance monitoring
            </ListItem>
            <ListItem>
              Site speed enhancements
            </ListItem>
            <ListItem>
              Globally distributed, high performance storage options (even encrypted)
            </ListItem>
            <ListItem>
              A ton of 1 click integrations with popular 3rd party services
            </ListItem>
            <ListItem>
              Team management and role based access management
            </ListItem>
            <ListItem>
              API protection
            </ListItem>
            <ListItem>
              Bot Management
            </ListItem>
            <ListItem>
              Load balancing
            </ListItem>
            <ListItem>
              and more...
            </ListItem>
          </UnorderedList>
        </Flex>
        CloudFlare delivers most of these, but Vercel and Netlify also has a lot of the points checked and
        their immutable deployments help a lot when you need to roll back changes when eventually something goes wrong.
        In summary the base stack of Remix allows it to meet all your operational preferences.
      </Paragraph>
      <Paragraph minorNext id='customer-support'>
        <b>Customer support</b>: React and JS come into play here again as it has integration packages for many of the biggest customer support service
        providers: <ExternalLink href='https://github.com/B3nnyL/react-zendesk'>
          Zendesk
        </ExternalLink>, <ExternalLink href='https://github.com/pozil/salesforce-react-integration'>
          SalesForce
        </ExternalLink>, <ExternalLink href='https://github.com/Personare/react-freshdesk-widget'>
          FreshDesk
        </ExternalLink>, <ExternalLink href='https://github.com/devrnt/react-use-intercom'>
          Intercom
        </ExternalLink>. But the native web-sdks/clients of these services <i>(and many more)</i> are also available and often provide more functionality.
        I really like innovative tools like: <ExternalLink href='https://www.revechat.com/live-chat-saas/'>
          ReveChat
        </ExternalLink> with co-browsing functionality and <ExternalLink href='https://marker.io/'>
          Marker.io
        </ExternalLink> with its in-app screen capture and annotation feature for bug reporting.
      </Paragraph>
      <Paragraph minorNext>
        To help with resolving customer issues there are 3rd party services that collect error information across your stack: <ExternalLink href='https://www.bugsnag.com/'>
          Bugsnag
        </ExternalLink>, <ExternalLink href='https://rollbar.com/discover/'>
          Rollbar
        </ExternalLink>, <ExternalLink href='https://raygun.com/'>
          Raygun
        </ExternalLink>, <ExternalLink href='https://therootcause.io/'>
          RootCause
        </ExternalLink> or <ExternalLink href='https://catchjs.com/#jserr'>
          CatchJs
        </ExternalLink>. All these can help you decrease issue resolution times, improve customer satisfaction and in the end increase revenue.
      </Paragraph>
      <SubScore data={stage9score}/>
    </>
  )
}