import styled from 'styled-components/macro'

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 30px;
  @media (max-width: 1020px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
`

export const Title = styled.h2`
  font-size: 34px;
  letter-spacing: 1.2rem;
  margin-top: 30px;
  margin-bottom: 25px;
  text-align: center;
`
