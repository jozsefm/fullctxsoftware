import { Flex, Text, Icon, Link } from '@chakra-ui/react'
import Head from 'components/Head'
import { ImDrawer } from 'react-icons/im'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

const titleM = { base: '60px auto 25px auto' }
const sloganFontSize = { base: '1.2rem', md: '1.5rem' }
const textW80 = {base: '80%', md: '100%'}
const textW90 = {base: '90%', md: '100%'}
const textP20 = {base: '0 20px', md: '0'}
const introIconFs = {base: '2rem', md: '3rem'}
const introHeaderFs = {base: '1.1rem', md: '1.3rem'}
const introTextFs = { base: '0.95rem', md: '16px' }

const marginTops = ['74px !important', '74px !important', '100px !important', '91px !important']

export default function Legal() {
  return (
    <>
      <Head title='Legal Documents • Full Context Development'/>
      <Flex
        h='auto'
        w='100%'
        direction='column'
        align='center'
        fontFamily='Inter,"Trebuchet MS",Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
        mt={marginTops}
      >
        <Text
          textAlign='center'
          fontSize={sloganFontSize}
          color='black'
          lineHeight='1.2'
          m={titleM}
          w='80%'
          minW='270px'
          textTransform='uppercase'
          letterSpacing='0.08rem'
          textShadow='0px 0px 6px #00000038'
        >
          Full Context Development Legal Documents
        </Text>

        <Flex maxW='620px' direction='column' align='center' mb='50px' id='list'>
          <Text textAlign='center' fontSize={introIconFs} color='black' mb='15px'>
            <Icon as={ImDrawer} />
          </Text>
          <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='28px' w={textW90} p={textP20} >
            I'm fully committed to keep my legal practices transparent and to protect your data according to the applicable laws.
            Here you can find all the governing policies that applies to you while using Full Context Development.
          </Text>
        </Flex>

        <Flex maxW='620px' direction='column' align='center' mb='100px'>
          <Link href='/legal/tos' passHref as={NextLink}>
            <Text as='a' textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='10px' w={textW80} minW='265px' pos='relative'>
              Terms of Service <ExternalLinkIcon pos='relative' top='-2px'/>
            </Text>
          </Link>
          <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='28px' mb='35px' w={textW90} p={textP20} >
            The general terms and conditions that form our legal relationship with the users of our services.
          </Text>
          <Link href='/legal/privacy' passHref as={NextLink}>
            <Text as='a' textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='10px' w={textW80} minW='265px' pos='relative'>
              Privacy Policy <ExternalLinkIcon pos='relative' top='-2px'/>
            </Text>
          </Link>
          <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='28px' mb='35px' w={textW90} p={textP20} >
            This document describes our practicies of handling your perpsonal data that you provide while using our services.
          </Text>
          <Link href='/legal/data' passHref as={NextLink}>
            <Text as='a' textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='10px' w={textW80} minW='265px' pos='relative'>
              Data Protection Agreement <ExternalLinkIcon pos='relative' top='-2px'/>
            </Text>
          </Link>
          <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='28px' mb='35px' w={textW90} p={textP20} >
            To comply with GDPR and other data protection regulations I discolse my data handling practices and the measures
            I take to protect your information and provide you the rigths ensured by these laws.
          </Text>
          <Link href='/legal/subprocessors' passHref as={NextLink}>
            <Text as='a' textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='10px' w={textW80} minW='265px' pos='relative'>
              Subprocessors & Cookies <ExternalLinkIcon pos='relative' top='-2px'/>
            </Text>
          </Link>
          <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='28px' mb='35px' w={textW90} p={textP20} >
            I disclose the 3rd party companies I use during providing the service to you and the reasons of sharing your data with them.
            I also describe our use of cookies.
          </Text>
          <Link href='/legal/ccpa' passHref as={NextLink}>
            <Text as='a' textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='10px' w={textW80} minW='265px' pos='relative'>
              Notice about the California Consumer Privacy Act <ExternalLinkIcon pos='relative' top='-2px'/>
            </Text>
          </Link>
          <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='28px' mb='35px' w={textW90} p={textP20} >
            The CCPA gives California residents rights and control over their personal information,
            in this document make certain disclosures about the collection and processing of their personal information.
          </Text>
        </Flex>

      </Flex>
    </>
  )
}