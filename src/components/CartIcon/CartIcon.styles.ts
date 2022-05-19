import styled from 'styled-components/macro'

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
  }
  &:hover {
    svg {
      g {
        path {
          fill: #ec8235 !important;
        }
      }
    }
  }
`

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 13px;
  color: #ec8235;
`
