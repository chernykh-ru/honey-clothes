import React from 'react'
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview'
import { useAppSelector } from '../../hooks/redux'

const CategoriesPreview = () => {
  const { categoriesMap } = useAppSelector((state) => state.category)

  return (
    <>
      {categoriesMap.map((element) => {
        return (
          <CategoryPreview
            key={element.title}
            title={element.title}
            products={element.items}
          />
        )
      })}
    </>
  )
}
export default CategoriesPreview
