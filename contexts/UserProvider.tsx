import { createContext, useCallback, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getStoredLoginStatus, setupLoginTracking, storeLoginStatus } from 'lib/client/localStorage'

const init = {
  loggedIn: false
}

export const UserContext = createContext(init as any)
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(init)
  const [inProgress, setInProgress] = useState(false)
  const router = useRouter()

  const setLoggedIn = useCallback((status, skip) => {
    setUser({ loggedIn: status })

    if (!skip && process.browser) {
      storeLoginStatus(true)
    }
  }, [])

  const setLoggedOut = useCallback((skip, navigate = true) => {
    setUser({...init})

    if (!skip && process.browser) {
      storeLoginStatus(false)
    }
    navigate && router.push('/')

    window.dispatchEvent(new CustomEvent('logout'))
  }, [router])

  const setLoginInProgress = useCallback((inProgress) => {
    setInProgress(inProgress)
  }, [])

  useEffect(() => {
    if (process.browser) {
      const loggedin = getStoredLoginStatus()
      if (loggedin) {
        setUser({ loggedIn: true })
      } else {
        if (user.loggedIn) {
          setUser({ loggedIn: false })
        }
      }

      setupLoginTracking(setUser)
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setLoggedIn, setLoggedOut, inProgress, setLoginInProgress }}>
      {children}
    </UserContext.Provider>
  )
}