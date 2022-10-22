import {
  Flex, Heading, Icon, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent,
  PopoverHeader, PopoverTrigger, Text
} from '@chakra-ui/react'
import { BackgroundContext } from 'contexts/BackgroundProvider'
import { useContext, useEffect } from 'react'
import { BsQuestionCircle } from 'react-icons/bs'

const metaPublishJustify = { base: 'center' }
const metaOtherJustify = { base: 'center' }
const articleJustify = { base: 'center', md: 'flex-start' }
const metaWrapJustify = { base: 'center', md: 'space-between' }
const metaWrapMb = { base: '20px', md: '50px' }
const metaRowDir: any = { base: 'column'}
const metaOtherDir: any = { base: 'column', md: 'row'}
const metaOtherMt: any = { base: '5px', md: '40px' }

const marginTops = ['104px !important', '104px !important', '140px !important', '140px !important']

const contentMaxW: any = {
  base: '100%',
  md: '720px'
}

export const QbLayout = ({ title, publishDate, completed, updateDate = null, children, views = null }) => {
  const { setBgView } = useContext(BackgroundContext)

  useEffect(() => {
    setBgView('blogPost')
    
    return () => {
      setBgView('generic')
    }
  }, []) 

  return (
    <>
      <Flex
        h='auto'
        mt={marginTops}
        w='100%'
        direction='column'
        align='center'
        fontFamily="Inter, sans-serif"
        fontWeight='400'
        color='rgb(55, 65, 81)'
      >
        <Flex
          maxW='720px'
          w='100%'
          justify={metaWrapJustify}
          mb={metaWrapMb}
          direction={metaRowDir}
        >
          <Heading textAlign='center'>{title}</Heading>
          <Flex
            justify={metaOtherJustify}
            mt={metaOtherMt}
            direction={metaOtherDir}
          >
            <Flex
              w='100%'
              justify={articleJustify}
              color='gray'
              align='center'
              fontSize='.9rem'
            >
              Article: 
              <Popover>
                <PopoverTrigger>
                <Flex as='button' type='button' borderWidth='1px' color='gray' borderColor='gray' borderStyle={completed ? 'solid' : 'dashed'} borderRadius='5px' ml='10px' px='4px' align='center'>
                  {completed ? 'Completed' : 'In Progress'} <Icon as={BsQuestionCircle} pos='relative' ml='4px' />
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
            </Flex>
            <Flex
              w='100%'
              justify={metaPublishJustify}
              color='gray'
              align='center'
              fontSize='.9rem'
            >
              <Text mr='5px'>Published on:</Text>
              <Text mr='10px'>{publishDate.toLocaleDateString()}</Text>
              <Text mr='5px'>by:</Text>
              <Image
                borderRadius='full'
                boxSize='40px'
                src='/img/joe2.jpg'
                alt={`Avatar of Joe`}
                mr='5px'
              />
              <Text>Joe</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex maxW={contentMaxW} direction='column' align='flex-start'>
          {children}
        </Flex>
      </Flex>
    </>
  )
}