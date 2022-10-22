import {
  Flex, Image, Link, Text
} from '@chakra-ui/react'
import NextLink from 'next/link'

const posts = [
  { title: 'Next.js - Full Context Review', link: '/blog/next-full-context-review', img: '/img/blog/nextPreview.jpg' },
  { title: 'Is It Really That Delightful? - Full Context Analysis', link: '/blog/is-it-really-delightful-full-context-analysis', img: '/img/blog/delightful-preview.jpg' },
  { title: 'Remix - Full Context Review', link: '/blog/remix-full-context-review', img: '/img/blog/remixReview.jpg' },
  { title: 'Solo Launching An Online Product', link: '/blog/solo-launching-online-product', img: '/img/blog/launching.jpg' },
  // { title: 'What is Full Context Development and why do you need it?', link: '/blog/what-is-full-context-development' }
]

export const LatestPosts = ({ ...props }) => {
  return (
    <Flex
      direction='column'
      align='center'
      {...props}
    >
      <Flex
        direction='column'
        borderRadius='md'
        border='1px solid #e0e0e0'
        maxW='80%'
        w='100%'
        p='6'
        color='rgb(18, 18, 18)'
      >
        <Text
          fontWeight='400'
          mb='20px'
          ml='-10px'
          mr='-10px'
          fontSize='1.1rem'
          borderBottom='1px solid'
          borderBottomColor='#565e6c'
          pb='15px'
          textAlign='center'
        >
          CHECK OUT THE LATEST POSTS
        </Text>
        {posts.map(({ title, link, img }) => (
          <Flex mb='12px' key={link}>
            <Link href={link} as={NextLink} passHref>
              <Text as='a' lineHeight='1.1rem' fontSize='0.9rem'>
                <Flex align='flex-start'>
                  <Flex p='0.2rem' bg='#32b997' borderRadius='lg' maxW='62px' w='100%' mr='5px' align='center' justify='center' >
                    <Image borderRadius='md' w='calc(32px * 1.7)' h='calc(18px * 1.7)' src={img} pos='relative' left='-0.5px'/>
                  </Flex>
                  {title}
                </Flex>
              </Text>
            </Link>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}