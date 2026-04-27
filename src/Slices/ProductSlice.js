import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  cart: [],
};

export const productSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    productReducer: (state, action) => {
      state.value = action.payload;
    },
    categoryReducer: (state, action) => {
      state.value = action.payload;
    },
    cartReducer: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

export const { productReducer, categoryReducer, cartReducer } = productSlice.actions;

export default productSlice.reducer;
