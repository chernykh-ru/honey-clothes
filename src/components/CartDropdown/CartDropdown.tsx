import React from 'react'
import Button from '../Button/Button'
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdown.styles'
import CartItem from '../CartItem/CartItem'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { toggleCartOpen } from '../../store/reducers/cartSlice'

const CartDropdown = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { cartItems } = useAppSelector((state) => state.cart)

  const handleCheckout = () => {
    dispatch(toggleCartOpen())
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={handleCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown
