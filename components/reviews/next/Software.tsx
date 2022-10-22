import { chakra, Flex, Image as ChakraImage, Img, Link, ListItem, Text } from '@chakra-ui/react'
import { Paragraph, PostList, Quote } from 'components/blog/PostElements'
import { Code, ExternalLink, ImageContribution, ImageWrapper, linkHoverStyle, linkTransition, SoftwareDescription, SubScore } from 'components/reviews/common'
import { stage6score } from 'constants/scores/next'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function Software() {
  return (
    <>
      <ImageWrapper overlay='#00000087'>
        <Image priority layout='fill' src='/img/blog/remix/software1.jpg' objectFit='cover' objectPosition='0 51%'/>
        <Flex pos='relative' zIndex='2' margin='0 auto' right='-12px' align='center'>
          <ChakraImage className='svg' width='90px' height='90px' src='/img/blog/remix/software.svg' />
        </Flex>
      </ImageWrapper>
      <ImageContribution><a href='https://www.freepik.com/photos/methodology' target='_blank'>Methodology photo created by rawpixel.com - www.freepik.com</a></ImageContribution>
      <SoftwareDescription />
      <Paragraph minorNext id='architectural-concerns'>
        <b>Architectural concerns</b>: Let's explore what are the architectural limitations or considerations that Next.js imposes on your software design.
        If you work on a large-scale project, chances are you run multiple applications from the same top-level domain and you need to
        support i18n. Well, that's a hard situation for Next.js!
        <Text mt='25px'>
          The culprit is the router again, Dhanraj Padmashali <ExternalLink href='https://twitter.com/psygik'>
            @psygik
          </ExternalLink> wrote about it in
          detail <ExternalLink href='https://dhanrajsp.me/blog/the-troubles-with-nextjs#_next-and-cdn'>
          here
          </ExternalLink>.
          To sum it up, it's currently <s>not possible</s> <i>hacky</i> to run multiple Next.js apps under the same domain if their url paths contain
          a language code prefix. For example: <Code>site.com/en/app</Code> or in general: <Code>{`site.com/{:langCode}/{:subApp}`}</Code>.
        </Text>
        <Text mt='25px'>
          The community created some workarounds to escape this limitation, but you need to be mindful to
          either <ExternalLink href='https://github.com/vercel/next.js/discussions/25681#discussioncomment-2026813'
          >monkey patch
          </ExternalLink> the <Code>next/router</Code> or
          add an <ExternalLink href='https://github.com/vercel/next.js/discussions/25883#discussioncomment-2155780'>
            app wide middleware
          </ExternalLink> to rewrite the URL or use
          even more <ExternalLink href='https://github.com/vercel/next.js/discussions/17078#discussioncomment-387358'>
            drastic measures
          </ExternalLink>.
        </Text>
        <Text mt='25px'>
          Dhanraj also points out that if your whole application lives under a path of a larger site,
          e.g.: <Code>site.com/cool-apps/next-app</Code> that gets internally proxied to another URL and the app uses dynamic route parameters for SSR'd pages
          eg: <Code>/next-app/users/beastmaster64</Code> it will die on the internal <Code>_next/data</Code> requests for the json page data because that folder
          doesn't respect the <Code>assetPrefix</Code> nor the <Code>basePath</Code> values. Yes, complicated, but not uncommon.
          There's a workaround in the linked article, but it's again, rather <i>hacky</i>. Keep this in mind while planning your architecture.
        </Text>
      </Paragraph>
      <Paragraph minorNext id='scaling-concerns'>
        <b>Scaling concerns</b>: If you host Next.js yourself and do multi-instance scaling, ISR won't be
        your best friend. Each instance will have its own cache for the generated pages. If your load-balancer
        is not using <ExternalLink href='https://www.imperva.com/learn/availability/sticky-session-persistence-and-cookies/'>
          sticky sessions
        </ExternalLink>, that means trouble. Depending on the status of the regeneration process on each node, the visitor can be served
        both stale and up-to-date content during the same sessions. That's bad, like <i>really</i> bad from the user experience point of view.
        <Flex w='100%' justify='center' my='40px'>
          <Zoom>
            <Img
              borderRadius='lg'
              alt="User flow diagram representing the problem described above."
              src="/img/blog/next/isr-problem-landscape.png"
              width="600px"
            />
          </Zoom>
        </Flex>
        <Text mt='25px'>
          The <ExternalLink href='https://nextjs.org/blog/next-12-1#on-demand-incremental-static-regeneration-beta'>
            on-demand ISR
          </ExternalLink> that just got released in beta with Next.js version 12.1 can help in minimizing this risk, but
          can't fully eliminate it while also complicating both your codebase and your operational
          processes quite a lot. That's far from ideal.
        </Text>
        <Text mt='25px'>
          There are three solutions to this problem. First is to avoid it completely by replacing ISR with SSR. Not a what you would prefer, right?
          Second is using <ExternalLink href='https://www.vercel.com'>Vercel</ExternalLink> to host your project and let them scale your application.
          Not an option either?
          Then enter <ExternalLink href='https://github.com/next-boost/next-boost'>Next Boost</ExternalLink> a community library
          to <i>boost</i> your backend rendering performance by orders of magnitude.
        </Text>
        <Text mt='25px'>
          It works as a cache in front of SSR-ed pages, like a custom
          implementation of ISR but here you can <i>configure</i> where to store the results
          and their <ExternalLink href='https://github.com/next-boost/redis-cache'>redis-cache</ExternalLink> option is ideal to be used
          with a cluster of Next.js servers. It will be a single-source-of-pages for all the nodes. 
        </Text>
        <Text mt='25px'>
          Sadly, this solution is not without downsides either. It complicates your tech stack
          and adds a new operational and maintenance cost factor.
          More importantly, the maintainer doesn't seem to be very active, so you might need to fork and customize the package
          if its current capabilities doesn't suit your project.
        </Text>
        <Text mt='25px'>
          <ExternalLink href='https://github.com/dunglas/react-esi'>React ESI</ExternalLink> (standing for Edge Side Includes)
          could also be a solution, but it's practically abandoned. That's such a shame, I think this approach had great potential.
        </Text>
      </Paragraph>
      <Paragraph minorNext id='project-standards'>
        <b>Project standards</b>: Next.js is opinionated in a few things like the usage of <i>eslint</i>, the file-based router conventions,
        the special folders: <Code>/pages</Code>, <Code>/public</Code> and <Code>/api</Code> or the placement of <Code>_middleware.js</Code> files
        but in general it's just a standard React project. You can structure it freely to your liking and there are great resources
        teaching how to do that efficiently. The details are out of the scope of this review but here are some resources that I can recommend:
        <PostList minor noMb mt='35px'>
          <>
            <ListItem>
              <ExternalLink href='https://dev.to/alexeagleson/how-to-build-scalable-architecture-for-your-nextjs-project-2pb7'>
                How to Build Scalable Architecture for your Next.js Project
              </ExternalLink> a detailed post from <i>dev.to</i> also available in video format. It helps in setting up
              the complete arsenal of development tooling that's needed on high-quality projects.
            </ListItem>
            <ListItem>
              <ExternalLink href='https://wityan.medium.com/next-js-project-structure-1531610bed71'>
                Next.js Project Structure
              </ExternalLink> from <i>medium.com</i>, mainly focusing on folder structure.
            </ListItem>
            <ListItem>
              <ExternalLink href='https://giancarlobuomprisco.com/next/a-scalable-nextjs-project-structure'>
                A Scalable Project Structure for Next.js
              </ExternalLink> the only source that tries to apply the <ExternalLink href='https://medium.com/ssense-tech/hexagonal-architecture-there-are-always-two-sides-to-every-story-bc0780ed7d9c'>
                Hexagonal Architecture
              </ExternalLink> also known as Ports and Adapters <i>(which I really like)</i> in the context of a Next.js project.
            </ListItem>
            <ListItem>
              <ExternalLink href='https://www.simform.com/blog/react-architecture-best-practices/'>
                React Architecture Best Practices and Tips from Community Experts
              </ExternalLink> a great blog post from <i>simform.com</i> about generic best practices for any React project.
            </ListItem>
            <ListItem>
              <ExternalLink href='https://www.joshwcomeau.com/react/file-structure/'>
                Delightful React File/Directory Structure
              </ExternalLink> a guide from <i>Josh W. Comeau</i> to a little bit unconventional, but highly efficient React folder structure.
            </ListItem>
            <ListItem>
              <ExternalLink href='https://epicreact.dev/'>
                Confidently Ship Well-Architected Production Ready React Apps Like a Pro
              </ExternalLink> if money is not a concern for you then the <i>Epic React Training by Kent C. Dodds</i> is
              a highly regarded course that will help you master writing React apps from all aspects.
            </ListItem>
          </>
        </PostList>
      </Paragraph>
      <Paragraph minorNext id='rendering-mode'>
        <b>Choosing a rendering mode</b>: One of the main questions that frequently comes up when working with Next.js is the
        decision about which rendering strategy to use for a page. I found two <ExternalLink href='https://theodorusclarence.com/blog/nextjs-fetch-usecase'>
          insightful
        </ExternalLink> <ExternalLink href='https://www.youtube.com/watch?v=ZGAR8RdBdok'>
          sources
        </ExternalLink> and summed up my conclusions in the image below. <i>(You are free to <Link
          href='/img/blog/next/choose-rendering-method.png'
          download='choose-a-nextjs-rendering-method.png'
          aria-label='Directly download the web project complexity image'
          textDecor='underline'
          _hover={linkHoverStyle}
          transition={linkTransition}
        >
          download
        </Link> and use it while respecting the CC license.)</i> The page number is only relevant for dynamic URLS and the change visibility
        means how frequently you want the users to see updates on a given page.
        <Flex w='100%' justify='center' mt='40px'>
          <chakra.figure display='flex' alignItems='center' flexDirection='column'>
            <Zoom>
              <Img
                borderRadius='lg'
                alt="Huge table containing advice of when to use which rendering method (CSR, SSG, ISR, ISRod, SSG)"
                src="/img/blog/next/choose-rendering-method.png"
                width="600px"
              />
            </Zoom>
            <chakra.figcaption display='flex' alignItems='center' justifyContent='center' flexWrap='wrap' fontSize='0.7rem' mt='15px' color='#666'>
              <Link rel="license" target='_blank' href="http://creativecommons.org/licenses/by-sa/4.0/">
                <Img alt="Creative Commons License" borderWidth='0' src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" />
              </Link>
              <Text mx='5px'>This work is licensed under a</Text>
              <Link rel="license" target='_blank' href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</Link>.
            </chakra.figcaption>
          </chakra.figure>
        </Flex>
      </Paragraph>
      <Paragraph minorNext id='shared-layout'>
        <b>Persistent shared layouts</b>: For years it was an undocumented area in the official docs.
        As you navigate around your pages, by default, Next.js re-renders the whole UI regardless if there
        are shared layout elements on them <i>(eg: header, footer, sidebar, etc...)</i>. This was a step back from
        the classic SPA experience and you would most likely <i><b>want to prevent</b></i> this from happening in your application.
        <Text mt='25px'>
          As far as I know Adam Wathan was the first to tackle this publicly through an
          article describing 4 solutions: <ExternalLink href='https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/'>
            Persistent Layout Patterns in Next.js
          </ExternalLink> since then the official docs also includes <ExternalLink href='https://nextjs.org/docs/basic-features/layouts#single-shared-layout-with-custom-app'>
            solution #4
          </ExternalLink>. It's a best practice when designing a Next.js application to identify the layout components shared between
          different pages and implement this pattern.
        </Text>
      </Paragraph>
      <Paragraph updateStyle>
        <b>Note</b>: There's a mind-blowing update coming to Next.js introduced in the <ExternalLink href='https://nextjs.org/blog/layouts-rfc'>
          Layouts RFC
        </ExternalLink> that will drastically reimagine how a Next application is structured including the layout parts. I will be updating this post
        to incorporate these changes but as of now, this section contains the up-to-date methods.
      </Paragraph>
      <Paragraph minorNext id='frontend-performance' mt='20px'>
        <b>Frontend performance optimization</b>: I found two <ExternalLink href='https://papyrus.so/@PapyrusBlog/posts/how-we-reduced-next.js-page-size-by-3.5x-and-achieved-a-98-lighthouse-score'>
          hands-down
        </ExternalLink> <ExternalLink href='https://medium.com/ne-digital/how-to-reduce-next-js-bundle-size-68f7ac70c375'>
          articles
        </ExternalLink> discussing how to improve the frontend performance of a Next.js application. Very little is specific to the framework, though.
        All the optimizations are revolving around minimizing the bundle size. I recommend reading the posts for the details.
        I will only sum up the tools and methods that you can apply. Let's start with the tools:
        <PostList minor>
          <>
            <ListItem>
              <ExternalLink href='https://nextjs.org/docs/api-reference/cli#build'>
                Next.js CLI
              </ExternalLink> - First of all, the official CLI will raise your attention to the size of your page bundles after a production build,
              which is both really pleasant and useful.
            </ListItem>
            <ListItem>
              <ExternalLink href='https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer'>
                @next/bundle-analyzer
              </ExternalLink> - The second and last Next.js specific tool. It will produce an interactive, visual representation of the
              composition of the different modules used in your final bundles weighed by their size. You can find out what made it
              into the production build and take action if there's something unexpected.
            </ListItem>
            <ListItem>
              <ExternalLink href='https://github.com/danvk/source-map-explorer#readme'>
                source-map-explorer
              </ExternalLink> - This creates a similar visualization but works on a per-bundle basis.
            </ListItem>
            <ListItem>
              <ExternalLink href='https://github.com/aholachek/bundle-wizard#readme'>
                bundle-wizard
              </ExternalLink> - A nifty little 🧙‍♂️ to visualize how much code from a module is actually used during rendering (called coverage).
              It offers a Regex based filtering tool to narrow the map to only the packages you are interested in.
              It also offers and interactive mode where you can manually control a live browser environment to get to the app state you want to analyze.
              Very handy for apps behind authentication, for example.
            </ListItem>
            <ListItem>
              <ExternalLink href='https://medium.com/ne-digital/how-to-reduce-next-js-bundle-size-68f7ac70c375#c926'>
                Chrome DevTools Coverage
              </ExternalLink> - Can do the same coverage analysis. Less fancy, but can display the source files with per-line usage stats.
            </ListItem>
            <ListItem>
              To help yourself being mindful about the consequences of your actions over bundles size you can
              check <ExternalLink href='https://bundlephobia.com/'>BundlePhobia</ExternalLink> befor adding a new dependency
              and install the Import Cost Extension that displays the size of an imported module inline, available for
              both <ExternalLink href='https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost'>
                VSCode
              </ExternalLink> and <ExternalLink href='https://packagecontrol.io/packages/Import%20Cost'>
                Sublime Text
              </ExternalLink>.
            </ListItem>
          </>
        </PostList>
        OK, these are useful for analyzing the potential sources of redundant code in the bundles. Now, how do we remove them? Here's the list, extended with
        further optimization methods:
        <PostList minor noMb>
          <>
            <ListItem>
              Deal with duplicated packages by using a <ExternalLink href='https://www.npmjs.com/package/duplicate-package-checker-webpack-plugin'>
                webpack plugin
              </ExternalLink> but make sure to read the <ExternalLink href='https://medium.com/ne-digital/how-to-reduce-next-js-bundle-size-68f7ac70c375#b5be'>
              instructions
              </ExternalLink>, it's not a straightforward optimization. 
            </ListItem>
            <ListItem>
              Rely on the automatic polyfills instead of your own. Read the <ExternalLink href='https://nextjs.org/blog/next-9-3#32-kb-smaller-runtime-15-kb-gzip'>
                explanation
              </ExternalLink>.
            </ListItem>
            <ListItem>
              Similarly, utilize the built-in <ExternalLink href='https://nextjs.org/docs/basic-features/image-optimization'>
                image optimization
              </ExternalLink> tools to minimize asset sizes. 
            </ListItem>
            <ListItem>
              Even the official PageSpeed Insights tool recommends using <ExternalLink href='https://purgecss.com/guides/next.html'>
                Purge CSS
              </ExternalLink> for Next.js projects to reduce the size of the delivered stylesheets. 
            </ListItem>
            <ListItem>
              Use the <ExternalLink href='https://nextjs.org/docs/advanced-features/dynamic-import'>
                dynamic import
              </ExternalLink> and <Code>next/dynamic</Code> features of the framework to code split your app around the fold to reduce the size of the initial payload. 
            </ListItem>
            <ListItem>
              Another use-case for dynamic imports is to <ExternalLink href='https://vercel.com/blog/upgrading-nextjs-for-instant-performance-improvements#import-on-interaction'>
                defer
              </ExternalLink> <ExternalLink href='https://medium.com/ne-digital/how-to-reduce-next-js-bundle-size-68f7ac70c375#9330'>
                loading
              </ExternalLink> third party libraries - or even your own components - until the user actually tries to use them.
            </ListItem>
            <ListItem>
              Similarly you can utilize <Code>next/script</Code> to <ExternalLink href='https://calibreapp.com/blog/nextjs-performance#defer-loading-non-essential-scripts-until-the-page-is-idle'>
                de-prioritize
              </ExternalLink> the loading of non-critical 3rd party libraries or tracking scripts until the browser becomes idle.
            </ListItem>
            <ListItem>
              Disable link prefetching under <ExternalLink href='https://papyrus.so/@PapyrusBlog/posts/how-we-reduced-next.js-page-size-by-3.5x-and-achieved-a-98-lighthouse-score#:~:text=Disable%20Prefetching'>
                special circumstances
              </ExternalLink>. This won't affect the bundle size itself but can bump up Lighthouse scores.
            </ListItem>
            <ListItem>
              Further minimize the bundle size by using library specific <ExternalLink href='https://github.com/GoogleChromeLabs/webpack-libs-optimizations'>
                webpack optimizations
              </ExternalLink>. This is provided by GoogleChromLabs but relies heavily on specific <i>babel</i> plugins, which
              is a problem after the upgrade to SWC. Depending on the importance of performance optimization for your
              project you might still want consider applying these by falling back to babel exclusively for the production build.
            </ListItem>
          </>
        </PostList>
        <Text mt='25px'>
          Another nice trick is to <ExternalLink href='https://www.learnnext.blog/blogs/using-preact-with-nextjs-application'>
            swap out
          </ExternalLink> React with Preact at build time. If you don't utilize the unsupported features of React, this method
          can give you massive size and performance gains.
        </Text>
        <Text mt='25px'>
          Having great web performance is crucial for many products so optimizing bundle sizes can be a great way to improve the customer experience
          and achieve higher conversion rates and increased revenue. Next.js along with Webpack, the JS ecosystem and the native web platform offers best-in-class
          support for doing that.
        </Text>
      </Paragraph>
      <Paragraph minorNext id='migration'>
        <b>Migration to Next.js</b>: A significant number of Next.js codebases are long-lived projects
        which transitioned to the framework over a period of time. These kinds of migrations are common
        because products need to keep up with the changing user and market needs.
        If that's your situation, you have to carefully consider how to approach the process.
        Conveniently Next has official guides that help with this task. There are 4 covered cases: - <ExternalLink href='https://nextjs.org/docs/migrating/incremental-adoption'>
          Generic adoption
        </ExternalLink>, - <ExternalLink href='https://nextjs.org/docs/migrating/from-create-react-app'>
          Create React App
        </ExternalLink>, - <ExternalLink href='https://nextjs.org/docs/migrating/from-gatsby'>
          Gatsby.js
        </ExternalLink> and <ExternalLink href='https://nextjs.org/docs/migrating/from-react-router'>
          React Router
        </ExternalLink>. And here are the most useful community resources I found:
        <Text mt='25px'>
          <PostList minor noMb mt='0px'>
            <>
              <ListItem>
                <ExternalLink href='https://www.smashingmagazine.com/2021/07/migrate-jquery-nextjs/'>
                  How To Migrate From jQuery To Next.js
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href='https://blog.isquaredsoftware.com/2021/12/codebase-conversion-mean-react-next-ts/'>
                  Migrating a MEAN AngularJS app to React, Next.js, and TypeScript
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href='https://hasura.io/blog/moving-from-django-to-hasura-and-next-js/'>
                  Moving From Django to Hasura and Next.js
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href='https://hoangvvo.com/blog/migrate-expressjs-to-nextjs'>
                  Express.js to Next.js API Routes Migration
                </ExternalLink>
              </ListItem>
              <ListItem>
                <ExternalLink href='https://doordash.engineering/2022/03/29/improving-web-page-performance-at-doordash-throughserver-side-rendering-with-next-js/'>
                  Improving Web Page Performance at DoorDash Through Server-Side Rendering with Next.JS 
                </ExternalLink> Documentary of a highly professional, incremental migration from CRA to Next.js without downtime.
                The approach is interesting with coexisting codebases in the same
                monorepo to avoid the need for developing new features in both the old and the new versions.
                It describes how they use different design and architectural-patterns to increase the efficiency of the process.
              </ListItem>
              <ListItem>
                <ExternalLink href='https://dev.to/rinatrezyapov/my-experience-migrating-projects-to-next-js-2hld'>
                  My experience migrating projects to Next.js
                </ExternalLink> It contains practical tips about things not covered in the official guides like:
                how to handle components that deeply integrate with Web APIs, pages that expect to be opened as redirect targets,
                handling Docker memory limits, when it's possible to replace Nginx with Next.js and potential complications with authentication.
              </ListItem>
            </>
          </PostList>
        </Text>
        <Text mt='25px'>
          In case of incremental adoption, you will most likely go on a page by page basis.
          This means you will have to deliver a complete view of the application
          with each step. Then it's necessary to recreate the shared layout components in Next.js like a topbar or footer.
          Things can get complicated here.
        </Text>
        <Text mt='25px'>
          If you have state in these components that were updated client-side, it can't be done that way anymore.
          As the users navigate between the legacy and the rewritten parts of the applications, both need to have access to that data.
          If it can be moved server side and fetched on render, things are easy.
          However, if it's truly client side state, then <i>"there are a few ways we can do this, and the choice is yours"</i>
        </Text>
        <PostList minor>
          <>
            <ListItem>
              Use a persistent state management library,
              like Redux with <ExternalLink href='https://github.com/rt2zz/redux-persist'>redux-persist</ExternalLink> or
              Zustand with this <ExternalLink href='https://blog.devgenius.io/managing-persistent-states-in-nextjs-with-zustand-e6feea1a2d36'>technique</ExternalLink>.
            </ListItem>
            <ListItem>
              Sync through localStorage manually on component mount
            </ListItem>
            <ListItem>
              Sync through a ServiceWorker cache
            </ListItem>
          </>
        </PostList>
        When you are planning a migration to Next.js investigate if you would face this kind of situation and identify the
        most fitting solution for your project architecture and organization.
      </Paragraph>
      <Paragraph minorNext id='design-checklist'>
        <b>Design checklist</b>: As a summary of this stage, here's a checklist of the things to keep in mind when designing Next.js web- sites or apps:
        <Quote>
          <>
            <PostList minor noMb mt='0px'>
              <>
                <ListItem>
                  Set up the project standards and tooling to ensure long-term maintainability
                </ListItem>
                <ListItem>
                  Identify the best rendering strategy for each page (category)
                </ListItem>
                <ListItem>
                  Investigate if your application can handle the scale of the expected workload within budget, especially
                  the costs of: SSG, ISR (build costs), SSR (runtime costs)
                </ListItem>
                <ListItem>
                  Ensure you can deliver the expected i18n URL structure of the app with the router limitations/workarounds
                </ListItem>
                <ListItem>
                  Validate if there will be redirection from a public URL to an internal one and that it won't lead to complications
                </ListItem>
                <ListItem>
                  Be mindful of bundle sizes and optimize them when its important for your business case
                </ListItem>
                <ListItem>
                  Identify and extract the shared layout components to persist them during navigation
                </ListItem>
                <ListItem>
                  When doing incremental adoption look for client side state living in shared layout components and
                  plan how to keep them in sync
                </ListItem>
              </>
            </PostList> 
          </>
        </Quote>
      </Paragraph>
      <SubScore data={stage6score}/>
    </>
  )
}