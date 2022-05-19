import React, { Fragment, useContext } from 'react'
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview'
import { CategoriesContext } from '../../contexts/categories.context'

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)

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
