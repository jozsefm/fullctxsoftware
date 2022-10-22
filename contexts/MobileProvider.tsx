import { useBreakpointValue } from '@chakra-ui/media-query'
import { createContext } from 'react'

const init = {
  isBase: undefined,
  isMobile: undefined,
  isMedium: undefined,
  isLarge: undefined
}

export const MobileContext = createContext(init)
export const MobileProvider = ({ children }) => {
  const isBase: boolean = useBreakpointValue({ base: true, sm: false, md: false })
  const isMobile: boolean = useBreakpointValue({ base: true, sm: true, md: false })
  const isMedium: boolean = useBreakpointValue({ base: false, md: true, lg: false })
  const isLarge: boolean = useBreakpointValue({ base: false, lg: true })
  
  return (
    <MobileContext.Provider value={{ isBase, isMobile, isMedium, isLarge }}>
      {children}
    </MobileContext.Provider>
  )
}