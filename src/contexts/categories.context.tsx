import React, { createContext, FC, ReactNode, useEffect, useState } from 'react'
import {
  getCategoriesAndDocuments,
  ICategory,
} from '../utils/firebase/firebase.utils'

export interface IProductsContext {
  categoriesMap: ICategory[]
}

export const CategoriesContext = createContext<IProductsContext>({
  categoriesMap: [],
})

export const CategoriesProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [categoriesMap, setCategoriesMap] = useState<ICategory[]>([])

  const value = { categoriesMap }

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap()
  }, [])

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
