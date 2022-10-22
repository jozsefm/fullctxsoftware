import { Flex, Text, Image as ChakraImage } from '@chakra-ui/react'

const bg = (color) => {
  return `repeating-linear-gradient(
    45deg,
    #ffffff00,
    #ffffff00 5px,
    ${color} 6px,
    ${color} 6px
  )`
}

const excMaxW = {
  base: '100%',
  md: '75%'
}

const excTitleFs = {
  base: '1.3rem',
  md: '1.75rem'
}

const excM = {
  base: '60px auto 0 auto',
  md: '80px auto 0 auto'
}

export default function Exchange({ title, image, children, color, textColor, ...rest}) {
  return (
    <Flex
      direction='column'
      justify='flex-start'
      align='center'
      bg={bg(color)}
      border={`1px solid`}
      maxW={excMaxW}
      m={excM}
      color={textColor}
      borderRadius='md'
      p={6}
      {...rest}
    >
      <ChakraImage src={image} w='75px'/>
      <Text fontWeight='bold' fontSize={excTitleFs} mt='10px'>{title}</Text>
      <Flex direction='column' mt='10px'>
        {children}
      </Flex>
    </Flex>
  )
}