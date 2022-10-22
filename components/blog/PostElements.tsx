import { ChatIcon } from '@chakra-ui/icons'
import { Box, Button, Collapse, Flex, Icon, ListIcon, ListItem, OrderedList, Text, TextProps, UnorderedList, useDisclosure } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { NewsletterSubscribe } from 'components/NewsletterSubscribe'
import { ulMr } from 'components/reviews/common'
import Script from 'next/script'
import Scrollbars from 'rc-scrollbars'
import React from 'react'
import { createPortal } from 'react-dom'
import { BiSubdirectoryRight } from 'react-icons/bi'
import { FaHashtag } from 'react-icons/fa'
import { HiEye, HiEyeOff } from 'react-icons/hi'

const textW90 = {base: '95%', md: '100%'}
const textP20 = {base: '0 15px', md: '0'}
const postHeadingFs = {base: '2rem'}
const paragraphFs = { base: '16px' }
const paragraphLh = { base: '27.2px' }
const quoteFs = { base: '1.2rem' }
const headingPl = {
  base: '25px',
  md: '0'
}
const headingPr = {
  base: '25px',
  md: '0'
}
const hashHover = {
  '&:hover .hash': {
    color: 'inherit'
  }
}
const commentW = { base: '90%', md: '80%' }
const footerP = { base: '0 30px', md: '0' }
const hashtagDisplay = {base: 'none', md: 'block'}

// for some freakin' reason the normal, generated emotion css class randomly doesn't appear on some of these paragraps
// whatever I do, even though it's the exact same component as the others. This is workaround to apply the margin  
const FixCssBug: any = styled.section`
  ${({fullSize} : any) => {
    return fullSize ? 'min-width: 100%;' : null
  }};
  display: ${({display} : any) => {
    return display ? display : 'flex' 
  }};
  ${({update} : any) => {
  return update
    ? `
        background: #f3f6fb;
        margin-bottom: 15px;
        width: 95%;
        margin: 0 auto 15px auto;

        & > p {
          padding-left: 9px;
          padding-right: 9px;
        }

        @media screen and (min-width: 48em) {
          width: 103%;
          padding-left: 10px;
          padding-right: 10px;
          margin: 0 0 15px 0;
          left: -10px;
          position: relative;
          
          & > P {
            padding-left: 0;
            padding-right: 0;
          }
        }
      `
    : null
  }};
  justify-content: center;
`

const CommentWrapper = styled.section`
  width: 100%;
  margin-bottom: 50px;

  .comment-collapse {
    width: 100%
  }
`

const updateMap: any = {}

const getUpdate = (update) => {
  if (!updateMap[update]) {
    updateMap[update] = {
      content: `"Update: ${update}"`,
      display: 'block',
      position: 'absolute',
      color: '#000000d1',
      background: '#f8f8f8',
      top: '-33px',
      left: '-1px',
      fontSize: '0.7rem',
      lineHeight: '0.9rem',
      padding: '1px 3px',
      fontWeight: 'bold',
      border: '1px solid #d7d7d7',
      borderRadius: '5px',
      whiteSpace: 'nowrap',
    }
  }
  return updateMap[update]
}

export const Paragraph = ({children, display = null, maximalW, minorNext, fullSize, updateStyle, update = null, id = null, ...rest}: {children: any, display?: any, maximalW?: boolean, fullSize?: boolean, minorNext?: boolean, updateStyle?: boolean, update?: string } & TextProps) => {
  return (
    <FixCssBug display={display} update={update || updateStyle} fullSize={fullSize}>
      {id ? <Box id={id} position='relative' top='-90px'/> : null}
      <Text textAlign='start' fontSize={paragraphFs} color='#111' lineHeight={paragraphLh} mb={update || updateStyle ? '8px': minorNext ? '32px' : '48px'} w={maximalW ? '100%' : textW90} p={textP20} mx='auto' mt={update || updateStyle ? '8px' : null} _before={update ? getUpdate(update) : null} position={update || updateStyle ? 'relative' : null} {...rest}>{children}</Text>
    </FixCssBug>
  )
}

export const PostHeading = ({children, as = 'h2', display = null, id = null, maximalW, ...rest}: {children: any, as?: any, display?: any, id?: any, maximalW?: boolean} & TextProps) => {
  return (
    <Text {...rest} textAlign='start' fontSize={postHeadingFs} fontWeight='700' lineHeight='1.05' mb='15px' w={'100%'} as={id ? 'a' : as} display={display ? display : id ? 'block' : null} pl={maximalW ? null : headingPl} pr={maximalW ? null : headingPr} href={id? `#${id}` : null} sx={hashHover}>
      {id ? <Box display={hashtagDisplay} className='hash' w='0' h='0' pos='relative' color='#8181818f'>
        <Icon fontSize='1.1rem' position='absolute' left='-25px' top='8px' as={FaHashtag}/>
      </Box> : null}
      {id ? <Box id={id} position='relative' top='-90px'/> : null}
      {children}
    </Text>
  )
}

export const Quote = ({children, bg = 'white', borderColor = '#343434a6', noMb = false, noMt = false, smallM = false}: {children: React.ReactChild, borderColor?: string, bg?: string, noMb?: boolean, noMt?: boolean, smallM?: boolean}) => {
  return (
    <Flex justify='flex-start' bg={bg} m={noMt ? '0 0 35px 0' : smallM ? '10px 0' : noMb ? '35px 0 0 0' : '35px 0 35px 0'} ml='2.5%' pos='relative'>
      <Flex w='10px' borderLeft='3px solid' borderColor={borderColor} mr='10px'></Flex>
      <Flex w='calc(100% - 10px)' py='15px' pr='15px'>
        <Text fontSize={quoteFs} lineHeight='1.2' fontFamily='ui-sans-serif' fontStyle='italic'>{children}</Text>
      </Flex>
    </Flex>
  )
}

const postListMl: any = {
  base: '15px',
  md: '30px'
}

export const PostList = ({ children, minor = false, noMb = false, ...rest }) => {
  return (
    <Flex justify='flex-start'>
      <UnorderedList pl='10px' ml={postListMl} mr={ulMr} my={!noMb ? minor ? '25px': '50px' : null} mb={noMb? '0' : null} mt={noMb? minor ? '25px': '50px' : null} spacing={4} lineHeight={1.5} {...rest}>
        { children }
      </UnorderedList>
    </Flex>
  )
}

export const PostFooter = () => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Box w='100%' direction='column' align='center' mt='20px' p={footerP}>
        <Script
          src="https://giscus.app/client.js"
          data-repo="jozsefm/fullcontextdevelopment-blog-comments"
          data-repo-id="R_kgDOHPsPsw"
          data-category="Announcements"
          data-category-id="DIC_kwDOHPsPs84COztP"
          data-mapping="title"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="top"
          data-theme="light"
          data-lang="en"
          crossOrigin="anonymous"
          async
        />
        <Text fontFamily='Gerogia, serif' fontStyle='italic' mb='30px' fontWeight='bold' fontSize='1.4rem' textAlign='center'>If you want to get notified when similar content is coming out</Text>
        <NewsletterSubscribe />
        <Button onClick={onToggle} mt='50px' leftIcon={<ChatIcon />} id='comment-section'>Show Comments</Button>
        <CommentWrapper>
          <Collapse in={isOpen} animateOpacity className='comment-collapse'>
            <Box className="giscus" minW='100%' maxW='900px' w={commentW} m='25px auto 100px auto'/>
          </Collapse>
        </CommentWrapper>
      </Box>
    </>
  )
}

const tocItemHoverStyle = {
  '& a:hover': {
    color: 'rgb(86, 134, 255)',

  }
}

const ToC = ({ children, target }) => {
  return target ? createPortal(children, target) : null
}

const ToCItem = ({children, href, subItems = null, onClick}) => {
  return <ListItem sx={tocItemHoverStyle} w='100%' lineHeight='1.4' letterSpacing='-0.6px' fontWeight='500'>
    <a onClick={onClick} href={href}>{children}</a>
    {subItems
      ? <UnorderedList mt='5px' spacing='1.1'>
          {subItems.map(({name, href}) => {
            return (
              <ListItem key={name} fontSize='0.8rem' listStyleType='none' ml='-12px' letterSpacing='0px' fontWeight='400' fontStyle='italic'>
                <ListIcon as={BiSubdirectoryRight}/>
                <a onClick={onClick} href={href}>{name}</a>
              </ListItem>
            )
          })}
        </UnorderedList>
      : null}
  </ListItem>
}

const tocFs: any = {
  base: '0.9rem',
}

const tocW: any = {
  base: '100%',
  md: '85%',
}

const tocBorder: any = {
  base: 'none',
  md: '1px solid #e0e0e0',
}

export const BlogToC = ({ tocTarget, toggelOnNav, tocItems }) => {
  return (
    <ToC target={tocTarget}>
      <Text textAlign='start' fontSize='1.2rem' ml='28px' mb='15px' w='85%'>TABLE OF CONTENTS</Text>
      <Flex directon='column' overflowY='hidden' overflowX='hidden' p='25px 15px' w={tocW} border={tocBorder} borderRadius='md' minH='82vh'>
        <Scrollbars universal autoHide>
          <OrderedList fontSize={tocFs} spacing={3} color='#000' w='95%' listStyleType='none'>
            {tocItems ? tocItems.map(( { href, name, subItems = null }) => {
              return <ToCItem href={href} onClick={toggelOnNav} subItems={subItems} key={href}>{name}</ToCItem>
            }) : null}
          </OrderedList>
        </Scrollbars>
      </Flex>
    </ToC>
  )
}

export const DescToggle = ({ children, ...rest }) => {
  const { isOpen, onToggle } = useDisclosure()

  return <Flex borderRadius='lg' direction='column' align='center' justify='flex-start' {...rest}>
    <Text as='button' onClick={onToggle} w='100%'>
      <Text fontSize={'0.85rem'} display='flex' alignItems='center' justifyContent={'flex-start'} w='195px' textAlign='start' pl='5px' pr='25px' py='1px' bg='#ddd' borderRadius='lg' pos='relative'>
        <b>Toggle short description</b>
        <Text fontSize='1rem' fontStyle='italic' display='inlin-block' pos='absolute' right='6px' top='2px'>{isOpen  ? <Icon as={HiEyeOff} /> : <Icon as={HiEye} />}</Text>
      </Text>
    </Text>
    <Collapse in={isOpen} animateOpacity>
      <Box w='100%'>
        {children}
      </Box>
    </Collapse>
  </Flex>
}