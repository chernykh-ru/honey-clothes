import { createSlice } from '@reduxjs/toolkit'
import { ICategoryItem, TCartItem } from '../../components/CartItem/CartItem'

export interface ICartState {
  isCartOpen: boolean
  cartItems: TCartItem[]
  cartTotalQuantity: number
  cartTotalPrice: number
}

const initialState: ICartState = {
  isCartOpen: false,
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
}

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

  return payload
}

export const addItemToCart = (
  cartItems: TCartItem[],
  productToAdd: ICategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd)
  return updateCartItemsReducer(newCartItems)
}

export const removeItemToCart = (
  cartItems: TCartItem[],
  productToRemove: ICategoryItem
) => {
  const newCartItems = removeCartItem(cartItems, productToRemove)
  return updateCartItemsReducer(newCartItems)
}

export const clearItemFromCart = (
  cartItems: TCartItem[],
  productToClear: ICategoryItem
) => {
  const newCartItems = clearCartItem(cartItems, productToClear)
  return updateCartItemsReducer(newCartItems)
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartOpen(state) {
      state.isCartOpen = !state.isCartOpen
    },
    setCartItems(state, action) {
      state.cartItems = action.payload.cartItems
      state.cartTotalPrice = action.payload.cartTotalPrice
      state.cartTotalQuantity = action.payload.cartTotalQuantity
    },
  },
})

export const { toggleCartOpen, setCartItems } = cartSlice.actions
export default cartSlice.reducer
