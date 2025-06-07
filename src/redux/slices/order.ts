import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../services/apis";
import { AppDispatch } from "../store";

interface Order {
  [key: string]: any;
}

interface OrderState {
  orders: {
    isLoading: boolean;
    data: Order[];
    isError: boolean;
  };
}

interface OrderPayload {
  address_id: string;
  payment_method: string;
}

const initialState: OrderState = {
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
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = { ...state.orders, data: action.payload };
    },
    setOrdersLoading: (state, action: PayloadAction<boolean>) => {
      state.orders = { ...state.orders, isLoading: action.payload };
    },
    setOrdersError: (state, action: PayloadAction<boolean>) => {
      state.orders = { ...state.orders, isError: action.payload };
    },
  },
});

export const placeOrder = (payload: OrderPayload) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await api.placeOrder(payload);
      return response;
    } catch (error) {
      throw error;
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
  return async (dispatch: AppDispatch) => {
    dispatch(slice.actions.setOrdersLoading(true));
    try {
      const response = await api.getAllOrders();
      if (response?.data) {
        dispatch(slice.actions.setOrders(response.data));
      }
    } catch (error) {
      dispatch(slice.actions.setOrdersError(true));
      throw error;
    } finally {
      dispatch(slice.actions.setOrdersLoading(false));
    }
  };
};

export default slice.reducer;
