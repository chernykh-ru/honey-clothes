import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping.svg'
import { CartIconContainer, ItemCount } from './CartIcon.styles'

const CartIcon = () => {
  return (
    <CartIconContainer>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{7}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
