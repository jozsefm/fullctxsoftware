import { Flex, Text, Icon } from '@chakra-ui/react'
import { CustomLink } from 'components/CustomLink'
import Head from 'components/Head'
import { IoMdHand } from 'react-icons/io'

const titleM = { base: '60px auto 25px auto' }
const sloganFontSize = { base: '1.2rem', md: '1.5rem' }
const textW80 = {base: '80%', md: '100%'}
const textW90 = {base: '90%', md: '100%'}
const textP20 = {base: '0 20px', md: '0'}
const introIconFs = {base: '2rem', md: '3rem'}
const introHeaderFs = {base: '1.3rem', md: '1.6rem'}
const introTextFs = { base: '1rem', md: '16px' }

const marginTops = ['74px !important', '74px !important', '100px !important', '91px !important']

export default function SessionLimit() {
  return (
    <>
      <Head title='Session Limit Reached • Full Context Development'/>
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
          Session Limit Reached
        </Text>

        <Flex maxW='620px' direction='column' align='center' mb='50px' id='list'>
          <Text textAlign='center' fontSize={introIconFs} color='black' mb='15px'>
            <Icon as={IoMdHand} />
          </Text>
          <Text textAlign='center' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' >
            There's no more place left in the database
          </Text>
          <Text textAlign='center' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='28px' w={textW90} p={textP20} >
            It seems, you are currently logged in from the maximum allowed number of devices for your account.
            Please log out on some of them to read the book here. In case you can't do that, requesting a new access link automatically logs you out from
            all current sessions. In the worst case the sessions auto-expire after 14 days or you can of course <CustomLink to='/support'>contact support</CustomLink>.
          </Text>
        </Flex>
      </Flex>
    </>
  )
}