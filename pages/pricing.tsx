import { Flex, Text, Icon, Table, TableCaption, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { CustomLink } from 'components/CustomLink'
import Head from 'components/Head'
import { FaDollarSign } from 'react-icons/fa'

const titleM = { base: '60px auto 25px auto' }
const priceTableMinW = { base: '85%', md: '450px' }
const sloganFontSize = { base: '1.2rem', md: '1.5rem' }
const textW80 = {base: '80%', md: '100%'}
const textW90 = {base: '90%', md: '100%'}
const textP20 = {base: '0 20px', md: '0'}
const introIconFs = {base: '2rem', md: '3rem'}
const introHeaderFs = {base: '1.5rem', md: '1.8rem'}
const introTextFs = { base: '1.1rem', md: '16px' }

const marginTops = ['74px !important', '74px !important', '100px !important', '91px !important']

export default function Pricing() {
  return (
    <>
      <Head title='Pricing • Full Context Development'/>
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
          Pricing
        </Text>
        <Flex maxW='620px' direction='column' align='center' mb='50px' id='pricing'>
          <Text textAlign='center' fontSize={introIconFs} color='black' mb='15px'>
            <Icon as={FaDollarSign} />
          </Text>
          <Text textAlign='center' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' >
            Detailed pricing information
          </Text>
          <Text textAlign='center' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='28px' w={textW80} p={textP20} >
            The early access sale is applicable until the book gets finished.
            In the unbelivable circumstance that you want to have more than a 100 members get in touch through the <CustomLink to='/support'>support</CustomLink> email address for custom pricing.
          </Text>
        </Flex>

        <Table variant='simple' maxW='1200px' minW={priceTableMinW} w='auto' py='20px' mb='100px'>
          <TableCaption>Full Context Development Pricing List</TableCaption>
          <Thead>
            <Tr>
              <Th>Number of Users</Th>
              <Th textAlign='center'>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Personal</Td>
              <Td fontSize='2rem' textAlign='center'>
                <Flex justify='center'>
                  <Text fontSize='1rem'>$</Text><Text mr='10px'>33</Text>
                  <Text fontSize='.9rem' color='gray.500' decoration='line-through'>$</Text><Text fontSize='1.5rem'color='gray.500' decoration='line-through'>65</Text>
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td>Team: 3 - 10</Td>
              <Td fontSize='2rem' textAlign='center'>
                <Flex justify='center'>
                  <Text fontSize='1rem'>$</Text><Text mr='10px'>28</Text>
                  <Text fontSize='.9rem' color='gray.500' decoration='line-through'>$</Text><Text fontSize='1.5rem'color='gray.500' decoration='line-through'>55</Text>
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td>Team: 11 - 50</Td>
              <Td fontSize='2rem' textAlign='center'>
                <Flex justify='center'>
                  <Text fontSize='1rem'>$</Text><Text mr='10px'>25</Text>
                  <Text fontSize='.9rem' color='gray.500' decoration='line-through'>$</Text><Text fontSize='1.5rem'color='gray.500' decoration='line-through'>50</Text>
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td>Team: 50+</Td>
              <Td fontSize='2rem' textAlign='center'>
                <Flex justify='center'>
                  <Text fontSize='1rem'>$</Text><Text mr='10px'>23</Text>
                  <Text fontSize='.9rem' color='gray.500' decoration='line-through'>$</Text><Text fontSize='1.5rem'color='gray.500' decoration='line-through'>45</Text>
                </Flex>
              </Td>
            </Tr>
          </Tbody>
        </Table>

        <Flex maxW='620px' direction='column' align='center' mb='100px'>
          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='access' pos='absolute' top='-80px'/>
            Lifetime access
          </Text>
          <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='28px' mb='35px' w={textW90} p={textP20} >
            After the purchase you will have perpetual access to all the services offered for your account type.
            See Terms of Service for all the nitty-gritty details.
          </Text>
          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='discount' pos='absolute' top='-80px'/>
            Discounted price
          </Text>
          <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='28px' mb='35px' w={textW90} p={textP20} >
            Teams get a discount between 15% and 30% based on the number of members. Check the pricing table above for details.
          </Text>
          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='community' pos='absolute' top='-80px'/>
            Community membership
          </Text>
          <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='28px' mb='35px' w={textW90} p={textP20} >
            You will be invited to join our closed Discord community. Your personal link will be available under the profile page.
            I hope to build a place where anyone can learn the full context mindset and development practices, get help in applying it
            and where we work together to improve this system.
          </Text>
          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='teams' pos='absolute' top='-80px'/>
              How teams work?
          </Text>
          <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='28px' mb='35px' w={textW90} p={textP20} >
            I use a simple method to grant teams access to the site. The link/code generated for the owner of the team account enables
            2 simultaneous login sessions per member. This is not counted individually, only on the team level. Simply share the link with the
            members and they will be able to read the book.
            < br/>
            < br/>
            If somebody deliberately uses up the whole session allowance, simply request a
            new code through the Login menu -&gt; Need a new access link? functionality.
            That will invalidate all current sessions, and only you will have access to the new code.
            < br/>
            < br/>
            To disallow simple members from accessing the few management options the site currently provides, the Profile menu of team accounts
            requires a passcode that will be sent in an email to the registered address if requested.
            < br/>
            < br/>
            The current max size of a team is 100 members.
          </Text>
          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='early-access' pos='absolute' top='-80px'/>
            About early access
          </Text>
          <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='28px' mb='35px' w={textW90} p={textP20} >
            I have grand dreams of taking Full Context Development much further than what's visible now. However this is the right time
            to get validation for the whole concept. The material and it's main message took shape. There are still many 'holes'
            left empty, but for the most part their outline is there, meaning you will have a good guess about what's going to fill them.
            In the current state you will get a solid taste of the final product alongside all the main ideas and concepts I developed for the material.
            < br/>
            < br/>
            On the <CustomLink to='/book'>Book overview page</CustomLink> you can see the detailed brake down of the current progress.
            < br/>
            < br />
            I plan to finish the book somewhere between 3 months to a year based on my speed so far. I would love to incorporate your feedback into the upcoming versions.
            So I'm more than excited to hear your thoughts, both positive and negative. If you feel like sharing,
            hit me up through any of <CustomLink to='/support'>these channels</CustomLink>.
          </Text>
        </Flex>
      </Flex>
    </>
  )
}