import { Flex, UnorderedList, ListItem } from '@chakra-ui/react'
import { Paragraph } from 'components/blog/PostElements'
import {  ulMr } from 'components/reviews/common'

export default function BreakDown() {
  return (
    <>
      <Paragraph minorNext>
        Ideally, software development is all about helping users in reaching their goals, whether that's serious business, saving the world or simply stimulating dopamine generation,
        we want to maximize the effectiveness of our products in getting them there. This will make the companies producing the software successful, and
        hopefully we can do it on a way that makes the developers happy. These are 3 top-level elements of the Full Context of Programming. Let's see where are the connections
        between these and the "Delightful Structure".
      </Paragraph>
      <Paragraph minorNext>
        Obviously, setting up a React project is the concern of the developers alone, but there are consequence that ripple through the whole context to interesting results.
        I want to show you how code quality affects financial results, then analyze the "Delightful Structure's" influence over it.
      </Paragraph>
      <Paragraph minorNext>
        The highest level goal of optimizing a code base is to make it easy-to-work-with. Every real-life value that the code itself can influence stems from this single property.
        One level down the value hierarchy are the 2 foundations that every code base should have to reach that goal:
        <Flex justify='flex-start' my='10px'>
          <UnorderedList pl='0px' ml='30px' mr={ulMr}  spacing={2} lineHeight={1.3} >
            <ListItem>
              <b>Easy to understand</b>
            </ListItem>
            <ListItem>
              <b>Easy to change</b>
            </ListItem>
          </UnorderedList>
        </Flex>
        Of course, there are a myriad detailed factors that influence how we achieve these, but for this discussion that's all we need.
      </Paragraph>
      <Paragraph>
        By improving these factors, we can produce a great number of benefits. Increasing developer productivity, shipping better software faster and
        boosting long-term delivery performance, just to name a few.
      </Paragraph>
    </>
  )
}