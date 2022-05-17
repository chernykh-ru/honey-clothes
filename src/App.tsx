import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home/Home'
import Navigation from './routes/Navigation/Navigation'
import Auth from './routes/Auth/Auth'
import { NotFound } from './routes/NotFound/NotFound'
import Shop from './routes/Shop/Shop'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='auth' element={<Auth />} />
          <Route path='shop' element={<Shop />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
