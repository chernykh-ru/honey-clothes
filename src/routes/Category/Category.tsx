import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import {
  CategoriesContext,
  IProductsContext,
} from '../../contexts/categories.context'
import { ICategoryItem } from '../../utils/firebase/firebase.utils'
import { CategoryContainer, Title } from './Category.styles'

type CategoryRouteParams = {
  category: string
}

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams
  const { categoriesMap } = useContext(CategoriesContext) as IProductsContext
  const [products, setProducts] = useState<ICategoryItem[]>([])

  useEffect(() => {
    const items = categoriesMap.find((el) => el.title === category)
    if (items) {
      setProducts(items.items)
    }
  }, [category, categoriesMap])

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <></>
        )}
      </CategoryContainer>
    </>
  )
}

export default Category
