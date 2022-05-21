import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
  addItemToCart,
  clearItemFromCart,
  removeItemToCart,
  setCartItems,
} from '../../store/reducers/cartSlice'
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
  const dispatch = useAppDispatch()
  const { cartItems } = useAppSelector((state) => state.cart)

  const increaseItemToCart = () => {
    dispatch(setCartItems(addItemToCart(cartItems, cartItem)))
  }

  const decreaseItemFromCart = () => {
    dispatch(setCartItems(removeItemToCart(cartItems, cartItem)))
  }

  const deleteItemFromCart = () => {
    dispatch(setCartItems(clearItemFromCart(cartItems, cartItem)))
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
