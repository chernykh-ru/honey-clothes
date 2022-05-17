import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  @media (max-width: 1020px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 40px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 40px;
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }
`
