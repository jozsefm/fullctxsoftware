import { Flex, Text, Icon } from '@chakra-ui/react'
import { CustomLink } from 'components/CustomLink'
import Head from 'components/Head'
import { RiQuestionAnswerLine } from 'react-icons/ri'

const titleM = { base: '40px auto 25px auto', md: '60px auto 40px auto' }
const sloganFontSize = { base: '1.2rem', md: '1.5rem' }
const textW80 = {base: '80%', md: '100%'}
const textW90 = {base: '90%', md: '100%'}
const contactP = {base: '0 20px', md: '0 20px 0 0'}
const introIconFs = {base: '2rem', md: '3rem'}
const introHeaderFs = {base: '1.5rem', md: '1.8rem'}
const introTextFs = { base: '1rem', md: '16px' }

const marginTops = ['74px !important', '74px !important', '100px !important', '91px !important']

export default function FAQ() {
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
          This is the F.A.Q
        </Text>

        <Flex maxW='620px' direction='column' align='center'>
          <Text textAlign='center' fontSize={introIconFs} color='black' mb='15px'>
            <Icon as={RiQuestionAnswerLine} />
          </Text>
          <Text textAlign='center' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' >
            How can I refund my purchase?
          </Text>
          <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='28px' w={textW90} p={contactP} mb='50px'>
            If you are within the guaranteed moneyback period (30 days) just drop me an email at <b>support@fullcontextdevelopment.com</b> with the subject "REFUND". Make sure to use the email address you signed up with and I will take care of your request ASAP. Alteratively
            You can contact the <CustomLink to='https://paddle.net/' target='_blank'><b>Paddle</b></CustomLink> virtual assistant and ask about refund.
          </Text>
          <Text textAlign='center' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' >
            Got a question that's not answered here?
          </Text>
          <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='28px' w={textW90} p={contactP} >
            Please head over to the  <CustomLink to='/support' target='_blank'>support</CustomLink> page and feel free to reach out through any of the channels.
          </Text>
        </Flex>

      </Flex>
    </>
  )
}