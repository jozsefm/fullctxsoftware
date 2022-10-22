import { Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'

const headerBg = 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(51,51,51,1) 100%)'

const StyledFlex = styled(Flex)``
const FilteringFlex = ({ top, height, ...restProps }: {top?: string, height?: string, [key: string] : any}) => <StyledFlex {...restProps} />

const WaveContainer = styled(FilteringFlex)`
  pointer-events: none;
  background: ${headerBg};
  position: absolute;
  top: 0;
  width: 100%;
  height: ${({ height }) => height};
  z-index: var(--root-z);

  .custom-shape-divider-bottom {
    position: absolute;
    top:  ${({ top }) => top};
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom svg {
    position: relative;
    display: block;
    width: calc(103% + 1.3px);
    height: 161px;
  }

  .custom-shape-divider-bottom .shape-fill {
    fill: #FFFFFF;
  }
`

const desktopDisplay = { base: 'none', md: 'flex'}
const mobileDisplay = { base: 'flex', md: 'none'}

export default function TopBackground({ top = '220px', height = '379px', mHeight='305px' }) { // defaults are for index page
  return (
    <>
      <WaveContainer top={top} height={height} display={desktopDisplay}>
        <div className="custom-shape-divider-bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </WaveContainer>
      <Flex
        display={mobileDisplay}
        w='100%'
        h={mHeight}
        m='0 auto'
        pos='absolute'
        top='0'
        zIndex='-1'
        transform='skewY(-11deg)'
        bg={headerBg}>
      </Flex>
    </>
  )
}