import { createContext, useCallback, useState } from 'react'

const init = {
  view: '',
  reload: false,
  loading: false,
  retry: false,
  currentTeam: { members: [] },
  closeModal: () => {}
}

export const OrganizationContext = createContext(init as any)
export const OrganizationProvider = ({ children }) => {
  const [context, setContext] = useState(init)
  const updateContext = useCallback((oldContext, newContext) => {
    setContext({
      ...oldContext,
      ...newContext
    })
  }, [])

  const storeContext = useCallback((newContext) => {
    setContext({
      ...context,
      ...newContext
    })
  }, [context])
  return (
    <OrganizationContext.Provider value={{ context, updateContext, storeContext }}>
      {children}
    </OrganizationContext.Provider>
  )
}