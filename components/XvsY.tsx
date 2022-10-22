import Image from 'next/image'
import { Flex, Text } from '@chakra-ui/react'



export default function XvsY({ w, h, xW, xH, yW, yH, xSrc, ySrc, tMr = null, tMl = null, xTop = null, xLeft = null, yTop = null, yLeft = null, filter = null, xScale = null, yScale = null}) {
  return (
    <Flex w={w} h={h} align='center' justify='center' filter={filter}>
      <Flex w={xW} h={xH} pos='relative' align='center' justify='center' top={xTop} left={xLeft} transform={xScale ? `scale(${xScale},${xScale})` : xScale}>
        <Image src={xSrc} layout='fill'/>
      </Flex>
      <Text fontWeight='800' color='white' ml={tMl} mr={tMr}> OR </Text>
      <Flex w={yW} h={yH} pos='relative' align='center' justify='center' top={yTop} left={yLeft} transform={yScale ? `scale(${yScale},${yScale})` : yScale}>
        <Image src={ySrc} layout='fill'/>
      </Flex>
    </Flex>
  )
}