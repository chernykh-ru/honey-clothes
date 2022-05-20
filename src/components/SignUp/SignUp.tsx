import React, { ChangeEvent, FormEvent, useState } from 'react'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'
import Button from '../Button/Button'
import FormInput from '../Input/Input'
import { SignUpContainer } from './SignUp.styles'
import { toast, Bounce } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const navigate = useNavigate()

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error('Passwords do not match', {
        closeButton: false,
        transition: Bounce,
        draggablePercent: 60,
        autoClose: 2000,
      })
      return
    }

    try {
      const userCredential = await createAuthUserWithEmailAndPassword(
        email,
        password
      )
      if (userCredential) {
        const { user } = userCredential
        createUserDocumentFromAuth(user, { displayName })
        resetFormFields()
        toast.success('Welcome to see you', {
          closeButton: false,
          transition: Bounce,
          draggablePercent: 60,
          autoClose: 2000,
        })
        navigate('/')
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error('Something went wrong with registration', {
          closeButton: false,
          transition: Bounce,
          draggablePercent: 60,
          autoClose: 2000,
        })
      }
    }
  }
  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

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

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </SignUpContainer>
  )
}

export default SignUp
