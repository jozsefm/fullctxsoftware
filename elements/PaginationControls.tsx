import { Flex, Text } from "@chakra-ui/react";
import styled from '@emotion/styled'
import { TextButtonsActiveStyles, TextButtonsFocusStyles, TextButtonsHoverStyles } from "./Button";

const FilteringFlex = ({customStyles, ...restProps}) => <Flex {...restProps} />

const StyledFlexWarpper = styled(FilteringFlex)`
  ${(props) => {
    return props.customStyles
      ? props.customStyles
      : null
  }}
`

export default function PaginationControls({ currentPage, onPrevPage, maxPage, onNextPage, customStyles}) {
  return (
    <StyledFlexWarpper w='100%' pt='20px' justifyContent='space-around' customStyles={customStyles}>
      <Flex
        as='button'
        disabled={currentPage === 0}
        visibility={currentPage === 0 ? 'hidden' : null}
        onClick={onPrevPage}
        backgroundColor='transparent'
        justifyContent='center'
        alignItems='center'
        w='100%'
        _hover={TextButtonsHoverStyles}
        _active={TextButtonsActiveStyles}
        _focus={TextButtonsFocusStyles}
      >
        <Text fontSize={12} color='black' fontWeight='bold'>&larr; Previous</Text>
      </Flex>
      <Flex w='100%' justifyContent='center'>{`Page ${currentPage + 1} of ${maxPage}`}</Flex>
      <Flex
        as='button'
        disabled={currentPage + 1 === maxPage }
        visibility={currentPage + 1 === maxPage ? 'hidden' : null}
        onClick={onNextPage}
        backgroundColor='transparent'
        justifyContent='center'
        alignItems='center'
        w='100%'
        _hover={TextButtonsHoverStyles}
        _active={TextButtonsActiveStyles}
        _focus={TextButtonsFocusStyles}
      >
        <Text fontSize={12} color='black' fontWeight='bold'>Next ➞</Text>
      </Flex>
    </StyledFlexWarpper>
  )
}