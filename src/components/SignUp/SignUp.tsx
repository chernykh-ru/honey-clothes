import React, { ChangeEvent, FormEvent, useState } from 'react'
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

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
      alert('passwords do not match')
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
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log('Something went wrong with registration', error.message)
      }
    }
  }
  return (
    <div>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <label htmlFor='displayName'>Name</label>
        <input
          type='text'
          required
          name='displayName'
          value={displayName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          required
          name='email'
          value={email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          required
          name='password'
          value={password}
          onChange={handleChange}
        />
        <br />
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input
          type='password'
          required
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
        />
        <br />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
