import { Flex, Text, Icon, Divider, OrderedList, ListItem, UnorderedList } from '@chakra-ui/react'
import Head from 'components/Head'
import { CgFileDocument } from 'react-icons/cg'
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

const marginTops = ['74px !important', '74px !important', '100px !important', '91px !important']

export default function TOS() {
  return (
    <>
      <Head title='Terms of Service • Full Context Development' />
      <Flex
        h='auto'
        w='100%'
        direction='column'
        align='center'
        fontFamily='Inter,sans-serif'
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
          Full Context Development Terms of Service
        </Text>

        <Flex maxW='680px' direction='column' align='center' mb='50px'>
          <Text textAlign='center' fontSize={introIconFs} color='black' mb='30px'>
            <Icon as={CgFileDocument} />
          </Text>
          <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} >
            Thank you for using Full Context Development! We're happy you're here.
            Please read this Terms of Service agreement carefully before accessing or using the Full Context Development website and services.
            Because it is such an important contract between us and our users, we have tried to make it as clear as possible.
            For your convenience, we have presented these terms in a short non-binding summary followed by the full legal terms.
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

        <Flex maxW='680px' direction='column' align='center' mb='100px'>
          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='definitions' pos='absolute' top='-80px'/>
            A. Definitions
          </Text>
          <Divider mb='15px' borderColor='gray'/>
          <Text
            textAlign='start'
            fontSize={introTextFs}
            color='rgb(55, 65, 81)'
            lineHeight='26px'
            mb='30px'
            w={textW90}
            p={textP20}
            fontStyle='italic'
            fontFamily='sans-serif'
          >
            <b>Short version</b>: We use these basic terms throughout the agreement, and they have specific meanings. You should know what we mean when we use each of the terms.
            There's not going to be a test on it, but it's still useful information.
          </Text>
          <OrderedList m='0' mb='50px' p='0 10px 0 20px' w={textW90}>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w='100%' mb='15px'>
                An "Account" represents your legal relationship with Full Context Development.
                A “User Account” represents an individual User’s authorization to log in to and use the Service
                and serves as a User’s identity on Full Context Development. “Teams” are shared Accounts that may
                be associated with a single entity or with one or more Users where multiple Users can access the "Service" with the same credentials.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w='100%' mb='15px'>
                The “Agreement” refers, collectively, to all the terms, conditions, notices contained or referenced in this document
                (the “Terms of Service” or the "Terms") and all other operating rules, policies (including the Full Context Development Privacy Policy,
                available at fullcontextdevelopment.com/legal/privacy) and procedures that we may publish from time to time on the Website.
                Our site policies are available on our website at <CustomLink to='/legal' target='_blank'>fullcontextdevelopment.com/legal</CustomLink>
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w='100%' mb='15px'>
                The “Comments” collectively refers to any submissions (for example feedback about the content),
                creative ideas, suggestions, proposals, plans, or other materials, whether submitted online, by email, by postal mail, or otherwise,
                regardless to the reason for the submission, wether you sent it at Our request or without it.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w='100%' mb='15px'>
                “Content” refers to content featured or displayed through the Website, including without limitation code, text, data, articles,
                images, photographs, graphics, software, applications, packages, designs, features, and other materials that are available
                on the Website or otherwise available through the Service. "Content" also includes Services. “User-Generated Content” is Content,
                written or otherwise, created or uploaded by our Users. "Your Content" is Content that you create or own.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w='100%' mb='15px'>
                “Full Context Development”, “We,” and “Us” refer to Miskolczy József Personal Enterprise,
                (Derék utca 77. 3./7., 4031, Debrecen, Hajdú-Bihar Megye, Hungary, VAT number: 67786100-1-29, EU VAT number: HU68786100)
                as well as it's affiliates, subsidiaries, contractors, licensors, officers, agents, and employees.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w='100%' mb='15px'>
                The “Service” refers to the applications, software, products, and services provided by Full Context Development, including the Website and it's contents.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w='100%' mb='15px'>
                “The User,” “You,” and “Your” refer to the individual person, company, or organization that has visited
                or is using the Website or Service; that accesses or uses any part of the Account;
                or that directs the use of the Account in the performance of its functions. A User must be at least 14 years of age.
                Special terms may apply for business or government Accounts <CustomLink to='#b5'>(See Section B(5): Additional Terms)</CustomLink>.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w='100%' mb='15px'>
                The “Website” refers to Full Context Development's website located at fullcontextdevelopment.com,
                and all content, services, and products provided by Full Context Development at or through the Website.
              </Text>
            </ListItem>
          </OrderedList>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='account' pos='absolute' top='-80px'/>
            B. Account Terms
          </Text>
          <Divider mb='15px' borderColor='gray'/>
          <Text textAlign='start'
            fontSize={introTextFs}
            color='rgb(55, 65, 81)'
            lineHeight='26px'
            mb='30px'
            w={textW90}
            p={textP20}
            fontStyle='italic'
            fontFamily='sans-serif'
          >
            <b>Short version</b>: User Accounts and Teams have different administrative controls;
            a human must create your Account; you must be 14 or over; you must provide a valid email address.
            You alone are responsible for your Account and anything that happens while you are signed in to or using your Account.
            You are responsible for keeping your Account secure.
          </Text>
          <OrderedList m='0' mb='50px' p='0 10px 0 20px' w={textW90}>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Account Controls
              </Text>
              <UnorderedList>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    Users. Subject to these Terms, you retain ultimate administrative control over your User Account and the Content within it.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                    Teams. The "owner" of a Team that was created under these Terms has ultimate administrative control
                    over that Team and the Content within it. Within the Service, an owner can manage User access to
                    the Teams’s data. An Team may have multiple owners, but there must be at least
                    one User Account designated as an owner of a Team. If you are the owner of a Team under these Terms,
                    we consider you responsible for the actions that are performed on or through that Team.
                  </Text>
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Required Information
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                In order to complete the signup process you must make a purchase which is processed
                by our Merchant of Record Paddle <CustomLink to='https://paddle.com' target='_blank' >(paddle.com)</CustomLink>.
                We only retain the valid email address and your choosen user name after the order is processed.
                The rest of the data requested for the payment is handled by Paddle according to their <CustomLink to='https://paddle.com/legal/' target='_blank'>Terms of Service</CustomLink>, <CustomLink to='https://paddle.com/privacy/' target='_blank'>Privacy Policy</CustomLink> and
                other applicable policies. By signing up to our Services you also agree to their conditions.
                If you are creating a Team we need to store and process the team name in addition to the aforementioned information.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Account Requirements
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                We have a few simple rules for User Accounts on Full Context Development's Service.
              </Text>
              <UnorderedList>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    You must be a human to create an Account. Accounts registered by "bots" or other automated methods are not permitted.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    One person or legal entity may maintain no more accounts than it's reasonably required to access the services in accordance with these Terms.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    You must be age 14 or older. While we are thrilled to see brilliant young coders get excited by learning to program,
                    we must comply with Hungary and European Union law. Full Context Development does not target our Service to children under 14,
                    and we do not permit any Users under 14 on our Service.
                    If we learn of any User under the age of 14, we will terminate that User’s Account immediately.
                    If you are a resident of a country outside Hungary, your country’s minimum age may be different;
                    in such a case, you are responsible for complying with your country’s laws.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    Your login may only be used by one person — i.e., a single login may not be shared by multiple people.
                    A Team may only provide access to as many User Accounts as your subscription allows.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                    You may not use Full Context Development in violation of export control or sanctions laws of Hungary, the European Union or any other applicable jurisdiction.
                    Full Context Development may allow persons in certain sanctioned countries or territories to access certain
                    Full Context Development services pursuant to Hungary or European Union government authorizations.
                  </Text>
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                User Account Security
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                You are responsible for keeping your Account secure while you use our Service, the content of your Account and its security are up to you.
              </Text>
              <UnorderedList>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    You are responsible for all content created and activity that occurs under your Account
                    (even when content is posted by others who have Accounts under your Account).
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    You are responsible for maintaining the security of your Account and password.
                    Full Context Development cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                    You will promptly notify Full Context Development if you become aware of any unauthorized use of,
                    or access to, our Service through your Account, including any unauthorized use of your password or Account.
                  </Text>
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem pos='relative'>
              <Flex id='b5' pos='absolute' top='-80px'/>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Additional Terms
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                In some situations, third parties' terms may apply to your use of Full Context Development.
                For example, you may be a member of an organization on Full Context Development with its own terms or license agreements;
                Please be aware that while these Terms are our full agreement with you, other parties' terms govern their relationships with you.
              </Text>
            </ListItem>
          </OrderedList>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='acceptable' pos='absolute' top='-80px'/>
            C. Acceptable Use
          </Text>
          <Divider mb='15px' borderColor='gray'/>
          <Text textAlign='start'
            fontSize={introTextFs}
            color='rgb(55, 65, 81)'
            lineHeight='26px'
            mb='30px'
            w={textW90}
            p={textP20}
            fontStyle='italic'
            fontFamily='sans-serif'
          >
            <b>Short version</b>: Full Context Development hosts it's own content for access from all over the world,
            and that only works if our users are able to work together with us in good faith.
            While using the service, you must follow the terms of this section, which include some restrictions about the
            conduct on the service, and other limitations. In short, be excellent to each other and to us as well.
          </Text>
          <OrderedList m='0' mb='50px' p='0 10px 0 20px' w={textW90}>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                General
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Your use of the Website and Service must not violate any applicable laws, including copyright or trademark laws,
                export control or sanctions laws, or other laws in your jurisdiction.
                You are responsible for making sure that your use of the Service is in compliance with laws and any applicable regulations
                and all of our Acceptable Use Policies. These policies may be updated from time to time and are provided below.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Content Restrictions
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                Under no circumstances will Users upload, post, host, execute, or transmit any Content that:
              </Text>
              <UnorderedList>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    is unlawful or promotes unlawful activities;
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    is or contains sexually obscene content;
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    is libelous, defamatory, or fraudulent;
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    is discriminatory or abusive toward any individual or group;
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    gratuitously depicts or glorifies violence, including violent images;
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    is or contains false, inaccurate, or intentionally deceptive information that is likely to adversely affect the public interest
                    (including health, safety, election integrity, and civic participation);
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    directly supports unlawful active attack or malware campaigns that are causing technical harms
                    — such as using our platform to deliver malicious executables or as attack infrastructure,
                    for example by organizing denial of service attacks or managing command and control servers
                    — with no implicit or explicit dual-use purpose prior to the abuse occurring; or
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                    infringes any proprietary right of any party, including patent, trademark, trade secret, copyright, right of publicity, or other right.
                  </Text>
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Conduct Restrictions
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                While using the Service, under no circumstances will you:
              </Text>
              <UnorderedList>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    harass, abuse, threaten, or incite violence towards any individual or group, including us, our employees, officers, and agents, or other users;
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    post off-topic content, or interact with platform features, in a way that significantly or repeatedly disrupts the experience of other users;
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    use our servers and/or the infrastructure of our service providers for any form of excessive automated bulk activity
                    (for example, spamming or cryptocurrency mining), to place undue burden on our servers through automated means,
                    or to relay any form of unsolicited advertising or solicitation through our servers and/or the infrastructure of our service providers,
                    such as get-rich-quick schemes;
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    use our servers and/or the infrastructure of our service providers to disrupt or to attempt to disrupt,
                    or to gain or to attempt to gain unauthorized access to, any service, device, data, account or network;
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    impersonate any person or entity, including any of our employees or representatives, including through false association with Full Context Development,
                    or by fraudulently misrepresenting your identity or site's purpose; or
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                    violate the privacy of any third party, such as by posting another person's personal information without consent.
                  </Text>
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Spam and Inauthentic Activity on Full Context Development
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                Automated excessive bulk activity and coordinated inauthentic activity, such as spamming
                are prohibited on Full Context Development. Prohibited activities include:
              </Text>
              <UnorderedList>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    inauthentic interactions, such as fake accounts, newsletter subscriptions and automated inauthentic activity;
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    creation of or participation in secondary markets for the purpose of the proliferation of inauthentic activity
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    using Full Context Development as a platform for propagating abuse on other platforms
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                    phishing or attempted phishing
                  </Text>
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Services Usage Limits
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                You will not reproduce, duplicate, copy, sell, resell or exploit any portion of the Service,
                use of the Service, or access to the Service without our express written permission.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Information Usage Restrictions
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                You may use information from our Service for the following reasons, regardless of whether the information was scraped,
                collected through the Website, or obtained otherwise:
              </Text>
              <UnorderedList>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    Researchers may use public, non-personal information from the Service for research purposes,
                    only if any publications resulting from that research are <CustomLink to='https://en.wikipedia.org/wiki/Open_access' target='_blank'>open access</CustomLink>.
                  </Text>
                </ListItem>
                <ListItem>
                  <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                    Archivists may use public, non-paid information from the Service for archival purposes.
                  </Text>
                </ListItem>
              </UnorderedList>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                Scraping refers to extracting information from our Service via an automated process, such as a bot or webcrawler.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                You may not use information from the Service (whether scraped, or obtained otherwise) for spamming purposes,
                including for the purposes of sending unsolicited emails to users or selling User Personal Information
                (as defined in the Full Context Development Privacy Policy and Data Protection policy).
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Privacy
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                Misuse of User Personal Information is prohibited.
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Any person, entity, or service collecting data from the Service must comply with the Full Context Development Privacy Policy and Data Protection policy,
                particularly in regards to the collection of User Personal Information. If you collect any User Personal Information from the Service,
                (like the email addresses of team members)
                you agree that you will only use that User Personal Information for the purpose for which that User has authorized it.
                You agree that you will reasonably secure any User Personal Information you have gathered from the Service,
                and you will respond promptly to complaints, removal requests, and "do not contact" requests from us or other users.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Excessive Bandwidth Use
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                The Service's bandwidth limitations vary based on the features you use.
                If we determine your bandwidth usage to be significantly excessive in relation to other users of similar features,
                we reserve the right to suspend your Account, or otherwise limit your activity until you can reduce your bandwidth consumption.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                User Protection
              </Text>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                You must not engage in activity that harms other users in any significant way. We will resolve disputes in favor of protecting users as a whole.
              </Text>
            </ListItem>
          </OrderedList>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='user-generated-content' pos='absolute' top='-80px'/>
            D. User-Generated Content
          </Text>
          <Divider mb='15px' borderColor='gray'/>
          <Text textAlign='start'
            fontSize={introTextFs}
            color='rgb(55, 65, 81)'
            lineHeight='26px'
            mb='30px'
            w={textW90}
            p={textP20}
            fontStyle='italic'
            fontFamily='sans-serif'
          >
            <b>Short version</b>: You own content you create, but you allow us certain rights to it,
            so that we can display and share the content you post. You still have control over your content, and responsibility for it,
            and the rights you grant us are limited to those we need to provide the service.
            We have the right to remove content or close Accounts if we need to.
          </Text>
          <OrderedList m='0' mb='50px' p='0 10px 0 20px' w={textW90}>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Responsibility for User-Generated Content
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                You may create or upload User-Generated Content while using the Service.
                You are solely responsible for the content of, and for any harm resulting from, any User-Generated Content
                that you post, upload, link to or otherwise make available via the Service, regardless of the form of that Content.
                We are not responsible for any public display or misuse of your User-Generated Content.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Full Context Development May Remove Content
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                We have the right to refuse or remove any User-Generated Content that, in our sole discretion,
                violates any laws or Full Context Development terms or policies.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Ownership of Content, Right to Post, and License Grants
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                You retain ownership of and responsibility for Your Content. If you're posting anything you did not create yourself or do not own the rights to,
                you agree that you are responsible for any Content you post; that you will only submit Content that you have the right to post;
                and that you will fully comply with any third party licenses relating to Content you post.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Because you retain ownership of and responsibility for Your Content, we need you to grant us — and other Full Context Development Users —
                certain legal permissions, listed in Sections D.4 — D.6. These license grants apply to Your Content.
                If you post or upload Content that already comes with a license granting Full Context Development the permissions we need to run our Service,
                no additional license is required. You understand that you will not receive any payment for any of the rights granted in Sections D.4 — D.6.
                The licenses you grant to us will end when you remove Your Content from our servers.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                License Grant to Us
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                We need the legal right to do things like host Your Content, publish it, and share it. i.e. - with team members.
                You grant us and our legal successors the right to store, archive, parse, and display Your Content, and make incidental copies, as necessary to provide the Service,
                including improving the Service over time. This license includes the right to do things like copy it to our database and make backups;
                show it to you and other users; parse it into a search index or otherwise analyze it on our servers;
                share it with other users; and perform it, in case Your Content is something like music or video.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                This license does not grant Full Context Development the right to sell Your Content.
                It also does not grant Full Context Development the right to otherwise distribute or use Your Content outside of our provision of the Service,
                except that as part of the right to archive Your Content in accordance with our Data Protection policy.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                License Grant to Other Users
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                Any User-Generated Content you post publicly may be viewed by others and used in accordance with the Full Context Development policies
                and applicable laws. User-Generated Content posted as part of operating a Team is visible only to those Users who
                belong to the same Team. You are bound to handle any User data or User-Generate Content according to these policies. 
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                You grant each User of Full Context Development a nonexclusive, worldwide license to use,
                display, and perform your Content through the Full Context Development Service to the extent it's necessary to provide the Service for them.
                If you are uploading Content you did not create or own, you are responsible for ensuring that the Content you upload is licensed under terms that grant
                these permissions to other Full Context Development Users.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Moral Rights
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                You retain all moral rights to Your Content that you upload, publish, or submit to any part of the Service,
                including the rights of integrity and attribution. However, you waive these rights and agree not to assert them against us,
                to enable us to reasonably exercise the rights granted in Section D.4, but not otherwise.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                To the extent this agreement is not enforceable by applicable law, you grant Full Context Development the rights
                we need to use Your Content without attribution and to make reasonable adaptations of Your Content as necessary
                to render the Website and provide the Service.
              </Text>
            </ListItem>
          </OrderedList>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='intellectual' pos='absolute' top='-80px'/>
            E. Intellectual Property Notice
          </Text>
          <Divider mb='15px' borderColor='gray'/>
          <Text textAlign='start'
            fontSize={introTextFs}
            color='rgb(55, 65, 81)'
            lineHeight='26px'
            mb='30px'
            w={textW90}
            p={textP20}
            fontStyle='italic'
            fontFamily='sans-serif'
          >
            <b>Short version</b>: We own the service and all of our content. In order for you to use our content,
            we give you certain rights to it, but you may only use our content in the way we have allowed.
          </Text>
          <OrderedList m='0' mb='50px' p='0 10px 0 20px' w={textW90}>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Full Context Development's Rights to Content
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Full Context Development and our licensors, vendors, agents, and/or our content providers retain ownership
                of all intellectual property rights of any kind related to the Website and Service.
                We reserve all rights that are not expressly granted to you under this Agreement or by law.
                The look and feel of the Website and Service is copyright © Miskolczy József. All rights reserved.
                You may not duplicate, copy, or reuse any portion of the HTML/CSS, Javascript, or visual design elements or concepts
                without express written permission from Full Context Development.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                License to Full Context Development Policies
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                This Agreement is based on the <CustomLink to='https://docs.github.com/en/github/site-policy/github-terms-of-service' target='_blank'>Github Terms of Service</CustomLink> and is simiarly licensed under this <CustomLink to='https://creativecommons.org/publicdomain/zero/1.0/' target='_blank'>Creative Commons Zero license</CustomLink>.
              </Text>
            </ListItem>
          </OrderedList>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='purchase' pos='absolute' top='-80px'/>
            F. Purchase
          </Text>
          <Divider mb='15px' borderColor='gray'/>
          <Text textAlign='start'
            fontSize={introTextFs}
            color='rgb(55, 65, 81)'
            lineHeight='26px'
            mb='30px'
            w={textW90}
            p={textP20}
            fontStyle='italic'
            fontFamily='sans-serif'
          >
            <b>Short version</b>: You are responsible for any fees associated with your use of Full Context Development.
            We are responsible for communicating those fees to you clearly and accurately, and letting you know in advance if those prices change.
          </Text>
          <OrderedList m='0' mb='50px' p='0 10px 0 20px' w={textW90}>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Pricing
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Our pricing is available at <CustomLink to='/pricing#pricing'>fullcontextdevelopment.com/pricing</CustomLink>. We
                retain the right, to change the prices at our sole discretion, any time, with or without further notice.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Errors, Inaccuracies and Omissions
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                From time to time, there may be information present in the Service that contains typographical errors,
                inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges,
                transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions,
                and to change or update information or cancel orders if any information in the Service or on any related website
                is inaccurate at any time without prior notice (including after you have submitted your order).
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Responsibility for Payment
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                You are responsible for all fees, including taxes, associated with your use of the Service.
                By using the Service, you agree to pay Full Context Development any charge incurred in connection with your use of the Service.
                If you dispute the matter, contact <CustomLink to='/support'>Full Context Development Support</CustomLink>.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Denial of Purchase
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person,
                per household or per order. These restrictions may include orders placed by or under the same customer account,
                the same credit card, and/or orders that use the same billing and/or shipping address.
                In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail
                and/or billing address/phone number provided at the time the order was made.
                We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Refund Policy
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Full Context Development's refund policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.
              </Text>
            </ListItem>
          </OrderedList>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='cancelation' pos='absolute' top='-80px'/>
            G. Cancellation and Termination
          </Text>
          <Divider mb='15px' borderColor='gray'/>
          <Text textAlign='start'
            fontSize={introTextFs}
            color='rgb(55, 65, 81)'
            lineHeight='26px'
            mb='30px'
            w={textW90}
            p={textP20}
            fontStyle='italic'
            fontFamily='sans-serif'
          >
            <b>Short version</b>: You may close your Account at any time. If you do, we'll treat your information responsibly.
          </Text>
          <OrderedList m='0' mb='50px' p='0 10px 0 20px' w={textW90}>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Account Cancellation
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                It is your responsibility to properly cancel your Account with Full Context Development.
                Once the feature is implemented You can cancel your Account at any time
                by going into the My Account page in the global navigation bar at the top of the screen.
                The Account screen provides a simple, no questions asked cancellation button.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Upon Cancellation
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements,
                but barring legal requirements, we will delete your full profile within 90 days of cancellation or termination
                (though some information may remain in encrypted backups). This information can not be recovered once your Account is cancelled.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                We will not delete Content sent as Comments.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Upon request, we will make a reasonable effort to provide an Account owner with a copy of your lawful,
                non-infringing Account contents after Account cancellation or termination.
                You must make this request within 90 days of cancellation or termination.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Full Context Development May Terminate
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Full Context Development has the right to suspend or terminate your access to all or any part of the Website at any time,
                with or without cause, with or without notice, effective immediately.
                Full Context Development reserves the right to refuse service to anyone for any reason at any time.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Survival
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                All provisions of this Agreement which, by their nature, should survive termination will survive termination
                — including, without limitation: ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </Text>
            </ListItem>
          </OrderedList>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='disclaimer' pos='absolute' top='-80px'/>
            H. Disclaimer of Warranties
          </Text>
          <Divider mb='15px' borderColor='gray'/>
          <Text textAlign='start'
            fontSize={introTextFs}
            color='rgb(55, 65, 81)'
            lineHeight='26px'
            mb='30px'
            w={textW90}
            p={textP20}
            fontStyle='italic'
            fontFamily='sans-serif'
          >
            <b>Short version</b>: We provide our service as is, and we make no promises or guarantees about this service.
            Please read this section carefully; you should understand what to expect.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            Full Context Development provides the Website and the Service “as is” and “as available,” without warranty of any kind.
            Without limiting this, we expressly disclaim all warranties, whether express, implied or statutory,
            regarding the Website and the Service including without limitation any warranty of merchantability,
            fitness for a particular purpose, title, security, accuracy and non-infringement.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='50px'>
            Full Context Development does not warrant that the Service will meet your requirements;
            that the Service will be uninterrupted, timely, secure, or error-free; that the information provided through the Service is accurate,
            reliable or correct; that any defects or errors will be corrected; that the Service will be available at any particular time or location;
            or that the Service is free of viruses or other harmful components.
            You assume full responsibility and risk of loss resulting from your downloading and/or use of files, information,
            content or other material obtained from the Service.
          </Text>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='liability' pos='absolute' top='-80px'/>
            I. Limitation of Liability
          </Text>
          <Divider mb='15px' borderColor='gray'/>
          <Text textAlign='start'
            fontSize={introTextFs}
            color='rgb(55, 65, 81)'
            lineHeight='26px'
            mb='30px'
            w={textW90}
            p={textP20}
            fontStyle='italic'
            fontFamily='sans-serif'
          >
            <b>Short version</b>: We will not be liable for damages or losses arising from your use or inability to use the service
            or otherwise arising under this agreement. Please read this section carefully; it limits our obligations to you.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px'w={textW90} p={textP20} mb='10px'>
            You understand and agree that we will not be liable to you or any third party for any loss of profits,
            use, goodwill, or data, or for any incidental, indirect, special, consequential or exemplary damages, however arising, that result from
          </Text>
          <UnorderedList w={textW90} p='0 10px 0 30px' >
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                the use, disclosure, or display of your User-Generated Content;
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                your use or inability to use the Service;
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                any modification, price change, suspension or discontinuance of the Service;
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                the Service generally or the software or systems that make the Service available;
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                unauthorized access to or alterations of your transmissions or data;
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                statements or conduct of any third party on the Service;
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                any other user interactions that you input or receive through your use of the Service; or
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                any other matter relating to the Service.
              </Text>
            </ListItem>
          </UnorderedList>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='50px'>
            Our liability is limited whether or not we have been informed of the possibility of such damages,
            and even if a remedy set forth in this Agreement is found to have failed of its essential purpose.
            We will have no liability for any failure or delay due to matters beyond our reasonable control.
          </Text>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='indemnification' pos='absolute' top='-80px'/>
            J. Release and Indemnification
          </Text>
          <Divider mb='15px' borderColor='gray'/>
          <Text textAlign='start'
            fontSize={introTextFs}
            color='rgb(55, 65, 81)'
            lineHeight='26px'
            mb='30px'
            w={textW90}
            p={textP20}
            fontStyle='italic'
            fontFamily='sans-serif'
          >
            <b>Short version</b>: You are responsible for your use of the service.
            If you harm someone else or get into a dispute with someone else, we will not be involved.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='10px'>
            If you have a dispute with one or more Users, you agree to release Full Context Development from any and all claims, demands and damages
            (actual and consequential) of every kind and nature, known and unknown, arising out of or in any way connected with such disputes.
          </Text>
          <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' w={textW90} p={textP20} mb='50px'>
            You agree to indemnify us, defend us, and hold us harmless from and against any and all claims, liabilities, and expenses,
            including attorneys’ fees, arising out of your use of the Website and the Service, including but not limited to your violation of this Agreement,
            provided that Full Context Development (1) promptly gives you written notice of the claim, demand, suit or proceeding;
            (2) gives you sole control of the defense and settlement of the claim, demand, suit or proceeding
            (provided that you may not settle any claim, demand, suit or proceeding unless the settlement unconditionally releases Full Context Development of all liability);
            and (3) provides to you all reasonable assistance, at your expense.
          </Text>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='change' pos='absolute' top='-80px'/>
            K. Changes to These Terms
          </Text>
          <Divider mb='15px' borderColor='gray'/>
          <Text textAlign='start'
            fontSize={introTextFs}
            color='rgb(55, 65, 81)'
            lineHeight='26px'
            mb='30px'
            w={textW90}
            p={textP20}
            fontStyle='italic'
            fontFamily='sans-serif'
          >
            <b>Short version</b>: We want our users to be informed of important changes to our terms,
            but some changes aren't that important — we don't want to bother you every time we fix a typo.
            So while we may modify this agreement at any time, we will notify users of substantial material changes and give you time to adjust to them.
          </Text>
          <OrderedList m='0' mb='50px' p='0 10px 0 20px' w={textW90}>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Change policy
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                We reserve the right, at our sole discretion, to amend these Terms of Service at any time and will update these Terms of Service
                in the event of any such amendments. We will notify our Users of immportant material changes to this Agreement, at least 30 days 
                prior to the change taking effect by posting a notice on our Website or sending email to the email address specified in your Full Context Development account.
                Customer's continued use of the Service after those 30 days constitutes agreement to those revisions of this Agreement.
                For any other modifications, your continued use of the Website constitutes agreement to our revisions of these Terms of Service.
                You can view the latest version of these Term on this site.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Discontinuation
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                We reserve the right at any time and from time to time to modify or discontinue, temporarily or permanently,
                the Website (or any part of it) with or without notice.
              </Text>
            </ListItem>
          </OrderedList>

          <Text textAlign='start' fontSize={introHeaderFs} color='black' fontWeight='700' lineHeight='1.05' mb='15px' w={textW80} minW='265px' pos='relative'>
            <Flex id='misc' pos='absolute' top='-80px'/>
            L. Miscellaneous
          </Text>
          <Divider mb='30px' borderColor='gray'/>
          <OrderedList m='0' mb='50px' p='0 10px 0 20px' w={textW90}>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Governing Law & Authorities
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                By visiting the  Site, you agree that except to the extent applicable law provides otherwise, this Agreement between you and Full Context Development
                and any access to or use of the Website or the Service are governed by the laws of Hungary specifically:
                `információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény („Infotv.”)`,
                `Polgári Törvénykönyvről szóló 2013. évi V. törvény („Ptk.”)`
                and the applicable laws of the European Union,
                without regard to conflict of law provisions. You and Full Context Development agree to submit to the exclusive jurisdiction and venue of the courts
                located in the City of Debrecen, Hajdú-Bihar County, Hungary.
                The overseeing authority of our data handling practices is the hungarian National Authority for Data Protection and Information Freedom:
                Nemzeti Adatvédelmi és Információszabadság Hatóság
                (address: 1055 Budapest, Falk Miksa utca 9-11; postal address: 1374 Budapest, Pf. 603.; phone: +36-1-391-1400; e-mail: ugyfelszolgalat@naih.hu; website: naih.hu)
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Non-Assignability
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                Full Context Development may assign or delegate these Terms of Service and/or the Full Context Development Privacy Policy,
                in whole or in part, to any person or entity at any time with or without your consent, including the license grant in Section D.4.
                You may not assign or delegate any rights or obligations under the Terms of Service or Privacy Policy without our prior written consent,
                and any unauthorized assignment and delegation by you is void.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Section Headings and Summaries
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                Throughout this Agreement, each section includes titles and brief summaries of the following terms and conditions.
                These section titles and brief summaries are not legally binding.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                User Comments, Feedback and Other Submissions
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                You agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use
                in any medium any Comments that you forward to us. We are and shall be under no obligation
                (1) to maintain any Comments in confidence; (2) to pay compensation for any Comments; or (3) to respond to any Comments.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px'>
                We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion
                are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable
                or violates any party’s intellectual property or these Terms of Service.
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                You agree that your Comments will not violate any right of any third-party,
                including copyright, trademark, privacy, personality or other personal or proprietary right.
                You further agree that your Comments will not contain libelous or otherwise unlawful, abusive or obscene material,
                or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website.
                You may not use a false e-mail address, pretend to be someone other than yourself,
                or otherwise mislead us or third-parties as to the origin of any Comments.
                You are solely responsible for any Comments you make and their accuracy. We take no responsibility
                and assume no liability for any Comments posted by you or any third-party.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Severability, No Waiver, and Survival
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                If any part of this Agreement is held invalid or unenforceable, that portion of the Agreement will be construed to reflect the parties’ original intent.
                The remaining portions will remain in full force and effect. Any failure on the part of Full Context Development to enforce any provision
                of this Agreement will not be considered a waiver of our right to enforce such provision.
                Our rights under this Agreement will survive any termination of this Agreement.
              </Text>
            </ListItem>
            <ListItem>
              <Text textAlign='start' fontSize={introTextFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='10px' fontWeight='bold'>
                Amendments; Complete Agreement
              </Text>
              <Text textAlign='start' fontSize={listFs} color='rgb(55, 65, 81)' lineHeight='26px' mb='20px'>
                This Agreement may only be modified by a written amendment signed by an authorized representative of Full Context Development,
                or by the posting by Full Context Development of a revised version in accordance with Section J. Changes to These Terms.
                These Terms of Service, together with the Full Context Development Privacy Policy,
                represent the complete and exclusive statement of the agreement between you and us.
                This Agreement supersedes any proposal or prior agreement oral or written,
                and any other communications between you and Full Context Development relating to the subject matter
                of these terms including any confidentiality or nondisclosure agreements.
              </Text>
            </ListItem>
          </OrderedList>
        </Flex>

      </Flex>
    </>
  )
}