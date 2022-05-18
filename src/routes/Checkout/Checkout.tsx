import React, { useContext } from 'react'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import { CartContext } from '../../contexts/cart.context'
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './Checkout.styles'

const Checkout = () => {
  const { cartItems, cartTotalPrice } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>
        Total: &#8381;
        {cartTotalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </Total>
      {/* PAYMENT */}
    </CheckoutContainer>
  )
}

export default Checkout
