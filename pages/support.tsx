import { Flex, Text, Icon } from '@chakra-ui/react'
import Head from 'components/Head'
import { BiMailSend, BiSupport } from 'react-icons/bi'
import { CustomLink } from 'components/CustomLink'
import { IoLogoTwitter } from 'react-icons/io5'
import { FaInfo, FaReddit } from 'react-icons/fa'

const titleM = { base: '40px auto 25px auto', md: '60px auto 40px auto' }
const sloganFontSize = { base: '1.2rem', md: '1.5rem' }
const textW80 = {base: '80%', md: '100%'}
const textW90 = {base: '90%', md: '100%'}
const textP20 = {base: '0 20px', md: '0'}
const contactP = {base: '0 20px', md: '0 20px 0 0'}
const introIconFs = {base: '2rem', md: '3rem'}
const contactTypeIconFs = {base: '1.5rem', md: '2rem'}
const introHeaderFs = {base: '1.5rem', md: '1.8rem'}
const contactTypesFs = {base: '1.1rem', md: '1.2rem'}
const contactTextFs = { base: '0.9rem', md: '0.9rem' }
const contactTypesAlign = {base: 'center', md: 'flex-start'}
const contactLineHeight = { base: '24px', md: '32px' }

const marginTops = ['74px !important', '74px !important', '100px !important', '91px !important']

export default function Support() {
  return (
    <>
      <Head title='Support • Full Context Development'/>
      <Flex
        h='auto'
        w='100%'
        direction='column'
        align='center'
        fontFamily='Inter,"Trebuchet MS",Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'
        mb='100px'
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
          Thanks for reaching out to Support
        </Text>

        <Flex maxW='620px' direction='column' align='center' mb='50px'>
          <Text textAlign='center' fontSize={introIconFs} color='black' mb='15px'>
            <Icon as={BiSupport} />
          </Text>
          <Text textAlign='center' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' >
            How to get in touch?
          </Text>
          {/* <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='20px' w={textW90} p={contactP} >
            First of all please visit the <CustomLink to='/faq'>FAQ</CustomLink> if you haven't done that already. We might have the answer to your question there.
            If not, then you can reach us through any of the following ways:
          </Text> */}
        </Flex>

        <Flex maxW='550px' direction='column' align={contactTypesAlign} mb='20px' id='pricing'>
          <Text textAlign='start' fontSize={contactTypeIconFs} color='black' mb='5px' display='flex'>
            <Icon as={BiMailSend}  mr='5px'/>
            <Text as='span' textAlign='start' fontSize={contactTypesFs} color='black' fontWeight='700' lineHeight={contactLineHeight} mb='15px' w={textW80} minW='265px' >
              Email:
            </Text>
          </Text>
          <Text textAlign='start' fontSize={contactTextFs} color='rgb(55, 65, 81)' lineHeight='20px' w={textW80} p={textP20} >
            The main way to contact support is thorugh the dedicated email address: <b>support@fullcontextdevelopment.com</b>. Please
            start the subject line with "SUPPORT" followed by a short description of your issue. If you find it more
            convenient try any of the following options as well.
          </Text>
        </Flex>

        <Flex maxW='550px' direction='column' align={contactTypesAlign} mb='20px' id='pricing'>
          <Text textAlign='start' fontSize={contactTypeIconFs} color='black' mb='5px' display='flex'>
            <Icon as={IoLogoTwitter} mr='5px'/>
            <Text as='span' textAlign='start' fontSize={contactTypesFs} color='black' fontWeight='700' lineHeight={contactLineHeight} mb='15px' w={textW80} minW='265px' >
              Twitter:
            </Text>
          </Text>
          <Text textAlign='start' fontSize={contactTextFs} color='rgb(55, 65, 81)' lineHeight='20px' w={textW80} p={textP20} >
            You can DM my user with the problems you experience: <b>@fullctxdev</b> or use the tag <b>#fullctxdevsupport</b> if you think the issue is of public nature.
          </Text>
        </Flex>

        <Flex maxW='550px' direction='column' align={contactTypesAlign} mb='50px' id='pricing'>
          <Text textAlign='start' fontSize={contactTypeIconFs} color='black' mb='5px' display='flex'>
            <Icon as={FaReddit}  mr='5px'/>
            <Text as='span' textAlign='start' fontSize={contactTypesFs} color='black' fontWeight='700' lineHeight={contactLineHeight} mb='15px' w={textW80} minW='265px' >
              Reddit:
            </Text>
          </Text>
          
          <Text textAlign='start' fontSize={contactTextFs} color='rgb(55, 65, 81)' lineHeight='20px' w={textW80} p={textP20} >
            You can post a Question on our sub-reddit: <CustomLink to='https://reddit.com/r/fullcontextdev' target='_blank'><b>r/fullcontextdev</b></CustomLink>. Please start the title with "SUPPORT:" followed by a short description of your issue.
            I really hope the commuinity will be kind & caring and offer help as well but I will also monitor the sub for issues.
          </Text>
        </Flex>
        <Flex maxW='620px' direction='column' align='center' mb='30px'>
          <Text textAlign='center' fontSize={contactTypeIconFs} color='black' mb='15px'>
            <Icon as={FaInfo} />
          </Text>
          <Text textAlign='center' fontSize={contactTypesFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' >
            Support quality
          </Text>
          <Text textAlign='start' fontSize={contactTextFs} color='rgb(55, 65, 81)' lineHeight='20px' w={textW90} p={contactP} >
            I would like to be transparent and let you know, support is provided only by myself for now, which means I probably won't respond
            quickly and because I don't know what to expect about the volume of request I cant't make any guarantees about solving issues.
            I'm dedicated to do my best to help any of my users who face issues or inconviniences but operating this kind of project is a
            tremendous task and I sure lack the capacity to offer the level of support (and really anything) on the industry standard level
            you would expect (and I would love to offer). Please be forgiving, if things work out well I might be able to scale up and increase
            the quality of every part involved. Thanks a lot, and looking forward to hear from you and get to the bottom of that problem! - Joe
          </Text>
        </Flex>
      </Flex>
    </>
  )
}