import { createContext, useCallback, useState } from 'react'

const init = {
  onClick: () => { }
}

export const HeaderContext = createContext(init as any)
export const HeaderProvider = ({ children }) => {
  const [context, setContext] = useState(init)
  const storeContext = useCallback((newContext) => {
    setContext({
      ...context,
      ...newContext
    })
  }, [context])
  return (
    <HeaderContext.Provider value={{ context, storeContext }}>
      {children}
    </HeaderContext.Provider>
  )
}