import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import {
  getCategoriesAndDocuments,
  ICategory,
} from '../../utils/firebase/firebase.utils'

export interface ICategoriesState {
  categoriesMap: ICategory[]
  isLoading: boolean
  error: string
}

const initialState: ICategoriesState = {
  categoriesMap: [],
  isLoading: false,
  error: '',
}

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(fetchCategoriesStart())
      const categoryMap = await getCategoriesAndDocuments()
      dispatch(fetchCategoriesSuccess(categoryMap))
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchCategoriesFailed(error.message))
        return rejectWithValue(error.message)
      }
    }
  }
)

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
  // Usage pattern extraReducers with builder

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchCategories.pending, (state) => {
  //       state.isLoading = true
  //     })
  //     .addCase(
  //       fetchCategories.fulfilled,
  //       (state, action: PayloadAction<any, string>) => {
  //         state.isLoading = false
  //         state.error = ''
  //         state.categoriesMap = action.payload
  //       }
  //     )
  //     .addCase(
  //       fetchCategories.rejected,
  //       (state, action: PayloadAction<any, string>) => {
  //         state.isLoading = false
  //         state.error = action.payload
  //       }
  //     )
  // },
})

export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} = categorySlice.actions
export default categorySlice.reducer
