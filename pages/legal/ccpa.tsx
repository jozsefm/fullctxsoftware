import { Flex, Text, Icon, Divider, OrderedList, ListItem, UnorderedList, Table, Thead, Tr, Th, Td, Tbody } from '@chakra-ui/react'
import Head from 'components/Head'
import { CustomLink } from 'components/CustomLink'
import styled from '@emotion/styled'
import { RiChatPrivateLine } from 'react-icons/ri'

const secondaryHeaderFs = { base: '1.1rem', md: '18px' }
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

const ItalicText = styled.p`
  text-align: start;
  font-size: 1rem;
  color: rgb(55, 65, 81);
  line-height: 26px;
  width: 90%;
  padding: 0 20px;
  margin-top: 15px;
  font-style: italic;
  font-family: sans-serif;

  @media screen and (min-width: 48em) {
    width: 100%;
    font-size: 16px;
    padding: 0;
  }
`

const marginTops = ['74px !important', '74px !important', '100px !important', '91px !important']

export default function CCPA() {
  return (
    <>
      <Head  title='Privacy Policy • Full Context Development'/>
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
          Full Context Development's Notice about the California Consumer Privacy Act
        </Text>

        <Flex maxW='680px' direction='column' align='center' mb='50px' w='100%'>
          <Text textAlign='start' fontSize={introIconFs} color='black' mb='30px'>
            <Icon as={RiChatPrivateLine} />
          </Text>
          <ItalicText>
            Effective date: December 1, 2021
          </ItalicText>
        </Flex>

        <Flex maxW='680px' direction='column' align='center' mb='100px'>
          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            Full Context Development's Notice to California Residents
          </Text>
          <Divider mb='30px' borderColor='gray'/>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='50px'>
            The <CustomLink to='https://leginfo.legislature.ca.gov/faces/billCompareClient.xhtml?bill_id=201720180AB375' target='_blank'>California Consumer Privacy Act of 2018, (Cal. Civ. Code §1798.100 et seq.</CustomLink>, as
            amended, “CCPA”) gives California residents rights and control over their personal information.
            Miskolczy József Personal Enterprise. ("Full Context Development", "we") provides this statement to those residents ("you") in accordance with requirements
            under the CCPA to make certain disclosures about the collection and processing of their personal information. This is Full Context Development California-specific
            description of consumers’ privacy rights under the CCPA. For information about how we’ve extended the CCPA core rights to control personal
            information to all of our users in the United States, please see our <CustomLink to='/legal/privacy'>Privacy Policy</CustomLink>.
          </Text>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            We do not sell your personal information
          </Text>
          <Divider mb='30px' borderColor='gray'/>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            Under the CCPA, a business that sells California residents' personal information to others: 1) must give notice to California residents
            before selling their personal information to others; and 2) must provide the right to opt out of the sale of their personal information.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            When receiving a request, we will verify that the individual making the request is the resident to whom the personal information
            subject to the request pertains. California residents may exercise their rights themselves or may use an authorized agent to make
            requests to disclose certain information about the processing of their personal information or to delete personal information on
            their behalf. If you use an authorized agent to submit a request, we may require that you provide us additional information demonstrating
            that the agent is acting on your behalf.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='50px'>
            With respect to their personal information, California residents may exercise the rights described below.
          </Text>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            Your rights under the CCPA
          </Text>
          <Divider mb='30px' borderColor='gray'/>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            The CCPA provides California residents with certain rights related to their personal information.
            To submit a request based on these rights, please contact us in email via <CustomLink to='/support'>Support</CustomLink>.
          </Text>

          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='20px'>
            Full Context Development does not sell personal information, including personal information of anyone under 16 years old.
            Thus, these notification and opt-out requirements do not apply to Full Context Development.
          </Text>

          <OrderedList m='0' mb='50px' p='0 10px 0 20px' w={textW90}>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold' pos='relative'>
                Right to know what personal information is being collected, for what purposes and with whom it is shared
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                California residents have the right to request from a business disclosure of the categories and specific pieces of
                personal information it has collected from them in the preceding 12 months, the categories of sources from which
                such personal information is collected, the business or commercial purpose for collecting or selling such personal
                information, and the categories of third parties with whom the business shares personal information.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                If you request that a business disclose categories and specific pieces of personal information collected about you,
                you have the right to receive that information, free of charge, twice a year. The information may be delivered by
                mail or electronically and, if provided electronically, shall be in a portable and, to the extent technically feasible,
                readily usable format that allows the California resident to relatively easily transmit this information to another entity.
                You can use your <CustomLink to='/account'>Profile Page</CustomLink> to access all your personal information.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold' pos='relative'>
                Right to know whether your personal information is sold or disclosed for a business purpose and to whom
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                California residents have the right to request from a business that sells or discloses personal information for a business
                purpose separate lists of the categories of personal information collected, sold or disclosed for a business purpose in the
                preceding 12 months, including the categories of third parties to whom the personal information was sold or disclosed for a
                business purpose.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold' pos='relative'>
                Right to say no to the sale of your personal information
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                As explained above, the CCPA requires businesses that sell personal information to allow residents the ability to opt out of
                the selling of their information.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Again, Full Context Development does not sell personal information.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold' pos='relative'>
                Right to non-discrimination of service or price if you exercise your privacy rights
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                The CCPA prohibits businesses from discriminating against a California resident for exercising any of their rights under the CCPA, including by
              </Text>
              <UnorderedList m='0' mb='20px' p='0 10px 0 20px' w={textW90}>
                <ListItem>
                  <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                    denying goods or services
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                    charging different prices or rates for goods or services, including through the use of discounts or other benefits or by imposing penalties
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                    providing a different level or quality of goods or services
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                    suggesting that the person exercising their rights will receive a different price or rate for goods or services or a different level or quality of goods or services
                  </Text>
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold' pos='relative'>
                Right to deletion
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                California residents have the right to request that a business delete any of their personal information that the business collected from them,
                subject to the exceptions in CCPA §1798.105.
              </Text>
            </ListItem>
          </OrderedList>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            Our Handling of Personal Information
          </Text>
          <Divider mb='30px' borderColor='gray'/>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            While the table below contains information about the categories of personal information we collect process and share,
            please see the Full Context Development <CustomLink to='/legal/privacy'>Privacy Policy</CustomLink> for full details.
          </Text>
        </Flex>

        <Flex overflowX={tableOverflowX} w='100%' maxW='1100px'>
          <Table variant='simple' minW='100%' py='20px' mb='50px' fontSize='0.9rem'>
            <Thead>
              <Tr verticalAlign='top'>
                <Th minW='200px'>Category of personal information collected in last 12 months</Th>
                <Th minW='200px'>Category of sources from which the personal information has been collected</Th>
                <Th minW='250px'>Business or commercial purpose(s) for collecting the personal information</Th>
                <Th minW='170px'>Categories of third parties with whom the personal information is shared</Th>
                <Th minW='170px'>Categories of personal information disclosed for a business or commercial purpose</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr verticalAlign='top'>
                <Td>
                  Identifiers (such as user name, unique personal identifier, online identifier
                  Internet Protocol address, email address, or other similar identifiers)
                </Td>
                <Td>
                  Information consumer provides directly or automatically through their interaction with our Service and/or Website
                </Td>
                <Td>
                  Detecting security incidents, protecting against malicious, deceptive, fraudulent, or illegal activity, and prosecuting those responsible for that activity
                  <br/>
                  <br/>
                  Debugging to identify and repair errors that impair existing intended functionality
                  <br />
                  <br />
                  Performing services on behalf of the business or service provider
                  <br />
                  <br />
                  Undertaking internal research for technological development and demonstration
                  <br />
                  <br />
                  Undertaking activities to verify or maintain the quality or safety of a service, and to improve, upgrade, or enhance the service
                </Td>
                <Td>Service providers, applicable customers, law enforcement</Td>
                <Td>This category of personal information has been disclosed for a business or commercial purpose</Td>
              </Tr>
              <Tr verticalAlign='top'>
                <Td>
                  Any categories of personal information described in subdivision (e) of Cal. Civ. Code §1798.80
                  ( which defines “personal information” as “any information that identifies, relates to, describes, or is capable of being associated with,
                  a particular individual”— with examples including name, address, credit card or debit card number—and excludes publicly available information)
                </Td>
                <Td>
                  Information consumer provides directly
                </Td>
                <Td>
                  Prosecuting those responsible for malicious, deceptive, fraudulent, or illegal activity.
                  <br/>
                  <br/>
                  Performing services on behalf of the business or service provider
                </Td>
                <Td>Service providers, law enforcement</Td>
                <Td>This category of personal information has been disclosed for a business or commercial purpose</Td>
              </Tr>
              <Tr verticalAlign='top'>
                <Td>
                  Commercial information (such as about products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies)
                </Td>
                <Td>
                  Information consumer provides directly or automatically through their interaction with our Services
                </Td>
                <Td>
                  Debugging to identify and repair errors that impair existing intended functionality
                  <br/>
                  <br/>
                  Performing services on behalf of the business or service provider
                </Td>
                <Td>Service providers, law enforcement</Td>
                <Td>This category of personal information has been disclosed for a business or commercial purpose</Td>
              </Tr>
              <Tr verticalAlign='top'>
                <Td>
                  Geolocation data (such as IP address)
                </Td>
                <Td>
                  Information consumer provides automatically through their interaction with our Services
                </Td>
                <Td>
                  Detecting security incidents, protecting against malicious, deceptive, fraudulent, or illegal activity, and prosecuting those responsible for that activity
                  <br/>
                  <br/>
                  Debugging to identify and repair errors that impair existing intended functionality
                  <br/>
                  <br/>
                  Performing services on behalf of the business or service provider
                  <br/>
                  <br/>
                  Undertaking internal research for technological development and demonstration
                  <br/>
                  <br/>
                  Undertaking activities to verify or maintain the quality or safety of a service, and to improve, upgrade, or enhance the service
                </Td>
                <Td>Service providers, applicable customers, law enforcement</Td>
                <Td>This category of personal information has been disclosed for a business or commercial purpose</Td>
              </Tr>
              <Tr verticalAlign='top'>
                <Td>
                  Audio, electronic, visual, or similar information
                </Td>
                <Td>
                  Information consumer may choose to provide directly
                </Td>
                <Td>
                  Performing services (user profile)
                </Td>
                <Td>Service providers</Td>
                <Td>This category of personal information has been disclosed for a business or commercial purpose</Td>
              </Tr>
              <Tr verticalAlign='top'>
                <Td>
                  Information as defined in the Family Educational Rights and Privacy Act (20 U.S.C. Sec. 1232g; 34 C.F.R. Part 99)
                </Td>
                <Td>
                  Information consumer may choose to provide directly
                </Td>
                <Td>
                  Performing services (user profile)
                </Td>
                <Td>Service providers</Td>
                <Td>This category of personal information has been disclosed for a business or commercial purpose</Td>
              </Tr>
              <Tr verticalAlign='top'>
                <Td>
                  Inferences drawn from any of the information identified in this table to create a profile about a consumer reflecting the consumer’s preferences
                </Td>
                <Td>
                  Information consumer provides directly or automatically through their interaction with our Services
                </Td>
                <Td>
                  Performing services on behalf of the business or service provider
                </Td>
                <Td>Service providers</Td>
                <Td>This category of personal information has been disclosed for a business or commercial purpose</Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>

        <Text maxW='680px' textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
          <Flex id='license' pos='absolute' top='-80px'/>
          License
        </Text>
        <Divider maxW='680px' mb='30px' borderColor='gray'/>

        <Text maxW='680px' textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='100px' w={textW90} p={textP20}>
          This Agreement is based on the <CustomLink to='https://docs.github.com/en/github/site-policy/githubs-notice-about-the-california-consumer-privacy-act' target='_blank'>Github's Notice about the California Consumer Privacy Act</CustomLink> and is simiarly licensed under this <CustomLink to='https://github.com/github/docs/blob/main/LICENSE' target='_blank'>CC BY</CustomLink> license.
        </Text>


      </Flex>
    </>
  )
}
