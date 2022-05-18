import React, { createContext, FC, ReactNode, useEffect, useState } from 'react'
import SHOP_DATA from '../assets/shop-dummy-data'
import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils'

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
  const [products, setProducts] = useState<IProducts[]>(SHOP_DATA[0].items)

  const value = { products }

  useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA)
  }, [])

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
