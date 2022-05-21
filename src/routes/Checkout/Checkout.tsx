import React from 'react'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import { useAppSelector } from '../../hooks/redux'
import {
  CheckoutContainer,
  CheckoutHeader,
  Empty,
  HeaderBlock,
  Total,
} from './Checkout.styles'

const Checkout = () => {
  const { cartItems, cartTotalPrice } = useAppSelector((state) => state.cart)
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
      {cartTotalPrice > 0 ? (
        <Total>
          Total: &#8381;
          {cartTotalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Total>
      ) : (
        <Empty>Your cart is empty</Empty>
      )}
      {/* PAYMENT */}
    </CheckoutContainer>
  )
}

export default Checkout
