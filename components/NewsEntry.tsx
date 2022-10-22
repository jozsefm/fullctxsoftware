import {
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Button,
  Icon,
  ModalBody,
} from '@chakra-ui/react'
import { useCallback } from 'react'
import { AiFillPushpin } from 'react-icons/ai'

export function NewsEntry({ type, heading, summary, date, pinned = false, onReadMore, modalBody }) {
  const clickReadMore = useCallback(() => {
    onReadMore(<>
      <ModalBody>
        {modalBody}
      </ModalBody>
    </>, heading)
  }, [onReadMore, modalBody])
  return (
    <Stack spacing={4} mb={8}>
      <Flex justify='space-between' align='center'>
        <Text
          textTransform={'uppercase'}
          color={'#a8c1da'}
          fontWeight={600}
          fontSize={'sm'}
          bg={useColorModeValue('#4e4e4e', 'blue.900')}
          p={1}
          alignSelf={'flex-start'}
          rounded={'md'}>
          {type}
        </Text>
        {pinned && <Icon color='white' fontSize='1.8rem' as={AiFillPushpin}/>}
      </Flex>
      <Heading fontSize='3xl' minH='72px'>{heading}</Heading>
      <Text color={'gray.500'} fontSize={'lg'} minH='81px'>
        {summary}
      </Text>
      <Flex justify='space-between' align='center'>
        <Button variant='outline' colorScheme='blue' onClick={clickReadMore}>Read more...</Button>
        <Text fontSize='0.9rem'>Posted on: {date.toLocaleDateString()}</Text>
      </Flex>
    </Stack>
  )
}