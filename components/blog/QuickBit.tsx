import {
  Box, Flex, Heading, LinkBox,
  LinkOverlay, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent,
  PopoverHeader, PopoverTrigger, Text
} from '@chakra-ui/react'
import styled from '@emotion/styled'

const StyledBox = styled(Box)`
  @media screen and (min-width: 1em) and (max-width: 62em) {
    margin-top: 0;
    min-width: 350px;
    margin-left: 25px;
    &:last-of-type {
      margin-right: 25px;
    }
  }
  
  @media screen and (min-width: 63em) {
    &:not(:first-of-type) {
      margin-top: 25px;
    }
  }
`

const qbJustify = {
  base: 'space-between',
}

const qbAlign = {
  base: 'center',
  lg: 'flex-start'
}

const qbMt = { base: '3', sm: '0' }

const linkHoverStyle = { textDecoration: 'none' }

export const QuickBit = ({ description, title, link, date, completed = false }) => {
  return (
    <StyledBox>
      <LinkBox 
        display='flex'
        flexDirection='column'
        justifyContent={qbJustify}
        alignItems={qbAlign}
        marginTop={qbMt}
        maxWidth='350px'
        boxShadow='lg'
        padding='3'
        borderRadius='md'
        border='1px solid #e9e9e9'
        borderLeftColor='#5686ff'
        borderLeftWidth='5px'
        minH='180px'
      >
        <Heading marginBottom='1' lineHeight='1.2' size='md' textAlign='start' w='100%'>
          <LinkOverlay textDecoration='none' _hover={linkHoverStyle} href={link} color='black'>
            {title}
          </LinkOverlay>
        </Heading>
        <Text
          as='p'
          marginTop='2'
          marginBottom='2'
          color='black'
          fontSize='md'
          lineHeight='1.33'
        >
          {description}
        </Text>
        <Flex
          w='100%'
          justify='flex-start'
          align='center'
          fontSize='.8rem'
        >
          Status: 
          <Popover>
            <PopoverTrigger>
            <Flex as='button' type='button' borderWidth='1px' border='none' color={completed ? '#1e830ceb' : 'black'} ml='6px' align='center'>
              {completed ? 'Completed' : 'In progress'}
            </Flex>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>About Article Status</PopoverHeader>
              <PopoverBody>I'm trying to release the Quick Bit articles as fast and frequently as possible. For that reason I publish incomplete articles
                as public drafts. In that case its status will be: In Progress. I hope to showcase the interesting topics I'm thinking about this way
                and receive feedback in the comments so I can better prioritize finishing and refining them.
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Text fontStyle='italic' textAlign='end' w='55%' fontSize='sm' color='black'>
            On: {date.published.toLocaleDateString()}
          </Text>
        </Flex>
      </LinkBox >
    </StyledBox>
  )
}