import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import { api } from "../../services/apis";

const initialState = {
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
    setLoadingForProducts(state, action) {
      state.products = {
        ...state.products,
        isLoading: action.payload,
      };
    },
    setErrorForProducts(state, action) {
      state.products = {
        ...state.products,
        hasError: action.payload,
      };
    },
    setProducts(state, action) {
      state.products = {
        ...state.products,
        data: action.payload,
      };
    },
  },
});

export const getProducts = async () => {
  dispatch(slice.actions.setLoadingForProducts(true));
  try {
    const response = await api.getProductArray();
    dispatch(slice.actions.setProducts(response.data.data));
    dispatch(slice.actions.setErrorForProducts(false));
  } catch (error) {
    dispatch(slice.actions.setErrorForProducts(true));
    dispatch(slice.actions.setLoadingForProducts(false));
  } finally {
    dispatch(slice.actions.setLoadingForProducts(false));
  }
};
export default slice.reducer;
