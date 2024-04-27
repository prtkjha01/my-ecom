import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import { api } from "../../services/apis";

const initialState = {
  product: {},
  products: [],
  carouselProducts: []
};
const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct(state, action) {
      state.product = action.payload;
    },
    setProducts(state, action) {
      state.products = action.payload || [];
    },
    setCarouselProducts(state, action) {
      state.carouselProducts = action.payload || [];
    }
  },
});
export const sortProducts = (products, type) => {
  return async (dispatch) => {
    let sortedProducts = [...products];

    switch (type) {
      case 'PHTL':
        sortedProducts.sort((a, b) => b.price - a.price); // Price High to Low 
        break;
      case 'PLTH':
        sortedProducts.sort((a, b) => a.price - b.price); // Price Low to High
        break;
      case 'RHTL':
        sortedProducts.sort((a, b) => b.rating - a.rating); // Rating High to Low
        break;
      case 'RLTH':
        sortedProducts.sort((a, b) => a.rating - b.rating); // Rating Low to High
        break;
      default:
        break;
    }

    dispatch(slice.actions.setProducts(sortedProducts));
  }

}

export const getCarouselProducts = () => {
  return async (dispatch) => {
    try {
      const response = await api.getCarouselProducts();
      if (response?.data) {
        const carouselData = response.data.map((product, index) => ({
          ...product,
          active: index === 0
        }))
        dispatch(slice.actions.setCarouselProducts(carouselData));
      }
    } catch (error) {
      console.log(error);
    }
  };
}
export const getProducts = (payload, type) => {
  return async (dispatch) => {
    try {

      const response = await api.getProducts(payload, type)

      dispatch(slice.actions.setProducts(response.data.products));

    } catch (error) {
      // console.log(error);
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