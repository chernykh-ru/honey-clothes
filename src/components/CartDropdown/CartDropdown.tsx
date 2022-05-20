import React, { useContext } from 'react'
import Button from '../Button/Button'
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdown.styles'
import CartItem from '../CartItem/CartItem'
import { CartContext, ICartContext } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext) as ICartContext
  const navigate = useNavigate()

  const handleCheckout = () => {
    setIsCartOpen(false)
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
