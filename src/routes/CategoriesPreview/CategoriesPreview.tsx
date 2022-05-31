import React from 'react'
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview'
import Spinner from '../../components/Spinner/Spinner'
import { useAppSelector } from '../../hooks/redux'

const CategoriesPreview = () => {
  const { categoriesMap } = useAppSelector((state) => state.category)
  const { isLoading } = useAppSelector((state) => state.category)

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        categoriesMap.map((element) => {
          return (
            <CategoryPreview
              key={element.title}
              title={element.title}
              products={element.items}
            />
          )
        })
      )}
    </>
  )
}
export default CategoriesPreview
