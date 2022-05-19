import styled from 'styled-components/macro'

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: 90%;
    object-fit: cover;
    margin-bottom: 5px;
  }
  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    bottom: 55px;
    display: none;
  }
  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`

export const Footer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

export const Name = styled.span`
  max-width: 65%;
  margin-bottom: 15px;
`

export const Price = styled.span`
  max-width: 35%;
`
