import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  cart: localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")) : [],
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
       localStorage.setItem("cart", JSON.stringify([...state.cart]))
    },
  },
});

export const { productReducer, categoryReducer, cartReducer } = productSlice.actions;

export default productSlice.reducer;
