import { FC } from 'react'
import { IProducts } from '../../contexts/products.context'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button'

import { ProductCartContainer, Footer, Name, Price } from './ProductCard.styles'

interface IProductCardProps {
  product: IProducts
}

const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const { name, price, imageUrl } = product

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to card</Button>
    </ProductCartContainer>
  )
}

export default ProductCard
