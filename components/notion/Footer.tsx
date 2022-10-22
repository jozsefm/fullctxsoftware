import { PageProps } from 'lib/notion/types'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'
import NextLink from 'next/link'
import { useContext } from 'react'
import { MobileContext } from 'contexts/MobileProvider'
import { Feedback } from 'components/Feedback'
import { Flex } from '@chakra-ui/react'

const StyledFooter = styled.footer`
  width: var(--notion-max-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 80px;

  @media screen and (min-width: 48em) {
    flex-direction: row;
  }
`

const NavigationBox: any = styled.a`
  padding: ${({ pd }: {pd: string}) => pd};
  border-radius: 10px;
  display: flex;
  border: 2px solid transparent;

  &.next {
    border-color: #aaa;
  }

  .chapter {
    font-size: 1.1rem;

    @media screen and (min-width: 62em) {
      font-size: 1.3rem;
    }
  }

  .nav {
    font-size: 0.8rem;
    color: gray;

    @media screen and (min-width: 62em) {
      font-size: 0.95rem;
    }
  }

  &:hover {
    border-color: #64acff;
    color: #64acff;

    .nav {
      color: #64acff;
    }
  }
`

const onNavigation = (event) => {
  if (!event.keyCode || event.keyCode === 13) {
    window.localStorage.setItem('footerNav', 'true')
  }
}

export const Footer: React.FC<{
  navigation: PageProps["footerData"],
  loggedIn: PageProps["loggedIn"]
}> = ({ navigation, loggedIn }) => {
  const { isMobile } = useContext(MobileContext)
  return (
    <Flex as='footer' direction='column' align='center' justify='center'>
      <Feedback chapter={navigation.current} footer loggedIn={loggedIn} />
      <StyledFooter>
      {navigation?.prev && <NextLink passHref href={navigation.prev.link}>
        <NavigationBox pd={isMobile ? '10px 35px 10px 0' : '10px 20px 10px 10px'} onClick={onNavigation} onKeyPress={onNavigation}>
          <ChevronLeftIcon h='100%' mr='11px' fontSize='2rem'/>
          <div>
            <div className='nav'>{navigation.prev.message || `Read the previous ${navigation.prev.type}`}</div>
            <div className='chapter'>{navigation.prev.title}</div>
          </div>
        </NavigationBox>
      </NextLink>}
      {navigation?.next && <NextLink passHref href={navigation.next.link}>
        <NavigationBox pd={isMobile ? '10px 0 10px 10px' : '10px 10px 10px 20px'} className='next' onClick={onNavigation} onKeyPress={onNavigation}>
          <div>
            <div className='nav'>{navigation.next.message || `Read the next ${navigation.next.type}`}</div>
            <div className='chapter'>{navigation.next.title}</div>
          </div>
          <ChevronRightIcon h='100%' ml='10px' fontSize='2rem'/>
        </NavigationBox>
      </NextLink>}
    </StyledFooter>
    </Flex>
  )
}