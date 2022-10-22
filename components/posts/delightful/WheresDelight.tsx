import { Flex, UnorderedList, ListItem } from '@chakra-ui/react'
import { Paragraph } from 'components/blog/PostElements'
import {  Code, InternalLink, ulMr } from 'components/reviews/common'

export default function WheresDelight() {
  return (
    <>
      <Paragraph minorNext>
        Without covering the whole, article here's the gist of it, that matters for us:
        <Flex justify='flex-start' my='10px'>
          <UnorderedList pl='0px' ml='30px' mr={ulMr}  spacing={2} lineHeight={1.3} >
            <ListItem>
              <b>Organize code by function instead of features</b>
            </ListItem>
            <ListItem>
              <b>Break down components to tiny sub-parts but export from the top level</b>
            </ListItem>
            <ListItem>
              <b>Use Webpack aliases</b>
            </ListItem>
          </UnorderedList>
        </Flex>
        These all actually optimize developer ergonomics and work efficiency.
        <Flex justify='flex-start' mt='10px'>
          <UnorderedList pl='0px' ml='30px' mr={ulMr}  spacing={2} lineHeight={1.3} >
            <ListItem>
              The organization strategy helps with the discoverability and understandability of the project.
              As features diverge and components get new responsibilities, you will still know where to look for them.
            </ListItem>
            <ListItem>
              The export strategy and the use of aliases again increase the readability and findability of the code base.
            </ListItem>
          </UnorderedList>
        </Flex>
      </Paragraph>
      <Paragraph minorNext>
        The result is a project that's <b>easier to understand</b>. It will lower the mental burden of the developers.
        To speak in process quality terms, that reduces wastes like: Waiting and Defects.
        In turn, you will see higher customer satisfaction through the improved speed of delivery, increased product quality and
        consequently improve the financial performance of the software product.
      </Paragraph>
      <Paragraph minorNext>
        In <InternalLink href='/book/chapter11' newTab>Chapter 11</InternalLink> we cover every action developers do with code,
        out of those, implementing this structure will affect:
        <Flex justify='flex-start' my='10px'>
          <UnorderedList pl='0px' ml='30px' mr={ulMr}  spacing={2} lineHeight={1.3} >
            <ListItem>
              <b>Refactoring</b>: Keeping a relatively flat structure gives greater flexibility to move your code around as the project evolves.
            </ListItem>
            <ListItem>
              <b>Extending</b>: Obviously, following this pattern prescribes a way how to add in new stuff so Josh made a tool to automate that.
            </ListItem>
            <ListItem>
              <b>Searching</b>: Just hit <Code>Ctrl + Shift + F</Code> while selecting the right top-level folder, it's simple and leaves little guesswork to the developer.
            </ListItem>
            <ListItem>
              <b>Understanding</b>: as we already discussed.
            </ListItem>
          </UnorderedList>
        </Flex>
      </Paragraph>
      <Paragraph>
        These all help to make the project <b>easier to change</b>. This is two ticks out of two so far. Let's just throw in how developer like to
        work efficiently and this setup really supports that helping you to keep employee engagement high and the costs of lost talent down.
        In the end, this structure really helps in solving a lot of human problems!
      </Paragraph>
    </>
  )
}