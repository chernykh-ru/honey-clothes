import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useAppSelector } from '../../hooks/redux'
import { ICategoryItem } from '../../utils/firebase/firebase.utils'
import { CategoryContainer, Title } from './Category.styles'

type CategoryRouteParams = {
  category: string
}

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams
  const { categoriesMap } = useAppSelector((state) => state.category)
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
