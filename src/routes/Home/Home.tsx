import React from 'react'
import { Outlet } from 'react-router-dom'
import Category from '../../components/Category/Category'

const Home = () => {
  return (
    <div>
      <Category />
      <Outlet />
    </div>
  )
}

export default Home
