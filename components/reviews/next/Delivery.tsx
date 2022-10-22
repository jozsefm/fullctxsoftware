import { Box, Flex, Image as ChakraImage, ListItem, Text } from '@chakra-ui/react'
import { Paragraph, PostList, Quote } from 'components/blog/PostElements'
import { DeliveryDescription, ExternalLink, ImageContribution, ImageWrapper, SubScore } from 'components/reviews/common'
import { stage8score } from 'constants/scores/next'
import Image from 'next/image'

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
      <DeliveryDescription />
      <Paragraph minorNext>
        The framework itself has very little direct influence over the performance of this stage, however the deployment targets it supports have, a lot.
        Let's take a look at the options:
      </Paragraph>
      <Paragraph minorNext id='delivery-methods'>
        <b>Delivery methods</b>: Next.js by itself supports 3 ways of going to production.
        Static export, using the built-in, or a custom Node.js server. Then there are also specialized
        hosting providers that take a poor, helpless Next app, splice it open and rearrange its internals to make it work as a serverless application.
        <PostList minor noMb>
          <>
            <ListItem>
              <Box id='static' position='relative' top='-90px'/>
              <b>Static content</b>: If you can statically export your complete project, then your hosting options are nearly unlimited.
              Check this <ExternalLink href='https://www.tnd.dev/tools/hosting-deployment/'>
                collection
              </ExternalLink> of JAMStack hosting providers by The New Dynamic if you need some ideas.
              This method has the lowest operational and maintenance costs, as well as the highest default security, thanks to the
              low number of dynamic parts. However, it simply can't fit every business case.
            </ListItem>
            <ListItem>
              <Box id='node' position='relative' top='-90px'/>
              <b>Node.js server</b>: You can use the production ready, official server that comes with the framework
              to server your app with the full feature set of Next.js. This is a safe approach, considering long-time maintainability.
              You can also customize it and use your own Node.js backend framework which gives you more control over this part but also
              puts extra maintenance responsibility on you.
              <Text mt='10px'>
                Hosting them works the same and can be done as with any other Node.js server.
                Here are <ExternalLink href='https://www.codeinwp.com/blog/best-nodejs-hosting/'>
                  two
                </ExternalLink> <ExternalLink href='https://codeless.co/best-nodejs-hosting/'>
                  lists
                </ExternalLink> of providers, but you can always just containerize it using Docker and deploy to
                the <ExternalLink href='https://digital.com/best-web-hosting/docker/'>
                  countless
                </ExternalLink> services supporting that. I want to highlight two really cheap but high-quality
                options: <ExternalLink href='https://dockerize.io/'>Dockerize</ExternalLink> which claims to be half the price of AWS while offering
                much faster deployment times and <ExternalLink href='https://dokku.com/'>Dokku</ExternalLink> your own, self-hostable Heroku powered by Docker.
              </Text>
              <Text mt='10px'>
                There's a special case I really like, deploying on Render the zero DevOps cloud, CDN, CI/CD kind of beast <ExternalLink href='https://render.com/docs/deploy-nextjs-app'>
                  as a WebService
                </ExternalLink> that will host your Next.js app on the Node server way but with lots and lots of <ExternalLink href='https://render.com/docs/web-services'>
                  additional benefits
                </ExternalLink>. I also want to mention a similar platform called <ExternalLink href='https://fly.io/docs/getting-started/node/'>
                  Fly
                </ExternalLink> that can effortlessly deploy, <ExternalLink href='https://fly.io/docs/reference/scaling/#autoscaling'>
                  scale
                </ExternalLink> and load-balance application servers around the globe, close to the users.
              </Text>
              <Text mt='10px'>
                <b>Docker</b>: I found quite a few insightful tutorials about deploying Next.js apps using Docker. If you are looking
                for help with that, or want to optimize your image, I can recommend these articles: A <ExternalLink href='https://itnext.io/frontend-dockerized-build-artifacts-with-nextjs-9463f3da3362'>
                  basic tutorial
                </ExternalLink>, another with <ExternalLink href='https://blog.zack.computer/docker-containers-nodejs-nextjs#optimized'>
                  optimization techniques
                </ExternalLink> and finally one that also shows you how to <ExternalLink href='https://steveholgado.com/nginx-for-nextjs/#nginx'>
                  set up NGINX
                </ExternalLink>.
              </Text>
            </ListItem>
            <ListItem>
              <Box id='serverless' position='relative' top='-90px'/>
              <b>Serverless</b>: This is the most interesting of all the possibilities. You can have "infinite" scalability and
              "zero" maintenance <i>(sometimes along with a large bill)</i> when adopting this approach.
              These are huge benefits and with the right providers Next.js can give you just that. We will dive deeper into the pros and cons
              of each option, so let's do this in a new paragraph.
            </ListItem>
          </>
        </PostList>
      </Paragraph>
      <Paragraph minorNext id='serverless-providers'>
        <b>Serverless providers</b>: There are 3 main contenders for hosting a Next.js app on a serverless way. Choosing between them
        is not necessarily easy, so I will discuss what kinds of projects work best with each.
        <PostList minor noMb>
          <>
            <ListItem>
              <Box id='vercel' position='relative' top='-90px'/>
              <ExternalLink href='https://vercel.com/'>Vercel</ExternalLink>:
              The integrated service of the creators of Next.js to build, deploy and operate your web applications with first-class support for this framework.
              The strength of this platform is the tight integration of the whole CI/CD pipeline with hosting, scaling, serverless compute and CDN services.
              <Text mt='10px'>
                Using it with Next.js is frictionless, their CLI even integrates with local development to emulate some of their features on your machine.
              </Text>
              <Text mt='10px'>
                <Box id='save-money-on-vercel' position='relative' top='-90px'/>
                <b>Here are a few tips for fellow Vercel users to reduce usage costs by nearly 10x:</b> Let's start with minimizing the costs of the API handler serverless functions.
                First of all what are the factors influencing their bill? Its usage is measured in gigabyte-hours so obviously 2 things. The running time of the handler and the memory it used. The first part is
                not something I can give general advice on, but the second is a configuration away. The default memory allocated to every handler is 1024mb but you can change it!
                Use <ExternalLink href='https://vercel.com/docs/concepts/limits/overview#serverless-function-memory'>this</ExternalLink> config parameter to adjust it to a lower value,
                that will immediately cut back your bills. Be careful, tough, the performance of the function is tied to the memory size. What I did to prevent issues was adding
                the Sematext Logs <ExternalLink href='https://vercel.com/integrations/sematext-logs'>integration</ExternalLink> and checking how much memory the functions really used.
                Then I also checked to see how do the different memory sizes affected their running times but I didn't see any difference in my case even for the size of 192mb.
              </Text>
              <Text mt='10px'>
                The Next step I took is something not recommended by Vercel. <i>(
                  Even the previous step is not recommended if I remember correctly...
                  )</i> I <ExternalLink href='https://ahmadawais.com/vercel-cloudflare-domain-setup/'>
                  added CloudFlare
                </ExternalLink> in front of them.
                For me, the need to manually purge CloudFlare cache after a release is not a problem, but even if it is for you, the amount of traffic you can save
                from counting towards your bandwidth bill is tremendous. In my case the traffic to origin was cut by 2/3! There goes 2/3 of your traffic expense for free!
                That's something worthy of consideration. An especially useful piece of advice I found
                is <ExternalLink href='https://st4ng.medium.com/how-to-use-next-js-image-optimization-with-cloudflare-569da7b3ddc6'>
                  Caching webp images with a fallback
                </ExternalLink>. This article shows you how to cache the auto-generated, optimized images of Next.js in CloudFlare,
                but still enable a fallback when the cached image formats are not supported by the connecting client.
              </Text>
              <Quote smallM>
                <>
                  <b>When to choose Vercel:</b> If you are a huge enterprise where the high costs are acceptable for the first-class, up-to-date framework support
                  or if you are small enough to fit into the free / pro tier fair use limits.
                </>
              </Quote>
            </ListItem>
            <ListItem>
              <Box id='netlify' position='relative' top='-90px'/>
              <ExternalLink href='https://netlify.com/'>Netlify</ExternalLink>:
              The same type of Jamstack focused
              integrated service as Vercel. From a benefits point of view Netlify and Vercel
              are <ExternalLink href='https://bejamas.io/compare/netlify-vs-vercel/'>roughly equal</ExternalLink>, with some minor feature differences
              that might make one suit your project needs more than the other. 
              In terms of Next.js specific features, Netlify is pretty much <ExternalLink href='https://docs.netlify.com/integrations/frameworks/next-js/'>
                on pair
              </ExternalLink> with Vercel nowadays, supporting ISR, middleware and image optimization and all basic features. There are some minor limitations
              however, outlined in the linked post.
              <Quote smallM>
                <>
                  <b>When to choose Netlify:</b> If you are not that keen to have the latest features of Next.js supported immediately but still want a similar
                  service to Vercel, that's... not Vercel. It's hard to say anything here, there's no decisive difference between the two, if anything Netlify is more
                  costly based on traffic pricing and the free bandwidth quota.
                </>
              </Quote>
            </ListItem>
            <ListItem mb='0'>
              <Box id='aws' position='relative' top='-90px'/>
              <ExternalLink href='https://aws.amazon.com/'>AWS</ExternalLink>:
              The whole toolset for cloud infrastructure offered by Amazon. As AWS is the de facto king of IaaS/PaaS,
              I don't think I have to <i>(or in-fact, could...)</i> explain it in detail. What I will explain are
              the ways you can host your Next.js project here and why would you do that. Let's start with the why.
              <Text mt='10px'>
                The answer is simple: <b>money</b>. Both Vercel and Netlify can quickly become costly for larger workloads.
                The only way to save big is to go custom in this situation. There are official, community <i>(and some paid...)</i> tools
                to help you do that with AWS <i>(and only AWS as far as I know...)</i>.
                Most of them have some drawbacks but are also constantly updated, so if you are
                seriously considering this option, make sure to check their latest versions.
              </Text>
              <Text mt='10px'>
                Let's start with the officially supported way of hosting an SSR Next.js app <ExternalLink href='https://aws.amazon.com/blogs/mobile/host-a-next-js-ssr-app-with-real-time-data-on-aws-amplify/'>
                  with Amplify
                </ExternalLink>. Here are the <ExternalLink href='https://docs.amplify.aws/guides/hosting/nextjs/q/platform/js/'>
                  official
                </ExternalLink> <ExternalLink href='https://docs.amplify.aws/guides/hosting/nextjs/q/platform/js/'>
                  guides
                </ExternalLink>. All you have to do is submit your project to a supported Git provider: AWS CodeCommit, GitHub, Bitbucket, or GitLab
                and register it in your Amplify Console. The main benefits are the zero config CI/CD deployments and all the Amplify Hosting capabilities.
                What you are going to miss right now from the Next.js features are:
                internationalization support, middleware and the modern formats for automatic image optimization.
              </Text>
              <Text mt='10px'>
                Then continue with the community provided solutions. The first is the <ExternalLink href='https://www.serverless.com/plugins/serverless-nextjs-plugin'>
                  Serverless Next.js component
                </ExternalLink>: a zero configuration Next.js v. 10/11 serverless solution for AWS Lambda@Edge with 3.6k Github stars.
                It can run Next.js v.12 projects but doesn't support the new features of the latest version yet. You have to manage your AWS resources yourself with this option and
                the
              </Text>
              <Text mt='10px'>
                Next is the <ExternalLink href='https://www.serverless.com/cloud/docs/apps/frontend#nextjs'>
                  Serverless Cloud
                </ExternalLink>: the paid product of the developers working on the serverless component that
                abstracts away AWS from your life. <i>(it has a free tier btw)</i> This is
                the only option that offers full feature parity with the latest version of Next.js.
              </Text>
              <Text mt='10px'>
                To add to the already confusing names, there's also the <ExternalLink href='https://serverless-stack.com/examples/how-to-create-a-nextjs-app-with-serverless.html'>
                  Serverless Stack Framework
                </ExternalLink> that has dedicated support to work with Next.js projects on AWS. I, however, not found any info on
                feature parity and based on the examples it seem they don't support the built in API functionality, instead they use "pure" AWS lambdas.
              </Text>
              <Text mt='10px'>
                The final option is to use Terraform through the <ExternalLink href='https://github.com/milliHQ/terraform-aws-next-js'>
                  Terraform Next.js module for AWS
                </ExternalLink> <i>(860 GitHub stars)</i>. Here's the official <ExternalLink href='https://milli.is/blog/why-we-self-host-our-serverless-next-js-site-on-aws-with-terraform'>
                  introduction post
                </ExternalLink> from its creators if you want to know the details. In summary, this a great way to minimize the risk of vendor lock-in
                while having the benefits of a zero-config deployment setup and the rest of the serverless goodies.
              </Text>
              <Quote smallM>
                <>
                  <b>When to choose AWS:</b> You want the benefits of serverless hosting but either the pricing of the other providers are too high or you
                  need greater control over your setup or already have AWS infra at the company/project and it would make operations
                  leaner to keep everything at one place, also vendor lock-in avoidance.
                </>
              </Quote>
            </ListItem>
          </>
        </PostList>
      </Paragraph>
      
      <Paragraph minorNext>
        In summary, Next.js supports a wide variety of deployment types and it's more than likely that you can find
        a good match for your project/business needs. However, it's a shame there's no support for running it in a serverless way through other
        cloud providers. That's definitely an area with the potential to further increase adoption.
        A more in-depth look on the specific business implications of each platform is simply beyond the scope of this review. <i>
          (However, if you are interested in reading one let me know in the comments!)
        </i> 
      </Paragraph>
      <SubScore data={stage8score}/>
    </>
  )
}