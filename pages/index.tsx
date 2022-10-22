import { Box, Flex, Heading, Image, SkeletonText, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import TopBackground from 'components/TopBackground'
import { darkTextColor } from 'constants/styles/commonStyles'
import { carouselText, sloganFontSize } from 'constants/styles/indexStyles'
import { BackgroundContext } from 'contexts/BackgroundProvider'
import { UserContext } from 'contexts/UserProvider'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useCallback, useContext, useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

const fontSizes = ['2.7rem', '2.9rem', '65px', '80px']
const headingLh = ['2.8rem', '3.1rem', '68px', '83px']
const earlyAccessFs = { base: '16px' }
const earlyAccessLh = { base: '18px' }
const earlyAccessMt = { base: '20px', lg: '25px' }
const headingMts = {base: null, lg: '25px'}
const spacerHeights = ['100px', '125px', '120px']
const spacerMts = ['0', '30px', '40px', '0']
const titleMinH = { base: '110px', md: 'none' }
const secondaryHeaderMb = { base: '170px', md: '180px', lg: '120px' }
const introFs = { base: '18px', md: '24px' }
const introFw = { base: '400', sm: '500', md: '500' }

const PageWrapper = styled(Flex)`
  .heading-text {
    box-decoration-break: clone;
    -webkit-text-fill-color: transparent;
  }
`

const indexSEO = {
  title: "Full Context Development - The Next Level of Programming",
  description: `Master the highest-level of technical decision making. A practical guide to hack profits as a software engineer.`,
  canonical: 'https://www.fullcontextdevelopment.com',
  openGraph: {
    url: 'https://www.fullcontextdevelopment.com',
    title: 'Full Context Development - The Next Level of Programming',
    description: "Learn to write code that makes money - the software engineer's guide to hack profits.",
  },
}

const marginTop = ['87px !important', '87px !important', '100px !important', '91px !important']
const carouselBgW = { base: '114%', md:'107%', lg: '795px' }
const carouselBgH = { base: '194px' }
const carouselBgTop = { base: '-50px', sm: '-60px', md: '-50px' }
const carouselBgLeft = { base: '-20px', lg: '-59px' }
const carouselImgLeft = { base: 'calc(50% - 52.5px)', lg: '-85px' }
const carouselImgTop = { base: '-125px', lg: '-105px' }
const introWrapW = { base: '100%', md: '80%' }
const introWrapM = { base: '0 auto 140px auto', md: '0 auto 80px auto' }

const carouselStyle = {
  '.fader': {
    width: '100%'
  },
  '@media screen and (min-width: 48em)': {
    '.swiper-wrap': {
      maxWidth: '700px'
    },
    '.fader': {
      width: '700px'
    },
  }
}

const SliderText = ({ children }) => (
  <Text
    as='h2'
    textAlign='center'
    fontSize={sloganFontSize}
    fontWeight='700'
    color='white'
    lineHeight='1.2'
    letterSpacing='-1px'
    mx='50px'
    pos='relative'
  >
    {children}
  </Text>
)

const swiperModules = [Autoplay, Navigation]

export default function Index() {
  const [ Skills, setBelowFold2 ] = useState(null)
  const [ Pricing, setBelowFold5 ] = useState(null)
  const [ About, setBelowFold6 ] = useState(null)
  const [ HelpToImages, setHelpToImages ] = useState(null)
  const [ currentCarousel, setCurrentCarousel ] = useState(0)
  const { user } = useContext(UserContext)
  const { setBgView } = useContext(BackgroundContext)
  const router = useRouter()

  useEffect(() => {
    setBgView('index')
    if (user.loggedIn) {
      router.push('/home')
    } else if (!HelpToImages || !Skills || !Pricing || !About) {
      const Component1 = dynamic(
        () => import('../components/indexParts/CalloutImages'),
        { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
            <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
          </Flex>,
          ssr: false
        },
      )
      setHelpToImages(() => <Component1 />)

      const Component2 = dynamic(
        () => import('../components/indexParts/Skills'),
        { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
            <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
          </Flex>,
          ssr: false
        },
      )
      setBelowFold2(() => <Component2 />)

      const Component5 = dynamic(
        () => import('../components/indexParts/Pricing'),
        { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
            <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
          </Flex>,
          ssr: false
        },
      )
      setBelowFold5(() => <Component5 />)

      const Component6 = dynamic(
        () => import('../components/indexParts/About'),
        { loading: () => <Flex w='100%' align='center' justify='center' mb='100px'>
            <SkeletonText mt='4' noOfLines={4} spacing='4' width='35%' />
          </Flex>,
          ssr: false
        },
      )
      setBelowFold6(() => <Component6 />)
    }

  }, [user])

  const onSliderChangeHandler = useCallback(({activeIndex}) => {
    setCurrentCarousel(activeIndex)
  }, [])

  return (
    <>
      <NextSeo {...indexSEO} />
      <PageWrapper
        h='auto'
        minH='100vh'
        w='100%'
        mt={marginTop}
        bg='transparent'
        direction='column'
        align='center'
        fontFamily='Inter,"Trebuchet MS",Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
        overflow='hidden' // TODO identify why does the layout overflow on mobile view and solve that instead of handling the symptom.
      >
        <TopBackground />
        <Heading
          maxW='1200px'
          minH={titleMinH}
          as='h1'
          mt={headingMts}
          color='transparent'
          textAlign='center'
          letterSpacing='1px'
          lineHeight={headingLh}
          fontSize={fontSizes}
          fontWeight='700'
          textDecoration='none'
          bg='linear-gradient(-70deg,#a2facf,#64acff)'
          bgClip='text'
          className='heading-text'
          zIndex='1'
        >
          Full Context Software Development
        </Heading>
        <Text
          mt={earlyAccessMt}
          textAlign='center'
          letterSpacing='1px'
          lineHeight={earlyAccessLh}
          fontSize={earlyAccessFs}
          fontWeight='700'
          textDecoration='none'
          color='#81d1e8'
          zIndex='1'
        >
          - NOW FREE AND OPEN SOURCE -
        </Text>
        <Flex h={spacerHeights} mt={spacerMts} justify='center' align='flex-start' zIndex='1'></Flex>
        <Box
          m={introWrapM}
          w={introWrapW}
          minW='270px'
        >
          <Flex w='100%' align='center' justify='center' direction='column' sx={carouselStyle}>
            <Text
              fontSize={introFs}
              fontWeight={introFw}
              lineHeight='30px'
              mb={secondaryHeaderMb}
              color={darkTextColor}
              textAlign='center'
              maxW='820px'
              px='18px'
              as='h2'
              letterSpacing='-0.5px'
            >
              You mastered coding, landed the dream job, but to proceed further you are expected to <u>deliver <b>value</b> and demonstrate <b>impact</b></u>. <br /> If nobody taught you how to do that, <br /> here you can learn to:
            </Text>
            <Fade direction='left' delay={100} triggerOnce className='fader'>
              <Flex w='100%' mb='50px' pos='relative'>
                <Flex pos='absolute' w={carouselBgW} h={carouselBgH} bg='linear-gradient(-70deg,#710eaf,#5686ff)' top={carouselBgTop} left={carouselBgLeft} borderRadius='3xl' transform='skew(333deg, 178deg)' boxShadow='8px 7px 25px #00000033' />
                { currentCarousel === 0
                  ? <Image src='/img/carousel/architecture.svg' pos='absolute' left={carouselImgLeft} top={carouselImgTop} w='105px' h='105px' zIndex='2' userSelect='none'/>
                  : currentCarousel === 1
                  ? <Image src='/img/carousel/evaluate.svg' pos='absolute' left={carouselImgLeft} top={carouselImgTop} w='105px' h='105px' zIndex='2' userSelect='none'/>
                  : currentCarousel === 2
                  ? <Image src='/img/carousel/sell.svg' pos='absolute' left={carouselImgLeft} top={carouselImgTop} w='105px' h='105px' zIndex='2' userSelect='none'/>
                  : currentCarousel === 3
                  ? <Image src='/img/carousel/design.svg' pos='absolute' left={carouselImgLeft} top={carouselImgTop} w='105px' h='105px' zIndex='2' userSelect='none'/>
                  : null
                }
                <Swiper
                  className='swiper-wrap'
                  navigation={true}
                  modules={swiperModules}
                  grabCursor={true}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: true,
                  }}
                  onSlideChange={onSliderChangeHandler}
                >
                  <SwiperSlide>
                    <SliderText>
                     <><span style={carouselText}>Think</span> like an <span style={carouselText}>Enterprise Architect</span> starting from today</>
                    </SliderText>
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderText>
                     <><span style={carouselText}>Evaluate technologies</span> like a <span style={carouselText}>CTO</span> regardless your experience</>
                    </SliderText>
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderText>
                     <><span style={carouselText}>Sell your ideas</span> like a <span style={carouselText}>Consultant</span> whenever needed</>
                    </SliderText>
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderText>
                     <><span style={carouselText}>Design software</span> like a <span style={carouselText}>Tech Lead</span> at a Fortune 500 company</>
                    </SliderText>
                  </SwiperSlide>
                </Swiper>
              </Flex>
            </Fade>
          </Flex>
        </Box>
        {HelpToImages}
        {Skills}
        {Pricing}
        {About}
      </PageWrapper>
    </>
  )
}