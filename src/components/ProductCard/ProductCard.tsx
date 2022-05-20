import { FC, useContext } from 'react'
import { CartContext, ICartContext } from '../../contexts/cart.context'
import { ICategoryItem } from '../../utils/firebase/firebase.utils'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button'
import { toast, Flip } from 'react-toastify'

import { ProductCartContainer, Footer, Name, Price } from './ProductCard.styles'

interface IProductCardProps {
  product: ICategoryItem
}

const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product

  const { addItemToCart } = useContext(CartContext) as ICartContext

  const addProductToCart = () => {
    addItemToCart(product)
    toast.success('Product added to cart', {
      closeButton: false,
      transition: Flip,
      draggablePercent: 60,
      toastId: 'Product added to cart',
    })
  }

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>&#8381;{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  )
}

export default ProductCard
