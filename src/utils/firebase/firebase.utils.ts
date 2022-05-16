import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  User,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  QueryDocumentSnapshot,
} from 'firebase/firestore'
import { IUserData } from '../../types/types'

const firebaseConfig = {
  apiKey: 'AIzaSyAlOsuiptR_3anhJ7kEPbATwJcSH8itkp0',
  authDomain: 'honey-clothes.firebaseapp.com',
  projectId: 'honey-clothes',
  storageBucket: 'honey-clothes.appspot.com',
  messagingSenderId: '283959256027',
  appId: '1:283959256027:web:1c14831b83f876b653bdfe',
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

export type AdditionalInformation = {
  displayName?: string
}

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<IUserData>> => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      })
    } catch (error) {
      if (error instanceof Error) {
        console.log('error creating the user', error.message)
      }
    }
  }

  return userSnapshot as QueryDocumentSnapshot<IUserData>
}

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}
