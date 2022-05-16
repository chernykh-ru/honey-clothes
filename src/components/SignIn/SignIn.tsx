import React from 'react'
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    const userSnapshot = await createUserDocumentFromAuth(user)
  }
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={signInWithGoogle}>Sign In with Google Popup</button>
    </div>
  )
}

export default SignIn
