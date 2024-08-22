import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../services/apis";

const initialState = {
  addresses: {
    isLoading: false,
    data: [],
    isError: false,
  },
  createAddress: {
    isLoading: false,
    data: [],
    isError: false,
  },
  deleteAddress: {
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
    setCreateAddress(state, action) {
      state.createAddress = { ...state.createAddress, data: action.payload };
    },
    setCreateAddressIsLoading(state, action) {
      state.createAddress = {
        ...state.createAddress,
        isLoading: action.payload,
      };
    },
    setCreateAddressIsError(state, action) {
      state.createAddress = {
        ...state.createAddress,
        isError: action.payload,
      };
    },
    setDeleteAddress(state, action) {
      state.deleteAddress = { ...state.deleteAddress, data: action.payload };
    },
    setDeleteAddressIsLoading(state, action) {
      state.deleteAddress = {
        ...state.deleteAddress,
        isLoading: action.payload,
      };
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
      throw error;
    } finally {
      dispatch(slice.actions.setIsLoading(false));
    }
  };
};

export const createAddress = (payload) => {
  return async (dispatch) => {
    try {
      dispatch(slice.actions.setCreateAddressIsLoading(true));
      const response = await api.createAddress(payload);
      dispatch(slice.actions.setAddresses(response.data));
    } catch (error) {
      dispatch(slice.actions.setCreateAddressIsError(true));
      throw error;
    } finally {
      dispatch(slice.actions.setCreateAddressIsLoading(false));
    }
  };
};

export const deleteAddress = (payload) => {
  return async (dispatch) => {
    try {
      await api.deleteAddress(payload);
    } catch (error) {
      throw error;
    }
  };
};

export default slice.reducer;
