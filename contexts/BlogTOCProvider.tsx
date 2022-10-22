import { createContext, useCallback, useRef, useState } from 'react'

const init = {
  desktopTocRef: null,
  mobileTocRef: null,
  toggleMobileMenu: () => { },
  closeMobileMenu: () => { },
  showMobileMenu: false
  
}

export const BlogTOCContext = createContext(init)
export const BlogTOCProvider = ({ children }) => {
  const desktopTocRef = useRef(null)
  const mobileTocRef = useRef(null)
  const [ showMobileMenu, setShowMobileMenu ] = useState(false)
  
  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu(!showMobileMenu)
  }, [showMobileMenu])

  const closeMobileMenu = useCallback(() => {
    setShowMobileMenu(false)
  }, [showMobileMenu])


  return (
    <BlogTOCContext.Provider value={{ desktopTocRef, mobileTocRef, toggleMobileMenu, showMobileMenu, closeMobileMenu }}>
      {children}
    </BlogTOCContext.Provider>
  )
}