import { Flex, Image as ChakraImage, ListItem, UnorderedList } from '@chakra-ui/react'
import { Paragraph } from 'components/blog/PostElements'
import { ExternalLink, ImageContribution, ImageWrapper, InternalLink, OperationDescription, SubScore, ulMr } from 'components/reviews/common'
import { stage9score } from 'constants/scores/next'
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
      <OperationDescription />
      <Paragraph minorNext>
        The framework itself has nothing to offer in this area and that's fine. This is usually a responsibility handled by separate tools.
        The JS/React ecosystem paired with the wide variety of supported hosting providers spoils us in this regard.
      </Paragraph>
      <Paragraph minorNext id='observability'>
        <b>Observability</b>: You won't have a hard time finding the right observability tools for your needs with Next.js.
        The multifaceted industry leading solutions like <ExternalLink href='https://opentelemetry.io/'>OpenTelemetry</ExternalLink>, <ExternalLink href='https://newrelic.com/'>NewRelic</ExternalLink>, <ExternalLink href='https://www.datadoghq.com/'>DataDog</ExternalLink>, <ExternalLink href='https://sematext.com/'>SemaText</ExternalLink>, <ExternalLink href='https://www.dynatrace.com/'>Dynatrace</ExternalLink>, <ExternalLink href='https://sentry.io/'>Sentry</ExternalLink> or <ExternalLink href='https://stackify.com/'>Stackify</ExternalLink> are
        all available in most cloud providers and through classic client and server-side libraries/SDKs.
        There are also good open source and self-hostable alternatives like: <ExternalLink href='https://posthog.com/'>PostHog</ExternalLink> and <ExternalLink href='https://signoz.io/'>SigNoz</ExternalLink>.
        If you choose AWS, it also has its own full-fledged <ExternalLink href='https://aws.amazon.com/products/management-and-governance/use-cases/monitoring-and-observability'>
          observability solution
        </ExternalLink>. Some observability platforms offer React integrations to help you even further, like: <ExternalLink href='https://sentry.io/for/react/'>
          Sentry
        </ExternalLink>, <ExternalLink href='https://www.atatus.com/monitor/react'>
          Atatus
        </ExternalLink> or <ExternalLink href='https://docs.logrocket.com/docs/react-plugin'>
          LogRocket
        </ExternalLink>.
      </Paragraph>
      <Paragraph minorNext id='maintenance'>
        <b>Maintenance</b>: From the maintenance point of view, the situation is even more dependent on the chosen deployment target.
        Ranging from your own managed hosting of a Node.js backend through containerized deployments with Docker, to the
        semi or fully managed cloud and edge platforms, the volume and price of the required maintenance effort varies greatly.
        Let's briefly check the whole spectrum, from manual operations to the fully integrated build&amp;deployment platforms.
      </Paragraph>
      <Paragraph minorNext >
        The least-effort-necessary case is deploying a Next.js project as static files. You can check all the options linked in the <InternalLink href='#static'>
          operation stage
        </InternalLink>. Many of them offer tools for common maintenance needs. I also want to highlight what I consider the best of the bunch: <ExternalLink href='https://pages.cloudflare.com/'>
          Cloudflare Pages
        </ExternalLink>, the value that the whole set of Cloudflare services provide are simply unmatched. To back my words, here's a list of my favourite features:
        <Flex justify='flex-start' mt='32px'>
          <UnorderedList pl='0px' ml='30px' mr={ulMr} spacing={2} lineHeight={1.3} >
            <ListItem>
              DDoS protection
            </ListItem>
            <ListItem>
              CDN (one of the biggest in the world)
            </ListItem>
            <ListItem>
              Built-in Analytics
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
              Zero Trust access management
            </ListItem>
            <ListItem>
              Unlimited bandwidth
            </ListItem>
            <ListItem>
              Unlimited team seats, for free
            </ListItem>
            <ListItem>
              Per commit preview deployments
            </ListItem>
            <ListItem>
              Bot Management
            </ListItem>
            <ListItem>
              Serverless Workers
            </ListItem>
            <ListItem>
              and way more...
            </ListItem>
          </UnorderedList>
        </Flex>
      </Paragraph>
      <Paragraph minorNext>
        For the simple Node.js server approach, you are most likely to use a Docker image and deploy it somewhere like <ExternalLink href='https://www.heroku.com/'>
          Heroku
        </ExternalLink>, <ExternalLink href='https://www.digitalocean.com/'>
          DigitalOcean
        </ExternalLink>, or your own VM / hardware. You will either use the host's observability and maintenance solutions or go down
        the <ExternalLink href='https://geekflare.com/nodejs-monitoring-tools/'>
          classic
        </ExternalLink> <ExternalLink href='https://medium.com/iquii/good-practices-for-high-performance-and-scalable-node-js-applications-part-1-3-bb06b6204197'>
          way
        </ExternalLink> of DIY. This option has the highest upfront cost and highest risk but comes with the lowest monthly operations
        bill <i>(when you get it right)</i>.
      </Paragraph>
      <Paragraph minorNext>
        The middle-ground consists of platforms like Render and Fly with their semi-automated scaling and deployment processes.
        Working with Fly is mainly a configuration file and CLI based experience and
        requires more effort than some of the other alternatives like Vercel but is still way more efficient
        than trying to manually achieve the same setup and offers greater customization and control over your stack.
        Using Render requires less configuration but offers less flexibility in return.
      </Paragraph>
      <Paragraph minorNext>
        The high-end setup uses an integrated CI/CD, cloud hosting and compute platform. The serverless providers covered earlier all fit the bill.
        In general the more you pay for them the less operational effort they require, so this is a clear trade-off situation. Where Vercel and Netlify have
        and edge over AWS from the perspective of this stage is their support for immutable deployments. Those can help a lot
        when you need to roll back changes as something goes wrong eventually.
        In summary, it's highly likely that you can meet all your operational preferences when using Next.js.
      </Paragraph>
      <Paragraph minorNext id='customer-support'>
        <b>Customer support</b>: React and JS come into play here again as it has integration packages for many of the biggest customer support service
        providers: <ExternalLink href='https://github.com/B3nnyL/react-zendesk'>
          Zendesk
        </ExternalLink>, <ExternalLink href='https://github.com/pozil/salesforce-react-integration'>
          SalesForce
        </ExternalLink>, <ExternalLink href='https://github.com/Personare/react-freshdesk-widget'>
          FreshDesk
        </ExternalLink> or <ExternalLink href='https://github.com/devrnt/react-use-intercom'>
          Intercom
        </ExternalLink>. But the native web-sdks/clients of these services <i>(and many more)</i> are also available and often provide more functionality.
        Some additional tools I really like for support purposes are: <ExternalLink href='https://www.revechat.com/live-chat-saas/'>
          ReveChat
        </ExternalLink> that offers co-browsing functionality and <ExternalLink href='https://marker.io/'>
          Marker.io
        </ExternalLink> with its in-app screen capture and annotation feature for easy bug reporting.
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