import React from 'react'
import { FooterContainer, LogoContainer } from './Footer.styles'
import { ReactComponent as HoneyLogo } from '../../assets/honey.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      {currentYear === 2022 ? (
        <LogoContainer>
          {currentYear}
          <HoneyLogo />
          <a href='https://chernykh.ru'>chernykh.ru</a>
        </LogoContainer>
      ) : (
        <LogoContainer>
          2022 &#8211; {currentYear}
          <HoneyLogo />
          <a href='https://chernykh.ru'>chernykh.ru</a>
        </LogoContainer>
      )}
    </FooterContainer>
  )
}

export default Footer
