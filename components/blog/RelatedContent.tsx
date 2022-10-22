import {
  Flex, Heading, LinkBox,
  LinkOverlay, Text
} from '@chakra-ui/react';
import NextLink from 'next/link';

const rowDir: any = {
  base: 'column',
  md: 'row'
}

const rowW: any = {
  base: '90%',
  md: '100%'
}

const textA: any = {
  base: 'center',
  md: 'start'
}


const gap: any = {
  rowGap: '20px',
  '@media screen and (min-width: 48em)': {
    rowGap: '0px',
    columnGap: '20px',
    flexDirection: 'row'
  }
}

const linkHoverStyle = { textDecoration: 'none' }
const contentLinkHoverStyle = { cursor: 'pointer' }
const textBefore = {
  content: '"📑"',
  display: 'inline-block',
  marginRight: '5px'
}

export default function RelatedContent({ suggestions, ...rest }) {

  return <Flex direction='column' w={rowW} m='0 auto 20px auto' {...rest}>
    <Text
      fontFamily='Rubik, Helvetica Neue, Helvetica, Arial, sans-serif;'
      fontSize='1.1rem'
      mb='15px'
      w='100%'
      textAlign={textA}
      _before={textBefore}
    >
      RELATED ARTICLES
    </Text>
    <Flex direction={rowDir} sx={gap} align='center' justify='center'>
      {suggestions.map(({url, title, type, date}) => {
        return <LinkBox 
          display='flex'
          flexDirection='column'
          maxWidth='350px'
          minWidth='350px'
          boxShadow='lg'
          padding='3'
          borderRadius='md'
          border='1px solid #e9e9e9'
          borderLeftColor='#5686ff'
          borderLeftWidth='5px'
          h='124px'
        >
          <LinkOverlay as={NextLink} textDecoration='none' _hover={linkHoverStyle} href={url} color='black'>
            <Flex as='a' _hover={contentLinkHoverStyle} direction='column' justify='space-between' height='100%'>
              <Heading marginBottom='1' lineHeight='1.2' size='md' textAlign='start'>
                  {title}
              </Heading>
              <Flex
                w='100%'
                justify='space-between'
                align='center'
                fontSize='.9rem'
              >
                  <Flex as='p' borderWidth='1px' border='none' color={'black'} align='center'>
                    Type: {type === 'qb' ? '⚡Quick Bit' : '📝Blog Post'}
                  </Flex>
                <Text fontStyle='italic' textAlign='end' w='55%' fontSize='sm' color='black'>
                  Published: {date.published.toLocaleDateString()}
                </Text>
              </Flex>
            </Flex>
          </LinkOverlay>
        </LinkBox >
      })}
    </Flex>
  </Flex>
}