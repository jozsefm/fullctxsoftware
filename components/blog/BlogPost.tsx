import {
  Box,
  Heading, Image, Link, LinkBox,
  LinkOverlay, Text,
  useColorModeValue
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { BlogAuthor } from 'components/blog/BlogAuthor'
import { BlogTags } from 'components/blog/BlogTags'
import { useCallback, useState } from 'react'

const StyledBox = styled(Box)`
  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 100px;
  }
`

export const BlogPost = ({ attribution, description, imageAlt, imageSrc, tags, title, link, date, svg, authorSvg, views, imgBorder = null }) => {
  const imgDataUri = `data:image/svg+xml;base64,${svg}`
  const [imgLoaded, setImgLoaded] = useState(false)
  const onImgLoaded = useCallback(() => {
    setImgLoaded(true)
  }, [])

  return (
    <StyledBox
      marginTop={{ base: '5', sm: '8' }}
      display='flex'
      flexDirection={{ base: 'column', sm: 'row' }}
      justifyContent='space-between'
    >
      <Box
        display='flex'
        flex='1'
        marginRight='3'
        position='relative'
        alignItems='center'>
        <Box
          width={{ base: '100%', sm: '85%' }}
          zIndex='2'
          marginLeft={{ base: '0', sm: '5%' }}
          marginTop='5%'
          overflow='hidden'
        >
          <Link textDecoration='none' _hover={{ textDecoration: 'none' }} _focus={{ outline: 'none' }} href={link} overflow='hidden'>
            <Image
              w='100%'
              maxH='335px'
              filter={imgLoaded ? null : 'blur(12px)'}
              transform={imgLoaded ? null : 'scale(1.05)'}
              transition='filter 400ms ease-in-out, transform 400ms ease-in-out'
              onLoad={onImgLoaded}
              borderRadius='lg'
              border={imgBorder}
              src={imageSrc}
              fallbackSrc={imgDataUri}
              alt={imageAlt}
              objectFit='cover'
            />
            <Text color='gray.400' mt='5px' fontSize='0.9rem' textAlign='center'>
              {attribution}
            </Text>
          </Link>
        </Box>
        <Box zIndex='1' width='100%' position='absolute' height='100%'>
          <Box
            bgGradient={useColorModeValue(
              'radial(blue.600 1px, transparent 1px)',
              'radial(blue.300 1px, transparent 1px)'
            )}
            backgroundSize='20px 20px'
            opacity='0.4'
            height='100%'
          />
        </Box>
      </Box>
      <LinkBox 
        display='flex'
        flex='1'
        flexDirection='column'
        justifyContent='center'
        marginTop={{ base: '3', sm: '0' }}>
        <BlogTags tags={tags} />
        <Heading marginTop='1' lineHeight='1.2'>
          <LinkOverlay textDecoration='none' _hover={{ textDecoration: 'none' }} href={link}>
            {title}
          </LinkOverlay>
        </Heading>
        <Text
          as='p'
          marginTop='2'
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize='lg'
          lineHeight='1.33'
        >
          {description}
        </Text>
        <BlogAuthor name='Joe' date={date} svg={authorSvg} views={views}/>
      </LinkBox >
    </StyledBox>
  )
}