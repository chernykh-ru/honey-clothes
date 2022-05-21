import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping.svg'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { toggleCartOpen } from '../../store/reducers/cartSlice'
import { CartIconContainer, ItemCount } from './CartIcon.styles'

const CartIcon = () => {
  const dispatch = useAppDispatch()
  const { cartTotalQuantity } = useAppSelector((state) => state.cart)

  const toggleIsCartOpen = () => {
    dispatch(toggleCartOpen())
  }
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartTotalQuantity > 0 ? cartTotalQuantity : ''}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
