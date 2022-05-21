import { createSlice } from '@reduxjs/toolkit'
import { ICategory } from '../../utils/firebase/firebase.utils'

export interface ICategoriesState {
  categoriesMap: ICategory[]
}

const initialState: ICategoriesState = {
  categoriesMap: [],
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoriesMap(state, action) {
      state.categoriesMap = action.payload
    },
  },
})

export const { setCategoriesMap } = categorySlice.actions
export default categorySlice.reducer
