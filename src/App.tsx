import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home/Home'
import Navigation from './routes/Navigation/Navigation'
import SignIn from './components/SignIn/SignIn'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='auth' element={<SignIn />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
