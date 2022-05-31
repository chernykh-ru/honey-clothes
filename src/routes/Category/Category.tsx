import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import Spinner from '../../components/Spinner/Spinner'
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
  const { isLoading } = useAppSelector((state) => state.category)
  const [products, setProducts] = useState<ICategoryItem[]>([])

  useEffect(() => {
    const categories = categoriesMap.find((el) => el.title === category)
    if (categories) {
      setProducts(categories.items)
    }
  }, [category, categoriesMap])

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : products.length > 0 ? (
        <CategoryContainer>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </CategoryContainer>
      ) : (
        <Spinner />
      )}
    </>
  )
}

export default Category
