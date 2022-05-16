import React from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as HoneyLogo } from '../../assets/honey.svg'
import CartIcon from '../../components/CartIcon/CartIcon'
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './Navigation.styles'

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <HoneyLogo />
        </LogoContainer>

        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {false ? (
            <NavLink as='span'>SIGN&nbsp;OUT</NavLink>
          ) : (
            <NavLink to='/auth'>SIGN&nbsp;IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation
