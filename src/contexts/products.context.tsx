import React, { createContext, FC, ReactNode, useState } from 'react'
import PRODUCTS from '../assets/shop-dummy-data.json'

export interface IProducts {
  id: number
  name: string
  imageUrl: string
  price: number
}

export interface IProductsContext {
  products: IProducts[]
}

export const ProductsContext = createContext<IProductsContext>({ products: [] })

export const ProductsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<IProducts[]>(PRODUCTS)

  const value = { products }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
