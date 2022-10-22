import Image from 'next/image'
import { Flex, Text, Icon, Box, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { useContext } from 'react'
import { MobileContext } from 'contexts/MobileProvider'
// import Svg from 'public/img/fullctx-round.svg'

const logoWidths = { sm: '300px' }
const logoMarginT = ['5px', '5px', null]
const logoTextDisplay = ['initial', 'initial', 'none', 'initial']
const logoImgPos = ['absolute', 'absolute', 'relative', 'absolute']
const logoImgTop = {
  base: '-10px',
  md: '-9px',
  lg: '-10px',
}
const logoImgMarginRs = ['0', '0', '10px', '0']
const logoM = {base: 'none', md: '0 auto'}
const imageStyle = {'#logo': {
  position: 'absolute',
  top: '0',
  fontSize: '0',
  color: 'transparent'
}}

export default function Logo(props) {
  const { logoSize = '45px', showMenu, bookView, ...restProps } = props
  const { isMedium } = useContext(MobileContext)

  const textFontSize = props.fontSize || '1rem'
  return (
    <LinkBox
      maxW={logoWidths}
      m={logoM}
      mt={logoMarginT}
      pos='relative'
      h={bookView && isMedium ? '29px' : null}
      {...restProps}
    >
      <LinkOverlay
        href={`/`}
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='flex-start'
      >
        <Box w={logoSize} pos={logoImgPos} top={bookView ? logoImgTop : null} left='0' mr={logoImgMarginRs} sx={imageStyle}>
          <Image id='logo' priority src={bookView ? '/img/fullctx-round-transparent.svg' : '/img/fullctx-round.svg'} width={45} height={45} alt='The logo of full context development. A frame that represents the context sorrounding development.'/>
        </Box>
        <Text
          display={logoTextDisplay}
          ml='60px'
          fontSize={textFontSize}
          fontWeight='400'
          fontFamily='Rubik, Helvetica Neue, Helvetica, Arial, sans-serif;'
          letterSpacing='-.015em'
        >Full Context Development</Text>
      </LinkOverlay>
    </LinkBox>
  )
}