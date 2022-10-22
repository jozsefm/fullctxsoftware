import { Text } from '@chakra-ui/react'

export const ChapterSub = ({ children }) => {
  return (
    <Text h='24px' px='5px' pos='relative' top='7px' color='#666bffe0' fontSize='.9rem' fontWeight='bold' bg='#cee5fbcf'>{children}</Text>
  )
}