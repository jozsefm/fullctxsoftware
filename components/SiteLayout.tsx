import { Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { cloneElement, useEffect, useMemo, useState } from 'react'
import Header from './Header'
import { SiteFooter } from './SiteFooter'

const StyledFlex = styled(Flex)`
  min-height: 1080px;
  min-height: 100vh;
`

const mb = { base: 'none', md: '250px', lg: '200px' }
const boxShdw = { base: 'none', md: '0 0 30px #2b2b2bb9' }
const pageMaxWidth = { xl: '100%' }

export default function SiteLayout(props) {
  const [ atTop, setAtTop] = useState(true)

  useEffect(() => {
    const onScroll = function () {
      const deltaY = window.pageYOffset
      if (deltaY < 5) {
        setAtTop(true)
      } else {
        setAtTop(false)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const propsChildren = useMemo(() => {
    return cloneElement(props.children, { atTop: atTop })
  }, [props.children, atTop])

  return (<>
    <StyledFlex
      id='root'
      direction='column'
      align='center'
      w='100%'
      h='100%'
      mb={mb}
      background={'white'}
      pos='relative'
      zIndex='var(--root-z)'
      boxShadow={boxShdw}
    >
      <Header atTop={atTop} background={'black'} />
      <Flex
        direction='column'
        align='center'
        maxW={pageMaxWidth}
        w='100%'
        m='0 auto'
        h='100%'
        {...props}
      >
        {propsChildren}
      </Flex>
    </StyledFlex>
    <SiteFooter />
  </>
  )
}