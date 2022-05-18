import React, { FC, useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { TCartItem } from '../CartItem/CartItem'
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from './CheckoutItem.styles'

type CheckoutItemProps = {
  cartItem: TCartItem
}

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem

  const { addItemToCart, removeItemToCart, clearItemFromCart } =
    useContext(CartContext)

  const increaseItemToCart = () => {
    addItemToCart(cartItem)
  }

  const decreaseItemFromCart = () => {
    removeItemToCart(cartItem)
  }

  const deleteItemFromCart = () => {
    clearItemFromCart(cartItem)
  }

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={decreaseItemFromCart}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increaseItemToCart}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={deleteItemFromCart}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
