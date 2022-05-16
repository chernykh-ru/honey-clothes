import React, { useEffect } from 'react'
import { getRedirectResult } from 'firebase/auth'
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await getRedirectResult(auth)
        if (response) {
          const userSnapshot = await createUserDocumentFromAuth(response.user)
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log('not auth with redirect', error.message)
        }
      }
    }
    fetchResult()
  }, [])

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    const userSnapshot = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={signInWithGoogle}>Sign In with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button>
    </div>
  )
}

export default SignIn
