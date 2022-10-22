import { ChevronRightIcon, CloseIcon, HamburgerIcon, Icon } from '@chakra-ui/icons'
import {
  Box, Button, Divider, Flex, Link, Menu, MenuGroup, MenuItem, MenuList, Text
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { BackgroundContext } from 'contexts/BackgroundProvider'
import { HeaderContext } from 'contexts/HeaderProvider'
import { MobileContext } from 'contexts/MobileProvider'
import { NavigationContext } from 'contexts/NavigationProvider'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { forwardRef, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { BsGithub } from 'react-icons/bs'
import { unselectable } from 'styles/util'
import Logo from './Logo'

const menuTextFontSizes = ['1.05rem', '1.05rem', '1rem']

const SimpleMenuItem = (props) => {
  const { children, isLast, to = '/', icon, noNav, ...rest } = props
  const { context } = useContext(HeaderContext)
  const { onClick } = context
  const mbs = useMemo(() => ({ base: isLast ? 0 : 4, sm: isLast ? 0 : 4, md: 0 }), [isLast])
  const mrs = useMemo(() => ({ base: 0, sm: 0, md: isLast ? 0 : 4 }), [isLast])

  return (
    <Text
      mb={mbs}
      mr={mrs}
      display='block'
      onClick={onClick}
      fontSize={menuTextFontSizes}
      {...rest}
    >{noNav ? children : <Link href={to} as={NextLink} passHref>{children}</Link>}
    </Text>
  )
}

const FilteringSimpleMenuItem = ({ skipStyle, ...restProps }: {skipStyle?: boolean, [key: string] : any}) => <SimpleMenuItem {...restProps} />

const HeaderMenuItem = styled(FilteringSimpleMenuItem)`
  ${({ skipStyle }) => {
    if (!skipStyle) {
      return `
        a:focus {
          outline: none;
        }
        a:after {
          display:block;
          content: '';
          border-bottom: solid 3px #64acff;  
          transform: scaleX(0);  
          transition: transform 250ms ease-in-out;
        }
        a:hover:after, a:focus:after { transform: scaleX(1); }
      `
    }
  }}

  @media screen and (min-width: 48em) {
    margin-right: var(--chakra-space-6);
  }

  @media screen and (min-width: 62em) {
    margin-right: var(--chakra-space-7);
  }

  @media screen and (min-width: 80em) {
    margin-right: var(--chakra-space-8);
  }
`

const FilteringFlex = forwardRef(({ fontStyles, ...restProps }: any, ref) => <Flex ref={ref} {...restProps} />)

const MenuFlexContainer = styled(FilteringFlex)`
  > * {
    ${unselectable}
  }

  ${({ fontStyles }) => fontStyles}
`

const MenuWithoutSession = ({ isMobile, atTop, bookView }) => (
  <>
    {isMobile && (<>
      <Flex fontSize='0.9rem' align='center' mb='1' wrap='wrap' color='#adb7bb'>
        PAGES
      </Flex>
      <Divider mb='4' borderColor='#adb7bb' opacity='1'/>
    </>)}
    <HeaderMenuItem to='/'><Text as='a'>{isMobile && <ChevronRightIcon />}Home</Text></HeaderMenuItem>
    <HeaderMenuItem to='/book'><Text as='a'>{isMobile && <ChevronRightIcon />}Book</Text></HeaderMenuItem>
    <HeaderMenuItem to='/code-to-money-roadmap'><Text as='a'>{isMobile && <ChevronRightIcon />}Code to Money</Text></HeaderMenuItem>
    <HeaderMenuItem to='/blog'><Text as='a'>{isMobile && <ChevronRightIcon />}Blog</Text></HeaderMenuItem>
    <HeaderMenuItem to='https://discord.gg/x2mj54HU' skipStyle>
      <Text pos='relative' as='a' target='_blank'>
        {isMobile && <ChevronRightIcon pos='absolute' top='0' />}
        <Text
          ml={isMobile ? '12px' : null}
          bg={`url(/img/discord${isMobile || atTop || bookView ? '' : '-dark'}.svg) 50% no-repeat`}
          w='99px'
          h='27px'
          backgroundSize='88px 27px'
          display='inline-block'
          color='white'
          pos='relative'
          top='5px'
        ></Text>
      </Text>
    </HeaderMenuItem>
    <HeaderMenuItem to={'https://github.com/jozsefm/fullctxsoftware'}><Text as='a' display='flex' target='_blank'>{isMobile && <ChevronRightIcon />}<Icon as={BsGithub} mr='8px' fontSize='20px' /> GitHub</Text></HeaderMenuItem>
    {!isMobile && !bookView && (<>
      <HeaderMenuItem to={'/book'} isLast>
        <Button
          fontSize={menuTextFontSizes}
          size={isMobile ? 'md' : 'sm'}
          rounded='md'
          fontWeight='400'
          color='white'
          colorScheme='blue'
          bg='rgb(86, 134, 255)'
        >
          {"Read for free"}
        </Button>
      </HeaderMenuItem>
    </>)}
    {!isMobile && <HeaderMenuItem noNav skipStyle>
      <Menu placement='bottom-start'>
        <MenuList color='black'>
          <MenuGroup title="Help">
            <MenuItem fontStyle='italic'>Support</MenuItem>
            <MenuItem fontStyle='italic'>FAQ</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </HeaderMenuItem>}
  </>
)

const alignHeaders = ['flex-start', 'flex-start', 'center' ]
const justifyHeaders = ['flex-start', 'flex-start', 'center', 'space-between']
const menuToggleDisplays = { base: 'block', md: 'none' }
const menuContainerFlexBasis = { base: '0', md: 'auto' }
const menuFlexContainerJustifys = ['flex-start', 'flex-start', 'flex-end', 'flex-end']
const menuFlexContainerDirections = ['column', 'column', 'row', 'row']
const menuFlexContainerPaddingTs = [4, 4, 0, 0]
const menuFlexContainerAlign = { base: 'flex-start', md: 'center' }

const beforeNavMobileBgCover = {
  content: '""',
  display: 'block',
  width: '100%',
  height: '100px',
  position: 'absolute',
  left: 0,
  top: '-90px',
  backgroundColor: 'black !important',
  zIndex: 9999
}

const afterNavMobileBgCover = {
  content: '""',
  display: 'block',
  width: '100%',
  height: '100px',
  position: 'absolute',
  left: 0,
  bottom: '-90px',
  backgroundColor: 'black !important',
  zIndex: 9999
}

const innerW = { base: '100%', md: 'auto'}

const Header = (props) => {
  const { background, padding, fontStyles, bookView, atTop } = props
  const [ showMenu, setShowMenu ] = useState(false)
  const router = useRouter()
  const { isMobile, isMedium } = useContext(MobileContext)
  const { isNavigating, setIsNavigating } = useContext(NavigationContext)
  const { storeContext } = useContext(HeaderContext)
  const { bgView } = useContext(BackgroundContext)
  const menuContainerDispalys = useMemo(() => ({ base: showMenu ? 'block' : 'none', md: 'block' }), [showMenu])
  
  const isOnStickyPage = useMemo(() => {
    return router.pathname === '/'
  }, [router.pathname])
  
  const toggleMenu = useCallback(() => {
    if (isMobile) {
      document.documentElement.style.setProperty('--body-overflow', showMenu ? 'auto' : 'hidden')
      document.documentElement.style.setProperty('--root-z', showMenu ? '0' : '2')
      setShowMenu(!showMenu) 
    }
  }, [showMenu, isMobile])

  useEffect(() => {
    storeContext({ onClick: toggleMenu })
  }, [toggleMenu])

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        setIsNavigating(false)
      }, 600) // the duration of the animation
    }
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    const handleRouteChangeStart = () => {
      setIsNavigating(true)
    }
    router.events.on('routeChangeStart', handleRouteChangeStart)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.off('routeChangeStart', handleRouteChangeStart)
    }
  }, [router])

  const menuState = useMemo(() => {
    return getMenuState({isMobile, showMenu, padding, atTop, isMedium, bookView, background, isOnStickyPage, bgView})
  }, [isMobile, showMenu, padding, atTop, isMedium, bookView, background, isOnStickyPage, bgView])

  const PageList = useMemo(() => {
    return isMobile
      ? ({ children }) => <Flex direction='column' w='100%' h='60vh' overflow='scroll' display={!showMenu ? 'none' : null}>{children}</Flex>
      : ({ children }) => <div>{children}</div>
  }, [isMobile, showMenu])
 
  return (
    <FilteringFlex
      as='nav'
      direction='row'
      align={alignHeaders}
      justify={justifyHeaders}
      wrap='wrap'
      w='100%'
      h={menuState.h}
      p={menuState.p}
      bg={null}
      backgroundColor={menuState.bgc}
      color={menuState.c}
      zIndex='100'
      pos='fixed'
      top='initial'
      bottom={showMenu ? '0' : null}
      maxW='100vw'
      maxH={!showMenu ? '91px' : null}
      minH='60px'
      transition={getTransition(isNavigating, isMobile)}
      backdropFilter={bgView === 'blogPost' ? 'blur(6px)' : null}
      boxShadow={bookView ? null : '0 5px 10px rgba(0,0,0,0.12)'}
      _before={isMobile && showMenu ? beforeNavMobileBgCover : null}
      _after={isMobile && showMenu ? afterNavMobileBgCover : null}
    >
      <Flex align='center' justify='space-between' w={innerW}>
        <Logo
          fontSize={isMobile ? '1.1rem' : null}
          logoSize={menuState.ls}
          showMenu={showMenu}
          bookView={bookView}
        />
        <Box display={menuToggleDisplays} onClick={toggleMenu} color={menuState.mc}>
          {showMenu ? <CloseIcon w={6} h={6} /> : <HamburgerIcon w={6} h={6} />}
        </Box>
      </Flex>
      <PageList>
        <>
          <Box display={menuContainerDispalys} flexBasis={menuContainerFlexBasis} w={isMobile && showMenu ? '100%' : null}>
            <MenuFlexContainer
              align={menuFlexContainerAlign}
              justify={menuFlexContainerJustifys}
              direction={menuFlexContainerDirections}
              pt={menuFlexContainerPaddingTs}
              fontStyles={!isMobile ? fontStyles : null} //custom stuff used in the styled component
              fontFamily='Rubik, Helvetica Neue, Helvetica, Arial, sans-serif;'
              fontWeight='400'
            >
              <MenuWithoutSession isMobile={isMobile} atTop={atTop} bookView={bookView}/>
            </MenuFlexContainer>
          </Box>
          {isMobile && showMenu && (
            <Flex
              w='100%'
              fontSize='1.05rem'
              mb={{ base: 4, md: 0 }}
              mt='25px'
              borderRadius='3px'
              justify='flex-end'
              align='flex-start'
              direction='column'
              color='white'
            >
              <Flex fontSize='0.9rem' align='center' mb='1' wrap='wrap' color='#adb7bb' justify='space-between' w='100%'>
                <Text>HELP</Text>
              </Flex>
              <Divider mb='4' borderColor='#adb7bb' opacity='1'/>
              <NextLink href='/faq' passHref>
                <Link display='flex' justifyContent='flex-start' alignItems='center' onClick={toggleMenu} mb='4'>
                  <Text as='a' fontStyle='italic'>{isMobile && <ChevronRightIcon />}FAQ</Text>
                </Link>
              </NextLink>
              <NextLink href='/support' passHref>
                <Link display='flex' justifyContent='flex-start' alignItems='center' onClick={toggleMenu}>
                  <Text as='a' fontStyle='italic'>{isMobile && <ChevronRightIcon />}Support</Text>
                </Link>
              </NextLink>
            </Flex>
          )}
        </>
      </PageList>
    </FilteringFlex>
  )
}
 
export default Header

function getTransition(isNavigating, isMobile) {
  if (isNavigating || isMobile) {
    return null
  }

  return 'padding 0.6s ease-out'
}

function getMenuState({ isMobile, showMenu, padding, atTop, isMedium, bookView, background, isOnStickyPage, bgView }) {
  atTop = isMobile ? !isOnStickyPage ? false : atTop : atTop
  return {
    h: isMobile && showMenu ? '100%' : null,
    p: showMenu ? 8 : padding || (atTop ? isMedium ? 4 : 8 : isMedium ? 1 : 4),
    bgc: (showMenu ? 'black' : bookView ? background : atTop ? bgView === 'blogPost' && !isMobile ? '#0000008f' : background : bgView === 'blogPost' && !isMobile ? '#ffffffd4' : 'white') + ' !important',
    c: bookView ? 'white' : (isMobile && showMenu) || atTop ? 'white' : 'rgb(55, 65, 81)',
    ls: isMobile && !showMenu && atTop ? '33px' : null,
    mc: bookView ? 'white' : atTop || showMenu ? 'white' : 'rgb(55, 65, 81)'
  }
}