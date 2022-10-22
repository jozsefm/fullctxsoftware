import styled from '@emotion/styled'
import { Button } from '@chakra-ui/react'

export const noOutline = {
  outline: 'none'
}

export const noBg = {
  backgroundColor: 'transparent'
}

export const TextButtonsHoverStyles = {
  bg: 'transparent',
  textDecoration: 'underline'
}

export const TextButtonsFocusStyles = {
  outline: 'none'
}

export const TextButtonsActiveStyles = {
  bg: 'transparent',
  pos: 'relative',
  bottom: '-1px'
}

export const carouselControlHoverStyles = {
  backgroundColor: 'var(--chakra-colors-blackAlpha-500)',
  color: '#ffffff'
}

export const closeExplanationHoverStyles = {
  backgroundColor: 'var(--chakra-colors-blackAlpha-300)',
  color: '#727272'
}

export const closeExplanationActiveStyles = {
  boxShadow: 'var(--chakra-shadows-outline)'
}

export const ActionButton = styled(Button)`
  span {
    margin-inline-end: 0;
  }
  
  padding-left: 5px;
  padding-right: 5px;
  outline: none;
  border: none;
`

export const TransparentButtonHoverStyles = {
  bg: 'none',
  cursor: 'pointer'
}

export const TransparentButtonFocusStyles = {
  outline: 'none'
}

export const TransparentButtonActiveStyles = {
  bg: 'none'
}

const FilteringButton = ({ pl = '0', lh = '0', ...rest }) => <Button {...rest} />

export const LinkButton = styled(FilteringButton)`
a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-left: ${({ pl }) => pl ? pl : '0'};
  line-height: ${({ lh }) => lh ? lh : '0'};
}
`