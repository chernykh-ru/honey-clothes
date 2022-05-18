import React, { Fragment, useContext } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import {
  IProductsContext,
  CategoriesContext,
} from '../../contexts/categories.context'
import { ProductContainer } from './Shop.styles'

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext) as IProductsContext

  return (
    <>
      {categoriesMap.map((element) => (
        <Fragment key={element.title}>
          <h2>{element.title}</h2>
          <ProductContainer>
            {element.items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductContainer>
        </Fragment>
      ))}
    </>
  )
}

export default Shop
