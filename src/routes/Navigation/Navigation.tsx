import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { ReactComponent as HoneyLogo } from '../../assets/honey.svg'
import CartIcon from '../../components/CartIcon/CartIcon'
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from './Navigation.styles'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  signOutUser,
} from '../../utils/firebase/firebase.utils'
import CartDropdown from '../../components/CartDropdown/CartDropdown'
import Footer from '../Footer/Footer'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setCurrentUser } from '../../store/reducers/userSlice'
import { fetchCategories } from '../../store/reducers/categorySlice'

const Navigation = () => {
  const { currentUser } = useAppSelector((state) => state.user)
  const { isCartOpen } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
        dispatch(setCurrentUser(user))
      }
      if (!user) {
        dispatch(setCurrentUser(null))
      }
    })

    return unsubscribe
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

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
      <Footer />
    </>
  )
}

export default Navigation
