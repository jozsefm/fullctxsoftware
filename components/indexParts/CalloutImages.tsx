import { Flex, Image, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import 'atropos/css/min'
import Atropos from 'atropos/react'
import { darkTextColor } from 'constants/styles/commonStyles'
import { MobileContext } from 'contexts/MobileProvider'
import { useContext, useMemo, useState } from 'react'

const featuresMaxW = { base: '100%', lg: '1200px' }
const featuresMb = { base: '-60px', md: '260px' }
const subHeadFs = { base: '18px', md: '24px' }
const subHeadMb = { base: '130px', md: '170px' }
const mainHeadMb = { base: '50px', md: '200px' }
const mainHeadFs = { base: '2.5rem', md: '60px' }
const mainHeadLh = { base: '2.7rem', md: '68px' }
const imgDescBgBottom = { base: '-1%', md: '-4%' }
const imgDescBgW = { base: '95%', md: '88%', lg: '83%' }
const imgDescBgH = { base: '47%', md: '52%', lg: '42%' }
const imgDescTextBottom = { base: '0%', md: '0%' }
const imgDescTextW = { base: '95%', md: '88%', lg: '83%' }
const imgDescTextH = { base: '45%', md: '48%', lg: '38%' }
const imgDescTextFs = { base: '1rem', md: '0.6rem', lg: '0.625rem', xl: '0.65rem' }
const imgMinH = { base: '100%', md: '265px' }

const img1DescBgH = { base: '53%', lg: '42%' }
const img1DescTextBottom = { base: '4%', md: '0%' }
const img1DescTextH = { base: '48%', lg: '38%' }

const calloutFs = { base: '1.8rem', md: '1.15rem', lg: '1.4rem', xl: '1.5rem' }

const FeaturesWrapper = styled(Flex)`
  -webkit-box-pack: justify;
  -webkit-font-smoothing: antialiased;

  .animation-content {
    width: 100%;
    margin: 15px 0px 15px;

    @media screen and (min-width: 48em) {
      width: calc(33.3333% - 15px);
      margin: 15px 0px 30px;
    }

    @media screen and (min-width: 62em) {
      width: calc(33.3333% - 27px);
    }
  }
`

const atroposContainer: any = {
  '.atropos-inner': {
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center'
  },
  '.atropos': {
    position: 'relative',
    display: 'flex'
  }
}

const getImageTransform = (current, active, isMobile, isBase) => {
  if (current === 0) {
    if (active === 0) {
      return isMobile
        ? `scale(1)`
        : `scale(1.8) translate(120px, 0px)`
    }
    if (active === 1) {
      return isMobile
        ? `scale(${!isBase ? 0.93 : 1.15}) translate(0px, -100px)`
        : `scale(1)`
    }
    if (active === 2) {
      return isMobile
        ? `scale(${!isBase ? 0.93 : 1.15}) translate(0px, 100px)`
        : `scale(1) translate(-40px, 0px)`
    }
  }
  if (current === 1) {
    if (active === 0) {
      return isMobile
        ? `scale(${!isBase ? 0.93 : 1}) translate(0, 100px)`
        : `scale(1) translate(60px, 0px)`
    }
    if (active === 1) {
      return isMobile
        ? `scale(1)`
        : `scale(1.8)`
    }
    if (active === 2) {
      return isMobile
        ? `scale(${!isBase ? 0.88 : 1}) translate(0, 200px)`
        : `scale(1) translate(-60px, 0px)`
    }
  }
  if (current === 2) {
    if (active === 0) {
      return isMobile
        ? `scale(${!isBase ? 0.93 : 1}) translate(0, -100px)`
        : `scale(1) translate(40px, 0px)`
    }
    if (active === 1) {
      return isMobile
        ? `scale(${!isBase ? 0.88 : 1}) translate(0, -200px)`
        : `scale(1)`
    }
    if (active === 2) {
      return isMobile
        ? `scale(1)`
        : `scale(1.8) translate(-120px, 0px)`
    }
  }
}

const subHeadText = `It used to be hard for software engineers to go beyond code. Well, not anymore!`

export default function HelpToImages() {
  const { isBase, isMobile } = useContext(MobileContext)
  const [ activeImage, setActiveImage ] = useState(1)

  const clickHandler = useMemo(() => {
    return [0,1,2].map(i => () => setActiveImage(i))
  }, [])

  const ImageWrapper = useMemo(() => {
    return isMobile ? Flex : Atropos
  }, [isMobile])

  return (
    <>
      <Flex w='100%' align='center' justify='center' direction='column'>
        <Text
          fontSize={subHeadFs}
          fontWeight='500'
          lineHeight='30px'
          mb={subHeadMb}
          color={darkTextColor}
          textAlign='center'
          maxW='750px'
          px='18px'
          as='h2'
          letterSpacing='-0.5px'
        >
          {subHeadText}
        </Text>
      </Flex>
      <Flex w='100%' align='center' justify='center' direction='column'>
        <Text
          fontSize={mainHeadFs}
          fontWeight='700'
          lineHeight={mainHeadLh}
          mb={mainHeadMb}
          color={darkTextColor}
          textAlign='center'
          maxW='920px'
          px='18px'
          as='h2'
          letterSpacing='-0.5px'
        >
          The Full Context Development System will help you to
        </Text>
      </Flex>
      <Flex direction='column' w='100%' mb={featuresMb} align='center'>
        <FeaturesWrapper
          wrap='wrap'
          justify='space-between'
          maxW={featuresMaxW}
          w='100%'
          margin='0 auto'
          fontFamily='Roboto, sans-serif'
          pos='relative'
          top={isMobile ? activeImage === 2 ? '-200px' : activeImage === 0 ? '-100px' : null : null}
        >
          <Flex order={isMobile ? 2 : 1} as='button' className='animation-content' transition='max-height 0.4s ease-out' zIndex={activeImage === 0 ? 2 : isMobile ? 1 : 0} onClick={clickHandler[0]} onMouseOver={clickHandler[0]} maxH={isMobile ? activeImage === 0 ? '400px' : '220px' : null}>
            <Flex sx={atroposContainer} transition='transform 0.4s ease-out, min-height 0.4s ease-out, width 0.4s ease-out' transform={getImageTransform(0, activeImage, isMobile, isBase)} filter={activeImage === 0 ? 'none' : isMobile? 'saturate(0.3) blur(2px)' : 'grayscale(0.2)'} w={isMobile ? activeImage === 0 ? '95%' : '80%' : null} h={isMobile ? '100%' : null} m={isMobile ? '0 auto' : null} minH={isMobile ? activeImage === 0 ? '400px' : null : null} maxW={isMobile ? '450px' : null}>
              <ImageWrapper className="atropos" justify='center'>
                <Image w='100%' h='auto' src='/img/marketing/break-sm.jpg' borderRadius='3xl' boxShadow='2xl' objectFit='cover' minH={imgMinH} data-atropos-offset="-5" />
                <Text textAlign='center' w='100%' pos='absolute' top={activeImage === 0 ? '10%' : '40%'} transition='top 0.2s ease-out' zIndex='1' color='white' fontWeight='bold' fontSize={calloutFs} data-atropos-offset="0" textShadow='0 0 8px #000' px='20px'>Break through the career wall</Text>
                {activeImage === 0
                  ? <>
                    <Flex mb='20px' pos='absolute' bottom={imgDescBgBottom} w={imgDescBgW} h={img1DescBgH} bg='#06060663' borderRadius='8px' backdropFilter='blur(3px)' data-atropos-offset="0"/>
                    <Text mb='20px' pos='absolute' bottom={img1DescTextBottom} w={imgDescTextW} h={img1DescTextH} pt='12px' pl='12px' pr='8px' color='white' data-atropos-offset="0" fontSize={imgDescTextFs} textAlign='start' textShadow='0 0 3px #5686ff'>
                      Handling the business side of software development often seems to be a daunting and boring task, yet to advance beyond a certain level
                      we need to get a handle on these things. I created an easy-to-follow <b>system</b> that can guide you through this area. Learning it will give you the necessary tools
                      to progress into the top-tier IT positions.
                    </Text>
                  </>
                  : null}
              </ImageWrapper>
            </Flex>
          </Flex>
          
          <Flex order={isMobile ? 1 : 2} as='button' className='animation-content' transition='max-height 0.4s ease-out' zIndex={activeImage === 1 ? 2 : 0} onClick={clickHandler[1]} onMouseOver={clickHandler[1]} maxH={isMobile ? activeImage === 1 ? '400px' : '220px' : null}>
            <Flex sx={atroposContainer} transition='transform 0.4s ease-out, min-height 0.4s ease-out, width 0.4s ease-out' transform={getImageTransform(1, activeImage, isMobile, isBase)} filter={activeImage === 1 ? 'none' : isMobile? 'saturate(0.3) blur(2px)' : 'grayscale(0.2)'} w={isMobile ? activeImage === 1 ? '95%' : '80%' : null} h={isMobile ? '100%' : null} m={isMobile ? '0 auto' : null} minH={isMobile ? activeImage === 1 ? '400px' : null : null} maxW={isMobile ? '450px' : null}>
              <ImageWrapper className="atropos" justify='center'>
                <Image w='100%' h='auto' src='/img/marketing/decide-sm.jpg' borderRadius='3xl' boxShadow='2xl' objectFit='cover' minH={imgMinH} data-atropos-offset="-5"/>
                <Text pos='absolute' top={activeImage === 1 ? '8%' : '40%'} transition='top 0.2s ease-out' zIndex='1' color='white' fontWeight='bold' fontSize={calloutFs} data-atropos-offset="0" textShadow='0 0 8px #000' px='20px'>Master the highest-level of technical decision making</Text>
                {activeImage === 1
                  ? <>
                    <Flex mb='20px' pos='absolute' bottom={imgDescBgBottom} w={imgDescBgW} h={imgDescBgH} bg='#06060663' borderRadius='8px' backdropFilter='blur(3px)' data-atropos-offset="0"/>
                    <Text mb='20px' pos='absolute' bottom={imgDescTextBottom} w={imgDescTextW} h={imgDescTextH} pt='12px' pl='12px' pr='8px' color='white' data-atropos-offset="0" fontSize={imgDescTextFs} textAlign='start' textShadow='0 0 3px #5686ff'>
                      After learning how to design scalable and maintainable code the next step is to make sure
                      that our decisions are in-line with the <b>real</b> needs of our projects. You will learn to identify those needs and to choose
                      tech stacks and software architecture that <b>satisfy</b> both the customers and the stakeholders.
                    </Text>
                  </>
                  : null}
              </ImageWrapper>
            </Flex>
          </Flex>
          
          <Flex order={3} as='button' className='animation-content' transition='max-height 0.4s ease-out' zIndex={activeImage === 2 ? 2 : 0} onClick={clickHandler[2]} onMouseOver={clickHandler[2]} maxH={isMobile ? activeImage === 2 ? '400px' : '220px' : null}>
            <Flex sx={atroposContainer} transition='transform 0.4s ease-out, min-height 0.4s ease-out, width 0.4s ease-out' transform={getImageTransform(2, activeImage, isMobile, isBase)} filter={activeImage === 2 ? 'none' : isMobile? 'saturate(0.3) blur(2px)' : 'grayscale(0.2)'} w={isMobile ? activeImage === 2 ? '95%' : '80%' : null} h={isMobile ? '100%' : null} m={isMobile ? '0 auto' : null} minH={isMobile ? activeImage === 2 ? '400px' : null : null} maxW={isMobile ? '450px' : null}>
              <ImageWrapper className="atropos" justify='center'>
                <Image w='100%' h='auto' src='/img/marketing/worlds-sm.jpg' borderRadius='3xl' boxShadow='2xl' objectFit='cover' minH={imgMinH} data-atropos-offset="-5" />
                <Text textAlign='center' w='100%' pos='absolute' top={activeImage === 2 ? '10%' : '40%'} transition='top 0.2s ease-out' zIndex='1' color='white' fontWeight='bold' fontSize={calloutFs} data-atropos-offset="0" textShadow='0 0 8px #000' px='20px'>Make worlds collide</Text>
                {activeImage === 2
                  ? <>
                    <Flex mb='20px' pos='absolute' bottom={imgDescBgBottom} w={imgDescBgW} h={imgDescBgH} bg='#06060663' borderRadius='8px' backdropFilter='blur(3px)' data-atropos-offset="0"/>
                    <Text mb='20px' pos='absolute' bottom={imgDescTextBottom} w={imgDescTextW} h={imgDescTextH} pt='12px' pl='12px' pr='8px' color='white' data-atropos-offset="0" fontSize={imgDescTextFs} textAlign='start' textShadow='0 0 3px #5686ff'>
                      As you gradually learn, topic by topic, how code translates to money you can become the person
                      to bridge the chasm between business and development. Learn to speak the language of <s>gods</s> management and
                      pave the way for the ideal technical changes. Never struggle to sell your ideas to the higher-ups again.
                    </Text>
                  </>
                  : null}
              </ImageWrapper>
            </Flex>
          </Flex>
                  
        </FeaturesWrapper>
      </Flex>
    </>
  )
}
