import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import { api } from "../../services/apis";

const initialState = {
  product: {
    isLoading: null,
    hasError: null,
    data: {},
  },
  products: []
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
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});
export const getProducts = (payload) => {
  return async (dispatch) => {
    try {

      const response = await api.getProducts(payload, 1, 5);
      // console.log(response);
      await dispatch(slice.actions.setProducts(response.data.products));
    } catch (error) {
      console.log(error);
    }
  };
};
// export const getProduct = async () => {
//   dispatch(slice.actions.setLoadingForProduct(true));
//   try {
//     const response = await api.getProduct("644e2b862ab04fc66a9de91c");
//     console.log(response);
//     dispatch(slice.actions.setProduct(response.data.data));
//     dispatch(slice.actions.setErrorForProduct(false));
//   } catch (error) {
//     dispatch(slice.actions.setErrorForProduct(true));
//     dispatch(slice.actions.setLoadingForProduct(false));
//   } finally {
//     dispatch(slice.actions.setLoadingForProduct(false));
//   }
// };
export const getProduct = (id) => {
  return (dispatch, getState) => {
    // dispatch({ type: "FETCH_DATA_START" });

    api
      .getProduct(id)
      .then((response) => {
        // dispatch({ type: "FETCH_DATA_SUCCESS", payload: response.data });
        console.log(response);
        dispatch(slice.actions.setProduct(response.data.data));
        dispatch(slice.actions.setErrorForProduct(false));
      })
      .catch((error) => {
        dispatch(slice.actions.setErrorForProduct(true));
        dispatch(slice.actions.setLoadingForProduct(false));
        // dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
      })
      .finally(() => {
        dispatch(slice.actions.setLoadingForProduct(false));
      });
  };
};
export default slice.reducer;