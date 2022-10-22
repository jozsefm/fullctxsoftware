import { OrderedList, ListItem, Flex, Text, Image as ChakraImage, Divider } from '@chakra-ui/react'
import { Paragraph } from 'components/blog/PostElements'

const proconMx: any = {
  base: 'calc(2.5% + 20px)',
  md: '0'
}

const proconListMl: any = { base: '20px', md: '57px' }

const proconListMr: any = { base: '20px', md: '30px' }

export default function ProCon() {
  return (
    <>
      <Paragraph minorNext>
        I hope you found the insights you were looking for while following Remix along the Code To Money Road
        or you got answers to your open questions.
        Let's do a quick recap of the highest impact properties of the framework than can make or break the case for its adoption.
      </Paragraph>
      <Paragraph bg='#eef9f1' p='12px' mx={proconMx}>
        <Text fontWeight='bold' fontSize='1.1rem' display='flex' alignItems='center' color='#008357'><ChakraImage src='/img/blog/review/pro1.svg' w='40px' mr='10px'/>PROS (14)</Text>
        <Flex justify='flex-start' >
          <OrderedList
            pl='10px'
            ml={proconListMl}
            mr={proconListMr}
            my='15px'
            spacing={4}
            lineHeight={1.45}
            color='#008357'
            fontWeight='bold'
            letterSpacing='0.2px'
          >
            <ListItem>
              The framework architecture maximizes site loading speed, leading to better user experience.
            </ListItem>
            <Divider borderColor='#5e5e5e' />
            <ListItem>
              The framework architecture minimizes overall network payloads, leading to better connectivity on low-quality internet access. 
            </ListItem>
            <Divider borderColor='#5e5e5e' />
            <ListItem>
              The built-in tools and conventions make it really easy to create HTTP APIs, speeding up development time and lowering maintenance needs.
            </ListItem>
            <Divider borderColor='#5e5e5e' />
            <ListItem>
              The built-in tools and conventions make it really easy to automatically keep the UI state in sync with the data living on the backend.
              Thanks to this implementing CRUD like functionality is a breeze.
            </ListItem>
            <Divider borderColor='#5e5e5e' />
            <ListItem>
              The built-in tools and conventions also make it easy to create optimistic UI updates that automatically reconcile with the final results.
            </ListItem>
            <Divider borderColor='#5e5e5e' />
            <ListItem>
              The built-in tools and conventions for error handling enable graceful UI degradation, improving user experience, and require low
              development effort.
            </ListItem>
            <Divider borderColor='#5e5e5e' />
            <ListItem>
              Out of the box implementation for common web app functionalities like scroll restoration, cookie and session handling and
              asset preloading further improve developer productivity and boost the delivered user experience.
            </ListItem>
            <Divider borderColor='#5e5e5e' />
            <ListItem>
              Support for creating interactive sites without using JavaScript, this way products can be more appealing to privacy focused users groups.
            </ListItem>
            <Divider borderColor='#5e5e5e' />
            <ListItem>
              The use of web standards makes it easier to pick up the framework and teaches transferrable skills to developers,
              boosting their motivation.
            </ListItem>
            <Divider borderColor='#5e5e5e' />
            <ListItem>
              The framework architecture supports easy deployment to cutting-edge-platforms, reducing the required dev&amp;ops effort by multitudes. 
            </ListItem>
            <Divider borderColor='#5e5e5e' />
            <ListItem>
              The support for edge &amp; serverless computing makes Remix an ideal match for highly dynamic sites in terms of authentication and customization.  
            </ListItem>
            <Divider borderColor='#5e5e5e' />
            <ListItem>
              All of these properties combined make Remix a uniquely productive tool for full stack development.
            </ListItem>
            <Divider borderColor='#5e5e5e' />
            <ListItem>
              High-quality official documentation.
            </ListItem>
            <Divider borderColor='#5e5e5e' />
            <ListItem>
              Helpful and growing community.
            </ListItem>
          </OrderedList>
        </Flex>
      </Paragraph>
      <Paragraph bg='#fdf2f2' p='12px' mx={proconMx}>
        <Text fontWeight='bold' fontSize='1.1rem' display='flex' alignItems='center' color='#b12323'><ChakraImage src='/img/blog/review/con1.svg' w='35px' mr='15px'/>CONS (8)</Text>
        <Flex justify='flex-start'>
          <OrderedList
            pl='10px'
            ml={proconListMl}
            mr={proconListMr}
            my='15px'
            spacing={6}
            lineHeight={1.45}
            fontWeight='bold'
            letterSpacing='0.2px'
            color='#b12323'
          >
            <ListItem>
              If you want to take advantage of every optimization Remix provides, your data handling will be tightly coupled to your URL structure.
              This might have unforeseen consequences as your application grows and the format or displaying of data changes that will
              require changing the existing URLs.
            </ListItem>
            <Divider borderColor='#5e5e5e' />
            <ListItem>
              You will need to carefully plan your loader/action and UI composition to prevent overloading
              the backend with revalidation requests for non-changing data with frequently executed actions.
            </ListItem>
            <Divider borderColor='#5e5e5e' />
            <ListItem>
              You will also need to be very conscious about your caching strategy, what is the optimal setup
              for your content update, usage and traffic patterns? Do you want to go with a traditional CDN or a custom
              solution? There are no easy to follow best practices that answer these questions yet.
            </ListItem>
            <Divider borderColor='#5e5e5e' />
            <ListItem>
              Serving cached content from a DB at the edge creates storage and execution costs.
              Static resources served from a CDN don't.
            </ListItem>
            <Divider borderColor='#5e5e5e' />
            <ListItem>
              Client-side logic heavy apps can't easily take advantage of state management libraries
              as Remix can only SSR your app based on data available on the backend. This leaves an unanswered
              question for the community to figure out: How to integrate lots of client side only state?
            </ListItem>
            <Divider borderColor='#5e5e5e' />
            <ListItem>
              The scalability of form actions. Forms can get very complex with nested or dynamic fields, autosave functionality,
              client side validation and more. It's not yet clear if there are walls in complexity that might stop
              the built-in mechanism from properly working or simply make them cumbersome to use.
            </ListItem>
            <Divider borderColor='#5e5e5e' />
            <ListItem>
              Remix is currently deployed as a single serverless function. How far can it scale as the number of concurrent users grows?
              There are plans to support splitting an app to multiple functions based on routes, but nothing official is out yet.
            </ListItem>
            <Divider borderColor='#5e5e5e' />
            <ListItem>
              Missing best practices and well-known drawbacks  as it's a new tool, with no widespread adoption so far.
            </ListItem>
          </OrderedList>
        </Flex>
      </Paragraph>
    </>
  )
}