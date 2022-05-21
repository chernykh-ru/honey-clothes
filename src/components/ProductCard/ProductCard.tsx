import { FC } from 'react'
import { ICategoryItem } from '../../utils/firebase/firebase.utils'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button'
import { toast, Flip } from 'react-toastify'
import { ProductCartContainer, Footer, Name, Price } from './ProductCard.styles'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { addItemToCart, setCartItems } from '../../store/reducers/cartSlice'

interface IProductCardProps {
  product: ICategoryItem
}

const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product
  const dispatch = useAppDispatch()
  const { cartItems } = useAppSelector((state) => state.cart)

  const addProductToCart = () => {
    dispatch(setCartItems(addItemToCart(cartItems, product)))
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
