import { Flex, Heading, Icon, Image, Text } from '@chakra-ui/react'
import { BlogTags } from 'components/blog/BlogTags'
import { LatestPosts } from 'components/blog/LatestPosts'
import { BackgroundContext } from 'contexts/BackgroundProvider'
import { BlogTOCContext } from 'contexts/BlogTOCProvider'
import { MobileContext } from 'contexts/MobileProvider'
import { useCallback, useContext, useEffect, useState } from 'react'
import { IoMdEye } from 'react-icons/io'
import { MobileMenuButton } from './MobileMenu'

const contentMt = { base: '0', md: '-30vh', lg: '-30vh' }
const contentP = { base: 0, md: 12 }
const contentBorderH = { base: 0, md: 'calc(30vh)' }
const contentPt = { base: '40px', md: 12 }
const contentW = { base: '100%', md: '80%' }
const metaPublishJustify = { base: 'center', md: 'flex-end' }
const metaOtherJustify = { base: 'center', md: 'flex-start' }
const metaWrapJustify = { base: 'center', md: 'space-between' }
const metaWrapMb = { base: '20px', md: '50px' }
const metaRowDir: any = { base: 'column', md: 'row-reverse'}
const metaOtherMt: any = { base: '5px', md: '0' }
const sidePostsD = { base: 'none', '2xl': 'flex'}
const titleP = { base: '2%', md: '2%'}
const headerH = { base: '50vh', md: '100vh'}
const headerMaxH = { md: '100vh'}
const imageT = { base: '64px', md: '0'}
const headingSize: any = { base: '3xl', md: '4xl', lg: '5xl', xl: '7xl'}
const headingLH = { base: 'var(--chakra-fontSizes-4xl)', md: 'var(--chakra-fontSizes-5xl)', lg: 'var(--chakra-fontSizes-6xl)', xl: 'var(--chakra-fontSizes-8xl)' }
const headingMt = { base: '15vh', md: '25vh' }
const tocW: any = {
  base: '100%'
}

const LayoutFixer = ({ children }) => <Flex
  display={sidePostsD}
  maxW='24%'
  w='100%'
  pos='sticky'
  top='65px'
  h='100vh'
  p='12'
  pr='0'
  pt='7'
  overflowX='hidden'
>{children}</Flex>

const contentBorder = {
  base: '6px solid #32b997',
  md: '0'
}

const contentJustify: any = {
  base: 'space-evenly',
  '2xl': 'flex-start'
}

const contentMaxW: any = {
  base: '100%',
  md: '720px'
}

export const PostLayout = ({ title, tags, svg, imgSrc, imgSrcSet = null, imgAlt, publishDate, updateDate = null, children, emphasis = false, views = null, toc = false }) => {
  const { setBgView } = useContext(BackgroundContext)
  const imgDataUri = `data:image/svg+xml;base64,${svg}`
  const [imgLoaded, setImgLoaded] = useState(false)
  const { desktopTocRef, mobileTocRef, showMobileMenu, toggleMobileMenu, closeMobileMenu } = useContext(BlogTOCContext)
  const { isMobile } = useContext(MobileContext)

  useEffect(() => {
    if (isMobile && toc) {
      // toggling the main menu kills it for now...
      document.documentElement.style.setProperty('--root-z', '2') // to float toc and toc toggle button over site footer
    }
  }, [isMobile, toc])

  const onImgLoaded = useCallback(() => {
    setTimeout(() => setImgLoaded(true), 200)
  }, [])

  useEffect(() => {
    setBgView('blogPost')
    
    return () => {
      setBgView('generic')
      closeMobileMenu()
    }
  }, []) 

  return (
    <>
      <Flex
        h='auto'
        mt='0'
        w='100%'
        direction='column'
        align='center'
        fontFamily="Inter, sans-serif"
        fontWeight='400'
        color='rgb(55, 65, 81)'
      >
        <Flex
          w='100%'
          h={headerH}
          minH='290px'
          maxH={headerMaxH}
          direction='column'
          align='center'
          justify='flex-start'
          bg='transparent'
          color='white'
          zIndex='2'
          pointerEvents='none'
        >
          <Heading maxW='1240px' as='h1' fontSize={headingSize} lineHeight={headingLH} mt={headingMt} textAlign='center' textShadow='0 0 5px black' px={titleP} >{title}</Heading>
          <Flex maxW='1240px' w='80%' justify='center' align='center' mt='25px' ><BlogTags tags={tags} justify='center' alt emphasis={emphasis}/></Flex>
        </Flex>
        <Flex
          pos='absolute'
          top={imageT}
          w='100%'
          h={headerH}
          minH='290px'
          overflow='hidden'
          zIndex='1'
        >
          <Image
            w='100%'
            fit='cover'
            filter={imgLoaded ? 'brightness(0.6)' : 'brightness(0.6) blur(12px)'}
            transform={imgLoaded ? null : 'scale(1.03)'}
            transition={imgLoaded ? 'transform 200ms ease-in-out' : null}
            onLoad={onImgLoaded}
            src={imgSrc}
            srcSet={imgSrcSet}
            fallbackSrc={imgDataUri}
            alt={imgAlt}

          />
        </Flex>
        <Flex position='relative' w='100%' align='flex-start' justify={contentJustify} direction='row' zIndex='1'>
          <LayoutFixer>
            <Flex ref={desktopTocRef} w={tocW} direction='column' pb='80px'/>
            <Flex pos='absolute' w='6px' right='-6px' top='0' height='100vh'/>
          </LayoutFixer>
          <Flex
            maxW='940px'
            w={contentW}
            minH='100vh'
            direction='column'
            align='center'
            mb='20px'
            mt={contentMt}
            bg='white'
            p={contentP}
            pt={contentPt}
            borderTopLeftRadius='12px'
            borderTopRightRadius='12px'
            position='relative'
          >
            <Flex
              w='100%'
              top='0'
              h={contentBorderH}
              position='absolute'
              borderTop={contentBorder}
              borderLeft={contentBorder}
              borderRight={contentBorder}
              borderTopLeftRadius='12px'
              borderTopRightRadius='12px'
              pointerEvents='none'
            />
            <Flex
              maxW='720px'
              w='100%'
              justify={metaWrapJustify}
              mb={metaWrapMb}
              direction={metaRowDir}
              fontFamily='Inter,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
            >
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
              <Flex
                w='100%'
                justify={metaOtherJustify}
                color='gray'
                align='center'
                fontSize='.75rem'
                mt={metaOtherMt}
              >
                {updateDate ? <>
                  <Text mr='5px'>Last updated:</Text>
                  <Text mr='10px'>{updateDate.toLocaleDateString()}</Text>
                  {views ? <>
                    <Text mr='10px'>—</Text>
                    <Text lineHeight='0.5rem' mr='3px'><Icon fontSize='1.2rem' opacity='0.7' as={IoMdEye} /></Text>
                    <Text mr='5px'>Views:</Text>
                    <Text>{views}k</Text>
                  </> : null}
                </> : null}
              </Flex>
            </Flex>
            <Flex maxW={contentMaxW} direction='column' align='flex-start'>
              {children}
            </Flex>
          </Flex>
          <LatestPosts
            display={sidePostsD}
            position='sticky'
            justify='center'
            maxW='24%'
            w='100%'
            m='3'
            mt='6'
            right='0'
            top='100px'
          />
        </Flex>
      </Flex>
      {toc ? <MobileMenuButton isOpen={showMobileMenu} toggleMobileMenu={toggleMobileMenu} /> : null}
      <Flex display={showMobileMenu ? 'flex' : 'none'} position='fixed' zIndex='2' top='61px' h='calc(100vh - 55px)' left='0' right='0' bg='whitesmoke'>
        <Flex ref={mobileTocRef} direction='column' position='relative' my='30px' w='100%'/>
      </Flex>
    </>
  )
}