import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import { api } from "../../services/apis";

const initialState = {
  product: {},
  products: []
};
const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct(state, action) {
      state.product = action.payload;
    },
    setProducts(state, action) {
      // console.log(action.payload);
      state.products = action.payload || [];
    },
  },
});
export const getProducts = (payload) => {
  return async (dispatch) => {
    try {

      const response = await api.getProducts(payload, 1, 15)
      dispatch(slice.actions.setProducts(response.data.products));

    } catch (error) {
      console.log(error);
    }
  };
};
export const getProductsByCategory = (payload) => {
  return async (dispatch) => {
    try {

      const response = await api.getProductsByCategory(payload, 1, 15);
      dispatch(slice.actions.setProducts(response.data.products));
    } catch (error) {
      console.log(error);
    }
  };
};
export const getProduct = (payload) => {
  return async (dispatch) => {
    try {

      const response = await api.getProduct(payload);
      await dispatch(slice.actions.setProduct(response.data));
    } catch (error) {
      console.log(error);
    }
  }
}

export default slice.reducer;