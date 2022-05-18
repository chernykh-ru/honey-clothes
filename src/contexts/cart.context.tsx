import React, { createContext, FC, ReactNode, useState } from 'react'

const contextDefaultValue = {
  isCartOpen: false,
  setIsCartOpen: (state: boolean) => {},
}

export const CartContext = createContext(contextDefaultValue)

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(contextDefaultValue.isCartOpen)
  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  )
}
