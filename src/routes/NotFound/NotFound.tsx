import React, { FC } from 'react'
import Button, { BUTTON_TYPE_CLASSES } from '../../components/Button/Button'
import { ButtonContainer, NotFoundContainer } from './NotFound.styles'

export const NotFound: FC = () => {
  return (
    <NotFoundContainer>
      <h1>Oops!</h1>
      <p>404 - Page Not Found!</p>
      <ButtonContainer to='/'>
        <Button buttonType={BUTTON_TYPE_CLASSES.base} type='button'>
          Back To Home
        </Button>
      </ButtonContainer>
    </NotFoundContainer>
  )
}
