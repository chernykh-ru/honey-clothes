import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const NotFoundContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
  p {
    margin-bottom: 50px;
  }
`

export const ButtonContainer = styled(Link)`
  display: flex;
  justify-content: center;
`
