import { FC } from 'react'

import ProductCard from '../ProductCard/ProductCard'
import {
  CategoryPreviewContainer,
  Preview,
  Title,
  TitleContainer,
} from './CategoryPreview.styles'

export type CategoryItem = {
  id: number
  imageUrl: string
  name: string
  price: number
}

type CategoryPreviewProps = {
  title: string
  products: CategoryItem[]
}

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <TitleContainer>
        <h2>
          <Title to={title}>{title.toUpperCase()}</Title>
        </h2>
      </TitleContainer>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview
