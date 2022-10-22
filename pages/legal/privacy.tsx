import { Flex, Text, Icon, Divider, OrderedList, ListItem, UnorderedList } from '@chakra-ui/react'
import Head from 'components/Head'
import { CustomLink } from 'components/CustomLink'
import { MdVerifiedUser } from 'react-icons/md'
import styled from '@emotion/styled'

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

export default function PrivacyPolicy() {
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
          Full Context Development Privacy Policy
        </Text>

        <Flex maxW='680px' direction='column' align='center' mb='50px'>
          <Text textAlign='center' fontSize={introIconFs} color='black' mb='30px'>
            <Icon as={MdVerifiedUser} />
          </Text>
          <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            Thanks for entrusting Miskolczy József Personal Enterprise. (“Full Context Development”, “we”) with your personal information.
            Holding on to your private information is a serious responsibility, and we want you to know how we're handling it.
          </Text>
          <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20}>
            All capitalized terms have their definition in Full Context Development's <CustomLink to='/legal/tos'>Terms of Service</CustomLink>, unless otherwise noted here.
          </Text>
          <ItalicText>
            Effective date: December 1, 2021
          </ItalicText>
        </Flex>

        <Flex maxW='680px' direction='column' align='center' mb='100px'>
          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='info-collection' pos='absolute' top='-80px'/>
            What information Full Context Development collects
          </Text>
          <Divider mb='30px' borderColor='gray'/>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            <b>"User Personal Information"</b> is any information about one of our Users which could,
            alone or together with other information, personally identify them or otherwise be reasonably linked or connected with them.
            Information such as a username and password, an email address, a real name, an Internet protocol (IP) address, and a photograph
            are examples of “User Personal Information.”
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='50px'>
            User Personal Information does not include aggregated, non-personally identifying information
            that does not identify a User or cannot otherwise be reasonably linked or connected with them.
            We may use such aggregated, non-personally identifying information for research purposes
            and to operate, analyze, improve, and optimize our Website and Service.
          </Text>

          <Text textAlign='start' fontSize={secondaryHeaderFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='20px' fontWeight='bold'>
            Information users provide directly to Full Context Development
          </Text>

          <OrderedList m='0' mb='50px' p='0 10px 0 20px' w={textW90}>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold' pos='relative'>
                <Flex id='reg-info' pos='absolute' top='-80px'/>
                Registration information
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                We require some basic information at the time of account creation.
                When you create your own username and password, we ask you for a valid email address.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                In case of Team accounts we also ask for a team name, but we don't require them to be 'real' name.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold' pos='relative'>
                <Flex id='payment-info' pos='absolute' top='-80px'/>
                Payment information
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                If you sign up for the Service our Merchant of Record <CustomLink to='https://paddle.com' target='_blank'>Paddle</CustomLink> will
                collect your full name, address, and credit card information or PayPal information and process them according
                to their <CustomLink to='https://paddle.com/legal/' target='_blank'>Terms of Service</CustomLink> and <CustomLink to='https://paddle.com/privacy/' target='_blank'>Privacy Policy</CustomLink>. If
                you sign up as a legal entity they might ask for more information. Please note, Full Context Development does not process
                or store your credit card information or PayPal information, but our third-party payment processor does.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold' pos='relative'>
                <Flex id='profile-info' pos='absolute' top='-80px'/>
                Profile information
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                Once the necessary features as available in the Service you may choose to give us more information for your Account profile,
                such as your full name, an avatar which may include a photograph, your biography, your company, and URLs to third-party websites.
                This information may include User Personal Information. Please note that your profile information may be visible to other Users of our Service.
              </Text>
            </ListItem>
          </OrderedList>

          <Text textAlign='start' fontSize={secondaryHeaderFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='20px' fontWeight='bold'>
            Information Full Context Development automatically collects from your use of the Service
          </Text>

          <OrderedList m='0' mb='50px' p='0 10px 0 20px' w={textW90}>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold' pos='relative'>
                <Flex id='transaction-info' pos='absolute' top='-80px'/>
                Transactional information
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                If you have signed up with us, we automatically collect certain information about your transactions on the Service,
                such as the date, time, and amount charged.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold' pos='relative'>
                <Flex id='usage-info' pos='absolute' top='-80px'/>
                Usage information
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                If you're accessing our Service or Website, we automatically collect the same basic information that most services collect,
                subject, where necessary, to your consent. This includes information about how you use the Service, such as the pages you view,
                the referring site, your IP address and session information, and the date and time of each request.
                This is information we collect from every visitor to the Website, whether they have an Account or not.
                This information may include User Personal information.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold' pos='relative'>
                <Flex id='cookie-info' pos='absolute' top='-80px'/>
                Cookies
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                As further described below, we automatically collect information from cookies (such as cookie ID and settings) to keep you logged in,
                to remember your preferences, to identify you and your device and to analyze your use of our service.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold' pos='relative'>
                <Flex id='device-info' pos='absolute' top='-80px'/>
                Device information
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                We may collect certain information about your device, such as its IP address, browser or client application information,
                language preference, operating system and application version, device type and ID, and device model and manufacturer.
                This information may include User Personal information.
              </Text>
            </ListItem>
          </OrderedList>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='not-collect' pos='absolute' top='-80px'/>
            What information Full Context Development does not collect
          </Text>
          <Divider mb='30px' borderColor='gray'/>

          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            We do not intentionally collect <CustomLink to='https://gdpr-info.eu/art-9-gdpr/' target='_blank'>“Sensitive Personal Information”</CustomLink>, such as personal data revealing
            racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, and the processing of genetic data,
            biometric data for the purpose of uniquely identifying a natural person, data concerning health or data concerning a natural person’s sex life or sexual orientation.
            If you choose to store any Sensitive Personal Information on our servers, you are responsible for complying with any regulatory controls regarding that data.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            If you are a child under the age of 14, you may not have an Account on Full Context Development.
            Full Context Development does not knowingly collect information from or direct any of our content specifically to children under 14.
            If we learn or have reason to suspect that you are a User who is under the age of 14,
            we will have to close your Account. We don't want to discourage you from learning to code, but those are the rules.
            Please see our <CustomLink to='/legal/tos#cancelation' >Terms of Service</CustomLink> for information about Account termination.
            Different countries may have different minimum age limits,
            and if you are below the minimum age for providing consent for data collection in your country, you may not have an Account on Full Context Development.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='50px'>
            We do not intentionally collect User Personal Information that is stored in free-form content inputs.
            Any personal information uploaded using such input is the responsibility of the User.
          </Text>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='use' pos='absolute' top='-80px'/>
            How Full Context Development uses your information
          </Text>
          <Divider mb='30px' borderColor='gray'/>

          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='20px'>
            We may use your information for the following purposes:
          </Text>
          <UnorderedList m='0' mb='50px' p='0 10px 0 20px' w={textW90}>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                We use your <CustomLink to='/legal/privacy#reg-info'>Registration Information</CustomLink> to create your account, and to provide you the Service.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                We do not diretcly use your <CustomLink to='/legal/privacy#payment-info' >Payment Information</CustomLink>. It's processed by our Merchant of Record: Paddle.
                We communicate with their systems to provider you with the service you requested.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                We use your User Personal Information, specifically your username and email address, to identify you on Full Context Development.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                We use your <CustomLink to='/legal/privacy#profile-info' >Profile Information</CustomLink> to fill out your Account profile and to share that profile with other users if you ask us to.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                We use your email address to communicate with you, if you've said that's okay, and only for the reasons you’ve said that’s okay.
                Please see our section on email communication for more information.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                We may use User Personal Information to invite you to take part in surveys, beta programs,
                or other research projects, subject, where necessary, to your consent.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                We use <CustomLink to='/legal/privacy#usage-info' >Usage Information</CustomLink> and <CustomLink to='/legal/privacy#device-info' >Device Information</CustomLink> to
                better understand how our Users use Full Context Development and to improve our Website and Service.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                We may use your User Personal Information if it is necessary for security purposes
                or to investigate possible fraud or attempts to harm Full Context Development or our Users.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                We may use your User Personal Information to comply with our legal obligations, protect our intellectual property,
                and enforce our <CustomLink to='/legal/tos' >Terms of Service</CustomLink>.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                We limit our use of your User Personal Information to the purposes listed in this Privacy Statement.
                If we need to use your User Personal Information for other purposes, we will ask your permission first.
                Once the features are implemented, you can always see what information we have,
                how we're using it, and what permissions you have given us in your user profile.
              </Text>
            </ListItem>
          </UnorderedList>

          <Text textAlign='start' fontSize={secondaryHeaderFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='20px' fontWeight='bold'>
            Our legal bases for processing information
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='20px'>
            To the extent that our processing of your User Personal Information is subject to certain international laws
            (including, but not limited to, the European Union's General Data Protection Regulation (GDPR)),
            Full Context Development is required to notify you about the legal basis on which we process User Personal Information.
            Full Context Development processes User Personal Information on the following legal bases:
          </Text>
          <UnorderedList m='0' mb='50px' p='0 0 0 20px' w={textW90}>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                Contract Performance:
              </Text>
              <UnorderedList m='0' p='0 0 0 15px' listStyleType='circle'>
                <ListItem textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                  When you create a Full Context Development Account, you provide your <CustomLink to='/legal/privacy#reg-info' >Registration Information</CustomLink>.
                  We require this information for you to enter into the Terms of Service agreement with us,
                  and we process that information on the basis of performing that contract.
                  We also process your username and email address on other legal bases, as described below.
                </ListItem>
                <ListItem textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                  If you have an Account with us, we collect and process additional
                  <CustomLink to='/legal/privacy#payment-info' >Payment Information</CustomLink> on the basis of performing that contract.
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                Consent:
              </Text>
              <UnorderedList m='0' p='0 0 0 15px' listStyleType='circle'>
                <ListItem textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                  We rely on your consent to use your User Personal Information under the following circumstances:
                  when you fill out the information in your <CustomLink to='/account' >user profile</CustomLink>;
                  when you fill out the information in your team;
                  when you decide to participate in a Full Context Development survey; and for marketing purposes, where applicable.
                  All of this User Personal Information is entirely optional, and you have the ability to access, modify, and delete it at any time.
                  You may withdraw your consent at any time.
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                Legitimate Interests:
              </Text>
              <UnorderedList m='0' p='0 0 0 15px' listStyleType='circle'>
                <ListItem textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                  Generally, the remainder of the processing of User Personal Information we perform is necessary
                  for the purposes of our legitimate interest, for example, for legal compliance purposes, security purposes,
                  or to maintain ongoing confidentiality, integrity, availability, and resilience of Full Context Development's systems, Website, and Service.
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                If you would like to request deletion of data we process on the basis of consent
                or if you object to our processing of personal information, please reach out through <CustomLink to='/support'>Support</CustomLink>
              </Text>
            </ListItem>
          </UnorderedList>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='share' pos='absolute' top='-80px'/>
            How we share the information we collect
          </Text>
          <Divider mb='30px' borderColor='gray'/>

          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='30px'>
            We may share your User Personal Information with third parties under one of the following circumstances:
          </Text>
          <Text textAlign='start' fontSize={secondaryHeaderFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px' fontWeight='bold'>
            With your consent
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='30px'>
            We share your User Personal Information, if you consent, after letting you know what information will be shared,
            with whom, and why. You may direct us through your actions on Full Context Development to share your User Personal Information.
            For example, if you join an Team, you indicate your willingness to provide the owner of the Team
            with the ability to view your data through the Team management functionalities. Another example might be
            contributing to the Content, implying you want to share your data publicly as contributor information.
          </Text>
          <Text textAlign='start' fontSize={secondaryHeaderFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px' fontWeight='bold'>
            With service providers
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='30px'>
            We share User Personal Information with a limited number of service providers who process it on our behalf to provide
            or improve our Service, and who have agreed to privacy restrictions similar to the ones in our Privacy Statement by
            signing data protection agreements or making similar commitments. Our service providers perform payment processing,
            network data transmission, hosting, security, logging and other similar services. While Full Context Development processes
            all User Personal Information in Hungary, our service providers may process data outside of Hungary
            or the European Union. If you would like to know who our service providers are, please see our page on <CustomLink to='/legal/subprocessors'>Subprocessors</CustomLink>.
          </Text>
          <Text textAlign='start' fontSize={secondaryHeaderFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px' fontWeight='bold'>
            For security purposes
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='30px'>
            If you are a member of a Team, Full Context Development may share
            your <CustomLink to='/legal/privacy#usage-info' >Usage Information</CustomLink> and <CustomLink to='/legal/privacy#device-info' >Device Information</CustomLink> associated
            with that Team with an owner and/or administrator of the Team, to the extent that such
            information is provided only to investigate or respond to a security incident that affects or compromises the security of that particular Team.
          </Text>
          <Text textAlign='start' fontSize={secondaryHeaderFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px' fontWeight='bold'>
            For legal disclosure
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='30px'>
            Full Context Development strives for transparency in complying with legal process and legal obligations. Unless prevented from doing so by law or court order,
            or in rare, exigent circumstances, we make a reasonable effort to notify users of any legally compelled or required disclosure of their information.
            Full Context Development may disclose User Personal Information or other information we collect about you to law enforcement if required in response
            to a valid subpoena, court order, search warrant, a similar government order, or when we believe in good faith that disclosure is necessary
            to comply with our legal obligations, to protect our property or rights, or those of third parties or the public at large.
          </Text>
          <Text textAlign='start' fontSize={secondaryHeaderFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px' fontWeight='bold'>
            Change in control or sale
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='30px'>
            We may share User Personal Information if we are involved in a merger, sale, or acquisition of corporate entities or business units.
            If any such change of ownership happens, we will ensure that it is under terms that preserve the confidentiality of User Personal Information,
            and we will notify you on our Website or by email before any transfer of your User Personal Information.
          </Text>
          <Text textAlign='start' fontSize={secondaryHeaderFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px' fontWeight='bold'>
            Aggregate, non-personally identifying information
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            At the moment we <b>do not</b> share certain aggregated, non-personally identifying information with others
            about how our users, collectively, use Full Context Development, or how our users respond to our other offerings.
            We reserve the right to change this with or without notice, at any time.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            We <b>do not</b> sell your User Personal Information for monetary or other consideration.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='50px'>
            Please note: The California Consumer Privacy Act of 2018 (“CCPA”) requires businesses to state in their privacy policy
            whether or not they disclose personal information in exchange for monetary or other valuable consideration.
            While CCPA only covers California residents, we voluntarily extend its core rights for people to control their data to all of our users,
            not just those who live in California.
          </Text>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='other' pos='absolute' top='-80px'/>
            Other important information
          </Text>
          <Divider mb='30px' borderColor='gray'/>

          <Text textAlign='start' fontSize={secondaryHeaderFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px' fontWeight='bold'>
            Public information on Full Context Development
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            Many of the Full Context Development services and features are public-facing.
            If your content is public-facing, third parties may access and use it in compliance with our Terms of Service,
            such as by viewing your contribution profile or Comments. We do not sell that content; it is yours.
            However, we do allow third parties, such as research organizations or archives, to compile public-facing Full Context Development information.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='30px'>
            Even though disallowed by the Terms and Condition and Privacy Policy other third parties,
            might scrape Full Context Development without our approval and compile data as well.
            Your User Personal Information associated with your content could be gathered by third parties in these compilations of Full Context Development data.
            If you do not want your User Personal Information to appear in third parties’ compilations of Full Context Development data,
            please do not create User Personal Information that is publicly available through our Services.
          </Text>
          
          <Text textAlign='start' fontSize={secondaryHeaderFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px' fontWeight='bold'>
            Teams
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            You may indicate, through your actions on Full Context Development, that you are willing to share your User Personal Information.
            If you are a member of a Team, then its Account owners may receive your User Personal Information.
            When you accept an invitation to a Team, you will be notified of the types of information owners may be able to see.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            Please note, Full Context Development may share your
            username, <CustomLink to='/legal/privacy#usage-info' >Usage Information</CustomLink> and <CustomLink to='/legal/privacy#device-info' >Device Information</CustomLink> with
            the owner(s) of the Team you are a member of, to the extent that your User Personal Information is provided
            only to investigate or respond to a security incident that affects or compromises the security of that particular Team.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='50px'>
            Please contact the Account owners for more information about how they might process your User Personal Information
            in their Team and the ways for you to access, update, alter, or delete the User Personal Information stored in the Account.
          </Text>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='other' pos='absolute' top='-80px'/>
            How you can access and control the information we collect
          </Text>
          <Divider mb='30px' borderColor='gray'/>

          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            If you're already a Full Context Development user, you may access, update, alter, or delete your basic user profile information
            by <CustomLink to='/account'>editing your user profile</CustomLink> or contacting Full Context
            Development <CustomLink to='/support'>Support</CustomLink>. You can control the information we collect about you by
            limiting what information is in your profile, by keeping your information current, or by contacting Full Context Development Support.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='30px'>
            If Full Context Development processes information about you, such as information Full Context Development receives from third parties,
            and you do not have an account, then you may, subject to applicable law, access, update, alter, delete, or object
            to the processing of your personal information by contacting Full Context Development <CustomLink to='/support'>Support</CustomLink>.
          </Text>
          
          <Text textAlign='start' fontSize={secondaryHeaderFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px' fontWeight='bold'>
            Data portability
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            As a Full Context Development User, you can always take your data with you.
            You can save your profile data by copying it from the My Account page.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            Please note, Full Context Development may share your username, Usage Information, and Device Information with the owner(s)
            of the Team you are a member of, to the extent that your User Personal Information is provided
            only to investigate or respond to a security incident that affects or compromises the security of that particular Team.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='30px'>
            Please contact the Account owners for more information about how they might process your User Personal Information
            in their Team and the ways for you to access, update, alter, or delete the User Personal Information stored in the Account.
          </Text>

          <Text textAlign='start' fontSize={secondaryHeaderFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px' fontWeight='bold'>
            Data retention and deletion of data
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            Generally, Full Context Development retains User Personal Information for as long as your account is active or as needed to provide you services.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='50px'>
            If you would like to cancel your account or delete your User Personal Information,
            you may do so in your <CustomLink to='/account'>user profile</CustomLink>. We retain and use your information as necessary to comply with our legal obligations,
            resolve disputes, and enforce our agreements, but barring legal requirements, we will delete your full profile
            (within reason) within 90 days of your request. You may contact Full Context Development <CustomLink to='/support'>Support</CustomLink> to
            request the erasure of the data we process on the basis of consent within 30 days.
          </Text>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='cookie-tracking' pos='absolute' top='-80px'/>
            Our use of cookies and tracking
          </Text>
          <Divider mb='30px' borderColor='gray'/>

          <Text textAlign='start' fontSize={secondaryHeaderFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px' fontWeight='bold'>
            Cookies
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            Full Context Development only uses strictly necessary cookies.
            Cookies are small text files that websites often store on computer hard drives or mobile devices of visitors.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            We use cookies solely to provide, secure, and improve our service.
            For example, we use them to keep you logged in, remember your preferences, identify your device for security purposes,
            analyze your use of our service, compile statistical reports, and provide information for future development of Full Context Development.
            We use <CustomLink to='https://plausible.io/data-policy' target='_blank'>Plausible Analytics</CustomLink> for analytics purposes,
            which is a GDPR, CCPA and PECR compliant service that doesn't collect any Personal Information.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            By using our service, you agree that we can place these types of cookies on your computer or device.
            If you disable your browser or device’s ability to accept these cookies, you will not be able to log in or use our service.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='30px'>
            We provide more information about cookies on Full Context Development on our Full Context
            Development <CustomLink to='/legal/subprocessors'>Subprocessors and Cookies</CustomLink> page
            that describes the cookies we set, the needs we have for those cookies, and the expiration of such cookies.
          </Text>

          <Text textAlign='start' fontSize={secondaryHeaderFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px' fontWeight='bold'>
            DNT
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='50px'>
            <CustomLink to='https://www.eff.org/issues/do-not-track' target='_blank'>"Do Not Track"</CustomLink> (DNT)
            is a privacy preference you can set in your browser if you do not want online services to collect
            and share certain kinds of information about your online activity from third party tracking services.
            Full Context Development does not responds to browser DNT signals because we do not use tracking services.
            If you would like to set your browser to signal that you would not like to be tracked,
            please check your browser's documentation for how to enable that signal.
            There are also good applications that block online tracking, such as <CustomLink to='https://privacybadger.org/' target='_blank'>Privacy Badger</CustomLink>.
          </Text>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='security' pos='absolute' top='-80px'/>
            How Full Context Development secures your information
          </Text>
          <Divider mb='30px' borderColor='gray'/>

          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            Full Context Development takes all reasonably necessary measures within it's power to protect User Personal Information from
            unauthorized access, alteration, or destruction; maintain data accuracy; and help ensure the appropriate use of User Personal Information.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            Full Context Development's security program:
          </Text>
          <UnorderedList m='0' mb='20px' p='0 10px 0 20px' w={textW90}>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                complies with applicable information security-related laws and regulations in the geographic regions where Full Context Development does business;
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                is appropriate to the nature, size, and complexity of Full Context Developments’s business operations;
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                includes incident response and data breach notification processes;
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                includes security safeguards reasonably designed to protect the confidentiality, integrity, availability, and resilience of our Users' data.
              </Text>
            </ListItem>
          </UnorderedList>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            In the event of a data breach that affects your User Personal Information, we will act promptly
            to mitigate the impact of a breach and notify any affected Users without undue delay.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            Transmission of data on Full Context Development is encrypted using HTTPS (TLS), when Personal Information is
            stored with a third-party storage provider, it is encrypted at rest.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='50px'>
            No method of transmission, or method of electronic storage, is 100% secure. Therefore, we cannot guarantee its absolute security.
          </Text>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='global' pos='absolute' top='-80px'/>
            Full Context Development's global privacy practices
          </Text>
          <Divider mb='30px' borderColor='gray'/>

          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='20px'>
            Miskolczy József Private Enterprise is the controller responsible for the processing of your personal information in connection with the Service,
            except if the User acts as a processor, Full Context Development will be the subprocessor.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            Our address is
          </Text>
          <UnorderedList m='0' mb='20px' p='0 10px 0 20px' w={textW90}>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'>
                Derék utca 77. 3./7., 4031, Debrecen, Hajdú-Bihar Megye, Hungary
              </Text>
            </ListItem>
          </UnorderedList>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            We store and process the information that we collect in the European Union in accordance with this Privacy Statement,
            though our service providers may store and process data outside the European Union.
            However, we understand that we have Users from different countries and regions with different privacy expectations,
            and we try to meet those needs to the best of our ability however we can not guarantee full compliance.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            We provide the same high standard of privacy protection—as described in this Privacy Statement—to all our users around the world,
            regardless of their country of origin or location.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='20px'>
            In particular:
          </Text>
          <UnorderedList m='0' mb='50px' p='0 10px 0 20px' w={textW90}>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='5px'>
                Full Context Development provides clear methods of unambiguous, informed, specific, and freely given consent
                at the time of data collection, when we collect your User Personal Information using consent as a basis.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='5px'>
                We collect only the minimum amount of User Personal Information necessary for our purposes,
                unless you choose to provide more. We encourage you to only give us the amount of data you are comfortable sharing.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='5px'>
                We offer you simple methods of accessing, altering, or deleting the User Personal Information we have collected, where legally permitted.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='5px'>
                We provide our Users notice, choice, accountability, security, and access regarding their User Personal Information,
                and we limit the purpose for processing it. We also provide our Users a method of recourse and enforcement.
              </Text>
            </ListItem>
          </UnorderedList>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='communication' pos='absolute' top='-80px'/>
            How we communicate with you
          </Text>
          <Divider mb='30px' borderColor='gray'/>

          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            We use your email address to communicate with you, if you've said that's okay, <b>and only for the reasons you’ve said that’s okay.</b> For
            example, if you contact our Support team with a request, we respond to you via email.
            You may manage your communication preferences in your <CustomLink to='/account'>user profile</CustomLink>.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            Depending on your email settings, Full Context Development may occasionally send notification emails
            about changes in your Team, new features, requests for feedback, important policy changes, or to offer customer support.
            We also send marketing emails, based on your choices and in accordance with applicable laws and regulations.
            There's an “unsubscribe” link located at the bottom of each of the marketing emails we send you.
            Please note that you cannot opt out of receiving important communications from us, such as emails from our Support team or system emails,
            but you can configure your notifications settings in your profile to opt out of other communications.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='50px'>
            Our emails may contain a pixel tag, which is a small, clear image that can tell us whether or not you have opened an email and what your IP address is.
            We use this pixel tag to make our email more effective for you and to make sure we’re not sending you unwanted email.
          </Text>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='resolving' pos='absolute' top='-80px'/>
            Resolving complaints
          </Text>
          <Divider mb='30px' borderColor='gray'/>

          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='30px'>
            If you have concerns about the way Full Context Development is handling your User Personal Information,
            please let us know immediately. We want to help. You may contact us directly at support@fullcontextdevelopment.com with the subject line "Privacy Concerns."
            We will respond promptly — within 45 days at the latest.
          </Text>
          <Text textAlign='start' fontSize={secondaryHeaderFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px' fontWeight='bold'>
            Dispute resolution process
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='50px'>
            In the unlikely event that a dispute arises between you and Full Context Development regarding our handling of your User Personal Information,
            we will do our best to resolve it. Additionally, if you are a resident of an EU member state,
            you have the right to file a complaint with your local supervisory authority.
          </Text>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='changes' pos='absolute' top='-80px'/>
            Changes to our Privacy Statement
          </Text>
          <Divider mb='30px' borderColor='gray'/>

          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='50px'>
            Although most changes are likely to be minor, Full Context Development may change our Privacy Statement from time to time.
            We will provide notification to Users of major material changes to this Privacy Statement through our Website at least 30 days prior
            to the change taking effect by posting a notice on our home page or sending email to the User's email address
            specified in your Full Context Development account.
            For other changes to this Privacy Statement, we encourage Users to watch or to check this page frequently.
          </Text>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='license' pos='absolute' top='-80px'/>
            License
          </Text>
          <Divider mb='30px' borderColor='gray'/>

          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='50px' w={textW90} p={textP20}>
            This Agreement is based on the <CustomLink to='https://docs.github.com/en/github/site-policy/github-privacy-statement' target='_blank'>Github Privacy Policy</CustomLink> and is simiarly licensed under this <CustomLink to='https://creativecommons.org/publicdomain/zero/1.0/' target='_blank'>Creative Commons Zero license</CustomLink>.
          </Text>
          
          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='license' pos='absolute' top='-80px'/>
            Contacting Full Context Development
          </Text>
          <Divider mb='30px' borderColor='gray'/>

          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='50px' w={textW90} p={textP20}>
            Questions regarding Full Context Development's Privacy Policy or information practices should be directed to our <CustomLink to='/support'>Support</CustomLink>.
          </Text>
        </Flex>
      </Flex>
    </>
  )
}
