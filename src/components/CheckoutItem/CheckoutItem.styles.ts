import styled from 'styled-components/macro'

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1%;
  min-height: 100px;
  border-bottom: 1px solid #ffb74d;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
`

export const ImageContainer = styled.div`
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`

export const BaseSpan = styled.span``

export const Quantity = styled(BaseSpan)`
  display: flex;
`

export const Arrow = styled.div`
  cursor: pointer;
  &:hover {
    color: #ec8235;
  }
`

export const Value = styled.span`
  margin: 0 10px;
`

export const RemoveButton = styled.div`
  cursor: pointer;
  &:hover {
    color: #ec8235;
  }
`
