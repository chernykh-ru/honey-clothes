import React, { FC } from 'react'
import { ICategory } from '../../types/types'
import {
  BackgroundImage,
  Body,
  CategoryItemContainer,
} from './CategoryItem.styles'

interface ICategoryItemProps {
  category: ICategory
}

const CategoryItem: FC<ICategoryItemProps> = ({ category }) => {
  const { imageUrl, title } = category

  return (
    <CategoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
      </Body>
    </CategoryItemContainer>
  )
}

export default CategoryItem
