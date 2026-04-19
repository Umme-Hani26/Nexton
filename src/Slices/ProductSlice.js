import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const productSlice = createSlice({
  name: 'value',
  initialState,
  reducers: {
    productReducer: (state, action) => {
      state.value = action.payload
    },
      categoryReducer: (state, action) => {
      state.value = action.payload
    },

  },
})


export const { productReducer, categoryReducer } = productSlice.actions

export default productSlice.reducer