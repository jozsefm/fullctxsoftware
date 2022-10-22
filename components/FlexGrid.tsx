import { Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'

// the default gap value is just here to get rid of TS complaining if the property is not present
const FilteringBox = ({ gap = null, justify = null, ...restProps }) => <Flex {...restProps}/>

export const FlexGrid = styled(FilteringBox)`
  --gap: ${({ gap }) => gap ? gap : 35}px;
  display: inline-flex;
  justify-content: ${({ justify }) => justify ? justify : 'center'};
  flex-wrap: wrap;
  margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
  width: calc(100% + var(--gap));

  & > * {
    margin: var(--gap) 0 0 var(--gap);
  }
`