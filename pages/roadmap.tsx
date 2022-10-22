import { useCallback, useState } from 'react'
import { Flex, Text, ButtonGroup, Button, IconButton, Icon } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { DownloadIcon } from '@chakra-ui/icons'
import { GoDeviceDesktop } from 'react-icons/go'
import { ImMobile2 } from 'react-icons/im'

const ReactViewer = dynamic(
  () => import('react-viewer'),
  { ssr: false }
)

const titleM = { base: '60px auto 40px auto', md: '80px auto 40px auto' }
const sloganFontSize = { base: '1.5rem', md: '1.8rem' }
const textW80 = {base: '80%', md: '100%'}
const textP20 = {base: '0 20px', md: '0'}
const introHeaderFs = {base: '1.5rem', md: '2.5rem'}
const introTextFs = { base: '1rem', md: '17px' }
const marginTop = {
  base: '0 !important'
}
const paddingTops = ['176px !important', '120px !important', '82px !important', '91px !important']

const roadmapSEO = {
  title: "Code To Money Roadmap • Full Context Development",
  description: "The map of the code to money road showing how to find the technical impact points at each stage of the sofware development lifecycle to improve revenue",
  canonical: 'https://www.fullcontextdevelopment.com/roadmap',
  openGraph: {
    url: 'https://www.fullcontextdevelopment.com/roadmap',
    title: 'Code To Money Roadmap - The visual guide to writing code with financial results in mind',
    description: 'Learn how to find the technical impact points at each stage of the sofware development lifecycle to improve revenue',
  }
}

const imgGridDir: any = {
  base: 'column',
  md: 'row'
}
const layoutAlign: any = {
  base: 'center',
  md: 'flex-start'
}
const textAlign: any = {
  base: 'center',
  md: 'start'
}
const layout1ColM: any = {
  base: '0',
  lg: '0 0 0 120px'
}
const descWrpMW: any = {
  base: null,
  lg: '540px',
}
const descWrpW: any = {
  base: '100%',
  lg: null,
}
const descWrpBg: any = {
  base: null,
  md: '#ffffffb8'
}
const bgPos: any = {
  base: null,
  md: '0% 90%',
  lg: '110% 45%',
  xl: '170% 45%'
}
const bgSize: any = {
  base: null,
  md: '100% 90%',
  lg: '78% 100%',
  xl: '78% 130%'
}
const descPr: any = {
  base: '0',
  lg: '20px'
}
const descW: any = {
  base: '100%',
  md: '540px'
}
const btnsMW: any = {
  base: '100%',
  md: '450px'
}
const bgImg: any = {
  base: null,
  md: "url(/img/demo-dark.png)"
}
const btnsMt: any = {
  base: '30px',
  md: '80px'
}
const mobileDisplay: any = {
  base: 'flex',
  md: 'none'
}
const largeDisplay: any = {
  base: 'none',
  md: 'flex'
}

export default function Roadmap() {
  const [viewer2Open, setViewer2Open] = useState(false)
  const [viewer4Open, setViewer4Open] = useState(false)

  const openViewer2 = useCallback(() => {
    setViewer2Open(true)
  }, [])

  const closeViewer2 = useCallback(() => {
    setViewer2Open(false)
  }, [])

  const openViewer4 = useCallback(() => {
    setViewer4Open(true)
  }, [])

  const closeViewer4 = useCallback(() => {
    setViewer4Open(false)
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover, initial-scale=1.0, width=device-width, user-scalable=no" />
      </Head>
      <NextSeo {...roadmapSEO} />
      <Flex
        h='auto'
        w='100%'
        direction={imgGridDir}
        align={layoutAlign}
        fontFamily='Inter,"Trebuchet MS",Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
        mt={marginTop}
        pt={paddingTops}
        bgImage={bgImg}
        objectFit='contain'
        bgRepeat='no-repeat'
        bgPos={bgPos}
        bgSize={bgSize}
        pos='relative'
        overflowX='hidden'
      >
        <Flex minH='300px' w='180%' pos='absolute' left='-38%' top='6%' zIndex='-2' display={mobileDisplay}>
          <Image layout='fill' objectFit='cover' objectPosition='0 0' src='/img/demo-dark.png' />
        </Flex>
        <Flex maxW={descWrpMW} w={descWrpW} m={layout1ColM} bg={descWrpBg} minH='calc(100vh - 91px)' align='center' justify='center'>
          <Flex display={mobileDisplay} w='100%' h='190px' pos='absolute' top='200px' left='0' backgroundImage='linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1)100%)' zIndex='-1'/> 
          <Flex w={descW} direction='column' align='center' justify='center' h='auto' pr={descPr} id='description'>
            <Text
              textAlign={textAlign}
              fontSize={sloganFontSize}
              color='black'
              lineHeight='1.2'
              m={titleM}
              w='100%'
              minW='270px'
              textTransform='uppercase'
              letterSpacing='0.08rem'
              textShadow='0px 0px 6px #00000038'
            >
              Code to Money Roadmap
            </Text>
            <Text textAlign={textAlign} fontSize={introHeaderFs} color='rgb(86, 134, 255)' fontWeight='700' lineHeight='1.05' mb='30px' w={textW80} minW='265px' >
              The visual guide to writing software with financial results in mind
            </Text>
            <Text textAlign='start' fontSize={introTextFs} fontWeight='bold' color='black' lineHeight='22px' w={textW80} p={textP20} mb='20px' >
              This guide offers a systemic overview of how software makes money and how the different engineering concerns play into the financial performance of a product.
              It helps you to design solutions that create more revenue by providing a practical checklist for all the 10 relevant steps of the development lifecycle.
              The relationship between the different stages and the business mechanism are explained at each step in plain words, including
              a developer focused summary.
            </Text>
            <Text textAlign='start' fontSize={'0.8rem'} color='black' lineHeight='18px' w={textW80} p={textP20} >
              There are instructions available at the bottom of the guide about the elements of the roadmap and how to use it as a whole.
              Because of the huge resolution (15000 by 19400 px for the desktop version) it can be slow to handle them in the browser, consider downloading in that case.
            </Text>

            <Flex direction={imgGridDir} minW={btnsMW} mt={btnsMt} display={largeDisplay}>
              <Flex direction={imgGridDir} w='100%' justify='space-between' mb='80px' align='center'>
                <ButtonGroup size='md' isAttached colorScheme='blue' variant='outline'>
                  <Button onClick={openViewer2} leftIcon={<Icon as={GoDeviceDesktop} />} mr='-px' borderColor='#5686ff' color='#5686ff'>View Desktop</Button>
                  <IconButton as='a' href='/img/roadmap/desktop/code-to-money-roadmap-v.0.0.1-lq.png' download='code-to-money-roadmap-v.0.0.1-lq.png' aria-label='Directly download the code to money roadmap desktop image' icon={<DownloadIcon />} borderColor='#5686ff' color='#5686ff'/>
                </ButtonGroup>
                <ButtonGroup size='md' isAttached colorScheme='blue' variant='outline'>
                  <Button onClick={openViewer4} leftIcon={<Icon as={ImMobile2} />} mr='-px' borderColor='#5686ff' color='#5686ff'>View Mobile</Button>
                  <IconButton as='a' href='/img/roadmap/mobile/code-to-money-roadmap-v.0.0.1-mobile-lq.png' download='code-to-money-roadmap-v.0.0.1-mobile-lq.png' aria-label='Directly download the code to money roadmap mobile image' icon={<DownloadIcon />} borderColor='#5686ff' color='#5686ff'/>
                </ButtonGroup>
              </Flex>  
            </Flex>

            <Flex direction={imgGridDir} minW={btnsMW} mt={btnsMt} display={mobileDisplay}>
              <Flex direction={imgGridDir} w='100%' justify='space-between' mb='80px' align='center'>
                <ButtonGroup size='sm' isAttached colorScheme='blue' variant='outline' mb='20px'>
                  <Button onClick={openViewer2} leftIcon={<Icon as={GoDeviceDesktop} />} mr='-px' borderColor='#5686ff' color='#5686ff'>View Desktop</Button>
                  <IconButton as='a' href='/img/roadmap/desktop/code-to-money-roadmap-v.0.0.1-lq.png' download='code-to-money-roadmap-v.0.0.1-lq.png' aria-label='Directly download the code to money roadmap desktop image' icon={<DownloadIcon />} borderColor='#5686ff' color='#5686ff'/>
                </ButtonGroup>
                <ButtonGroup size='sm' isAttached colorScheme='blue' variant='outline'>
                  <Button onClick={openViewer4} leftIcon={<Icon as={ImMobile2} />} mr='-px' borderColor='#5686ff' color='#5686ff'>View Mobile</Button>
                  <IconButton as='a' href='/img/roadmap/mobile/code-to-money-roadmap-v.0.0.1-mobile-lq.png' download='code-to-money-roadmap-v.0.0.1-mobile-lq.png' aria-label='Directly download the code to money roadmap mobile image' icon={<DownloadIcon />} borderColor='#5686ff' color='#5686ff'/>
                </ButtonGroup>
              </Flex>  
            </Flex>
          </Flex>
        </Flex>
        <ReactViewer
          visible={viewer2Open}
          onClose={closeViewer2}
          images={[{ src: '/img/roadmap/desktop/code-to-money-roadmap-v.0.0.1-lq.png', downloadUrl: '/img/roadmap/desktop/code-to-money-roadmap-v.0.0.1-lq.png' }]}
          noNavbar
          changeable={false}
          zoomSpeed={0.7}
          defaultScale={1.25}
          loop={false}
          showTotal={false}
          downloadable
          rotatable={false}
          scalable={false}
        />
        <ReactViewer
          visible={viewer4Open}
          onClose={closeViewer4}
          images={[{ src: '/img/roadmap/mobile/code-to-money-roadmap-v.0.0.1-mobile-lq.png', downloadUrl: '/img/roadmap/mobile/code-to-money-roadmap-v.0.0.1-mobile-lq.png' }]}
          noNavbar
          changeable={false}
          zoomSpeed={0.7}
          defaultScale={1.25}
          loop={false}
          showTotal={false}
          downloadable
          rotatable={false}
          scalable={false}
        />
      </Flex>
    </>
  )
}