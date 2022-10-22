import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import {
  AlertDialog,
  AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter,
  AlertDialogHeader, AlertDialogOverlay, Box, Button, Flex, Icon,
  Table, Td,
  Text, Textarea, Th, Tr, useDisclosure
} from '@chakra-ui/react'
import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'
import { ErrorBoundary } from 'components/ErrorBoundary'
import { navConfig } from 'constants/pageIds'
import { MobileContext } from 'contexts/MobileProvider'
import { noBg, noOutline } from 'elements/Button'
import useClickOutside from 'hooks/useClickOutside'
import { sendAnswer } from 'lib/services/feedbackClientService'
import debounce from 'lodash-es/debounce'
import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Scrollbars } from 'rc-scrollbars'
import { cloneElement, memo, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { FaBook, FaBookReader } from 'react-icons/fa'
import { HiSpeakerphone } from 'react-icons/hi'
import { IoMoonSharp, IoSunnyOutline } from 'react-icons/io5'
import { MdOutlineFormatSize, MdOutlineRestartAlt } from 'react-icons/md'
import useDarkMode from 'use-dark-mode'
import { Feedback } from './Feedback'
import Header from './Header'

let lastScroll = Date.now()
let manualContentNavigation = false
const trackScrollEnd = () => {
  lastScroll = Date.now()
  setTimeout(() => {
    if (Date.now() - lastScroll >= 200) {
      manualContentNavigation = false
    }
  }, 200)
}

const scrollerSize = {
  width: '100%',
  maxWidth: '255px',
  height: '100vh'
}

const readModeScrollerSize = {
  width: '0',
  height: '100vh'
}

const inputPlaceholderStyles = {
  fontSize: '.95 rem',
}

const headingFontStyles = `
  a {
    font-size: 0.9rem;
    font-weight: 400;
  }
`
  
const globalCss = css`
  html {
    scroll-behavior: smooth;
  }

  #content.position-keeper {
    margin-top: 56px;
  }

  #page-wrapper {
    background: var(--bg-color);
  }

  .dark-mode {

    #page-header {
      background: var(--bg-color);
      border-bottom: none;
    }

    aside {
      background: rgb(41, 46, 49);
      color: white;
      border-right: none;

      th {
        color: #a5a5a5;
      }

      tr.active {
        background: rgb(34, 38, 40);
        border-right: none;
      }

      a span.title {
        color: #d4d4d4;
      }

      a p {
        color: #a5a5a5;
      }
    }

    .locked.buttons {
      border-bottom: none;
    }
  }

  #page-header {
    width: 100%;
    height: 3.5rem;
    background-color: white;
    border-bottom: 1px solid rgba(150,150,150,0.3);
    position: sticky;
    top: 59px;
    z-index: 98; // notion table borders are above it till z-index 83. The ToC is z-index 99 for the same reason and should cover this.

    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (min-width: 48em) {
      justify-content: center;
    }

    .buttons {
      position: absolute;
      right: 0;
    }

    .to-reveal {
      transition-property: opacity;
      transition-duration: 300ms;
      opacity: 1;
    }

    &.top-visible {
      .to-reveal {
        opacity: 0;
      }
    }

    .notion-header {
      display: flex;
      position: relative;
      width: auto;
      height: 3.2rem;
      min-height: 3.2rem;
      backdrop-filter: none !important;
      background: none !important;
      z-index: -1;
      
      .nav-header {
        height: 3.2rem;
        position: static;

        .title {
          font-size: 1rem;
          font-weight: 600;
          line-height: 2rem;
        }
      }

      .breadcrumb .title {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: 95px;

        @media screen and (min-width: 48em) {
          max-width: 100%;
        }
      }
    }
  }

  .locked.buttons {
    position: absolute;
    right: 0;
    top: 60px;
    height: 56px;
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid rgba(150,150,150,0.3);
  }
`

const Aside = styled.aside`
  pointer-events: auto;
  position: fixed;
  top: 0;
  width: 70%;
  max-width: 255px;
  height: 100vh;
  background-color: #f8f8f8;
  align-self: flex-start;
  box-shadow: 0 2px 3px rgb(0 0 0 / 6%);
  border-right: 1px solid rgba(150,150,150,0.3);
  z-index: 2;
  color: #777;
  transition-property: width;
  transition-duration: 200ms;
  margin-top: 60px;

  .rc-scrollbars-container {
    transition-property: width;
    transition-duration: 100ms;
    height: calc(100vh - 40px) !important;
  }

  &.closed {
    width: 30px;
    height: auto;
    background-color: transparent;
  }

  tr.active {
    background-color: #ececec;
    border-right: 1px solid #d8d8d8;
    user-select: none;

    &.collapsed ul {
      display: none;
    }

    & div:hover {
      cursor: pointer;
    }
  }

  th, td {
    border-bottom: none;
  }
  
  a.done {
    color: #2ea647;
  }

  li a {
    display: inline-block;
    width: 95%;
  }

  #toc-content {
    list-style-type: none;
    font-size: 0.8rem;
    line-height: 1rem;
    li {
      margin-bottom: 0.6rem;
      padding-left: 2.3rem;
      padding-right: 0.5rem;
      transition: left;
      position: relative;

      &.current {
        color: #64acff;
      }

      &:hover {
        left: -2px;
        
        &::before {
          content: '›';
          display: block;
          position: absolute;
          left: 15px;
          top: -4px;
          font-size: 2rem;
        }
      }
    }
  }
`

const AsideWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 70%;
  max-width: 255px;
  height: 100vh;
  pointer-events: none;
  z-index: 99; // In chapter 7 the table borders overlap with this below z-index 83.
  transition-property: width;
  transition-duration: 200ms;
  visibility: hidden; // this is for hiding the initial visible state of the TOC on mobile, preventing a disturbing 'flash' on first direct render of a chapter page while keeping the layout unchanged on desktop initial render

  &.readMode {
    width: 0;

    aside {
      width: 0;
    }
  }

  &.displayed {
    visibility: visible;
  }
`

const TOCLink = styled.a`
  display: inline-block;
  width: 230px;
  &:focus, &:active {
    outline: none;
  }
`

const TOCLineWrapper = ({ children, isGroup }) => {
  if (isGroup) {
    return (
      <Th paddingInlineStart='10px' color='black'>{children}</Th>
    )
  } else {
    return (
      <Td paddingInlineEnd='0' p='10px'>{children}</Td>
    )
  }
} 
  
const NavTable = memo(({ route, addRef, setReadMode }: { route: string, addRef: (string) => void, setReadMode: any }) => {
  const { isMobile } = useContext(MobileContext)

  return (
    <Table size='sm' w='100%' mb='20px' mt='10px'>
      <Flex as='button'>{ }</Flex>
      {navConfig.map((entry) => {
        const path = `/book/${entry.path}`
        const isGroup = entry.type === 'group'
        const hasSub = entry.sub
        const hasAlt = entry.alt
        const isCurrent = path === route
        const [expanded, setExpanded] = useState(true)
        const rowRef = useRef()
        addRef(rowRef)
        const rowClass = isCurrent ? expanded ? { className: 'active' } : { className: 'active collapsed' } : null
        
        const titleClickHandler = isCurrent ? {
          onClick: (event) => {
            event.preventDefault()
            setExpanded(!expanded)
          }
        } : null
        
        const linkBlocker = useMemo(() => {
          return {
            onClick: (event) => {
              if (isCurrent) {
                event.preventDefault()
              } else if (isMobile){
                setReadMode(true)
              }
            }
          }
        }, [isCurrent, isMobile])
        
        return (
          <Tr key={entry.title} {...rowClass} ref={rowRef}>
            <Box ml='0.5vw' pos='relative' {...titleClickHandler}>
              <TOCLineWrapper isGroup={isGroup}>{isGroup ? entry.title : (
                <>
                  <NextLink passHref href={path}>
                    <TOCLink {...linkBlocker}>
                      <Box maxW='210px' mt='5px'>
                        <Text as='span' fontSize='16px' display='inline-block' mr='3px'>{entry.emoji}</Text>
                        <Text as='span' fontWeight='bold'>{entry.title}</Text>
                        {hasSub && (<><br /><Text display='inline-block' color='#4f4f4f' mt='5px' ml='2px' fontSize='13px' fontWeight='700'>{entry.sub}</Text></>)}
                        {hasAlt && (<Text  color='#4f4f4f' mt='1px' ml='2px' fontSize='13px' fontStyle='italic'>{entry.alt}</Text>)}
                      </Box>
                    </TOCLink>
                  </NextLink>
                  {isCurrent && hasSub && (
                    <Box
                      pos='absolute'
                      right='10px'
                      top='10px'
                      fontSize='1.4rem'>
                      {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </Box>
                  )}
                </>
              )}</TOCLineWrapper>
            </Box>
          </Tr>)
      })}
    </Table>
  )
})

export default function BookLayout({children}) {
  const [pageLoaded, setPageLoaded] = useState(false)
  const [showTOCOnClient, setShowTOCOnClient] = useState(false)
  const [firstToggle, setFirstToggle] = useState(true)
  const [closeToc, setCloseToc] = useState(false)
  const [tocOpened, setTocOpened] = useState(false)
  const [darkModeDetected, setDarkModeDetected] = useState(false)
  const {isMobile, isLarge} = useContext(MobileContext)
  const [readMode, setReadMode] = useState(false)
  const TOC = useRef([])
  const contentRef: any = useRef()
  const customNotionTopBarRef: any = useRef()
  const textAreaRef: any = useRef()
  const notionHeaderRef: any = useRef()
  const router = useRouter()
  const darkMode = useDarkMode(false)
  const signalTocClose = useCallback((contains) => {
    setCloseToc(!contains)
  }, [])
  const { targetRef, toggleRef, setup } = useClickOutside(signalTocClose, '#page-wrapper')
  
  // the adding of the customNotionHeader to the top of the page on initial render creates a layout shift
  // I made it unnoticable by toggling a class that adds a top margin, for some reason it was only
  // visible as a free user. I had no idea why was it not visible when logged in.
  const [ keepPosition, setKeepPosition ] = useState(true)
  const [ fontSizeScale, setFontSizeScale ] = useState(1)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const feedbackRef = useRef()
  const cancelRef = useRef()
  const [chapter, setChapter] = useState(null)
  const [showTextArea, setShowTextArea] = useState(false)

  const onIncreaseFontSize = useCallback(() => {
    if (fontSizeScale === 1) {
      setFontSizeScale(2)
      document.documentElement.style.setProperty('--font-scale', '1.05')
    }
    if (fontSizeScale === 2) {
      setFontSizeScale(3)
      document.documentElement.style.setProperty('--font-scale', '1.15')
    }
    if (fontSizeScale === 3) {
      setFontSizeScale(4)
      document.documentElement.style.setProperty('--font-scale', '1.3')
    }
    if (fontSizeScale === 4) {
      setFontSizeScale(5)
      document.documentElement.style.setProperty('--font-scale', '1.5')
    }
    if (fontSizeScale === 5) {
      setFontSizeScale(1)
      document.documentElement.style.setProperty('--font-scale', '1')
    }
  }, [fontSizeScale])

  const onWhatIsSoftwareChange = useCallback(debounce(async ({ target }) => {
    await sendAnswer({ question: 1, answer: target.value })
  }, 30000), [])

  useEffect(() => {
    if (chapter === 'chapter-1') {
      setShowTextArea(true)
      const inputTarget = document.querySelector('a[href="https://fullcontextdevelopment.com/links/1"]')
      if (inputTarget) {
        inputTarget.parentNode.replaceChild(textAreaRef.current, inputTarget)
      }
    }
  }, [chapter]) 

  let route = ''
  if (process.browser) {
    route = useMemo(() => {
      const url = new URL(window.location.href)
      return url.pathname
    }, [window.location.href])
  }

  const observer = useMemo(() => {
    if (process.browser) {
      return new IntersectionObserver((entries) => {
        const currentChapter = TOC.current.find((entry) => entry?.current?.actual)
        const chapterTOC = currentChapter.current.children['toc-content']
        entries.forEach(({ target, boundingClientRect }) => {
          if (!manualContentNavigation) {
            const { y } = boundingClientRect
            const leaving = y < 0
            if (leaving) { // literally leaving the viewport at the top as we scroll down
              const id = target.parentNode.children[0].id
              const query = `a[href~=\\#${id}]`
              const currentTOCItem = chapterTOC.querySelector(query)
              Array.from(chapterTOC.children).forEach((li: HTMLElement) => li.classList.remove('current'))
              currentTOCItem.parentNode.classList.add('current')
            } else if (y < 250) { // they enter at the top as we scroll up
              const TOCChildrens: HTMLElement[] = Array.from(chapterTOC.children)
              const currentIndex = TOCChildrens.findIndex((node: HTMLElement) => node.classList.contains('current'))
              if (currentIndex > 0) {
                TOCChildrens.forEach(li => li.classList.remove('current'))
                TOCChildrens[currentIndex - 1].classList.add('current')
              }
            }
          }
        })
      }, {
        threshold: 1
      })
    }
  }, [])

  useEffect(() => {
    let added = true
    const onScroll = function () {
      const deltaY = window.pageYOffset

      if (deltaY < 400) {
        if (!added) {
          notionHeaderRef.current?.classList.add('top-visible')
          added = true
        }
      } else if (added) {
        notionHeaderRef.current?.classList.remove('top-visible')
        added = false
      }

      trackScrollEnd()
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const setNotionContentWidth = () => {
      const screenWidth = document.documentElement.clientWidth
      const maxWidth = screenWidth >= 720 ? 720 : screenWidth
      document.documentElement.style.setProperty('--notion-max-width', maxWidth === 720 ? '720px' : `calc(${maxWidth}px - 6vw)`)
    }
    setNotionContentWidth()
    window.addEventListener('resize', setNotionContentWidth)

    // to set up TOC even on direct page loads
    const url = router.asPath
    createContentTOC(contentRef, url, navConfig, TOC, observer)
    setPageLoaded(true)
    const screenWidth = document.documentElement.clientWidth
    if (screenWidth > 767) { // md -> lg breakpoint
      setShowTOCOnClient(true)
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', setNotionContentWidth)
      observer.disconnect()
      ;(window as unknown as any).headerSet = false
    }
  }, [])

  // to set up TOC on normal navigation
  useEffect(() => {
    setChapter(router.asPath.replaceAll('/', '').replace('book', ''))
    const handleRouteChangeComplete = (url) => {
      setKeepPosition(true)
      createContentTOC(contentRef, url, navConfig, TOC, observer)
      setKeepPosition(false)
      const footerNavEvent = window.localStorage.getItem('footerNav') === 'true'
      if (footerNavEvent) {
        setTimeout(() => {
          window.scrollTo(0, 0)
        }, 100)
        window.localStorage.removeItem('footerNav')
      }
    }
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    const handleRouteChangeStart = () => {
      ;(window as unknown as any).headerSet = false
      const toLeave = router.query.page
      const TOCIndex = navConfig.findIndex(entry => {
        return entry.path === toLeave
      })
      const currentChapter = TOC.current[TOCIndex]?.current
      if (currentChapter) { // on navigating to home from base /book view this happens
        currentChapter.actual = false
        const chapterTOC = currentChapter.children['toc-content']
        if (chapterTOC) {
          chapterTOC.remove()
        }
      }
      observer.disconnect()
    }
    router.events.on('routeChangeStart', handleRouteChangeStart)

    createContentHeader(contentRef, customNotionTopBarRef, notionHeaderRef)

    return () => {
      observer.disconnect()
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.off('routeChangeStart', handleRouteChangeStart)
    }

  }, [TOC, router])

  // this is also a workaround, for some reason both the sun and moon icons were displayed on initial render no matter how
  // I tried to use binary logic like darkMode.value ? ... : ... or {darkMode.value && ...} {!darkMode.value && ...} to only render one
  useEffect(() => {
    if (!darkModeDetected) {
      setDarkModeDetected(true)
    }
  }, [darkMode.value])

  useEffect(() => {
    if (pageLoaded) {
      setup()
      setKeepPosition(false)
    }
  }, [pageLoaded])

  useEffect(() => {
    if (!readMode) {
      setTimeout(() => {
        setTocOpened(true)
      }, 200)
    } else {
      setTocOpened(false)
    }
  }, [readMode])

  useEffect(() => {
    if (isMobile && closeToc) {
      if (tocOpened) {
        setReadMode(true)
      }
      setCloseToc(false)
    }
  }, [closeToc, tocOpened, isMobile])

  const addRef = useMemo(() => {
    return ref => TOC.current.length < navConfig.length && TOC.current.push(ref)
  }, [TOC])

  const toggleDarkMode = useCallback(
    (e) => {
      e.preventDefault()
      darkMode.toggle()
    },
    [darkMode.toggle]
  )

  const propsChildren = useMemo(() => {
    return cloneElement(children, { darkMode: darkMode.value })
  }, [children, darkMode.value])

  const toggleReadMode = useCallback(() => {
    if (isMobile && firstToggle) {
      // read mode is false by default but we disguised it as 'true' on mobile
      // now it meets the reality so no need to toggle first the first time.
      setShowTOCOnClient(true)
      setFirstToggle(false)
      setReadMode(false)
    } else {
      setReadMode(!readMode)
    }
  }, [readMode, isMobile, firstToggle])
  
  return (
    <ErrorBoundary>
      <Global styles={globalCss} />
      <Header background='rgb(34, 40, 45)' padding='14px' fontStyles={headingFontStyles} bookView />
      <Head>
        <link rel="canonical" href={`https://www.fullcontextdevelopment.com${router.asPath}`} />
      </Head>
      <Flex
        direction='row'
        align='center'
        w='100%'
        m='0 auto'
        id='page-wrapper'
        className={chapter} // to be able to add chapter specific css styling
      >
        {router.asPath !== '/book' && <AsideWrapper className={`${readMode ? 'readMode' : ''} ${showTOCOnClient ? 'displayed' : ''}`} ref={targetRef}>
          <Aside>
            <Scrollbars style={readMode ? readModeScrollerSize : scrollerSize} universal autoHide hideTracksWhenNotNeeded>
              <NavTable route={route} addRef={addRef} setReadMode={setReadMode}/>
            </Scrollbars>
          </Aside>
        </AsideWrapper>}

        <Box
          ref={contentRef}
          w='100%'
          id='content'
          className={router.asPath !== '/book' && isMobile && keepPosition ? 'position-keeper' : null}
        >
          {propsChildren} 
        </Box>

        <Flex align='center' justify='center' ref={customNotionTopBarRef} className={'buttons'} display={router.asPath === '/book' ? 'none !important' : 'flex'}>
          <Button variant='ghost' _hover={noBg} _active={noBg} _focus={noOutline} onClick={onIncreaseFontSize} maxH='56px' >
            <Icon as={fontSizeScale === 5 ? MdOutlineRestartAlt : MdOutlineFormatSize} transform={fontSizeScale === 5 ? 'scale(1.2)' : null}w='1.5rem' h='1.5rem' color='rgb(128, 128, 128)' />
          </Button>
          <Button variant='ghost' _hover={noBg} _active={noBg} _focus={noOutline} onClick={onOpen} ref={feedbackRef}>
            <Icon as={HiSpeakerphone} w='1.5rem' h='1.5rem' color='rgb(128, 128, 128)' />
          </Button>
          <Button variant='ghost' _hover={noBg} _active={noBg} _focus={noOutline} onClick={toggleReadMode} ref={toggleRef}>
            {readMode || (isMobile && firstToggle)
              ? <Icon as={FaBookReader} w='1.5rem' h='1.5rem' color='rgb(128, 128, 128)' />
              : <Icon as={FaBook} w='1.5rem' h='1.5rem' color='rgb(128, 128, 128)' />
            }
          </Button>
          <Button variant='ghost' _hover={noBg} _active={noBg} _focus={noOutline} onClick={toggleDarkMode}>
            {darkModeDetected
              ? darkMode.value
              ? <Icon as={IoSunnyOutline} w='1.5rem' h='1.5rem' color='gray' />
              : <Icon as={IoMoonSharp} w='1.5rem' h='1.5rem' color='gray' />
              : null
            }
          </Button>
        </Flex>
        <Textarea
          minH='85px'
          placeholder='I would be extra happy if you could use this field and by doing so allowing me to use your answer anonimously. (max 1500 characters - the form will auto submit once you are done)'
          _placeholder={inputPlaceholderStyles}
          ref={textAreaRef}
          display={showTextArea ? 'block' : 'none'}
          maxLength={1500}
          onChange={onWhatIsSoftwareChange}/>
      </Flex>

      <AlertDialog
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        blockScrollOnMount={false}
        finalFocusRef={feedbackRef}
        size='lg'
      >
        <AlertDialogOverlay />
        <AlertDialogContent m='0 15px' bg='whitesmoke'>
          <AlertDialogHeader>FEEDBACK</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <Feedback chapter={chapter} loggedIn={true} />
          </AlertDialogBody>
          <AlertDialogFooter />
        </AlertDialogContent>
      </AlertDialog>
    </ErrorBoundary>
  )
}

function createContentTOC(contentRef, url, navConfig, TOC, observer) {
  const headings = contentRef?.current?.querySelectorAll('[id]')
  url = url.split('#')[0] // reload after contentTOC navigation would fail otherwise
  const route = url.replace('/book/', '')
  const TOCIndex = navConfig.findIndex(entry => {
    return entry.path === route
  })
  const currentChapter = TOC.current[TOCIndex]?.current
  if (currentChapter) {    
    const fragment = document.createDocumentFragment()
    const ul = document.createElement('ul')
    ul.id = 'toc-content'

    const tocNodes = Array.from(headings).filter((node: HTMLElement) => {
      const notionTitle = node.parentNode.children[2]
      // id check is to skip adding the footer content through the custom page header we add
      // The code assumes I adhere to the pattern that only the first heading (the alt title) contains the '—' character and skips adding that to the DOM
      return !notionTitle || ((node.id !== 'page-header') && !node.textContent?.includes('—'))
    })

    tocNodes.forEach((notionHeading: HTMLElement) => {
      const notionTitle = notionHeading.parentNode.children[2]
      if (notionTitle && notionHeading.id !== 'page-header') { // id check is to skip adding the footer content through the custom page header we add
        // The code assumes I adhere to the pattern that only the first heading (the alt title) contains the '—' character and skips adding that to the DOM
        if (notionTitle.textContent?.includes('—')) return
        const target = document.createElement('div')
        target.setAttribute('style', 'position: relative; top: -250px;')
        notionTitle.parentNode.appendChild(target)
        observer.observe(target)
        currentChapter.actual = true
  
        const title = notionTitle.textContent
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.textContent = title
        a.href = `#${notionHeading.id}`
        // @ts-ignore
        a.onclick = (event: { target: HTMLElement }) => {
          manualContentNavigation = true
          const chapterTOC = currentChapter.children['toc-content']
          const TOCChildrens = Array.from(chapterTOC.children)
          TOCChildrens.forEach((li: HTMLElement) => li.classList.remove('current'))
          ;(event.target.parentNode as HTMLElement).classList.add('current')
        }
        li.appendChild(a)
        ul.appendChild(li)
      }
    })
    fragment.appendChild(ul)
    currentChapter.appendChild(fragment)
  }
}

function createContentHeader(contentRef, customNotionTopBarRef, notionHeaderRef) {
  if (process.browser) {
    if (!(window as unknown as any).headerSet) {
      const notionPage: HTMLElement = contentRef?.current?.querySelector('.notion-page-scroller')
      if (notionPage) { // on root /book it's not there
        const notionHeader = contentRef?.current?.querySelector('.notion-header')
        
        const pageHeader = document.createElement('div')
        pageHeader.id = 'page-header'
        notionHeaderRef.current = pageHeader
    
        if (notionHeader) {
          notionHeader.classList.add('to-reveal')
          notionHeader?.parentNode?.removeChild(notionHeader)
          pageHeader.appendChild(notionHeader)
        }
        
        const headerContent = customNotionTopBarRef?.current
        if (headerContent) {
          headerContent?.parentNode?.removeChild(headerContent)
          pageHeader.classList.add('top-visible')
          pageHeader.appendChild(headerContent)
        }
      
        notionPage.insertBefore(pageHeader, notionPage.firstChild)
        ;(window as unknown as any).headerSet = true
      }
    }
  }
}