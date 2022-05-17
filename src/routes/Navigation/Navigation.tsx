import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as HoneyLogo } from '../../assets/honey.svg'
import CartIcon from '../../components/CartIcon/CartIcon'
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './Navigation.styles'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

const Navigation = () => {
  const {
    state: { currentUser },
  } = useContext(UserContext)

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <HoneyLogo />
        </LogoContainer>

        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN&nbsp;OUT
            </NavLink>
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
