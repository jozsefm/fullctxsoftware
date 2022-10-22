import { Flex, Icon, Text, Link } from '@chakra-ui/react'
import { footerHeight, footerTop } from 'constants/footer'
import { BiSupport } from 'react-icons/bi'
import { FaReddit } from 'react-icons/fa'
import { IoLogoTwitter, IoLogoYoutube } from 'react-icons/io'
import { RiQuestionAnswerLine } from 'react-icons/ri'
import { FlexGrid } from 'components/FlexGrid'
import NextLink from 'next/link'

const wrapperDirection = ['column', 'column', 'row'] as any
const footerSectionsHeight = ['100%', '100%', footerHeight[2], footerHeight[3]]
const footerSectionWidth1 = ['100%', '100%', '25%', '30%']
const footerSectionWidth2 = ['100%', '100%', '50%', '40%']
const footerSectionWidth3 = ['100%', '100%', '25%', '30%']
const midMT = ['0', '0', '20px']
const midMb = ['10px', '10px', '0']
const linksP = ['0 20px', '0']
const thirdColAlign = ['center', 'center', 'flex-start']
const zIndex = { base: 1, md: -1 }
const footerSx = { 'a': { display: 'flex' } }
const footerPos: any = { base: 'relative', md: 'fixed' }

export const SiteFooter = () => {
  return <Flex
    w='100vw'
    h={footerHeight}
    position={footerPos}
    zIndex={zIndex}
    background='linear-gradient(0deg,#ffffff,#e6e6e6)'
    top={footerTop}
    bottom='0'
    justifyContent='center'
    alignItems='center'
    fontFamily='Rubik, Helvetica Neue, Helvetica, Arial, sans-serif;'
  >
    <Flex flexDirection={wrapperDirection} w='100%' h='100%'>
      <Flex w={footerSectionWidth1} h={footerSectionsHeight} flexDir='column' justifyContent='center' alignItems='center' color='#515151' textAlign='center'>
        <Text>© 2021 - 2022 All Rights Reserved</Text>
        <Text>József Miskolczy</Text>
      </Flex>
      <Flex w={footerSectionWidth2} h={footerSectionsHeight} flexDir='column' justifyContent='space-evenly' color='#515151'>
        <Flex w='100%' flexDir='column' justifyContent='center' alignItems='center' fontSize='0.8rem'>
          <Text fontSize='1.25rem'>Find me on</Text>
          <Flex w='100%' flexDir='row' justifyContent='center' mt={midMT} mb={midMb} fontSize='0.8rem'>
            {/* <Link href='https://www.youtube.com/channel/UCjcvSZktdzlQPvSk-gIPiMw' as={NextLink} passHref mb='10px'>
              <Text as='a' fontSize='1rem' display='flex' alignItems='center' target='_blank'>
                <Text fontSize='1.25rem'>YouTube</Text>
                <Icon as={IoLogoYoutube} color='#FF0000' fontSize='1.75rem' mr='15px' ml='5px' filter='saturate(70%)' />
              </Text>
            </Link> */}
            <Link href='https://twitter.com/fullctxdev' as={NextLink} passHref mb='10px'>
              <Text as='a' fontSize='1rem' display='flex' alignItems='center' target='_blank'>
                <Text fontSize='1.25rem'>Twitter</Text>
                <Icon as={IoLogoTwitter} color='rgb(29, 161, 242)' fontSize='1.75rem' mr='15px' ml='5px' filter='saturate(70%)' />
              </Text>
            </Link>
            <Link href='https://www.reddit.com/r/fullcontextdev' as={NextLink} passHref mb='10px'>
              <Text as='a' fontSize='1rem' display='flex' alignItems='center' target='_blank'>
                <Text fontSize='1.25rem'>Reddit</Text>
                <Icon as={FaReddit} color='#FF4500' fontSize='1.75rem' mr='15px' ml='5px' filter='saturate(70%)' />
              </Text>
            </Link>
          </Flex>
        </Flex>
        <FlexGrid w='100%' mb='12px' fontSize='0.8rem' p={linksP} align='center' textAlign='center' gap='10'>
          <Link href={'/legal/tos'} as={NextLink} passHref><Text as='a'>Terms of Service</Text></Link>
          <Text>|</Text>
          <Link href={'/legal/privacy'} as={NextLink} passHref><Text as='a'>Privacy Policy</Text></Link>
          <Text>|</Text>
          <Link href={'/legal'} as={NextLink} passHref><Text as='a'>Other Legal</Text></Link>
        </FlexGrid>
      </Flex>
      <Flex w={footerSectionWidth3} h={footerSectionsHeight} direction='column' justify='center' align='center'>
        <Flex w='auto' direction='column' justify='center' align={thirdColAlign} color='#515151' lineHeight='1.75rem' sx={footerSx}>
          <Flex mb='10px'>
            <Link href={'/faq'} as={NextLink} passHref mb='10px'><Text as='a' fontSize='1rem'><Icon as={RiQuestionAnswerLine} fontSize='1.75rem' mr='5px' />FAQ</Text></Link>
          </Flex>
          <Flex>
            <Link href={'/support'} as={NextLink} passHref mb='10px'><Text as='a' fontSize='1rem'><Icon as={BiSupport} fontSize='1.75rem' mr='5px' />CONTACT SUPPORT</Text></Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
}