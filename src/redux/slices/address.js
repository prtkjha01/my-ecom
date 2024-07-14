import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import { api } from "../../services/apis";

const initialState = {
  addresses: {
    isLoading: false,
    data: [],
    isError: false,
  },
};
const slice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddresses(state, action) {
      state.addresses = { ...state.addresses, data: action.payload };
    },
    setIsLoading(state, action) {
      state.addresses = { ...state.addresses, isLoading: action.payload };
    },
    setIsError(state, action) {
      state.addresses = { ...state.addresses, isError: action.payload };
    },
  },
});
export const getAddresses = () => {
  return async (dispatch) => {
    try {
      dispatch(slice.actions.setIsLoading(true));
      const response = await api.getAddresses();

      dispatch(slice.actions.setAddresses(response.data));
    } catch (error) {
      dispatch(slice.actions.setIsError(true));
    } finally {
      dispatch(slice.actions.setIsLoading(false));
    }
  };
};

export const createAddress = (payload) => {
  return async (dispatch) => {
    try {
      const response = await api.createAddress(payload);
      dispatch(slice.actions.setAddresses(response.data));
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const deleteAddress = (payload) => {
  return async (dispatch) => {
    try {
      await api.deleteAddress(payload);
    } catch (error) {
      throw new Error(error);
    }
  };
};

export default slice.reducer;
