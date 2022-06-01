import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  getCategoriesAndDocuments,
  ICategory,
} from '../../utils/firebase/firebase.utils'

import { takeLatest, all, call, put } from 'redux-saga/effects'

export interface ICategoriesState {
  categoriesMap: ICategory[]
  isLoading: boolean
  error: string
}

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray: ICategory[] = yield call(getCategoriesAndDocuments)
    yield put(fetchCategoriesSuccess(categoriesArray))
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchCategoriesFailed(error.message))
    }
  }
}

export function* onFetchCategories() {
  yield takeLatest(fetchCategoriesStart.type, fetchCategoriesAsync)
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)])
}

const initialState: ICategoriesState = {
  categoriesMap: [],
  isLoading: false,
  error: '',
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchCategoriesStart(state) {
      state.isLoading = true
    },
    fetchCategoriesSuccess(state, action: PayloadAction<ICategory[]>) {
      state.isLoading = false
      state.error = ''
      state.categoriesMap = action.payload
    },
    fetchCategoriesFailed(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} = categorySlice.actions
export default categorySlice.reducer
