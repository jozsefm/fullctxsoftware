import { UserContext } from 'contexts/UserProvider'
import setCookies from 'lib/client/cookies'
import { heartbeat } from 'lib/services/sessionClientService'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react' 

const skipPath = ['/code-to-money-roadmap', '/legal', '/blog', '/faq', '/support', '/signup', '/pricing', '/access-link', '/limit']

export default function LocalSession({ children }) {
  const { setLoggedIn, setLoggedOut } = useContext(UserContext)
  const router = useRouter()
  
  useEffect(() => {
    (async () => {
      
      const pulse = window.sessionStorage.getItem('pulse-1') === 'true'
      
      if (!pulse) {
        await setCookies() // stem them always

        const skip = skipPath.reduce((acc, path) => {
          if (acc) {
            return acc
          }
          return router.pathname.startsWith(path)
        }, false)
        
        if (!skip) {
          heartbeat()
            .then(({ loggedIn }) => {
              if (loggedIn !== 'keep') {
                loggedIn === true ? setLoggedIn(true) : setLoggedOut(false, false)
              }
            })
            .finally(() => {
              window.sessionStorage.setItem('pulse-1', 'true')
            })
        }
      }
    })()
  }, [])

  return children
}