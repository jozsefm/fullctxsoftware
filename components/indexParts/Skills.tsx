import { Flex, Heading, Icon, Image, Link, Text } from '@chakra-ui/react'
import { darkTextColorAlpha } from 'constants/styles/commonStyles'
import { LinkButton } from 'elements/Button'
import NextLink from 'next/link'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'
import { IoBookOutline, IoMapOutline } from 'react-icons/io5'

const sloganFontSize = { base: '1.7rem', md: '34px' }
const bluText = { color: '#5686ff' }
const unlikeStyle = { ...bluText, textShadow: `0 0 3px ${bluText.color}` }
const fontSizes = ['2.7rem', '2.9rem', '65px', '65px']
const headingLh = ['2.8rem', '3.1rem', '68px', '68px']
const secondaryFs = ['2.7rem', '2.7rem', '2.5rem', '2.5rem']
const secondaryAltFs = ['2.2rem', '2.7rem', '2.5rem', '2.5rem']
const secondaryLh = ['3.2rem', '3.1rem', '68px', '2.9rem']
const secondaryAltLh = ['2.8rem', '3.1rem', '3rem', '2.9rem']
const secondaryMaxW = { base: '100%', md: '780px', lg: '1000px'}
const benefitListFs = { base: '1.4rem', md: '28px' }
const benefitListMW = { base: '570px', md: '900px' }

const sectionBg: any = {
  background: [['#212020', '-webkit-radial-gradient(farthest-corner at 50% 50%, #111e2e, #212020)', '-moz-radial-gradient(farthest-corner at 50% 50%, #111e2e, #212020)', 'radial-gradient(farthest-corner at 50% 50%, #122031, #212020)']]
}
const subHMx = {
  base: '5%',
  md: '140px'
}
const colDir: any = {
  base: 'column',
  md: 'row'
}
const skillRowW: any = {
  base: '100%',
  md: '35%'
}
const skillW: any = {
  base: 'auto',
  md: '180px'
}
const skillMW: any = {
  base: 'auto',
  md: '180px'
}
const skillFs: any = {
  base: '12rem',
  md: '6rem',
  lg: '7rem',
  xl: '8rem'
}
const skill1Left: any = {
  base: 'calc(50% - 103px)',
  md: '50px',
  lg: '30px',
  xl: '10px'
}
const skill2Left: any = {
  base: 'calc(50% - 123px)',
  md: '50px',
  lg: '30px',
  xl: '10px'
}
const skill3Left: any = {
  base: 'calc(50% - 126px)',
  md: '50px',
  lg: '30px',
  xl: '10px'
}
const imgLeft: any = {
  base: 'calc(50% - 40px)',
  md: '140px'
}
const imgTop: any = {
  base: '0',
  md: 'unset'
}
const imgBottom: any = {
  base: 'unset',
  md: '10px'
}
const descMl: any = {
  base: '0',
  md: '55px',
  lg: '80px'
}
const descMr: any = {
  base: '0',
  md: '30px'
}
const descW: any = {
  base: '100%',
  md: 'auto'
}
const descTexA: any = {
  base: 'center',
  md: 'start'
}
const textW: any = {
  base: '100%',
  md: '65%'
}
const textMl: any = {
  base: '5%',
  md: '130px',
  lg: '100px'
}
const textMr: any = {
  base: '5%',
  md: '50px',
  lg: '100px'
}
const textMt: any = {
  base: '30px',
  md: '0'
}
const textMb: any = {
  base: '60px',
  md: '0'
}
const textMbLast: any = {
  base: '100px',
  md: '0'
}
const textTextA: any = {
  base: 'center',
  md: 'start'
}
const wrapperMinH: any = {
  base: 'auto',
  md: '1180px',
  lg: '1050px',
}
const equippedTextMt: any = {
  base: '50px',
  md: '150px'
}
const equippedTextMb: any = {
  base: '100px',
}

const AlternateStartStyle = {
  bg: 'green.500',
}

const AlternateCheckStyle = {
  bg: 'rgb(61, 80, 104)',
  color: 'white'
}

const AlternateActiveStyle = {
  bg: darkTextColorAlpha,
  color: 'white'
}

const checkToCFs = {base: '0.8rem', md: '0.9rem'}

export default function BelowFold2() {

  return (
    <>
      <Flex w='100%' minH={wrapperMinH} direction='column' align='center' justify='flex-start' sx={sectionBg}>
        <Flex w='100%' maxW='1200px' direction='column' justify='center' align='center'>
          <Heading
            maxW='1200px'
            as='h3'
            mt='150px'
            mb='70px'
            color='white'
            textAlign='center'
            letterSpacing='-1px'
            lineHeight={headingLh}
            fontSize={fontSizes}
            fontWeight='700'
            p='0 20px 20px 20px'
          >
            This is <span style={unlikeStyle}>not</span> your regular tutorial
          </Heading>
        </Flex>
        <Flex w='100%' maxW='1150px' direction='column' justify='center' align='center'>
          <Text
            mb='130px'
            as='h3'
            mx={subHMx}
            textAlign='center'
            fontSize={sloganFontSize}
            fontWeight='700'
            color='white'
            lineHeight='1.2'
            letterSpacing='-1px'
          >
            I will show you how code turns into money and teach you <span style={unlikeStyle}>timeless</span> and <span style={unlikeStyle}>technology independent</span> skills
            that will stay relevant until the day you retire
          </Text>
        </Flex>
        <Flex w='100%' maxW='1200px' direction={colDir} justify='space-between' align='center' mb='60px'>
          <Flex w={skillRowW} pos='relative' direction={colDir}>
            <Flex w={skillW} minW={skillMW}>
              <Text fontSize={skillFs} lineHeight='5rem' color='#61dd8d14' fontWeight='bold' mr='30px' pos='relative' left={skill1Left} top='10px'>#1</Text>
            </Flex>
            <Flex w='80px' pos='absolute' left={imgLeft} top={imgTop} bottom={imgBottom}>
              <Image src='/img/skills/analyze.svg' w='80px'/>
            </Flex>
            <Flex w='auto' ml={descMl}>
              <Text fontSize='2.5rem' color='#61dd8d' fontWeight='bold' mr={descMr} w={descW} textAlign={descTexA} textShadow='0px 0px 7px #068734'>Analyze</Text>
            </Flex>
          </Flex>
          <Flex w={textW} mt={textMt} mb={textMb} textAlign={textTextA}>
            <Text color={bluText.color} fontWeight='700' fontSize='1.2rem' ml={textMl} mr={textMr}>How a language, framework, architectural style, coding convention or anything in between will influence the profits made by your project</Text>
          </Flex>
        </Flex>
        <Flex w='100%' maxW='1200px' direction={colDir} justify='space-between' align='center' mb='60px'>
          <Flex w={skillRowW} pos='relative' direction={colDir}>
            <Flex w={skillW} minW={skillMW}>
              <Text fontSize={skillFs} lineHeight='5rem' color='#ff436114' fontWeight='bold' mr='30px' pos='relative' left={skill2Left} top='10px'>#2</Text>
            </Flex>
            <Flex w='80px' pos='absolute' left={imgLeft} top={imgTop} bottom={imgBottom}>
              <Image src='/img/skills/eval.svg' w='80px'/>
            </Flex>
            <Flex w='auto' ml={descMl}>
              <Text fontSize='2.5rem' color='#ff4361' fontWeight='bold' mr={descMr} w={descW} textAlign={descTexA} textShadow='0px 0px 7px #8f1629'>Evaluate</Text>
            </Flex>
          </Flex>
          <Flex w={textW} mt={textMt} mb={textMb} textAlign={textTextA}>
            <Text color={bluText.color} fontWeight='700' fontSize='1.2rem' ml={textMl} mr={textMr}>If changing the tech stack, optimizing application performance, refactoring the codebase or merging the latest pull request will create the type and level of impact you want</Text>
          </Flex>
        </Flex>
        <Flex w='100%' maxW='1200px' direction={colDir} justify='space-between' align='center'>
          <Flex w={skillRowW} pos='relative' direction={colDir}>
            <Flex w={skillW} minW={skillMW}>
              <Text fontSize={skillFs} lineHeight='5rem' color='#5686ff14' fontWeight='bold' mr='30px' pos='relative' left={skill3Left} top='10px'>#3</Text>
            </Flex>
            <Flex w='80px' pos='absolute' left={imgLeft} top={imgTop} bottom={imgBottom}>
              <Image src='/img/skills/align.svg'/>
            </Flex>
            <Flex w='auto' ml={descMl}>
              <Text fontSize='2.5rem' color='#5686ff' fontWeight='bold' mr={descMr} w={descW} textAlign={descTexA} textShadow='0px 0px 7px #0d52ff'>Align</Text>
            </Flex>
          </Flex>
          <Flex w={textW} mt={textMt} mb={textMbLast} textAlign={textTextA}>
            <Text color={bluText.color} fontWeight='700' fontSize='1.2rem' ml={textMl} mr={textMr}>Both your everyday coding practices and major technical decisions with the business goals of the company over the full lifetime of a project</Text>
          </Flex>
        </Flex>
        <Flex w='100%' maxW='1200px' direction='column' justify='center' align='center'>
          <Heading
            maxW={secondaryMaxW}
            as='h3'
            mt={equippedTextMt}
            mb={equippedTextMb}
            color='white'
            textAlign='center'
            letterSpacing='-1px'
            lineHeight={secondaryLh}
            fontSize={secondaryFs}
            fontWeight='700'
            p='0 20px 20px 20px'
          >
            Equipped with these skills you will be able to
          </Heading>
        </Flex>
        <Flex w='100%' maxW={benefitListMW} direction='column' justify='center' align='flex-start'>
          <Text
            mx={subHMx}
            textAlign='start'
            fontSize={benefitListFs}
            fontWeight='700'
            color='white'
            lineHeight='1.2'
            letterSpacing='-1px'
            display='flex'
            alignItems='center'
          >
            <Image w='40px' h='40px' src={`/img/blog/remix/final/check.svg`} mr='20px' display='inline-block'/>
            Identify what real value is on all types of projects and deliver it
          </Text>
          <Text
            mt='50px'
            mx={subHMx}
            textAlign='start'
            fontSize={benefitListFs}
            fontWeight='700'
            color='white'
            lineHeight='1.2'
            letterSpacing='-1px'
            pl='60px'
            pos='relative'
          >
            <Image w='40px' h='40px' src={`/img/blog/remix/final/check.svg`} mr='20px' pos='absolute' left='0px' top='10px'/>
            Improve the financial performance of any software product (including your own)
          </Text>
          <Text
            mt='50px'
            mx={subHMx}
            textAlign='start'
            fontSize={benefitListFs}
            fontWeight='700'
            color='white'
            lineHeight='1.2'
            letterSpacing='-1px'
            pl='60px'
            pos='relative'
          >
            <Image w='40px' h='40px' src={`/img/blog/remix/final/check.svg`} mr='20px' pos='absolute' left='0px' top='10px'/>
            Gather the achievements required to proceed in your career
          </Text>
          <Text
            mt='50px'
            mx={subHMx}
            textAlign='start'
            fontSize={benefitListFs}
            fontWeight='700'
            color='white'
            lineHeight='1.2'
            letterSpacing='-1px'
            display='flex'
            alignItems='center'
            pl='60px'
            pos='relative'
          >
            <Image w='40px' h='40px' src={`/img/blog/remix/final/check.svg`} mr='20px' pos='absolute' left='0px' top='10px'/>
            Understand the impact of your work over the life of users and team mates
          </Text>
          <Text
            mt='50px'
            mx={subHMx}
            textAlign='start'
            fontSize={benefitListFs}
            fontWeight='700'
            color='white'
            lineHeight='1.2'
            letterSpacing='-1px'
            pl='60px'
            pos='relative'
          >
            <Image w='40px' h='40px' src={`/img/blog/remix/final/check.svg`} mr='20px' pos='absolute' left='0px' top='10px'/>
            Give more precise and valuable technical advice to colleagues or your clients
          </Text>
        </Flex>
        <Flex w='100%' maxW='1200px' direction='column' justify='center' align='center'>
          <Heading
            maxW='1000px'
            as='h3'
            mt='120px'
            mb='50px'
            color='white'
            textAlign='center'
            letterSpacing='-1px'
            lineHeight={secondaryAltLh}
            fontSize={secondaryAltFs}
            fontWeight='700'
            p='0 20px 20px 20px'
          >
            Sounds interesting? <br /> You can learn more by checking out the:
          </Heading>
        </Flex>
        <Flex align='center' justify='center' direction={colDir} mb='90px'>
          <LinkButton
            justifyContent='space-between'
            lh='2.5rem'
            size='sm'
            height='2.5rem'
            variant='outline'
            colorScheme='green'
            textAlign='center'
            color='#fff'
            fontWeight='500'
            fontSize='0.9rem'
            bg='#3ec348'
            border='none'
            w='auto'
            minW='175px'
            _hover={AlternateStartStyle}
            _focus={AlternateStartStyle}
            leftIcon={<Icon as={IoBookOutline} fontSize='1.8rem' />}
          >
            <Link href='/book' as={NextLink} passHref><Text as='a' h='100%' w='100%' pl='30px !important' fontSize='md'>Book (for free)</Text></Link>
          </LinkButton>
          <Text textAlign='center' fontSize='1.1rem' color='#000000' lineHeight='40px' w='100%' minW='24px'>
            &nbsp;
          </Text>
          <LinkButton
            justifyContent='space-between'
            lh='2.5rem'
            size='sm'
            height='2.5rem'
            variant='outline'
            colorScheme='blue'
            textAlign='center'
            color='#fff'
            fontWeight='500'
            fontSize={checkToCFs}
            w='auto'
            minW='175px'
            _hover={AlternateCheckStyle}
            _focus={AlternateCheckStyle}
            _active={AlternateActiveStyle}
            leftIcon={<Icon as={IoMapOutline} fontSize='1.8rem' />}
          >
            <Link href='/code-to-money-roadmap' as={NextLink} passHref><Text as='a' h='100%' w='100%' pl='30px !important' fontSize='md'>Roadmap</Text></Link>
          </LinkButton>
        </Flex>
        <Flex w='100%' maxW='1200px' direction='column' mt='' justify='center' align='center' mb='110px'>
          <Icon as={HiOutlineChevronDoubleDown} color='white' fontSize='2rem' />
        </Flex>
      </Flex>
    </>
  )
}