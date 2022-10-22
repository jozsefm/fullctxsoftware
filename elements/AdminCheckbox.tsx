import styled from '@emotion/styled'
import { Checkbox } from '@chakra-ui/react'

export const AdminCheckbox = styled(Checkbox)`
  .chakra-checkbox__control:not([data-checked]) {
    background-color: white;
  }
`