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

export default slice.reducer;
