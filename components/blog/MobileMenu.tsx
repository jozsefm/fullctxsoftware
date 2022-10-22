import { Flex, Image, Icon } from '@chakra-ui/react'
import { CgClose } from 'react-icons/cg'

const bottom: any = {
  base: '40px',
  md: '-100px'
}

export const MobileMenuButton = ({isOpen = false, toggleMobileMenu}) => {
  return (
    <Flex
      as='button'
      onClick={toggleMobileMenu}
      position='fixed'
      bg={'#121212'}
      w='48px'
      h='48px'
      borderRadius='50%'
      boxShadow={!isOpen ? '0 0 8px #32b997' : '0 0 6px #000'}
      bottom={bottom}
      right='40px'
      zIndex='3'
      align='center'
      justify='center'
      transition='box-shadow 1s ease-out'
    >
      {!isOpen
        ? <Image w='30px' h='30px' src='/img/blog/bmm.svg' pos='relative' top='1px' />
        : <Icon as={CgClose} w='30px' h='30px' color='white' />}
    </Flex>
  )
}