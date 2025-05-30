import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/apis";
import { AppDispatch } from "../store";

interface CartState {
  cart: {
    isLoading: boolean;
    data: any[];
    isError: boolean;
  };
  addToCart: {
    isLoading: boolean;
    data: any[];
    isError: boolean;
  };
}

const initialState: CartState = {
  cart: {
    isLoading: false,
    data: [],
    isError: false,
  },
  addToCart: {
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
    setAddToCart(state, action) {
      state.addToCart = {
        ...state.addToCart,
        data: action.payload,
      };
    },
    setAddToCartError(state, action) {
      state.addToCart = {
        ...state.addToCart,
        isError: action.payload,
      };
    },
    setAddToCartLoading(state, action) {
      state.addToCart = {
        ...state.addToCart,
        isLoading: action.payload,
      };
    },
  },
});

export const getCart = createAsyncThunk(
  "cart/getCart",
  async (_, { dispatch }) => {
    try {
      dispatch(slice.actions.setCartLoading(true));
      const response = await api.getCart();
      dispatch(slice.actions.setCart(response));
      return response;
    } catch (error) {
      dispatch(slice.actions.setCartError(true));
      throw error;
    } finally {
      dispatch(slice.actions.setCartLoading(false));
    }
  }
);

interface CartPayload {
  product_id: string;
  quantity: number;
}

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (payload: CartPayload, { dispatch }) => {
    try {
      dispatch(slice.actions.setAddToCartLoading(true));
      const response = await api.addToCart(payload);
      return response;
    } catch (error) {
      dispatch(slice.actions.setAddToCartError(true));
      throw error;
    } finally {
      dispatch(slice.actions.setAddToCartLoading(false));
    }
  }
);

interface UpdateProductQuantityPayload {
  id: string;
  quantity: number;
}

export const updateProductQuantity = createAsyncThunk(
  "cart/updateProductQuantity",
  async ({ id, quantity }: UpdateProductQuantityPayload) => {
    try {
      const response = await api.updateProductQuantity(id, { quantity });
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (id: string) => {
    try {
      const response = await api.removeFromCart(id);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export default slice.reducer;
