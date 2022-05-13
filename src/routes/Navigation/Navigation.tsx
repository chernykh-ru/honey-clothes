import React from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as HoneyLogo } from '../../assets/honey.svg'
import { NavigationContainer, LogoContainer } from './Navigation.styles'

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <HoneyLogo />
        </LogoContainer>
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation
