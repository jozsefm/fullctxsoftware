import { ListItem, Flex, Text, UnorderedList } from '@chakra-ui/react'
import { Paragraph, PostList } from 'components/blog/PostElements'
import { Code, ExternalLink, ulMr } from 'components/reviews/common'

export default function Framework() {
  return (
    <Paragraph>
      We will look at the fine grained technical details first. What are the defining characteristics of Remix?
      It's important to know because those make the most significant business-impact-difference when compared
      to alternative solutions. Here's the list:
      <PostList>
        <>
          <ListItem>
            <Text as='span' fontWeight='bold'>URL & layout based nested routing</Text> à la React Router v6. (supports both
            filesystem defined and custom routes)
          </ListItem>
          <ListItem>
            <Text as='span' fontWeight='bold'>Built using- and to encourage the use of web standards</Text> in the client and on the server as well.
          </ListItem>
          <ListItem>
            <Text as='span' fontWeight='bold'>Request handler backend architecture</Text> works as an HTTP
            request handler instead of a full web server
          </ListItem>
          <ListItem>
            <Text as='span' fontWeight='bold'>Embracing the client/server model</Text> it renders on the server and hydrates in the browser,
            it's also capable of handling data writes/mutations with the native &lt;form /&gt; functionality of the browser and enhancing it
            with JS for optimistic UI updates.
          </ListItem>
          <ListItem>
            <Text as='span' fontWeight='bold'>UI based code colocation</Text> you can implement the loading, transforming, updating and displaying
            of data in the same file. This seems to be a natural extension of the <ExternalLink href='https://adactio.com/journal/14103'>separation of concerns by functionality</ExternalLink> as we move into the full-stack world.
          </ListItem>
          <ListItem>
            <Text as='span' fontWeight='bold'>Automatic route APIs</Text> the routes can automatically handle their data transport between client and
            server with no development effort. Remix handles special cases out of the box like race conditions, request cancellation, overfetching
            and errors.
          </ListItem>
          <ListItem>
            <Text as='span' fontWeight='bold'>Built in client side state management</Text> with the <Code>useLoaderData</Code>, <Code>useActionData</Code> and <Code>
              useFetcher
            </Code> hooks. In this area, Remix goes farther than any similar framework and handles the data model of your UI in the browser
            to keep it in sync with the server state.
          </ListItem>
        </>
      </PostList>
      Here are the most significant benefits of these choices for the users and the developers:
      <PostList>
        <>
          <ListItem>
            The server knows the full UI composition of a page before rendering. Based on that info, it can load all the data of every nested
            route in parallel. (Fetch, Then Render strategy) It can automatically prefetch resources and pages before user interaction,
            and can selectively handle only the components that will differ after navigation. All this leads to drastically reduced network payload.
          </ListItem>
          <ListItem>
            Remix can automatically keep all the nested routes' data in sync after mutations by knowing about their dependencies and when to revalidate
            them.
          </ListItem>
          <ListItem>
            Remix apps can offer meaningful but somewhat basic functionality without using any client side JavaScript. Users with JS
            disabled can still interact with the site.
          </ListItem>
          <ListItem>
            Remix can run at the Edge (no, not the U2 guy) in V8 and Node.js environments and there are plans to support even more.
            This way it's distributed globally, close to the users and can utilize the modern web infrastructure to its fullest.
            Also, vendor lock-in is less of an issue unless you integrate platform specific features.
          </ListItem>
          <ListItem>
            Developers don't need to learn new ways for doing standard tasks. Form handling, accessibility, HTTP requests and responses
            all work as covered at <ExternalLink href='https://developer.mozilla.org/en-US/'>MDN</ExternalLink>.
          </ListItem>
        </>
      </PostList>
    </Paragraph>
  )
}