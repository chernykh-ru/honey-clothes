import React from 'react'
import { ICategoryWithRoute } from '../../types/types'
import CategoryItem from '../CategoryItem/CategoryItem'
import { CategoryContainer } from './Category.styles'

const categories: ICategoryWithRoute[] = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://i.ibb.co/jb8N2V0/hats.png',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/tbxcLJJ/jackets.png',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/MgyH3YK/sneakers.png',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://i.ibb.co/pPY6GGV/womens.png',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://i.ibb.co/SvpRYzB/men.png',
    route: 'shop/mens',
  },
]

const Category = () => {
  return (
    <CategoryContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoryContainer>
  )
}

export default Category
