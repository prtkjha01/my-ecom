import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import { api } from "../../services/apis";

const initialState = {
  cart: {
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
  },
});
export const getCart = () => {
  return async (dispatch) => {
    try {
      dispatch(slice.actions.setCartLoading(true));
      const response = await api.getCart();
      dispatch(slice.actions.setCart(response.data));
    } catch (error) {
      dispatch(slice.actions.setCartError(true));
      throw error;
    } finally {
      dispatch(slice.actions.setCartLoading(false));
    }
  };
};
export const addToCart = (payload) => {
  return async (dispatch) => {
    try {
      const response = await api.addToCart(payload);
      return response;
    } catch (error) {
      throw error;
    }
  };
};

export const updateProductQuantity = ({ id, count }) => {
  return async (dispatch) => {
    try {
      const response = await api.updateProductQuantity(id, { count });
      return response;
    } catch (error) {
      throw error;
    }
  };
};
export const removeFromCart = (payload) => {
  return async (dispatch) => {
    try {
      const response = await api.removeFromCart(payload);
      return response;
    } catch (error) {
      throw error;
    }
  };
};

export default slice.reducer;
