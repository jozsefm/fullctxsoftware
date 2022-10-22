import { ListItem, Flex, UnorderedList, Image as ChakraImage } from '@chakra-ui/react'
import { Paragraph, PostList } from 'components/blog/PostElements'
import Image from 'next/image'
import { stage6score } from 'constants/scores/remix'
import { Code, ExternalLink, ImageContribution, ImageWrapper, SubScore, ulMr } from 'components/reviews/common'
import { remixUpdates } from './updates'

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
      <Paragraph minorNext>
        <b>Short description</b>: This is where the software engineering concerns themselves are on the table. This stage is specifically about
        planning the system design, software architecture, project structure, often including the tools
        used for testing, CI/CD and observability. Our primary interest is to find how the different tools influence the efficiency of planning
        and working with the code base long-term.
      </Paragraph>
      <Paragraph minorNext>
        <b>Remix</b>: Remix has made some innovative architectural decisions we have already covered at the beginning.
        We also identified the types of projects that can and those that can't benefit from them. What we didn't cover yet is
        the long-term effects Remix might have on a project, from a technical perspective. How do you ensure
        project maintainability and scalability on the code base level? Where are the bottlenecks? Let's dive in.
      </Paragraph>
      <Paragraph minorNext>
        On the most fundamental level, a Remix project is simply React + serverless event handlers. Their maintainability and scalability
        is proven by world-class companies. There are established <ExternalLink href='https://www.simform.com/blog/react-architecture-best-practices'>practices</ExternalLink> for setting up large-scale projects with them.
        Remix itself shouldn't affect this too much. There are however, some open questions:
      </Paragraph>
      <Paragraph minorNext>
        <b>I.</b> How can the convention of route and URL based loader/action pattern scale for complex applications?
        <PostList minor>
          <>
            <ListItem>
              What's the optimal number and complexity of loaders on a single page to keep the backend responsive
              and to keep data read costs low while serving heavy traffic?
            </ListItem>
            <ListItem>
              How easy is it to handle <ExternalLink href='https://remix.run/docs/en/v1/api/conventions#unstable_shouldreload'>loader optimization</ExternalLink> while
              keeping the server and client data in sync as an application grows in complexity?
            </ListItem>
          </>
        </PostList>
      </Paragraph>
      <Paragraph minorNext>
        <b>II.</b> What's the most fitting content caching strategy for a given usage/traffic pattern?
        <PostList minor>
          <>
            <ListItem>
              Should you put the application behind a traditional CDN or do caching programmatically at the Edge?
              This is covered by the Remix folks in detail on <ExternalLink href='https://www.youtube.com/watch?v=bfLFHp7Sbkg'>YouTube</ExternalLink> and <ExternalLink href='https://remix.run/blog/remix-vs-next#why-the-apps-are-fast'>their blog</ExternalLink>.
            </ListItem>
            <ListItem>
              What's the optimal expiration duration for your content, assets and even URL based queries?
            </ListItem>
          </>
        </PostList>
      </Paragraph>
      <Paragraph minorNext>
        Most of the Remix specific planning will revolve around how to break down your
        UI views into hierarchical (parent-child) components that can be matched up to URL segments so the framework can do its magic to
        optimize data handling as navigation. of course, your UI needs to have parts that change less frequently than others as you are
        using it to pull this off.
        The other even more important aspect is designing the number and "weight" of loaders (route APIs) present on a given view
        based on how many BE interactions will happen on that screen. (User activity that results in an API call)
        These matter as Remix, by default, executes all loaders on a page in 3 cases:
        <PostList minor>
          <>
            <ListItem>
              After an action (forms, <Code>useSubmit</Code>, <Code>fetcher.submit</Code>)
            </ListItem>
            <ListItem>
              When the URL search params change (as any loader could use them)
            </ListItem>
            <ListItem>
              The user clicks a link to the exact same URL they are already at
            </ListItem>
          </>
        </PostList>
        For example, if your UI permanently displays the logged in user and some additional information like their balance, unseen notifications, etc...
        you can put a heavy load on your backend to refetch them after some frequently executed action for each and every user.
        These can be mitigated using the mentioned loader optimization, but this is specifically why this aspect might require upfront planning. 
      </Paragraph>
      <Paragraph minorNext>
        On the code level, you have to decide how to structure your action handling. Each view will only ever invoke a <ExternalLink href='https://remix.run/docs/en/v1/api/conventions#action'>single</ExternalLink> action handler by default.
        That function should ideally delegate handling the different actions available on that route. Alternatively, you can set up different routes for different actions
        and post to them specifically. It's best to decide which type to use and when as a project standard.
      </Paragraph>
      <Paragraph minorNext>
        An unusual aspect of Remix that stems from its architectural decisions is that you have to model your actions (UI initiated API calls)
        as <ExternalLink href='https://remix.run/docs/en/v1/pages/faq#how-do-i-handle-multiple-forms-in-one-route'>HTML forms</ExternalLink>. You will use hidden input fields to send data to the route action handler.
        As you might expect it, the data will be sent in the formData format instead of JSON
        so sending structured data includes some weird <ExternalLink href='https://remix.run/docs/en/v1/pages/faq#how-can-i-have-structured-data-in-a-form'>conventions</ExternalLink>.
      </Paragraph>
      <Paragraph>
        Finally, you will need to carefully consider your traffic pattern and content update frequency to choose the best caching
        strategy either with a CDN or with edge side application code. The latter is a better choice for highly dynamic or irregularly updated content
        as done by the official <ExternalLink href='https://remix.run/docs/en/v1/guides/performance#this-website--flyio'>docs</ExternalLink> itself.
      </Paragraph>
      <Paragraph update={remixUpdates[1]} minorNext id='migration'>
        <b>Migration</b>: An importan point brought up by the readers is how to do gradual migration to Remix. It's an important question to answer as a part of this
        stage. The quality of the process can have a major impact on developer productivity and the stability of an application, affecting the users too.
        I found 2 main approaches covered by the community:
        <PostList minor>
          <>
            <ListItem>
              Selectively route/proxy migrated URLS from a custom server
            </ListItem>
            <ListItem>
              Embedding iframed views into the client that loads from a new Remix backend
            </ListItem>
          </>
        </PostList>
        Here's a nice <ExternalLink href='https://github.com/edmundhung/remix-migration-strategies'>GitHub repo</ExternalLink> showcasing how to implement these patterns,
        as well as a <ExternalLink href='https://sergiodxa.com/articles/run-next-and-remix-on-the-same-server'>blog post</ExternalLink> specific to moving from Next.js to Remix.
        Its <ExternalLink href='https://sergiodxa.com/articles/share-session-and-cookies-between-next-and-remix'>follow-up</ExternalLink> about sharing sessions and cookies
        between the frameworks can also be very useful. In conclusion, the migration can happen on the same, generic way that you might use to switch between any
        other technologies. There are some drawbacks however, that you have to consider with each approach:
        <PostList minor>
          <>
            <ListItem>
              You have to deliver a complete view of the application in each step of the migration with the first method.
              That means if you have global state in the UI displayed across different URLs, that must be shared across the framework boundaries somehow which
              requires careful planning especially if you have to keep them in sync. You might need
              to <ExternalLink href='https://github.com/remix-run/remix/tree/main/examples/client-only-components'>client-only render</ExternalLink> those components in the Remix version.
            </ListItem>
            <ListItem>
              Embedding content through iframes also makes it harder to share application state, possibly
              involving <ExternalLink href='https://stackoverflow.com/questions/9153445/how-to-communicate-between-iframe-and-the-parent-site'>cross-document messaging</ExternalLink>.
              It will further affect: SEO as crawlers do not consider iframe content belonging to the current site and maybe CSS transitions / theme switching.
            </ListItem>
          </>
        </PostList>
      </Paragraph>
      <SubScore data={stage6score}/>
    </>
  )
}