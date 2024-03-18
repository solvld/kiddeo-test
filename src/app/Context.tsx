import React, { ReactNode, useState } from 'react'

export const Context = React.createContext()

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <Context.Provider value={{ isActive, setIsActive }}>
      {children}
    </Context.Provider>
  )
}
