import { ListItem, Flex, Text, UnorderedList, Image as ChakraImage } from '@chakra-ui/react'
import { Paragraph, PostList } from 'components/blog/PostElements'
import Image from 'next/image'
import { stage8score } from 'constants/scores/remix'
import { ExternalLink, ImageContribution, ImageWrapper, SubScore, ulMr } from 'components/reviews/common'

export default function Delivery() {
  return (
    <>
      <ImageWrapper lessBlur>
        <Image priority layout='fill' src='/img/blog/remix/dv18.jpg' objectFit='cover' objectPosition='0 35%'/>
        <Flex pos='relative' zIndex='2' margin='0 auto' right='-12px' align='center'>
          <ChakraImage className='svg' width='90px' height='90px' src='/img/blog/remix/delivery.svg' />
        </Flex>
      </ImageWrapper>
      <ImageContribution><a href='https://pixabay.com/illustrations/monitor-binary-binary-system-1307227/' target='_blank'>Binary System image from pixabay.com</a></ImageContribution>
      <Paragraph minorNext>
        <b>Short description</b>: This is when the implemented code turns into a usable product, accessible to the end users.
        The result can take many shapes, a new boxed software, updates on servers, a physical product (both hardware and software)
        or digital product (accessible through app or web-stores). For evaluation, we are interested in any technical property
        that can influence the quality of the release process, meaning its speed, failure-rate and how easy it is to recover from a
        failure.
      </Paragraph>
      <Paragraph minorNext>
        <b>Remix</b>: The framework itself has no direct influence over this stage, however the deployment targets it supports have, a lot.
        In the end, Remix delivery is simply uploading the new backend and frontend code to the production environment. Let's take a <i>(somewhat shallow)</i> look
        at the currently supported options:
      </Paragraph>
      <Paragraph>
        Based on the <ExternalLink href='https://remix.run/docs/en/v1/other-api/adapter'>docs</ExternalLink>, Remix has official adapters for the following environments:
        <PostList noMb minor>
          <>
            <ListItem>
              <Text as='span' fontWeight='bold'><ExternalLink href='https://expressjs.com/'>Express</ExternalLink></Text>: The industry standard Node.js server.
              Good for standalone deployments, running in container services like Docker and any kind of host that supports it.
              Offers the highest level of control over where and how you deploy it, but the least Edge-y solution. 😆 
            </ListItem>
            <ListItem>
              <Text as='span' fontWeight='bold'><ExternalLink href='https://arc.codes/'>Architect</ExternalLink></Text>: An IaC <i>(infrastructure as code)</i> tool
              to deploy cloud-function based web apps to AWS.
              A good choice if you are already on AWS or want to have the full power of CloudFormation at your fingertips, but with a fast, simplified development
              and deployment workflow.
            </ListItem>
            <ListItem>
              <Text as='span' fontWeight='bold'><ExternalLink href='https://vercel.com'>Vercel</ExternalLink></Text>: Integrated serverless infrastructure,
              CDN, build & deployment tool from the creators of Next.js.
              Generally, an excellent service for most projects that are frontend heavy or can benefit from the globally distributed CDN, serverless and edge network
              Vercel provides. It's also very low maintenance and has a wide variety of integrations with 3rd party services.
            </ListItem>
            <ListItem>
              <Text as='span' fontWeight='bold'><ExternalLink href='https://netlify.com'>Netlify</ExternalLink></Text>: The same type of Jamstack focused
              integrated service as Vercel. From a benefits point of view Netlify and Vercel
              are <ExternalLink href='https://bejamas.io/compare/netlify-vs-vercel/'>roughly equal</ExternalLink>, with some minor feature differences
              that might make one suit your project needs more than the other.
            </ListItem>
            <ListItem>
              <Text as='span' fontWeight='bold'><ExternalLink href='https://workers.cloudflare.com/'>Cloudflare Workers</ExternalLink></Text>: Lightweight,
              low-cost but powerful serverless infrastructure built on top of the V8 engine. Paired with their other edge solutions, it's exceptionally capable of
              serving static sites and enhance them with dynamic features while offering very high performance, availability, scalability and security.
            </ListItem>
          </>
        </PostList>
      </Paragraph>
      <Paragraph>
        Besides these, the official <ExternalLink href='https://github.com/remix-run/remix/tree/main/packages/create-remix/templates'>CLI</ExternalLink> offers
        starter templates for:
        <PostList noMb minor>
          <>
            <ListItem>
              <Text as='span' fontWeight='bold'><ExternalLink href='https://deno.com/deploy'>Deno</ExternalLink></Text>: Famous for its native support for TypeScript
              and http ES module imports, it's a fast V8 based global serverless deployment target. Its business value is a bit unclear
              but the high performance it offers, currently for free and some of its technical capabilities can make it a lucrative offering for some projects.
              <br /> <Text fontSize='0.9rem'>Guides: <ExternalLink href='https://github.com/leon/blog-remix-deno'>1</ExternalLink>, <ExternalLink href='https://github.com/jacob-ebey/deno-remix'>2</ExternalLink></Text>
            </ListItem>
            <ListItem>
              <Text as='span' fontWeight='bold'><ExternalLink href='https://fly.io/'>Fly</ExternalLink></Text>: Global
              server deployment for running full stack apps and databases close to the users.
              Offers greater customization but requires more manual setup and has fewer data centers than many serverless alternatives.
              <br /> <Text fontSize='0.9rem'>Guides: <ExternalLink href='https://fly.io/docs/getting-started/remix/'>1</ExternalLink>, <ExternalLink href='https://github.com/kentcdodds/kentcdodds.com'>2</ExternalLink></Text>
            </ListItem>
            <ListItem>
              <Text as='span' fontWeight='bold'><ExternalLink href='https://pages.cloudflare.com/'>Cloudflare Pages:</ExternalLink></Text>: A
              more streamlined deployment experience for JAMStack projects. It integrates with standard Cloudflare Workers to enable usage of the same serverless powers.
              If the Cloudflare ecosystem is your thing <i>(Why wouldn't it be? They are great!)</i> this option makes your life easier.
              <br /> <Text fontSize='0.9rem'>Guides: <ExternalLink href='https://developers.cloudflare.com/pages/framework-guides/remix'>1</ExternalLink></Text>
            </ListItem>
          </>
        </PostList>
      </Paragraph>
      <Paragraph minorNext>
        Through the community Discord, there's support for deploying to:
        <PostList noMb minor>
          <>
            <ListItem>
              <Text as='span' fontWeight='bold'><ExternalLink href='https://aws.amazon.com/'>AWS</ExternalLink></Text>: The whole toolset for cloud infrastructure offered by Amazon.
              As AWS is the de-facto king of IaaS/PaaS I don't have many things to say here. It's likely that this will be one of the most used
              delivery options for big companies adopting Remix.
              <br /> <Text fontSize='0.9rem'>Community guides: <ExternalLink href='https://github.com/leifdalan/starter-express/tree/cloudfront-lambda-edge-pulumi/infra'>1</ExternalLink>, <ExternalLink href='https://github.com/m14t/remix-run-apigateway'>2</ExternalLink>, <ExternalLink href='https://github.com/hsiaoa/remix-stackery-starter'>3</ExternalLink>, <ExternalLink href='https://github.com/florianwiech/remix-aws-cdk-example'>4</ExternalLink></Text>
            </ListItem>
            <ListItem>
              <Text as='span' fontWeight='bold'><ExternalLink href='https://azure.microsoft.com/en-us/'>Azure</ExternalLink></Text>: The whole toolset for cloud infrastructure offered by Microsoft.
              This is the second largest IaaS/PaaS provider after AWS with the main difference being AWS is more open source centric compared to Azure as it has more focus on supporting
              integration with Microsoft product.
              <br /> <Text fontSize='0.9rem'>Community guides: <ExternalLink href='https://github.com/mcansh/remix-on-azure'>1</ExternalLink>, <ExternalLink href='https://github.com/garand/remix-azure-docker'>2</ExternalLink>, <ExternalLink href='https://github.com/danielgary/remix-azure-template'>3</ExternalLink></Text>
            </ListItem>
            <ListItem>
              <Text as='span' fontWeight='bold'><ExternalLink href='https://www.electronjs.org/'>Electron</ExternalLink></Text>: The web technology based, cross platform desktop application development framework.
              If you want to, now you can colocate your Electron main process code with its browser counterpart thanks to the Remix architecture. 
              <br /> <Text fontSize='0.9rem'>Community guides: <ExternalLink href='https://github.com/itsMapleLeaf/remix-electron'>1</ExternalLink></Text>
            </ListItem>
            <ListItem>
              <Text as='span' fontWeight='bold'><ExternalLink href='https://www.fastly.com/'>Fastly</ExternalLink></Text>: The <i>(very fast)</i> edge computing and content delivery platform.
              Fastly powers so many major websites it's impossible to cram all in here. If their performance, security and simple pricing model got them
              adopted at GitHub, Shopify, Stripe, Wired and more, then it might be interesting to most projects.
              <br /> <Text fontSize='0.9rem'>Community guides: <ExternalLink href='https://github.com/miekapage/remix-with-fastly'>1</ExternalLink>, <ExternalLink href='https://github.com/lorenries/remix-adapter-fastly/'>2</ExternalLink></Text>
            </ListItem>
            <ListItem>
              <Text as='span' fontWeight='bold'><ExternalLink href='https://www.fastify.io/'>Fastify</ExternalLink></Text>: High performance, low overhead Node.js server framework.
              Well, it's so high performance that it's one of the fastest Node.js servers out there. If speed is your thing, and you need complete control over deployment and infrastructure,
              this is a good option.
              <br /> <Text fontSize='0.9rem'>Community guides: <ExternalLink href='https://github.com/kiliman/remix-fastify-app'>1</ExternalLink></Text>
            </ListItem>
            <ListItem>
              <Text as='span' fontWeight='bold'><ExternalLink href='https://firebase.google.com/'>Firebase</ExternalLink></Text>: Google's productivity focused app development and delivery platform.
              If you want high development speed this Backend as a Service provider got you covered with its integrated solution. However as your business scales it can become costly and hard to migrate from.
              <br /> <Text fontSize='0.9rem'>Community guides: <ExternalLink href='https://github.com/dbanisimov/remix-firebase-hosted-bundle'>1</ExternalLink>, <ExternalLink href='https://github.com/dbanisimov/remix-firebase-express'>2</ExternalLink>, <ExternalLink href='https://github.com/Matthew-Mallimo/remix-firebase-auth-provider-example'>3</ExternalLink>, <ExternalLink href='https://gist.github.com/TheRealFlyingCoder/80556cb29463ae3d2b424f61e8e5830d'>4</ExternalLink>, <ExternalLink href='https://youtu.be/Kwijy7beeJ0?t=2611'>5</ExternalLink>, <ExternalLink href='https://github.com/ruarfff/spodcast'>6</ExternalLink></Text>
            </ListItem>
            <ListItem>
              <Text as='span' fontWeight='bold'><ExternalLink href='https://cloud.google.com/'>GCP</ExternalLink></Text>: Google Cloud Platform - Your piece of Google's own infrastructure
              that lets you build, deploy and scale applications, websites and more. If you want a mature solution, or you already invested in the platform, it's a brilliant choice.
              <br /> <Text fontSize='0.9rem'>Community guides: <ExternalLink href='https://gist.github.com/TheRealFlyingCoder/773bf60f433ccbdbad8c296a99fb3738'>1</ExternalLink></Text>
            </ListItem>
            <ListItem>
              <Text as='span' fontWeight='bold'><ExternalLink href='https://render.com/'>Render</ExternalLink></Text>: A cloud provider similar to Vercel and Netlify but with support for
              more runtimes and more services like Docker, background workers, CRON jobs and databases. If you want a more integrated solution around your Remix project, this can be
              what you are looking for.
              <br /> <Text fontSize='0.9rem'>No extra resources available</Text>
            </ListItem>
          </>
        </PostList>
      </Paragraph>
      <Paragraph minorNext>
        Just looking at the list proves it without a shadow of a doubt that any project can find its ideal deployment target and -workflow
        when using Remix. This is great for the framework as it boosts adoption, which is great for the developers as it leads to
        better support and more innovation, which in turn is also great for the users as they will get a more mature and reliable product.
        A more in-depth look on the specific business implications of each platform is simply beyond the scope of this review. <i>
          (However, if you are interested in reading one about some of them let me know in the comments!)
        </i> 
      </Paragraph>
      <SubScore data={stage8score}/>
    </>
  )
}