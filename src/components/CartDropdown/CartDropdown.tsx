import React, { useContext } from 'react'
import Button from '../Button/Button'
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdown.styles'
import CartItem from '../CartItem/CartItem'
import { CartContext } from '../../contexts/cart.context'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown
