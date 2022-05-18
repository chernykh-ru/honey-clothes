import React, { createContext, FC, ReactNode, useEffect, useState } from 'react'
import { ICategoryItem, TCartItem } from '../components/CartItem/CartItem'

const addCartItem = (cartItems: TCartItem[], productToAdd: ICategoryItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const contextDefaultValue = {
  isCartOpen: false,
  setIsCartOpen: (state: boolean) => {},
  cartItems: [] as TCartItem[],
  addItemToCart: (productToAdd: ICategoryItem) => {},
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
}

export const CartContext = createContext(contextDefaultValue)

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(contextDefaultValue.isCartOpen)
  const [cartItems, setCartItems] = useState(contextDefaultValue.cartItems)
  const [cartTotalQuantity, setCartTotalQuantity] = useState(
    contextDefaultValue.cartTotalQuantity
  )
  const [cartTotalPrice, setCartTotalPrice] = useState(
    contextDefaultValue.cartTotalPrice
  )

  useEffect(() => {
    const totalQuantity = cartItems.reduce(
      (total, cartItem) => cartItem.quantity + total,
      0
    )
    setCartTotalQuantity(totalQuantity)
  }, [cartItems])

  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (total, cartItem) => cartItem.price * cartItem.quantity + total,
      0
    )
    setCartTotalPrice(totalPrice)
  }, [cartItems])

  const addItemToCart = (productToAdd: ICategoryItem) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  return (
    <CartContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartTotalQuantity,
        cartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
