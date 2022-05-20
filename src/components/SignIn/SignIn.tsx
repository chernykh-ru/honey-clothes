import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button'
import FormInput from '../Input/Input'
import { ButtonsContainer, SignInContainer } from './SignIn.styles'
import { toast, Bounce } from 'react-toastify'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const navigate = useNavigate()

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
    toast.success('Happy to have you back', {
      closeButton: false,
      transition: Bounce,
      draggablePercent: 60,
      autoClose: 2000,
    })
    navigate('/')
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      await signInAuthUserWithEmailAndPassword(email, password)
      resetFormFields()
      toast.success('Happy to have you back', {
        closeButton: false,
        transition: Bounce,
        draggablePercent: 60,
        autoClose: 2000,
      })
      navigate('/')
    } catch (error) {
      if (error instanceof Error) {
        toast.error('Bad User Credentials', {
          closeButton: false,
          transition: Bounce,
          draggablePercent: 60,
          autoClose: 2000,
        })
      }
    }
  }

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}

export default SignIn
