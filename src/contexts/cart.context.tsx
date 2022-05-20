import React, { createContext, FC, ReactNode, useReducer } from 'react'
import { ICategoryItem, TCartItem } from '../components/CartItem/CartItem'
import { createAction } from '../utils/reducer/reducer.utils'

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

const removeCartItem = (
  cartItems: TCartItem[],
  productToRemove: ICategoryItem
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  )

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

const clearCartItem = (
  cartItems: TCartItem[],
  productToClear: ICategoryItem
) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id)
}

export enum ActionCart {
  ToggleCartCheckout = 'TOGGLE_CART_CHECKOUT',
  SetCartItems = 'SET_CART_ITEMS',
}

export interface ActionToggleCart {
  type: ActionCart.ToggleCartCheckout
}
export interface ActionSetCartItems {
  type: ActionCart.SetCartItems
  payload: {
    cartItems: TCartItem[]
    cartTotalQuantity: number
    cartTotalPrice: number
  }
}

export type Action = ActionToggleCart | ActionSetCartItems

export interface IState {
  isCartOpen: boolean
  cartItems: TCartItem[]
  cartTotalQuantity: number
  cartTotalPrice: number
}

export interface ICartContext extends IState {
  dispatch: React.Dispatch<Action>
  setIsCartOpen: (state: boolean) => void
  addItemToCart: (productToAdd: ICategoryItem) => void
  removeItemToCart: (productToRemove: ICategoryItem) => void
  clearItemFromCart: (productToClear: ICategoryItem) => void
}

const cartReducer = (state: IState, action: Action) => {
  switch (action.type) {
    case ActionCart.ToggleCartCheckout:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      }
    case ActionCart.SetCartItems:
      return {
        ...state,
        cartItems: action.payload.cartItems,
        cartTotalPrice: action.payload.cartTotalPrice,
        cartTotalQuantity: action.payload.cartTotalQuantity,
      }
    default:
      return state
  }
}

export const CartContext = createContext<ICartContext | null>(null)

export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const initialState: IState = {
    isCartOpen: false,
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalPrice: 0,
  }

  const [
    { isCartOpen, cartItems, cartTotalPrice, cartTotalQuantity },
    dispatch,
  ] = useReducer(cartReducer, initialState)

  const updateCartItemsReducer = (cartItems: TCartItem[]) => {
    const totalQuantity = cartItems.reduce(
      (total: number, cartItem: TCartItem) => cartItem.quantity + total,
      0
    )

    const totalPrice = cartItems.reduce(
      (total: number, cartItem: TCartItem) =>
        cartItem.price * cartItem.quantity + total,
      0
    )

    const payload = {
      cartItems,
      cartTotalQuantity: totalQuantity,
      cartTotalPrice: totalPrice,
    }

    dispatch(createAction(ActionCart.SetCartItems, payload))
  }

  const setIsCartOpen = () => {
    dispatch(createAction(ActionCart.ToggleCartCheckout))
  }

  const addItemToCart = (productToAdd: ICategoryItem) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems)
  }

  const removeItemToCart = (productToRemove: ICategoryItem) => {
    const newCartItems = removeCartItem(cartItems, productToRemove)
    updateCartItemsReducer(newCartItems)
  }

  const clearItemFromCart = (productToClear: ICategoryItem) => {
    const newCartItems = clearCartItem(cartItems, productToClear)
    updateCartItemsReducer(newCartItems)
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
        removeItemToCart,
        clearItemFromCart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
