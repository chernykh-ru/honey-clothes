import { User } from 'firebase/auth'
import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useReducer,
} from 'react'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils'
import { createAction } from '../utils/reducer/reducer.utils'

export enum ActionCurrentUser {
  SetCurrentUser = 'SET_CURRENT_USER',
}

export interface ActionSetCurrentUser {
  type: ActionCurrentUser.SetCurrentUser
  payload: User | null
}

export type Action = ActionSetCurrentUser
export interface IState {
  currentUser: User | null
}

export interface IUserContext extends IState {
  dispatch: React.Dispatch<Action>
}

const userReducer = (state: IState, action: Action) => {
  const { type, payload } = action

  switch (type) {
    case ActionCurrentUser.SetCurrentUser:
      return {
        ...state,
        currentUser: payload,
      }
    default:
      return state
  }
}

export const UserContext = createContext<IUserContext | null>(null)

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const initialState: IState = {
    currentUser: null,
  }

  const [{ currentUser }, dispatch] = useReducer(userReducer, initialState)

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
        dispatch(createAction(ActionCurrentUser.SetCurrentUser, user))
      }
      if (!user) {
        dispatch(createAction(ActionCurrentUser.SetCurrentUser, null))
      }
    })

    return unsubscribe
  }, [])

  return (
    <UserContext.Provider value={{ currentUser, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}
