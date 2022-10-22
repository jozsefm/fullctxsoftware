import {
  Box,
  Link,
  Text,
  Flex
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useCallback, useState } from 'react'

export const CustomLink = ({ children, to = '', target = null, b = null, h = null, highlight = 'blue.500', color = null, button = false, ...rest }) => {
  const [hovering, setHovering] = useState(false)
  const onEnter = useCallback(() => setHovering(true), [])
  const onLeave = useCallback(() => setHovering(false), [])

  return (!button
    ? <Link href={to} as={NextLink} passHref>
        <Flex target={target} as='a' cursor='pointer' pos='relative' display='inline-flex' onMouseEnter={onEnter} onMouseLeave={onLeave} {...rest}>
          <Box
            pos='absolute'
            display='inline-block'
            bottom={`${b ? b : '15'}%`}
            left='0'
            width='100%'
            height={hovering ? '70%' : `${h ? h : '15'}%`}
            backgroundColor={highlight}
            opacity='0.4'
            transition='height 150ms ease-in-out'
          />
          <Text color={color}>{children}</Text>
        </Flex>
      </Link>
    : 
      <Flex as='button' cursor='pointer' pos='relative' display='inline-flex' onMouseEnter={onEnter} onMouseLeave={onLeave} {...rest}>
        <Box
          pos='absolute'
          display='inline-block'
          bottom={`${b ? b : '15'}%`}
          left='0'
          width='100%'
          height={hovering ? '70%' : `${h ? h : '15'}%`}
          backgroundColor={highlight}
          opacity='0.4'
          transition='height 150ms ease-in-out'
        />
        <Text color={color}>{children}</Text>
      </Flex>
  )
}