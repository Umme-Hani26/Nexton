import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
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
      localStorage.setItem("cart", JSON.stringify([...state.cart]));
    },
    removeReducer: (state, action) => {
      state.cart = [...state.cart.filter((item) => item.id !== action.payload)];
      localStorage.setItem("cart", JSON.stringify([...state.cart]));
    },
    incrementReducer: (state, action) => {
      state.cart = state.cart.map((item) => {
        return item.id === action.payload
          ? { ...item, Quantity: item.Quantity + 1 }
          : item;
      });
    },
    decrementReducer: (state, action) => {
      state.cart = state.cart.map((item) => {
        return item.id === action.payload
          ? { ...item, Quantity: item.Quantity >1? item.Quantity - 1:1 }
          : item;
      });
    },
  },
});

export const {
  productReducer,
  categoryReducer,
  cartReducer,
  removeReducer,
  incrementReducer,
  decrementReducer,
} = productSlice.actions;

export default productSlice.reducer;
