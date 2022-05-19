import styled from 'styled-components/macro'

export const CheckoutContainer = styled.div`
  max-width: 90%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`

export const CheckoutHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1%;
  min-height: 100px;
  border-bottom: 1px solid #ffb74d;
  padding: 15px 0;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
`

export const HeaderBlock = styled.div`
  text-transform: capitalize;
`

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`

export const Empty = styled.span`
  margin-top: 36px;
  margin-left: auto;
  font-size: 18px;
`
