import { Flex, Text, Icon, Divider, Table, Thead, Tr, Th, Td, Tbody } from '@chakra-ui/react'
import Head from 'components/Head'
import { CgFileDocument } from 'react-icons/cg'
import styled from '@emotion/styled'
import { CustomLink } from 'components/CustomLink'

const titleM = { base: '30px auto 25px auto', md: '60px auto 25px auto' }
const sloganFontSize = { base: '1.2rem', md: '1.5rem' }
const textW80 = { base: '80%', md: '100%' }
const textW90 = { base: '90%', md: '100%' }
const textP20 = { base: '0 20px', md: '0' }
const introIconFs = { base: '2rem', md: '3rem' }
const introHeaderFs = { base: '1.5rem', md: '1.8rem' }
const introTextFs = { base: '1rem', md: '16px' }
const listFs = { base: '0.95rem', md: '16px' }
const tableOverflowX: any = { base: 'scroll', md: 'hidden' }

const StyledId = styled.div`
  display: flex;
  position: absolute;
  top: -80px;
`

const marginTops = ['74px !important', '74px !important', '100px !important', '91px !important']

export default function Subprocessors() {
  return (
    <>
      <Head  title='Subprocessors • Full Context Development'/>
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
          Full Context Development Subprocessors and Cookies
        </Text>

        <Flex maxW='680px' direction='column' align='center' mb='50px'>
          <Text textAlign='center' fontSize={introIconFs} color='black' mb='30px'>
            <Icon as={CgFileDocument} />
          </Text>
          <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} >
            Full Context Development provides a great deal of transparency regarding how we use your data,
            how we collect your data, and with whom we share your data. To that end, we provide this page,
            which details our subprocessors, and how we use cookies.
          </Text>
          <Text
            textAlign='start'
            fontSize={introTextFs}
            color='rgb(55, 65, 81)'
            lineHeight='26px'
            w={textW90}
            p={textP20}
            mt='15px'
            fontStyle='italic'
            fontFamily='sans-serif'
          >
            Effective date: December 1, 2021
          </Text>
        </Flex>

        <StyledId id='processors'/>
        <Text maxW='680px' textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
          Full Context Development Subprocessors
        </Text>
        <Divider maxW='680px' mb='15px' borderColor='gray'/>
        <Text maxW='680px' textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='50px'>
          When we share your information with third party subprocessors, such as our vendors and service providers, we remain responsible for it.
          We work very hard to maintain your trust when we bring on new vendors, and we do our best to only enlist them if their processing
          of Users' Personal Information is in line with our Privacy Policy and this document.
        </Text>
        <Flex overflowX={tableOverflowX} w='100%' maxW='1000px'>
          <Table variant='simple' minW='100%' py='20px' mb='50px' fontSize='0.9rem'>
            <Thead>
              <Tr verticalAlign='top'>
                <Th minW='200px'>Name of Subprocessor</Th>
                <Th minW='200px'>Description of Processing</Th>
                <Th minW='170px'>Location of Processing</Th>
                <Th minW='200px'>Corporate Location</Th>
                <Th >GDPR Data Protection</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Amazon Web Services EMEA SARL</Td>
                <Td>Transactional email service</Td>
                <Td>Europe, Frankfurt</Td>
                <Td>38 Avenue John F. Kennedy, L-1855, Luxembourg</Td>
                <Td><a href='https://d1.awsstatic.com/legal/aws-gdpr/AWS_GDPR_DPA.pdf' target='_blank'>DPA</a>, <a href='https://aws.amazon.com/compliance/gdpr-center/' target='_blank'>Compliance</a></Td>
              </Tr>
              <Tr>
                <Td>Redis EMEA Ltd</Td>
                <Td>Data hosting</Td>
                <Td>Europe, Frankfurt</Td>
                <Td>Tower 42 25 Old Broad St, London EC2N 1HN, UK</Td>
                <Td><a href='https://redis.com/wp-content/uploads/2021/08/redis-data-processing-addendum.pdf' target='_blank'>DPA</a></Td>
              </Tr>
              <Tr>
                <Td>Cloudflare, Inc.</Td>
                <Td>Network security services</Td>
                <Td>United States</Td>
                <Td>101 Townsend St, San Francisco, CA 94107, US</Td>
                <Td><a href='https://www.cloudflare.com/resources/assets/slt3lc6tev37/1M1j5uuFDuLTYiZJJDPBag/bda8d591447971b3df2bccf5aa4e0916/Customer_DPA_v.3_1_-_en_1_Oct_2020.pdf' target='_blank'>DPA</a>, <a href='https://www.cloudflare.com/gdpr/introduction/' target='_blank'>Introduction</a></Td>
              </Tr>
              <Tr>
                <Td>Vercel Inc.</Td>
                <Td>Website hosting and Infrastructure provider</Td>
                <Td>United States</Td>
                <Td>340 S Lemon Ave #4133 Walnut, CA 91789, US</Td>
                <Td><a href='https://vercel.com/legal/dpa' target='_blank'>DPA</a></Td>
              </Tr>
              <Tr>
                <Td>New Relic, Inc.</Td>
                <Td>Logging service</Td>
                <Td>Europe</Td>
                <Td>188 Spear Street, Suite 1000, San Francisco, CA 94105, US</Td>
                <Td><a href='https://newrelic.com/termsandconditions/dataprotection' target='_blank'>DPA</a>, <a href='https://newrelic.com/termsandconditions/dataprotectionFAQ' target='_blank'>FAQ</a></Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
        <Text maxW='680px' textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='50px'>
          When we bring on a new subprocessor who handles our Users' Personal Information, or remove a subprocessor, or we change how we use a subprocessor,
          we will update this page. If you have questions or concerns about a new subprocessor, we'd be happy to help. Please contact us via Support.
        </Text>

        <StyledId id='cookies'/>
        <Text maxW='680px' textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
          Cookies on Full Context Development
        </Text>
        <Divider maxW='680px' mb='15px' borderColor='gray'/>
        <Text maxW='680px' textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
          Full Context Development uses cookies to provide and secure our websites, as well as to analyze the usage of our websites,
          in order to offer you a great user experience. Please take a look at our Privacy Statement if you’d like more information about cookies,
          and on how and why we use them.
        </Text>
        <Text maxW='680px' textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='50px'>
          Since the number and names of cookies may change, the table below may be updated from time to time.
        </Text>
        <Flex overflowX={tableOverflowX} w='100%' maxW='800px'>
          <Table variant='simple' minW='100%' py='20px' mb='50px' fontSize='0.9rem'>
            <Thead>
              <Tr verticalAlign='top'>
                <Th minW='150px'>Service Provider</Th>
                <Th minW='150px'>Cookie Name</Th>
                <Th minW='300px'>Description</Th>
                <Th minW='100px'>Expiration*</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Full Context Development</Td>
                <Td>fcd-session-id</Td>
                <Td>This cookie is used to track the action flow of users for support, debugging and security purposes.</Td>
                <Td>Session</Td>
              </Tr>
              <Tr>
                <Td>Full Context Development</Td>
                <Td>fcd-device-id</Td>
                <Td>This cookie is used to track recognized devices for security purposes.</Td>
                <Td>Session</Td>
              </Tr>
              <Tr>
                <Td>Full Context Development</Td>
                <Td>metal-session</Td>
                <Td>This is an essential cookie to keep the logged in state and other basic information of authenticated users between page reloads.</Td>
                <Td>15 days</Td>
              </Tr>
              <Tr>
                <Td>Paddle Inc.</Td>
                <Td>paddlejs_campaign_referrer</Td>
                <Td>This cookie is generated by Paddle to track campaign referrers. We use Paddle to handle our product payments.</Td>
                <Td>One month</Td>
              </Tr>
              <Tr>
                <Td>Cloudflare Inc.</Td>
                <Td>__cf_bm</Td>
                <Td>This cookie is generated by Cloudflare and stores technical information that is used for bot protection, a security concern.</Td>
                <Td>30 minutes</Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
        <Text maxW='680px' textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
          * The <b>expiration</b> dates for the cookies listed below generally apply on a rolling basis.
        </Text>
        <Text maxW='680px' textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='50px'>
          (!) Please note while we limit our use of third party cookies to those necessary to provide external functionality when rendering external content,
          certain pages on our website may set other third party cookies. For example, we may embed content, such as videos, from another site that sets a cookie.
          While we try to minimize these third party cookies, we can’t always control what cookies this third party content sets.
        </Text>

        <Text maxW='690px' textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
          <Flex id='license' pos='absolute' top='-80px'/>
          License
        </Text>
        <Divider maxW='690px' mb='30px' borderColor='gray'/>

        <Text maxW='690px' textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='100px' w={textW90} p={{ base: '0 0 0 20px', md: '0' }}>
          This document is based on <CustomLink to='https://docs.github.com/en/github/site-policy/github-subprocessors-and-cookies' target='_blank'>Github Subprocessors and Cookies</CustomLink> and is simiarly licensed under this <CustomLink to='https://github.com/github/docs/blob/main/LICENSE' target='_blank'>CC BY</CustomLink> license.
        </Text>
      </Flex>
    </>
  )
}