import { User } from 'firebase/auth'
import React, { createContext, FC, ReactNode, useEffect, useState } from 'react'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils'

type ContextState = { currentUser: User | null }

const contextDefaultValue = {
  state: { currentUser: null } as {
    currentUser: User | null
  },
  setState: (state: ContextState) => {},
}

export const UserContext = createContext(contextDefaultValue)

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // TODO
  // Consider to replace useState by useReducer and pass
  // the dispatch function down to components.
  // This will provide better encapsulation,
  // as the state manipulation logic is now centralized in a pure reducer
  // and child components cannot manipulate it directly anymore via setState.
  const [state, setState] = useState(contextDefaultValue.state)

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      setState({ currentUser: user })
    })

    return unsubscribe
  }, [])

  return (
    <UserContext.Provider value={{ state, setState }}>
      {children}
    </UserContext.Provider>
  )
}
