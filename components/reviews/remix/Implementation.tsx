import { ListItem, Flex, UnorderedList, Image as ChakraImage } from '@chakra-ui/react'
import { Paragraph } from 'components/blog/PostElements'
import Image from 'next/image'
import { stage7score } from 'constants/scores/remix'
import { Code, ExternalLink, ImageContribution, ImageWrapper, SubScore, ulMr } from 'components/reviews/common'
import { remixUpdates } from './updates'

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
      <Paragraph minorNext>
        <b>Short description</b>: This stage is about writing and testing our solution. We are interested in the efficiency of working with a given tool.
      </Paragraph>
      <Paragraph minorNext>
        <b>Remix</b>: There are still parts of the framework we didn't cover and I have to mention how it benefits from the React ecosystem at this step, too.
      </Paragraph>
      <Paragraph minorNext id='documentation'>
        <b>Documentation</b>: First things first, the <ExternalLink href='https://remix.run/docs/'>docs</ExternalLink> are nicely done. You get solid tutorials for starting out,
        the API part covers every building block of the framework and there are feature specific guides for the common responsibilities of a meta-framework.
        Everything is demonstrated with code examples. All in all, this is a nice foundation for working with Remix effectively.
        There's also a very handy folder showing how to handle common tooling setups and tasks in their <ExternalLink href='https://github.com/remix-run/remix/tree/main/examples'>GitHub Repo</ExternalLink>.
      </Paragraph>
      <Paragraph minorNext>
        Because the project is young, the docs are missing less central topics like testing, SEO, AMP support, migration guides, internationalization, etc...
        I'm sure these will be covered as the community develops best practices.
      </Paragraph>
      <Paragraph minorNext id='community'>
        <b>Community</b>: Speaking of the community, Remix started out well in this area too. Their <ExternalLink href='https://discord.com/invite/remix'>Discord</ExternalLink> is going strong,
        and there's already a unofficial <ExternalLink href='https://remix.guide/'>news aggregator</ExternalLink>, <ExternalLink href='https://readmoulton.com/'>newsletter</ExternalLink> and
        the mandatory <ExternalLink href='https://www.youtube.com/c/Remix-Run'>Ýoutube channel</ExternalLink>. On Stackoverflow the <ExternalLink href='https://stackoverflow.com/questions/tagged/remix.run'>[remix.run]</ExternalLink> tag
        seems to be the most relevant for the framework. <i>(Simple [remix] is already associated with an IDE for Ethereum contract development.)</i> These
        all can become valuable sources of help.
      </Paragraph>
      <Paragraph minorNext>
        Without picking on any given community project, if you search for '<code>remix starter kit</code>' or '<code>remix boilerplate</code>' you will find repos on GitHub
        but many have broken demo sites or they are very basic or using a very specific tech stack. I can't recommend any for general use, but they might be nonetheless useful
        examples of setting up some integrations. Maybe <ExternalLink href='https://github.com/one-aalam/remix-starter-kit'>this one</ExternalLink> is the most established.
      </Paragraph>
      <Paragraph minorNext id='builtin-features'>
        <b>Built-in features</b>: On the framework side you get out-of-the-box support for <ExternalLink href='https://remix.run/docs/en/v1/api/remix#cookies'>cookie handling</ExternalLink>, <ExternalLink href='https://remix.run/docs/en/v1/api/remix#sessions'>session handling</ExternalLink>, <ExternalLink href='https://remix.run/docs/en/v1/api/remix#scrollrestoration'>scroll restoration</ExternalLink> and <ExternalLink href='https://remix.run/docs/en/v1/api/remix#link'>page preloading</ExternalLink> before
        navigation. These all are common features that most web apps can benefit from using. Having them pre-made will speed up development.
      </Paragraph>
      <Paragraph minorNext>
        Implementing a fast user experience by default is supported by <ExternalLink href='https://remix.run/blog/react-server-components#obsessed-with-ux'>eliminating</ExternalLink> the
        render-fetch waterfalls that permeates other strategies used in the React ecosystem for loading and rendering data.
      </Paragraph>
      <Paragraph minorNext id='styling'>
        <b>Styling</b>: The recommended way of <ExternalLink href='https://remix.run/docs/en/v1/guides/styling#styling'>route based styling</ExternalLink> boils
        down to "managed" <Code>{'<link />'}</Code> tags generated by the route handler.
        This approach is a bit more tedious than the automatic CSS extraction and code-splitting some other frameworks provide
        but it still is a nice way to scope down your CSS to the minimum required for each view of your app. You also have greater control over the process.
        It's also in line with the web standards based design philosophy of Remix and has many technical benefits for site performance:
        <Flex justify='flex-start' my='10px'>
          <UnorderedList pl='0px' ml='30px' mr={ulMr}  spacing={2} lineHeight={1.3} >
            <ListItem>
              Stylesheets are cacheable in the browser and CDN and a style change doesn't break the cache of other resources nor the other way around.
            </ListItem>
            <ListItem>
              CSS can be downloaded in parallel with JS bundles and other assets.
            </ListItem>
            <ListItem>
              Styles can be selectively loaded/unloaded and prefetched based on the changing routes.
            </ListItem>
            <ListItem>
              You can use link media queries to deliver less CSS based on the client device type.
            </ListItem>
          </UnorderedList>
        </Flex>
        Support for CSS-in-JS tools is also there but in general they are less performant than the recommended way. <i>(Not because of Remix but their own nature.)</i> I
        would say this adds a minor overhead to the required implementation effort,
        especially if you go with one of the official convention
        of handling <ExternalLink href='https://remix.run/docs/en/v1/guides/styling#surfacing-styles'>shared styles</ExternalLink>, but has many benefits for the users.
        As Remix only supports native CSS in the framework, from a maintainability perspective, you are better off setting up a precompiler like Sass.
      </Paragraph>
      <Paragraph minorNext id='error-handling'>
        <b>Error handling</b>: The built-in support for <ExternalLink href='https://remix.run/docs/en/v1/guides/errors'>error handling</ExternalLink> makes it
        super easy to deal with both uncaught exceptions and expected errors.
        Remix automatically catches runtime exceptions for you on the server and in the browser and propagates them to the
        closest <ExternalLink href='https://remix.run/docs/en/v1/api/conventions#errorboundary'>ErrorBoundary</ExternalLink>.
        Whenever you throw a response, the app will go down the expected error path using the
        nearest <ExternalLink href='https://remix.run/docs/en/v1/api/conventions#catchboundary'>CatchBoundary</ExternalLink>.
        Both work as standard React error boundaries and the nicest thing Remix does with this pattern is scoping down the broken UI
        to the closest component that exported a Boundary. This is a great implementation of graceful degradation and helps
        to offer a better user experience with low development effort.
      </Paragraph>
      <Paragraph minorNext id='local-development'>
        <b>Local development</b>: Remix itself provides an efficient feedback loop with live-reloading both the server and client bundles
        but it comes with a few <ExternalLink href='https://remix.run/docs/en/v1/other-api/serve'>inconveniences</ExternalLink>, specifically
        about module-side effects remaining in place on the server after file changes. You might have to roll your own dev setup to restart the whole server
        when you need such side effects to rerun on code updates. Also notice that live reload is not HMR/fast refresh, all your in-browser state is
        lost after each update.
        To have live-reload with Sass, Less or any CSS precompiler, you need to manually set up a change watcher and direct the output into the project.
        Debugging the server code had some <ExternalLink href='https://gist.github.com/kiliman/a9d7c874af03369a1d105a92560d89e9'>quirks</ExternalLink> but
        seems to be working fine with the standard Node.js tools now.
        Based on the deployment target, however, your development experience can change considerably as you will depend on
        the quality of the tools they provide.
      </Paragraph>
      <Paragraph minorNext id='productivity'>
        <b>Productivity</b>: The much loved productivity booster TypeScript is also supported, but you need to <ExternalLink href='https://remix.run/docs/en/v1/guides/typescript'>manually</ExternalLink> add
        and run a type check step in your build process.
      </Paragraph>
      <Paragraph>
        Developer productivity will be initially set back thanks to the inevitable learning curve of a new framework,
        but for experienced React developers it will be quite minimal. There's a unique appeal of Remix for the non-react or even to
        non-js software engineers as it's usage and support of web standards makes it a <i>(somewhat)</i> easier switch than other SPA metaframeworks.
      </Paragraph>
      <Paragraph update={remixUpdates[2]}>
        Since publishing the article the development team released <ExternalLink href='https://remix.run/docs/en/v1/pages/stacks'>Remix Stacks</ExternalLink> a
        new feature of their CLI to automatically set up complete application stacks. It helps you get started super quick with new projects, saving time and effort
        on a usually boring and often error prone task. It's customizable to your own needs so the community will definitely put together many stacks, using popular tools.
      </Paragraph>
      <Paragraph minorNext>
        As a member of the React family, Remix gains a lot of productivity improvements for free.
        JSX, the nice declarative programming model for UI development, the out of the box performance of React.js and a rich ecosystem of complementary technologies
        such as the top-notch <ExternalLink href='https://github.com/facebook/react/tree/main/packages/react-devtools'>DevTools</ExternalLink>, excellent <ExternalLink href='https://reactjs.org/docs/test-utils.html'>unit testing</ExternalLink> support with Jest and React Testing Library (and more), <ExternalLink href='https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler'>performance profiler</ExternalLink> and <ExternalLink href='https://www.reactsight.com/'>UI composition visualization</ExternalLink>.
        The <ExternalLink href='https://reactcosmos.org/'>component driven development</ExternalLink> tools help to boost development efficiency at this stage as well.
        Any serious project benefits from documenting the codebase, React <ExternalLink href='https://www.docz.site/docs/introduction'>has</ExternalLink> <ExternalLink href='https://github.com/reactjs/react-docgen'>you</ExternalLink> <ExternalLink href='https://react-styleguidist.js.org/docs/documenting/'>covered</ExternalLink>.
        To enforce project standards, you can use the well established <ExternalLink href='https://eslint.org/'>ESLint</ExternalLink> and <ExternalLink href='https://prettier.io/'>Prettier</ExternalLink> or
        any solution compatible with your tooling.
      </Paragraph>
      <Paragraph minorNext>
        Depending on your choice of deployment infrastructure, the project can save a lot of development time utilizing the
        platform capabilities, like serverless functions to simplify BE code, highly automated CI/CD to remove the need of manual plumbing
        or automatic resource scaling according to traffic which is not cheap nor easy to implement, and the list goes on.
      </Paragraph>
      <Paragraph minorNext id='code-quality'>
        <b>Code quality</b>: Finally, from the code quality perspective, Remix only has minor but positive influence over a project thanks to its handling of
        code colocation across the client/server boundary. That makes it easier to see how the different parts of your app are connected and used.
      </Paragraph>
      <SubScore data={stage7score}/>
    </>
  )
}