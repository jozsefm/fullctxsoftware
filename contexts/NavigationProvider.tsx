import { createContext, useState } from 'react'

const init = {
  isNavigating: false,
  setIsNavigating: null
}

// This context is necessary because the navigation bar often should change it's size during navigation
// because of the different scroll position. If we don't remove the transition css property it will go
// through the animation which is not a good UX when changing pages. 
// This can't be stored in the Header as it was previously because that gets unmounted but the
// timeout logic controlling this update would like to set the state of an unmounted component
// leading to React errors. This Context eliminates that problem.
export const NavigationContext = createContext(init)
export const NavigationProvider = ({ children }) => {
  const [ isNavigating, setIsNavigating ] = useState(false)
  
  return (
    <NavigationContext.Provider value={{ isNavigating, setIsNavigating }}>
      {children}
    </NavigationContext.Provider>
  )
}