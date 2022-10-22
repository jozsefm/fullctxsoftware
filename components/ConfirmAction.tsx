
import { useCallback, useRef, useState } from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  Button,
  Text,
  PopoverBody,
  Flex
} from '@chakra-ui/react'
import FocusLock from 'react-focus-lock'

// It uses the render function pattern so I can encapsulate the popover state inside
// the individual popover components instead of the parent MemberDetails.
// That would require separately defining it for every button which is tedious and not DRY.
export const ConfirmAction = ({ children, clickHandler, action, longText }: {children, clickHandler, action?, longText?: boolean}) => {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])
  const close = useCallback(() => setIsOpen(false), [])
  const initialFocusRef = useRef()

  const onAction = useCallback(() => {
    close()
    clickHandler()
  }, [clickHandler])

  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement='bottom'
      closeOnBlur={true}
      isOpen={isOpen}
      onClose={close}
    >
      <PopoverTrigger>
        {children(open)}
      </PopoverTrigger>
      <PopoverContent color='gray.600' bg='#f2f2f2' borderColor='gray.400' maxW={longText ? '400px' : '240px'}>
        <FocusLock returnFocus persistentFocus={false}>
          {longText
            ? <>
              <PopoverHeader fontWeight='bold' border='0' d='flex' alignItems='center' justifyContent='space-between'>
                <Text fontSize='0.8rem' textAlign='center'>{action}</Text>
              </PopoverHeader>
              <PopoverBody fontWeight='bold' border='0' d='flex' alignItems='center' justifyContent='space-between'>
                <Flex w='100%' justifyContent='space-around'>
                  <Button size='sm' colorScheme='green' onClick={onAction}>Yes</Button>
                  <Text>Do You want to continue?</Text>
                  <Button size='sm' colorScheme='blue' ref={initialFocusRef} onClick={close}>No</Button>
                </Flex>
              </PopoverBody>
            </> : <>
              <PopoverHeader fontWeight='bold' border='0' d='flex' alignItems='center' justifyContent='space-between'>
                <Button size='sm' colorScheme='green' onClick={onAction}>Yes</Button>
                <Text>{action ? action + '?' : 'Are You sure?'}</Text>
                <Button size='sm' colorScheme='blue' ref={initialFocusRef} onClick={close}>No</Button>
              </PopoverHeader>
          </>}
        </FocusLock>
      </PopoverContent>
    </Popover>
  )
}