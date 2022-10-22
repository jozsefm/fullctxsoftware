import { createContext, useState } from 'react'

const init = {
  bgView: 'generic',
  setBgView: (() => {}) as any
}

export const BackgroundContext = createContext(init)
export const BackgroundProvider = ({ children }) => {
  const [bgView, setBgView] = useState(init.bgView)
  return (
    <BackgroundContext.Provider value={{ bgView, setBgView }}>
      {children}
    </BackgroundContext.Provider>
  )
}