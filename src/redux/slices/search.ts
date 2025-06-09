import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import { api } from "../../services/apis";

interface Product {
  [key: string]: any;
}

interface SearchState {
  products: {
    isLoading: boolean | null;
    hasError: boolean | null;
    data: Product;
  };
}

interface ProductSearchPayload {
  query: string;
  min_price?: number;
  max_price?: number;
  min_discount?: number;
  max_discount?: number;
  is_assured?: boolean;
}

const initialState: SearchState = {
  products: {
    isLoading: null,
    hasError: null,
    data: {},
  },
};

const slice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setLoadingForProducts(state, action: PayloadAction<boolean>) {
      state.products = {
        ...state.products,
        isLoading: action.payload,
      };
    },
    setErrorForProducts(state, action: PayloadAction<boolean>) {
      state.products = {
        ...state.products,
        hasError: action.payload,
      };
    },
    setProducts(state, action: PayloadAction<Product>) {
      state.products = {
        ...state.products,
        data: action.payload,
      };
    },
  },
});

export default slice.reducer;
