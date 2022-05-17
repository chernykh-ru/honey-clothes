import React, { useContext } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import {
  IProductsContext,
  ProductsContext,
} from '../../contexts/products.context'
import { ProductContainer } from './Shop.styles'

const Shop = () => {
  const { products } = useContext(ProductsContext) as IProductsContext

  return (
    <>
      <h2>Shop</h2>
      <ProductContainer>
        {products ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <></>
        )}
      </ProductContainer>
    </>
  )
}

export default Shop
