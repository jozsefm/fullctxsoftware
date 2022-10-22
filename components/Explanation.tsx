
import { useCallback, useState } from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  Text,
  PopoverBody,
  PopoverCloseButton
} from '@chakra-ui/react'

// It uses the render function pattern so I can encapsulate the popover state inside
// the individual popover components instead of the parent component.
// That would require separately defining it for every button which is tedious and not DRY.
export const Explanation = ({ children, explanation }) => {
  const [isOpen, setIsOpen] = useState(false)
  const openPopup = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <Popover
      placement='bottom'
      closeOnBlur={true}
      isOpen={isOpen}
      onClose={close}
      preventOverflow
    >
      <PopoverTrigger>
        {children(openPopup)}
      </PopoverTrigger>
      <PopoverContent color='gray.600' bg='#f2f2f2' borderColor='gray.400' maxW='400px'>
        <PopoverCloseButton />
        <PopoverHeader fontWeight='bold' border='0' d='flex' alignItems='center' justifyContent='space-between'>
          <Text fontSize='1rem' textAlign='center' >How does it work?</Text>
        </PopoverHeader>
        <PopoverBody border='0' d='flex' alignItems='center'>
          <Text>{explanation}</Text>
        </PopoverBody>
         
      </PopoverContent>
    </Popover>
  )
}