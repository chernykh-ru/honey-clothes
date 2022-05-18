import React, { FC } from 'react'
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

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
