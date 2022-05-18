import React, { FC } from 'react'
import { CartItemContainer, ItemDetails } from './CartItem.styles'

export interface ICategoryItem {
  id: number
  imageUrl: string
  name: string
  price: number
}

export type TCartItem = ICategoryItem & {
  quantity?: number
}

export interface ICartItemProps {
  cartItem: TCartItem
}

const CartItem: FC<ICartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity = 1 } = cartItem
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem
