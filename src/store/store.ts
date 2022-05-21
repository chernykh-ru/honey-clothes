import { configureStore, combineReducers } from '@reduxjs/toolkit'
import CartReducer from '../store/reducers/cartSlice'
import UserReducer from '../store/reducers/userSlice'
import CategoryReducer from '../store/reducers/categorySlice'

const rootReducer = combineReducers({
  cart: CartReducer,
  user: UserReducer,
  category: CategoryReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['user/setCurrentUser'],
          ignoredPaths: ['user.currentUser'],
        },
      }),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
