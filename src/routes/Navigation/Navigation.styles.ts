import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 0 7px;
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 10px;
`
export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    color: #ec8235;
  }
`
