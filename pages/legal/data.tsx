import { Flex, Text, Icon, Divider, OrderedList, ListItem } from '@chakra-ui/react'
import Head from 'components/Head'
import { CustomLink } from 'components/CustomLink'
import { AiOutlineDatabase } from 'react-icons/ai'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const titleM = { base: '30px auto 25px auto', md: '60px auto 25px auto' }
const sloganFontSize = { base: '1.2rem', md: '1.5rem' }
const textW80 = { base: '80%', md: '100%' }
const textW90 = { base: '90%', md: '100%' }
const textP20 = { base: '0 20px', md: '0' }
const introIconFs = { base: '2rem', md: '3rem' }
const introHeaderFs = { base: '1.5rem', md: '1.8rem' }
const introTextFs = { base: '1rem', md: '16px' }
const listFs = { base: '0.95rem', md: '16px' }

const Italic = styled.p`
  text-align: start;
  font-size: 0.999rem;
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

export default function DataProtectionAgreement() {
  return (
    <>
      <Head title='Data Protection • Full Context Development'/>
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
          Full Context Development Data Protection Agreement
        </Text>

        <Flex maxW='680px' w='100%' direction='column' align='center' mb='50px'>
          <Text textAlign='center' fontSize={introIconFs} color='black' mb='30px'>
            <Icon as={AiOutlineDatabase} />
          </Text>
          <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            All capitalized terms have their definition in Full Context Development's <CustomLink to='/legal/tos'>Terms of Service</CustomLink>, or
            in <CustomLink to='#definitions'>Section 1.</CustomLink> of this document, unless otherwise noted here.
          </Text>
          <Italic>
            These terms apply to all our Users. Effective date: December 1, 2021
          </Italic>
        </Flex>

        <Flex maxW='680px' direction='column' align='center' mb='100px'>
          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='intro' pos='absolute' top='-80px'/>
            INTRODUCTION
          </Text>
          <Divider mb='30px' borderColor='gray'/>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            The parties agree that the Full Context Development Data Protection Agreement (“<b>DPA</b>”)
            sets forth their obligations with respect to the processing of Customer Personal Data in connection
            with the Services offered by Full Context Development.
            Full Context Development makes the commitments in this DPA to all customers using the Service.
            Separate terms, including different privacy terms, govern Customer’s use of non-Full Context Development products.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='50px'>
            In the event of any conflict or inconsistency between the DPA and any other terms in Customer’s agreements with Full Context Development,
            the DPA shall prevail. The provisions of the DPA supersede any conflicting provisions of the Full Context Development Privacy Policy
            that otherwise may apply to processing of Customer Personal Data as defined herein.
          </Text>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='not-collect' pos='absolute' top='-80px'/>
            FULL CONTEXT DEVELOPMENT DATA PROTECTION
          </Text>
          <Divider mb='30px' borderColor='gray'/>

          <OrderedList m='0' mb='50px' p='0 10px 0 20px' w={textW90}>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold' pos='relative'>
                <Flex id='definitions' pos='absolute' top='-80px'/>
                Definitions
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                1.1 The "<b>Applicable Data Protection Laws</b>" means certain laws, regulations, regulatory frameworks,
                or other legislations relating to the processing and use of Customer Personal Data,
                as applicable to Customer's use of Full Context Development and the Full Context Development Service, including:
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                a. The EU General Data Protection Regulation 2016/679 ("GDPR"), along with any implementing or corresponding
                equivalent national laws or regulations, once in effect and applicable; and
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                b. The California Consumer Privacy Act of 2018, Cal. Civ. Code §§1798.100 et seq. ("CCPA"); and
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                c. The UK Data Protection Act 2018 and implementation of GDPR contained therein.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                1.2 "<b>Controller</b>," "<b>Data Subject</b>," "<b>Member State</b>," "<b>Personal Data</b>," "<b>Personal Data Breach</b>,"
                 "<b>Processing</b>," "<b>Processor</b>," and "<b>Supervisory Authority</b>"
                have the meanings given to them in the Applicable Data Protection Laws. In the event of a conflict, the meanings given in the GDPR will supersede.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                1.3 "<b>Customer Personal Data</b>" means any Personal Data for which Customer is a Controller,
                whether supplied by Customer for processing by Full Context Development or generated by Full Context Development
                in the course of performing its obligations under the Agreement. It includes data such as billing information,
                IP addresses, corporate email addresses, and any other Personal Data for which Customer is a Controller.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                1.4 A "<b>Data Breach</b>" means a Personal Data Breach or any other confirmed or reasonably suspected breach of Customer's Protected Data.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                1.5 "<b>End User</b>" means an individual Data Subject who controls a Full Context Development Account
                and has agreed to the Full Context Development Terms of Service, and whose Personal Data
                is being transferred, stored, or processed by Full Context Development. For example, each Customer, employee or contractor
                who has a Full Context Development Account is also a Full Context Development End User.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                1.6 "<b>Permitted Purposes</b>" for data processing are those limited and specific purposes of providing the Service
                as set forth in the Agreement, the Full Context Development Privacy Policy, and this Exhibit A,
                or the purposes for which a Data Subject has authorized the use of Customer Personal Data.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                1.7 "<b>Protected Data</b>" includes any Customer Personal Data processed by Full Context Development on behalf of Customer under the Agreement.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                1.8 "<b>Sensitive Data</b>" means any Customer Personal Data revealing racial or ethnic origin; political opinions,
                religious or philosophical beliefs or trade union membership; processing of genetic data or biometric data for the purposes
                of uniquely identifying a natural person; data concerning health, a natural person's sex life or sexual orientation;
                and data relating to offences, criminal convictions, or security measures.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold' pos='relative'>
                <Flex id='compliance' pos='absolute' top='-80px'/>
                Status and Compliance.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='data-processing' pos='absolute' top='-80px'/>
                2.1 Data Processing
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Full Context Development acts as a Processor in regard to any Customer Personal Data it receives in connection with the Agreement,
                and Full Context Development will process Customer Personal Data only for Permitted Purposes in accordance with Customer's instructions
                as represented by the Agreement and other written communications. In the event that Full Context Development is unable to
                comply with Customer's instructions, such as due to conflicts with the Applicable Data Protection Laws, or where processing is required
                by the Applicable Data Protection Laws or other legal requirements, Full Context Development will notify Customer to the extent permissible.
                Full Context Development processes all Customer Personal Data in the European Union; however, Full Context Development's
                subprocessors may process data outside of the European Union.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='data-controllers' pos='absolute' top='-80px'/>
                2.2 Data Controllers
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Full Context Development receives Customer Personal Data both from Customer and directly from Data Subjects who create End User accounts.
                Customer is a Controller only for the Customer Personal Data it transfers directly to Full Context Development.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='compliance' pos='absolute' top='-80px'/>
                2.3 Full Context Development Compliance; Data Transfers
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                Full Context Development will comply with Applicable Data Protection Laws in relation to the processing of Customer Personal Data.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                If transfers of Customer Personal Data to a third country or an international organization would happen all will be subject to
                appropriate safeguards as described in Article 46 of the GDPR and such transfers and safeguards will be documented according to Article 30(2) of the GDPR.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold' pos='relative'>
                <Flex id='data-protection' pos='absolute' top='-80px'/>
                Data Protection.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='data-processing' pos='absolute' top='-80px'/>
                3.1 Data Processing
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Full Context Development will process and communicate the Protected Data only for Permitted Purposes, unless the Parties agree in writing to an expanded purpose.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='data-quality' pos='absolute' top='-80px'/>
                3.2 Data Quality and Proportionality.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Full Context Development will keep the Customer Personal Data accurate and up to date, or enable Customer to do so.
                Full Context Development will take commercially reasonable steps to ensure that any Protected Data it collects on Customer's
                behalf is adequate, relevant, and not excessive in relation to the purposes for which it is transferred and processed.
                In no event will Full Context Development intentionally collect Sensitive Data on Customer's behalf. Customer agrees
                that the Full Context Development Service is not intended for the storage of Sensitive Data; if Customer chooses to
                upload Sensitive Data to the Service, Customer must comply with Article 9 of the GDPR, or equivalent provisions in the Applicable Data Protection Laws.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='retention' pos='absolute' top='-80px'/>
                3.3 Data Retention and Deletion.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Upon Customer's reasonable request, unless prohibited by law, Full Context Development will return, destroy, or deidentify all
                Customer Personal Data and related data at all locations where it is stored after it is no longer needed for the Permitted Purposes
                within thirty days of request. Full Context Development may retain Customer Personal Data and related data to the extent required
                by the Applicable Data Protection Laws, and only to the extent and for such period as required by the Applicable Data Protection Laws,
                provided that Full Context Development will ensure that Customer Personal Data is processed only as necessary for the purpose specified
                in the Applicable Data Protection Laws and no other purpose, and Customer Personal Data remains protected by the Applicable Data Protection Laws.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='processing' pos='absolute' top='-80px'/>
                3.4 Data Processing.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                Full Context Development provides the following information, required by Article 28(3) of the GDPR, regarding its processing of Customer's Protected Data:
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                a. <Text fontFamily='sans-serif' fontStyle='italic' as='span'>The subject matter and duration of the processing</Text> of Customer Personal Data are set out in the Agreement and this Addendum.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                b. <Text fontFamily='sans-serif' fontStyle='italic' as='span'>The nature and purpose of the processing</Text> of Customer Personal Data is described in Section 3.1 of this Addendum.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                c. <Text fontFamily='sans-serif' fontStyle='italic' as='span'>The types of Customer Personal Data to be processed</Text> are described in the Full Context Development Privacy Policy,
                and include Customer Personal Data such as user names, passwords, email addresses, and IP addresses.
                Full Context Development does not process or store credit card information. Customer may choose to supply Full Context Development with additional
                Customer Personal Data, such as in Customer's profile settings.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                d. <Text fontFamily='sans-serif' fontStyle='italic' as='span'>The categories of Data Subject to whom the Customer Personal Data relates</Text> are the Customer itself and its End Users.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                e. <Text fontFamily='sans-serif' fontStyle='italic' as='span'>The obligations and rights of Customer</Text> are set out in the Agreement and this Addendum.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold' pos='relative'>
                <Flex id='security-audit' pos='absolute' top='-80px'/>
                Security and Audit Obligations.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='tech-org' pos='absolute' top='-80px'/>
                4.1 Technical and Organizational Security Measures.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Taking into account the state of the art, the costs of implementation, and the nature, scope, context and purposes of processing
                as well as the risk of varying likelihood and severity for the rights and freedoms of natural persons, Full Context Development
                will implement appropriate technical and organizational measures to ensure a level of security appropriate to the risks, such as
                against accidental or unlawful destruction, or loss, alteration, unauthorized disclosure or access, presented by processing the
                Protected Data. Full Context Development will regularly monitor compliance with these measures and will continue to take appropriate
                safeguards throughout the duration of the Agreement.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='response' pos='absolute' top='-80px'/>
                4.2 Incident Response and Breach Notification.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Full Context Development will comply with Applicable Data Protection Laws.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='personell' pos='absolute' top='-80px'/>
                4.3 Full Context Development Personnel.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                Full Context Development represents and warrants that it will take reasonable steps to ensure that all Full Context Development
                personnel processing Protected Data have agreed to keep the Protected Data confidential and have received adequate training on
                compliance with this Addendum and the Applicable Data Protection Laws.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                If transfers of Customer Personal Data to a third country or an international organization would happen all will be subject to
                appropriate safeguards as described in Article 46 of the GDPR and such transfers and safeguards will be documented according to Article 30(2) of the GDPR.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='records' pos='absolute' top='-80px'/>
                4.4 Records.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                Full Context Development will maintain complete, accurate, and up to date written records of all categories of processing activities
                carried out on behalf of Customer containing the information required under the Applicable Data Protection Laws. To the extent
                that assistance does not risk the security of Full Context Development or the privacy rights of individual Data Subjects,
                Full Context Development will make these records available to Customer on request as reasonably required, such as to help
                Customer demonstrate its compliance under the Applicable Data Protection Laws.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                If transfers of Customer Personal Data to a third country or an international organization would happen all will be subject to
                appropriate safeguards as described in Article 46 of the GDPR and such transfers and safeguards will be documented according to Article 30(2) of the GDPR.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='assistance' pos='absolute' top='-80px'/>
                4.5 Assistance.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                Full Context Development will provide reasonable assistance to Customer with concerns such as data privacy impact assessments,
                Data Subject rights requests, consultations with Supervisory Authorities, and other similar matters, in each case solely in
                relation to the processing of Customer Personal Data and taking into account the nature of processing.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold' pos='relative'>
                <Flex id='security-audit' pos='absolute' top='-80px'/>
                Use and Disclosure of Protected Data.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='marketing' pos='absolute' top='-80px'/>
                5.1 No Use in Marketing.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Full Context Development will not use the Protected Data for the purposes of advertising third-party content, and will not sell the Protected Data
                to any third party except as part of a merger or acquisition.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='privacy-policy' pos='absolute' top='-80px'/>
                5.2 Full Context Development Privacy Policy.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                The Full Context Development Privacy Policy, publicly available at <CustomLink to='/legal/privacy'>https://www.fullcontextdevelopment.com/legal/privacy</CustomLink>,
                provides detailed notice of Full Context Development's privacy and data use practices, including its use of cookies,
                its dispute resolution process, and further details about Full Context Development's GDPR compliance.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold' pos='relative'>
                <Flex id='subpocessing' pos='absolute' top='-80px'/>
                  Subprocessing and Onward Transfer.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='data-protection' pos='absolute' top='-80px'/>
                6.1 Protection of Data.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Full Context Development is liable for onward transfers of Protected Data to its subprocessors.
                In the event that Full Context Development does transfer the Protected Data to a third-party subprocessor, or Full Context Development installs, uses,
                or enables a third party or third-party services to process the Protected Data on Full Context Development's behalf, Full Context Development will ensure that
                the third-party subprocessor provides at least the same level of confidentiality,
                security, and privacy protection as is required of Full Context Development by this DPA and the Applicable Data Protection Laws.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='response' pos='absolute' top='-80px'/>
                6.2 Acceptance of Full Context Development Subprocessors.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Customer authorizes Full Context Development to appoint (and permit each subprocessor appointed in accordance with
                this Section 6 to appoint) subprocessors in accordance with Section 6 and any other restrictions in the Agreement.
                Full Context Development may continue to use those subprocessors currently engaged as of the Effective Date of this Addendum.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='response' pos='absolute' top='-80px'/>
                6.3 General Consent for Onward Subprocessing.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                Customer provides a general consent for Full Context Development to engage onward subprocessors,
                conditional on Full Context Development's compliance with the following requirements:
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                a. Any onward subprocessor must agree and ensure to only process data in a country that the European Commission
                has declared to have an "adequate" level of protection; or to only process data on terms equivalent to the Standard Contractual Clauses,
                or pursuant to a Binding Corporate Rules approval granted by competent European data protection authorities; and
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                b. Full Context Development will restrict the onward subprocessor's access to Customer Personal Data only to what
                is strictly necessary to perform its services, and Full Context Development will prohibit the subprocessor from
                processing the Customer Personal Data for any other purpose.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='response' pos='absolute' top='-80px'/>
                6.4 Disclosure of Subprocessor Agreements.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Full Context Development maintains a list of onward subprocessors it has engaged to process Customer Personal Data
                at <CustomLink to='/legal/subprocessors'>https://www.fullcontextdevelopment.com/legal/subprocessors</CustomLink>, including
                the categories of Customer Personal Data processed, a description of the type of processing the subprocessor performs,
                and the location of its processing. Full Context Development will, upon Customer's written request,
                provide Customer with this list of subprocessors and the terms under which they process the Customer Personal Data.
                Pursuant to subprocessor confidentiality restrictions, Full Context Development may remove any confidential or
                commercially sensitive information before providing the list and the terms to Customer. In the event that Full Context Development
                cannot disclose confidential or sensitive information to Customer, the Parties agree that Full Context Development
                will provide all information it reasonably can in connection with its subprocessing agreements.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='response' pos='absolute' top='-80px'/>
                6.5 Objection to Subprocessors.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Full Context Development will provide thirty (30) days' prior written notice of the addition or removal of any subprocessor,
                including the categories listed in Section 6.4, by announcing changes on
                its <CustomLink to='/legal'>https://www.fullcontextdevelopment.com/legal</CustomLink> site.
                If Customer has a reasonable objection to Full Context Development's engagement of a new subprocessor,
                Customer must notify Full Context Development promptly in writing.
                Where possible, Full Context Development will use commercially reasonable efforts to provide an alternative solution to the affected
                Service to avoid processing of data by the objectionable subprocessor. In the event that Full Context Development is unable to provide
                an alternative solution and the Parties cannot resolve the conflict within ninety days, Customer may terminate the Agreement.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold' pos='relative'>
                <Flex id='subpocessing' pos='absolute' top='-80px'/>
                Termination.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='data-protection' pos='absolute' top='-80px'/>
                7.1 Suspension.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                In the event that Full Context Development is in breach of its obligations to maintain an adequate level of security or privacy protection,
                Customer may temporarily suspend the transfer of all Customer Personal Data or prohibit collection and processing
                of Customer Personal Data on Customer's behalf until the breach is repaired or the Agreement is terminated.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='data-protection' pos='absolute' top='-80px'/>
                7.2 Termination with Cause.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                In addition to any termination rights Customer has under the Agreement, Customer may terminate the Agreement
                without prejudice to any other claims at law or in equity in the event that:
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                a. Full Context Development notifies Customer that it can no longer meet its privacy obligations;
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                b. the transfer, collection, or processing of all Customer Personal Data has been temporarily suspended for longer than one month pursuant to Section 7.1;
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                c. Full Context Development is in substantial or persistent breach of any warranties or representations under this Addendum;
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                d. Full Context Development is no longer carrying on business, is dissolved, enters receivership, or a winding up order is made on behalf of Full Context Development; or
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                e. Customer objects to a subprocessor pursuant to Section 6.5, and Full Context Development has not been able to provide an alternative solution within ninety days.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='data-protection' pos='absolute' top='-80px'/>
                7.3 Breach.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Failure to comply with the material provisions of this Addendum is considered a material breach under the Agreement.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='data-protection' pos='absolute' top='-80px'/>
                7.4 Failure to perform.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                In the event that changes in law or regulation render performance of this Addendum impossible or commercially unreasonable,
                the Parties may renegotiate the Addendum in good faith. If renegotiation would not cure the impossibility,
                or if the Parties cannot reach an agreement, the Parties may terminate the Agreement after thirty days.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='data-protection' pos='absolute' top='-80px'/>
                7.5 Notification.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                In the event that Full Context Development determines that it can no longer meet its privacy obligations under this Addendum,
                Full Context Development will notify Customer in writing immediately.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='data-protection' pos='absolute' top='-80px'/>
                7.6 Modifications.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                G itHub may modify this Addendum from time to time as required by the Applicable Data Protection Laws,
                with thirty days' notice to Customer.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='data-protection' pos='absolute' top='-80px'/>
                7.7 Termination Requirements.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Upon Termination, Full Context Development must:
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                a. take reasonable and appropriate steps to stop processing the Customer Personal Data;
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                b. within ninety days of termination, delete or deidentify any Customer Personal Data Full Context Development stores
                on Customer's behalf pursuant to Section 3.3; and
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                c. provide Customer with reasonable assurance that Full Context Development has complied with its obligations in Section 7.7.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold' pos='relative'>
                <Flex id='subpocessing' pos='absolute' top='-80px'/>
                Liability for Data Processing.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' pos='relative'>
                <Flex id='data-protection' pos='absolute' top='-80px'/>
                8.1 Limitations.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Except as limited by the Applicable Data Protection Laws, any claims brought under this Addendum will be
                subject to the terms of the Agreement regarding Limitations of Liability.
              </Text>

            </ListItem>
          </OrderedList>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='license' pos='absolute' top='-80px'/>
            License
          </Text>
          <Divider mb='30px' borderColor='gray'/>

          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='50px' w={textW90} p={{ base: '0 0 0 20px', md: '0' }}>
            This Agreement is based on the <CustomLink to='https://docs.github.com/en/github/site-policy/github-data-protection-agreement-non-enterprise-customers' target='_blank'>Github Data Protection Agreement</CustomLink> and is simiarly licensed under this <CustomLink to='https://github.com/github/docs/blob/main/LICENSE' target='_blank'>CC BY</CustomLink> license.
          </Text>
        </Flex>
      </Flex>
    </>
  )
}
