import React, { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping.svg'
import { CartContext, ICartContext } from '../../contexts/cart.context'
import { CartIconContainer, ItemCount } from './CartIcon.styles'

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartTotalQuantity } = useContext(
    CartContext
  ) as ICartContext

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen)
  }
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartTotalQuantity > 0 ? cartTotalQuantity : ''}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
