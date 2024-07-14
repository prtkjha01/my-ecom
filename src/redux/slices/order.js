import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../services/apis";

const initialState = {
  orders: {
    isLoading: false,
    data: [],
    isError: false,
  },
};
const slice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = { ...state.orders, data: action.payload };
    },
    setOrdersLoading: (state, action) => {
      state.orders = { ...state.orders, isLoading: action.payload };
    },
    setOrdersError: (state, action) => {
      state.orders = { ...state.orders, isError: action.payload };
    },
  },
});
export const placeOrder = (payload) => {
  return async (dispatch) => {
    try {
      const response = await api.placeOrder(payload);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };
};

/**
 * Retrieves all orders from the API and dispatches the setOrders action with the response data.
 *
 * @param {function} dispatch - The Redux dispatch function.
 * @return {Promise<void>} - A promise that resolves when the orders are retrieved and dispatched.
 */
export const getOrders = () => {
  return async (dispatch) => {
    dispatch(slice.actions.setOrdersLoading(true));
    try {
      const response = await api.getAllOrders();
      if (response?.data) {
        dispatch(slice.actions.setOrders(response.data));
      }
    } catch (error) {
      dispatch(slice.actions.setOrdersError(true));
    } finally {
      dispatch(slice.actions.setOrdersLoading(false));
    }
  };
};

export default slice.reducer;
