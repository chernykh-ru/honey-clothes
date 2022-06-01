import { configureStore, combineReducers } from '@reduxjs/toolkit'
import CartReducer from '../store/reducers/cartSlice'
import UserReducer from '../store/reducers/userSlice'
import CategoryReducer, {
  categoriesSaga,
} from '../store/reducers/categorySlice'
import {
  persistReducer,
  persistStore,
  PersistConfig,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import saga from 'redux-saga'
import { all, call } from 'redux-saga/effects'

export function* RootSaga() {
  yield all([call(categoriesSaga)])
}

const sagaMiddleware = saga()

const rootReducer = combineReducers({
  cart: CartReducer,
  user: UserReducer,
  category: CategoryReducer,
})

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[]
}

const persistConfig: ExtendedPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: false,
        serializableCheck: {
          ignoredActions: [
            'user/setCurrentUser',
            FLUSH,
            REHYDRATE,
            PAUSE,
            PERSIST,
            PURGE,
            REGISTER,
          ],
          ignoredPaths: ['user.currentUser'],
        },
      }).concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
  })
}

export const store = setupStore()
export const persistor = persistStore(store)

sagaMiddleware.run(RootSaga)

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
