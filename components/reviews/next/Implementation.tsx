import { Flex, Image as ChakraImage, ListItem, Text } from '@chakra-ui/react'
import { Paragraph, PostList, Quote } from 'components/blog/PostElements'
import { Code, ExternalLink, ImageContribution, ImageWrapper, ImplementationDescription, InternalLink, SubScore } from 'components/reviews/common'
import { stage7score } from 'constants/scores/next'
import Image from 'next/image'

export default function Implementation() {
  return (
    <>
      <ImageWrapper >
        <Image priority layout='fill' src='/img/blog/remix/impl2.jpg' objectFit='cover' objectPosition='0 85%'/>
        <Flex pos='relative' zIndex='2' margin='0 auto' right='-12px' align='center'>
          <ChakraImage className='svg' width='90px' height='90px' src='/img/blog/remix/implementation.svg' />
        </Flex>
      </ImageWrapper>
      <ImageContribution>Photo by <a href="https://unsplash.com/@israelandrxde?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank'>Israel Andrade</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target='_blank'>Unsplash</a></ImageContribution>
      <ImplementationDescription />
      <Paragraph minorNext>
        Next.js is the staple of an established frontend framework with huge focus on DX. It offers best-in-class support
        for nearly every aspect of software development. Why do these factors matter
        in judging the business effects of Next.js? Each of them influences the development speed, either for a limited amount of time /
        under some special circumstances or in general. That in turn will influence project costs, customer satisfaction, possibly
        product market fit and more metrics highlighted at the end of the review. Stive to use as much of the
        resources provided for the framework as possible to maximize your productivity. Let's see the details.
      </Paragraph>
      <Paragraph minorNext id='documentation'>
        <b>Documentation</b>: The <ExternalLink href='https://nextjs.org/docs/getting-started'>docs</ExternalLink> are very high quality.
        The information is categorized by features but also available in the form of API references.
        There's a standalone <ExternalLink href='https://nextjs.org/learn/foundations/about-nextjs'>tutorial</ExternalLink> section
        on their site that teaches using Next.js from the ground up.
        I really like this separation as when you become experienced and start to use the docs to simply look up how to do something
        the tutorial parts become "noise".
        <Text mt='25px'>
          There are less central topics covered in detail, such as: migration, SEO, deployment, testing, security, internationalization, debugging,
          performance measurement, <ExternalLink href='https://nextjs.org/docs/going-to-production'>
            going to production
          </ExternalLink>, upgrade guides and a lot more. <i>(Many of these are available under the <ExternalLink href='https://nextjs.org/docs/advanced-features/compiler'>
            Advanced Features
          </ExternalLink> menu point.)</i>
        </Text>
        <Text mt='25px'>
          A very handy functionality of their site is on the <ExternalLink href='https://nextjs.org/examples'>
            Examples
          </ExternalLink> page, where you can find official starter templates and exactly 301 example repositories showcasing how
          to integrate Next.js with most of the popular <i>(and many smaller)</i> tools and technologies used for JS/TS development.
          You can also browse them directly in their GitHub <ExternalLink href='https://github.com/vercel/next.js/tree/canary/examples'>
            repository
          </ExternalLink>.
        </Text>
      </Paragraph>
      <Paragraph minorNext id='community'>
        <b>Community</b>: We often need to find help for things not covered in the docs,
        or we might be are interested in the real life experience of others.
        This is the time to enter an online community.
        The best place to find other Next.js developers is either the
        official <ExternalLink href='https://github.com/vercel/next.js/discussions'>
          GitHub Discussions
        </ExternalLink> or the <ExternalLink href='http://nextjs.org/discord'>Discord channel</ExternalLink>.
        Both are packed with active and friendly people.
        <Text mt='25px'>
          As usual, StackOverflow has tons of questions tagged
          with <ExternalLink href='https://stackoverflow.com/questions/tagged/next.js'>[next.js]</ExternalLink>.
          The Reddit community over <ExternalLink href='https://www.reddit.com/r/nextjs'>r/nextjs</ExternalLink> is
          also a good place for finding information and news. Another great source of practical insights is
          the #nextjs <ExternalLink href='https://dev.to/t/nextjs'>dev.to topic</ExternalLink> and I see potential
          in <ExternalLink href='https://nextjstips.com/'>
            nextjstips.com
          </ExternalLink>
        </Text>
      </Paragraph>
      <Paragraph minorNext id='learning'>
        <b>Learning material</b>: You have access to an enormous amount of free and paid training material. For starters
        there are <ExternalLink href='https://www.youtube.com/results?search_query=nextjs&sp=CAM%253D'>
          YouTube series
        </ExternalLink> and standalone videos covering everything Next.js.
        Unsurprisingly, Udemy is packed with <ExternalLink href='https://www.udemy.com/courses/search/?src=ukw&q=Next.js'>Next.js courses</ExternalLink> and
        if you prefer books <ExternalLink href='https://www.amazon.com/Next-js-Quick-Start-Guide-Server-side/dp/1788993667'>
          there
        </ExternalLink> <ExternalLink href='https://www.amazon.com/Real-World-Next-js-high-performance-applications-production/dp/180107349X'>
          are
        </ExternalLink> <ExternalLink href='https://leanpub.com/hands-on-nextjs'>
          some
        </ExternalLink> written about it. You can find good tutorials at <ExternalLink href='https://www.freecodecamp.org/news/search/?query=next.js'>
         FreeCodeCamp 
        </ExternalLink> as well. To sum it up, the available resources are some of the best for the frameworks of its kind.
        <Quote noMb>
          <>
            I just can't move on from here without mentioning <ExternalLink href='https://leerob.io/'>Lee Robinson's</ExternalLink> (- well known Next.js advocate I'm personally following for a few years -)
            own resource <ExternalLink href='https://github.com/vercel/next.js/discussions/29628'>
              collection
            </ExternalLink>.
          </>
        </Quote>
      </Paragraph>
      <Paragraph minorNext id='builtin-features'>
        <b>Built-in features</b>: What kind of pre-made functionalities does Next.js provide to help speeding up development?
        On the framework level, you have support for optimizing image delivery
        with <ExternalLink href='https://nextjs.org/docs/api-reference/next/image'>next/image</ExternalLink> and for optimizing
        script loading behavior through <ExternalLink href='https://nextjs.org/docs/api-reference/next/script'>next/script</ExternalLink>.
        We already mentioned that you can easily build AMP pages
        using the <ExternalLink href='https://nextjs.org/docs/advanced-features/amp-support/introduction'>next/amp</ExternalLink> module.
        Then there are tools to support using <ExternalLink href='https://nextjs.org/docs/advanced-features/using-mdx'>MDX</ExternalLink> to create pages,
        to manually do <ExternalLink href='https://nextjs.org/docs/advanced-features/dynamic-import'>dynamic import</ExternalLink> of
        components, to create live updated <ExternalLink href='https://nextjs.org/docs/advanced-features/preview-mode'>previews</ExternalLink> of
        data coming from a headless CMS, <ExternalLink href='https://nextjs.org/docs/advanced-features/multi-zones'>
          deployment zones
        </ExternalLink>, <ExternalLink href='https://nextjs.org/docs/advanced-features/measuring-performance'>
          measuring web performance
        </ExternalLink>, <ExternalLink href='https://nextjs.org/docs/advanced-features/i18n-routing'>
          internationalized routing
        </ExternalLink>, automatic <ExternalLink href='https://nextjs.org/docs/advanced-features/codemods'>version upgrades</ExternalLink> using codemods
        and automatic <ExternalLink href='https://nextjs.org/docs/routing/introduction#linking-between-pages'>link prefetching</ExternalLink>.
        <Text mt='25px'>
          And by the way the core Next.js trio of Server, Compiler and CLI offers several benefits as well such as:
          compile time <ExternalLink href='https://nextjs.org/docs/basic-features/font-optimization'>
            font optimization
          </ExternalLink>, built-in support for <ExternalLink href='https://nextjs.org/docs/basic-features/environment-variables'>
            environment variables
          </ExternalLink>, injecting standard <ExternalLink href='https://nextjs.org/docs/basic-features/supported-browsers-features'>
            polyfills
          </ExternalLink>, page-based <ExternalLink href='https://nextjs.org/docs/migrating/from-react-router#code-splitting'>
            code splitting
          </ExternalLink>, automatic <ExternalLink href='https://nextjs.org/docs/api-reference/next/link#disable-scrolling-to-the-top-of-the-page'>
            scroll restoration
          </ExternalLink>, code <ExternalLink href='https://nextjs.org/docs/advanced-features/compiler#minification'>
            minification
          </ExternalLink> alternatively by using SWC, an integrated <ExternalLink href='https://nextjs.org/docs/basic-features/eslint'>
            ESLint
          </ExternalLink> experience, <ExternalLink href='https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer'>
            bundle size
          </ExternalLink> analysis, replacing React with <ExternalLink href='https://github.com/vercel/next.js/tree/canary/examples/using-preact'>
            Preact
          </ExternalLink> and out-of-the-box support for <ExternalLink href='https://github.com/vercel/next.js/tree/canary/examples/with-web-worker'>
            WebWorkers
          </ExternalLink>.
        </Text>
        <Text mt='25px'>
          I don't exclude community provided features. They are there, waiting to be used, some even documented in the official docs,
          so they qualify to increase the impact of Next.js. There's a whole set
          of <ExternalLink href='https://nextjs.org/docs/authentication#authentication-providers'>
            authentication
          </ExternalLink> providers, a zero-configuration plugin for turning any Next.js app into a <ExternalLink href='https://github.com/shadowwalker/next-pwa'>
            PWA
          </ExternalLink>. I found the <ExternalLink href='https://github.com/garmeeh/next-seo'>
            next/seo
          </ExternalLink> package extremely valuable and there are many libraries to help with <ExternalLink href='https://openbase.com/categories/js/best-next-js-sitemap-libraries'>
            sitemap generation
          </ExternalLink> for maximal SEO power. For your convenience, there's support for universal <ExternalLink href='https://github.com/matthewmueller/next-cookies'>
            cookie handling
          </ExternalLink> and you can up your <Code>next.config.js</Code> game
          when the config gets complex by using the <ExternalLink href='https://github.com/cyrilwanner/next-compose-plugins'>
            next-compose-plugins
          </ExternalLink> package to clean it up and the list could go on.
        </Text>
      </Paragraph>
      <Paragraph minorNext id='api'>
        <b>API development</b>: The API routes feature can make our lives significantly easier out-of-the-box but we can do even better! It's possible to apply
        Connect compatible middlewares by implementing a custom pattern <ExternalLink href='https://nextjs.org/docs/api-routes/api-middlewares#connectexpress-middleware-support'>
          documented
        </ExternalLink> in the official docs. However, the community had problems with it. I completely agree that this is a huge step backwards compared to
        how things work in Express.js and other node servers. The approach is not clean, composable or easy to reuse. So a couple of different solutions emerged.
        <Text mt='25px'>
          One slightly better pattern is to implement middleware piping, as demonstrated in <ExternalLink href='https://giancarlobuomprisco.com/next/middleware-pipes-nextjs'>
            this
          </ExternalLink> article. The real deal however, are the packages developed by the community. The most established one is <ExternalLink href='https://github.com/hoangvvo/next-connect'>
            next-connect
          </ExternalLink> but <ExternalLink href='https://github.com/neg4n/next-api-compose'>
            there
          </ExternalLink> <ExternalLink href='https://github.com/htunnicliff/next-api-middleware'>
            are
          </ExternalLink> <ExternalLink href='https://github.com/BenjaminWFox/nextjs-middleware-chain'>
            alternatives
          </ExternalLink>.
        </Text>
        <Text mt='25px'>
          I have to mention a very interesting library, <ExternalLink href='https://next-runtime.meijer.ws/getting-started/1-introduction'>
            next-runtime
          </ExternalLink> that tries to bring some of the goodness from Remix.run to the Next.js world by hijacking <Code>getServerSideProps</Code> to
          offer the benefits of code colocation similar to the <Code>loaders</Code> of that framework.
          I want to point out that some parts of this <ExternalLink href='https://github.com/hoangvvo/next-connect#handlerrunreq-res'>
            can be done
          </ExternalLink> with <i>next-connect</i> as well.
        </Text>
        <Text mt='25px'>
          And we will add the final ingredient to the mix: middleware. I know what you might think, but this is different,
          it's <Code>_middleware</Code>, <ExternalLink href='https://nextjs.org/docs/advanced-features/middleware'>this</ExternalLink> bad boy.
          I was really looking forward for this feature to be supported by Next.js. It opens up new possibilities - or at least makes our
          life much easier - now that we can do request inspection and manipulation with an integrated tool.
        </Text>
        <Text mt='25px'>
          It's also a new possibility for open source authors.
          We can reinvent middleware-composition but for the native Web API this time.
          New npm packages might emerge. <i>(next-edge-connect ???)</i> Jokes aside,
          this is a nice and effective way to handle the usual, cross-cutting concerns of web applications. <i>(I already linked examples in the <InternalLink href='#core-design'>core design</InternalLink> part.)</i>
        </Text>
        <Text mt='25px'>
          As a bonus before we move on, here are more awesome resources I couldn't go past by: A <ExternalLink href='https://giancarlobuomprisco.com/next/protect-next-api-zod'>
            guide
          </ExternalLink> to protecting your Next.js APIs with Zod. <ExternalLink href='https://chadalen.com/blog/how-to-use-a-multipart-form-in-nextjs-using-api-routes'>
            Another one
          </ExternalLink> about handling multipart forms with API routes. <i>(next-runtime can do the same.)</i> And the official <ExternalLink href='https://vercel.com/docs/concepts/solutions/cron-jobs'>
            recommendations
          </ExternalLink> about handling CRON jobs on Vercel. I want to extend that list with <ExternalLink href='https://tryslater.com/#'>
            Slater
          </ExternalLink> an recently released service for doing the same.
        </Text>
      </Paragraph>
      <Paragraph minorNext id='styling'>
        <b>Styling</b>: For styling Next.js uses <ExternalLink href='https://nextjs.org/docs/advanced-features/customizing-postcss-config'>PostCSS</ExternalLink> behind
        the scenes. It means out-of-the-box support for global CSS sylesheets in <Code>pages/_app.js</Code>, component-level CSS modules, Sass
        and <ExternalLink href='https://nextjs.org/docs/basic-features/built-in-css-support#css-in-js'>
          any
        </ExternalLink> CSS-in-JS solution.
          There's also an in-house <i>(or in framework?)</i> styling tool offered by the developers called <ExternalLink href='https://github.com/vercel/styled-jsx'>
          styled-jsx
        </ExternalLink> but to be honest, I don't see it having great appeal even though its usage is steadily <ExternalLink href='https://www.npmtrends.com/styled-jsx'>
          growing
        </ExternalLink>.
        <Text mt='25px'>
          If you use CSS modules, one of the really powerful features of Next.js is its style optimization that you get for free. <i>
            (While obviously losing a huge degree of control over this aspect.)
          </i> Let's quote the <ExternalLink href='https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css'>docs</ExternalLink>:
          <Quote>
            In production, all CSS Module files will be automatically concatenated into many minified and code-split .css files.
            These .css files represent hot execution paths in your application, ensuring the minimal amount of CSS is loaded for your application to paint.
          </Quote>
        </Text>
        For a long time, it was not possible to freely import CSS from <Code>node_modules</Code> but since v. 9.5.4 it's also supported.
        PostCSS comes with a few preconfigured plugins like Autoprefixer and its output is compatible
        with browsers dating back to IE11. <i>(Except CSS Grid and Custom Properties, but the former
          is <ExternalLink href='https://nextjs.org/docs/advanced-features/customizing-postcss-config#default-behavior'>
            configurable
          </ExternalLink>.)</i> In
        conclusion, Next.js has near perfect support for all your styling needs but as with any large project it also has a number
        of <ExternalLink href='https://github.com/vercel/next.js/issues?q=is%3Aissue+is%3Aopen+CSS+sort%3Acomments-desc'>
        open issues</ExternalLink> <i>(exactly 147 atm)</i> related to CSS.
      </Paragraph>
      <Paragraph minorNext id='error-handling'>
        <b>Error handling</b>: There's one neat feature of Next.js that offers some extra help to handle errors during development.
        It's the <i>overlay</i> that most developers who are working with the framework know too well. This list is a direct quote from
        an official <ExternalLink href='https://nextjs.org/blog/next-9-4#fast-refresh'>blog post</ExternalLink> about its features:
        <PostList minor>
          <>
            <ListItem>
              Accurate error locations, resolved to the original line and column of your code, before compilation
            </ListItem>
            <ListItem>
              Contextually relevant source code snippets, with the ability click-to-open in your editor
            </ListItem>
            <ListItem>
              Development session resumption after a syntax error is fixed, without losing application state
            </ListItem>
            <ListItem>
              Automatic dismissal of unhandled runtime errors when you fix the error
            </ListItem>
          </>
        </PostList>
        Besides that, their docs
        have some <ExternalLink href='https://nextjs.org/docs/advanced-features/error-handling'>
          nice introduction
        </ExternalLink> how to handle errors on the standard Node.js + React way and how
        to <ExternalLink href='https://nextjs.org/docs/advanced-features/custom-error-page#reusing-the-built-in-error-page'>
          customize
        </ExternalLink> the default error pages <i>(404, 500)</i> or even reuse the built-in <Code>Error</Code> component.
        <Text mt='25px'>
          I found a really helpful, community developed pattern for server-side error handling: applying a middleware
          to your API endpoints <ExternalLink href='https://giancarlobuomprisco.com/next/handling-api-errors-in-nextjs'>
            manually
          </ExternalLink>, or by using a middleware <ExternalLink href='https://github.com/htunnicliff/next-api-middleware#quick-start'>
            library
          </ExternalLink> to deal with all the runtime errors.
        </Text>
      </Paragraph>
      <Paragraph minorNext id='local-development'>
        <b>Local development</b>: One key focus area of Next.js <i>(and Vercel)</i> is DX. Providing a seamless local development
        workflow is one of the most crucial factors in achieving great DX and they don't fail to deliver here! Next.js was the first framework
        to implement <ExternalLink href='https://github.com/facebook/react/tree/main/packages/react-refresh'>react-refresh</ExternalLink> to
        offer the next level of HRM called <ExternalLink href='https://nextjs.org/docs/basic-features/fast-refresh'>
          Fast Refresh
        </ExternalLink>. It's less flaky, and even faster to give us a near-instant feedback cycle as long as we play by
        its <ExternalLink href='https://nextjs.org/docs/basic-features/fast-refresh#limitations'>
          rules
        </ExternalLink>. To reap the maximal benefits it provides, avoid Class based components, do not export other values from the component files than React components,
        never use anonymous arrow functions as default exports and keep in mind that every hook will rerun on every refresh.
        <Quote>
          <>
            Did you know that you can force Fast Refresh to remount components defined in a file by putting the <Code fontSize='1rem'>// @refresh reset</Code> comment
            anywhere inside it? It's super helpful to test onMount animations for example.  
          </>
        </Quote>
        The other main components of the local dev experience are the CLI tools that come with the framework. They are already covered so to only mention
        what's relevant here, they help with standard npm tasks, initial project setup and bundle size analysis quite nicely.
        <Text mt='25px'>
          The last relevant feature of Next.js is the <ExternalLink href='https://nextjs.org/docs/advanced-features/preview-mode'>
            preview mode
          </ExternalLink>, which helps you speed up working with SSG pages that are based on dynamic content from a CMS by completely bypassing the static generation.
          Of course its goal <i>(as the name says)</i> is to make checking draft content faster. It's not necessarily helping with dev work per se, but it depends on
          the role and tasks, so I wanted to mention it here.

        </Text>

      </Paragraph>
      <Paragraph minorNext id='testing'>
        <b>Testing</b>: I could only find 2 posts with some real value about testing.
        One is from LogRocket, showing a real <ExternalLink href='https://blog.logrocket.com/testing-next-js-apps-jest/'>
          example
        </ExternalLink> of using Jest, and another <ExternalLink href='https://spacejelly.dev/posts/how-to-test-serverless-functions-with-jest-next-js-api-routes/'>
          guide
        </ExternalLink> about testing serverless functions aka API Routes. I also noticed an interesting trend.
        Some articles, which I'm not going to point out, are straight up rip-offs of the official testing docs. What a cheap move guys...
        So instead of pretending I cooked up some exciting new content, I will simply refer you to the resources made by the framework creators:
        <Text mt='25px'>
          The whole spectrum of testing is well supported from <ExternalLink href='https://nextjs.org/docs/testing#jest-and-react-testing-library'>
            unit testing
          </ExternalLink> with Jest and React Testing Library, to end-to-end (E2E) and integration testing with <ExternalLink href='https://nextjs.org/docs/testing#cypress'>
            Cypress
          </ExternalLink> and <ExternalLink href='https://nextjs.org/docs/testing#playwright'>
            Playwright
          </ExternalLink>. There are <ExternalLink href='https://nextjs.org/docs/testing#community-packages-and-examples'>
            community resources
          </ExternalLink> linked in the docs covering DOM integration testing, mocking <Code>next/router</Code> and
          more.
        </Text>
        <Text mt='25px'>
          Establishing good - <i>and meaningful</i> - test coverage of a project is a crucial factor in ensuring positive,
          medium to long-term business outcomes for all but the simplest of products. Next.js offers excellent setup instructions and integration support 
          in this area as well.
        </Text>
      </Paragraph>
      <Paragraph minorNext id='dev-tools'>
        <b>Development tools</b>: Here I will cover the tools that help in improving development efficiency,
        starting with the much loved TypeScript. It's <ExternalLink href='https://nextjs.org/docs/basic-features/typescript'>
          supported
        </ExternalLink> out-of-the-box, without any hurdles. Just use the <Code>--ts</Code> flag at project initialization or
        create a <Code>tsconfig.js</Code> file in the project root and the framework will handle the rest.
        Since v12.0.0 SWC is used to compile <Code>.ts</Code> and <Code>.tsx</Code> files,
        however, if your project uses a <Code>.babelrc</Code> config TypeScript compilation will be done by Babel
        which has many known <ExternalLink href='https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats'>
          caveats
        </ExternalLink>.
      </Paragraph>
      <Paragraph minorNext>
        As a member of the React family, Next.js gains a lot of productivity improvements for free.
        JSX, the nice declarative programming model for UI development, the optimized performance of React.js and a rich ecosystem of complementary technologies
        such as the top-notch <ExternalLink href='https://github.com/facebook/react/tree/main/packages/react-devtools'>DevTools</ExternalLink>, <ExternalLink href='https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler'>performance profiler</ExternalLink> and <ExternalLink href='https://www.reactsight.com/'>UI composition visualization</ExternalLink>.
        <Quote>
          <>
            There's a Next.js specific component tree visualizer called <ExternalLink href='https://nexus-js.com'>
              Nexus
            </ExternalLink> that also displays prop drill down and the used rendering mode.
            Another fantastic tool built for Next.js is <ExternalLink href='https://www.vantagenext.com/'>
              Vantage
            </ExternalLink> that integrates Lighthouse performance monitoring into your local development workflow.
          </>
        </Quote>
        <Text mt='25px'>
          Even more component driven development tools are here
          to help boosting the software engineers' performance at this stage,
          for example: <ExternalLink href='https://reactcosmos.org/'>React Cosmos</ExternalLink> or <ExternalLink href='https://previewjs.com/'>Preview.js</ExternalLink>.
          Any serious project benefits from documenting the codebase. React <ExternalLink href='https://www.docz.site/docs/introduction'>has</ExternalLink> <ExternalLink href='https://github.com/reactjs/react-docgen'>you</ExternalLink> <ExternalLink href='https://react-styleguidist.js.org/docs/documenting/'>covered</ExternalLink> with
          great tools to automate and organize this task.
          To enforce project standards, you can use the baked-in <ExternalLink href='https://eslint.org/'>ESLint</ExternalLink>, add <ExternalLink href='https://prettier.io/'>Prettier</ExternalLink> or
          any other tool from the React ecosystem. Here's a <ExternalLink href='https://gourav.io/blog/nextjs-cheatsheet#add-eslint-to-nextjs-typescript-project'>
            guide
          </ExternalLink> to properly config ESLint for a TypeScript Next project and another one for <ExternalLink href='https://gourav.io/blog/nextjs-cheatsheet#add-support-for-prettier-in-nextjs-project-with-eslint'>Prettier</ExternalLink>.
        </Text>
      </Paragraph>
      <Paragraph minorNext>
        Depending on your choice of deployment infrastructure, the project can save a lot of development time utilizing the
        platform capabilities, like serverless functions to simplify BE code, highly automated CI/CD to remove the need of manual plumbing
        or automatic resource scaling according to traffic which is not cheap nor easy to implement, but I will cover these at their appropriate stages.
      </Paragraph>
      <Paragraph minorNext id='ide'>
        <b>IDE support</b>: Finally, to speed up our everyday coding tasks and increase our productivity we can use a range of
        IDE plugins. Here's a list for <ExternalLink href='https://marketplace.visualstudio.com/search?term=next.js&target=VSCode&category=All%20categories&sortBy=Installs'>
          VSCode
        </ExternalLink>, the situation is not so bright at the IntelliJ side with a single available <ExternalLink href='https://plugins.jetbrains.com/plugin/18604-next-js'>
          plugin
        </ExternalLink> and even worse for Sublime Text with 0. So to maximize effectiveness we are inclined to use VSCode <i>(not surprisingly)</i>.
        <Quote noMb>
          <>
            Don't take my word for it as I didn't use these extensions, but <ExternalLink href='https://marketplace.visualstudio.com/items?itemName=iJS.reactnextjssnippets'>
              Next.js React Snippet
            </ExternalLink> and <ExternalLink href='https://marketplace.visualstudio.com/items?itemName=PulkitGangwar.next-js-react-storybook-commands'>
              Next.js/React/Storybook Commands
            </ExternalLink> seems to be the most useful.
          </>
        </Quote>
      </Paragraph>
      <SubScore data={stage7score}/>
    </>
  )
}