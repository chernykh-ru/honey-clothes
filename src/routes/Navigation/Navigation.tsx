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
import { IUserContext, UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartDropdown from '../../components/CartDropdown/CartDropdown'
import { CartContext } from '../../contexts/cart.context'

const Navigation = () => {
  const { currentUser } = useContext(UserContext) as IUserContext

  const { isCartOpen } = useContext(CartContext)

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
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation
