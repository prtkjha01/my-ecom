import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import { api } from "../../services/apis";

const initialState = {
  product: {
    isLoading: null,
    hasError: null,
    data: {},
  },
  //   product: [],
};
const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setLoadingForProduct(state, action) {
      state.product = {
        ...state.product,
        isLoading: action.payload,
      };
    },
    setErrorForProduct(state, action) {
      state.product = {
        ...state.product,
        hasError: action.payload,
      };
    },
    setProduct(state, action) {
      state.product = {
        ...state.product,
        data: action.payload,
      };
    },
  },
});

export const getProduct = async () => {
  dispatch(slice.actions.setLoadingForProduct(true));
  try {
    const response = await api.getProduct("644e2b862ab04fc66a9de91c");
    dispatch(slice.actions.setProduct(response.data.data));
    dispatch(slice.actions.setErrorForProduct(false));
  } catch (error) {
    dispatch(slice.actions.setErrorForProduct(true));
    dispatch(slice.actions.setLoadingForProduct(false));
  } finally {
    dispatch(slice.actions.setLoadingForProduct(false));
  }
};
export default slice.reducer;
