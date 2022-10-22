import { Box, Flex, Text } from '@chakra-ui/react'
import { NewsletterCard } from 'components/NewsletterCard'
import Image from 'next/image'

const introTextFs = { base: '1rem', md: '16px' }
const colDir: any = {
  base: 'column',
  md: 'row'
}
const earlyWidth: any = {
  base: 'auto',
  md: 'calc(100% - 170px)',
  lg: 'calc(100% - 300px)'
}
const earlyMl: any = {
  base: 'auto',
  md: '65px'
}
const earlyMr: any = {
  base: 'auto',
  md: '0'
}
const earlyW: any = {
  base: '100%',
  md: '90%'
}
const imgM: any = {
  base: '0 auto',
  md: '0 0 0 50px',
  lg: '0 0 0 80px',
  xl: '0'
}
const imgW: any = {
  base: '300px',
  md: '210px',
  lg: '260px',
  xl: '300px',
}
const imgH: any = {
  base: '290px',
  md: '200',
  lg: '255px',
  xl: '290px',
}
const placeholderColMinW: any = {
  base: 'auto',
  md: '170px',
  lg: '260px',
  xl: '300px'
}
const introW: any = {
  base: 'auto',
  md: 'calc(100% - 170px)',
  lg: 'calc(100% - 300px)'
}
const imgColW: any = {
  base: 'auto',
  md: '170px',
  lg: '300px'
}
const introDetailW: any = {
  base: '100%',
  md: '90%'
}
const aboutMt: any = {
  base: '50px',
  md: '0'
}
const aboutTextA: any = {
  base: 'center', 
  md: 'start'
}
const secondColMt: any = {
  base: '0',
  md: '100px'
}
const secondColH: any = {
  base: '0',
  md: '200px'
}
const earlyTextMaxW: any = {
  base: '400px',
  md: '660px'
}

export default function BelowFold6() {
  return (
    <>
      <Flex direction={colDir} w='100%' align='flex-start' mt='30px' justify='center' p='15px 0 15px 0' bg='#fff' color='rgb(55, 65, 81)' maxW='1350px'>
        <Flex direction='column' align='flex-start' w={imgColW} m={imgM}>
          <Box width={imgW} height={imgH} mt='25px' pos='relative'>
            <Image layout='fill' priority src='/joe-face.jpg' alt='A Picture of Joe the author - he looks handsome and radiates of development expertiese. Sadly that is a joke.'/>
          </Box>
        </Flex>
        <Flex direction='column' w={introW} ml={earlyMl} mt={aboutMt} mr={earlyMr}>
          <Text textAlign={aboutTextA} fontSize='1rem' fontWeight='700' lineHeight='1.1' mb='10px' w={introDetailW} minW='292px' p='0 20px'>
            About the author
          </Text>
          <Text textAlign={aboutTextA} fontSize='3.75rem' fontWeight='700' lineHeight='1.1' mb='30px' w={introDetailW} minW='292px' p='0 20px'>
            Hi! I'm Joe
          </Text>
          <Text textAlign='start' fontSize={introTextFs} lineHeight='22px'w={introDetailW} maxW={earlyTextMaxW} minW='292px' p='0 20px' >
            Full name József Miskolczy. A Lead Frontend Developer from Debrecen, Hungary. 
          </Text>
          <Text textAlign='start' fontSize={introTextFs} lineHeight='22px' mb='15px' w={introDetailW} maxW={earlyTextMaxW} minW='292px' p='0 20px' >
            I have been diving deep into the undocumented relationship of code and money in the last two years to
            make it as painless as possible for software developers to handle the business side of our work. As a fresh lead
            I often felt clueless on how to align technical choices with business expectations and to my surprise I couldn't find
            a comprehensive, practical guide written for everyday developers. My goal with this book is to fill this gap.
          </Text>
        </Flex>
      </Flex>
      <Flex direction={colDir} w='100%' align='flex-start' mt={secondColMt} justify='center' p='15px 0 15px 0' bg='#fff' color='rgb(55, 65, 81)' maxW='1350px'>
        <Flex direction='column' align='flex-start' w={imgColW} minW={placeholderColMinW} m={imgM} h={secondColH}></Flex>
        <Flex direction='column' w={earlyWidth} ml={earlyMl} mr={earlyMr}>
          <Text textAlign={aboutTextA} fontSize='2rem' fontWeight='700' lineHeight='1.1' mb='30px' w={earlyW} minW='292px' p='0 20px'>
            About Early Access
          </Text>
          <Text textAlign='start' fontSize={introTextFs} lineHeight='22px' mb='15px' w={introDetailW} maxW={earlyTextMaxW} minW='292px' p='0 20px' >
            I'm not done yet. The material is only 60% ready, but I wanted to release the book as I believe it already holds immense value.
            You can check the detailed progress on the Book Overview page.
            Every major idea is included and the whole system of Full Context Development is built up in the version accessible today.
            What's missing is filling in a varying number of holes in the covered topics, or polishing some rough edges.
            If you are interested you can follow along as I finish
            and refine the material or even give some feedback and influence how the final version will turn out to be.
            This is a learning journey for me as well, expect changes in already "finished" parts as I iterate based on new knowledge.
            You can also subscribe to the newletter to stay up to date with my progress and read interesting ideas about related topics.
            However recently I had to scale back working on the material due to life circumstances so please forgive me for not delivering much. 
          </Text>
        </Flex>
      </Flex>
      <Flex direction='column' w='100%' overflow='hidden' justify='center' align='center' p='15px 0 15px 0' bg='#fff' id='newsletter'>
        <NewsletterCard />
      </Flex>
    </>
  )
}
