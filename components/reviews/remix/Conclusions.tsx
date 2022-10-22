import { ListItem, Flex, Text, Img, Button, UnorderedList, Icon, Tooltip } from '@chakra-ui/react'
import { Paragraph, Quote } from 'components/blog/PostElements'
import { ExternalLink, ulMr } from 'components/reviews/common'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { FiShare2 } from 'react-icons/fi'
import { useCallback, useRef, useState } from 'react'

const endMb = {
  base: '25px'
}

const copyLink = () => { navigator.clipboard.writeText('https://www.fullcontextdevelopment.com/img/blog/remix/remix-meme.jpg')}

export default function Conclusions() {
  const tooltipRef = useRef(null)
  const [showCopied, setShowCopied] = useState(false)
  const doCopy = useCallback(() => {
    copyLink()
    setShowCopied(true)
    setTimeout(() => {
      if (tooltipRef.current) {
        setShowCopied(false)
      }
    }, 1200)
  }, [])
  return (
    <>
      <Paragraph minorNext>
        In summary, Remix is the perfect productivity and customer experience booster for applications targeting a global audience
        where site loading speeds are business critical and the user interactions involve data directly
        represented in a database or ephemeral in nature.
        <Quote>
          <>
            Hereby I declare Remix the new "King of CRUD UI". All hail the king!
            <Text fontStyle='normal' display='inline-block' ml='5px'>🤴</Text>
          </>
        </Quote>
        I would recommend using alternatives for the following cases:
        <Flex justify='flex-start'>
          <UnorderedList pl='10px' ml='30px' mr={ulMr} my='15px' spacing={2} lineHeight={1.4}>
            <ListItem>
              Fully static sites: <ExternalLink href='https://astro.build'>Astro</ExternalLink> or
              anything from this <ExternalLink href='https://jamstack.org/generators/'>list</ExternalLink>.
            </ListItem>
            <ListItem>
              The need to utilize client side state management libraries: <ExternalLink href='https://nextjs.org/'>Next.js</ExternalLink> paired
              with this <ExternalLink href='https://github.com/kirill-konshin/next-redux-wrapper'>library</ExternalLink> in case you also want SSR.
            </ListItem>
            <ListItem>
              Targeting a geographically small location: your choice of FE technologies, standard hosting with Docker support
              and <ExternalLink href='https://appwrite.io/'>AppWrite</ExternalLink>.
            </ListItem>s
          </UnorderedList>
        </Flex>
      </Paragraph>
      <Paragraph>
        With this I conclude the first full context review! How was it? Let me know in the comments! I appreciate any and all feedback as I plan
        to improve the review format for delivering more insights in a more engaging way.
        If you would like to read a similar review of some other technology, let me know that as well. Thanks and keep safe Everyone!
      </Paragraph>
      <Flex minW='100%' w='100%' p='0 30px' justify='center' direction='column' align='center' mb={endMb}>
        <Zoom>
          <Img
            borderRadius='lg'
            alt="Rocket tagged 'Remix' flying up high, pulling 3 office workers, representing developers, with itself. Image caption: Remix is an insanely powerful productivity booster."
            src="/img/blog/remix/remix-meme.jpg"
            width="500px"
          />
        </Zoom>
        <Flex w='100%' maxW='500px' justify='center' mt='15px'>
          <Tooltip label='Link copied to clipboard' shouldWrapChildren mt='3' isOpen={showCopied} ref={tooltipRef} borderRadius='md'>
            <Button
              bg='transparent'
              onClick={doCopy}
            >
              <Icon fontSize='1.45rem' as={FiShare2}/>
              <Text ml='5px' fontSize='0.9rem'>Copy link</Text>
            </Button>
          </Tooltip>
          <Button
            bg='transparent'
            as='a'
            href='https://twitter.com/intent/tweet?text=pic.twitter.com%2FnD0loS6y26%20%23fullctxdev'
            target='_blank'
          >
            <Img w='auto' h='30px' src='/img/twitter-button.png' />
            <Text ml='5px' fontSize='0.9rem'>Tweet it</Text>
          </Button>
        </Flex>
      </Flex>
    </>
  )
}