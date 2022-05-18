import React from 'react'
import Button from '../Button/Button'
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdown.styles'
import DummyData from '../../assets/shop-dummy-data.json'
import CartItem from '../CartItem/CartItem'

const CartDropdown = () => {
  return (
    <CartDropdownContainer>
      <CartItems>
        {DummyData.length ? (
          DummyData.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown
