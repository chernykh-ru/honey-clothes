import styled from 'styled-components/macro'

export const AuthContainer = styled.div`
  display: flex;
  max-width: 900px;
  justify-content: space-between;
  margin: 30px auto 50px;
  @media (max-width: 860px) {
    max-width: 420px;
    flex-direction: column;
    gap: 50px;
  }
`
