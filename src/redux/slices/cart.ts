import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/apis";
import { AppDispatch } from "../store";

interface CartState {
  cart: {
    isLoading: boolean;
    data: any[];
    isError: boolean;
  };
  addToCart: {
    isLoading: boolean;
    data: any[];
    isError: boolean;
  };
}

const initialState: CartState = {
  cart: {
    isLoading: false,
    data: [],
    isError: false,
  },
  addToCart: {
    isLoading: false,
    data: [],
    isError: false,
  },
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      state.cart = {
        ...state.cart,
        data: action.payload,
      };
    },
    setCartError(state, action) {
      state.cart = {
        ...state.cart,
        isError: action.payload,
      };
    },
    setCartLoading(state, action) {
      state.cart = {
        ...state.cart,
        isLoading: action.payload,
      };
    },
    setAddToCart(state, action) {
      state.addToCart = {
        ...state.addToCart,
        data: action.payload,
      };
    },
    setAddToCartError(state, action) {
      state.addToCart = {
        ...state.addToCart,
        isError: action.payload,
      };
    },
    setAddToCartLoading(state, action) {
      state.addToCart = {
        ...state.addToCart,
        isLoading: action.payload,
      };
    },
  },
});

export default slice.reducer;
