import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../services/apis";
import { AppDispatch } from "../store";

interface Address {
  _id: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  [key: string]: any;
}

interface AddressState {
  addresses: {
    isLoading: boolean;
    data: Address[];
    isError: boolean;
  };
  createAddress: {
    isLoading: boolean;
    data: Address[];
    isError: boolean;
  };
  deleteAddress: {
    isLoading: boolean;
    data: Address[];
    isError: boolean;
  };
}

interface CreateAddressPayload {
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
}

const initialState: AddressState = {
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
    setAddresses(state, action: PayloadAction<Address[]>) {
      state.addresses = { ...state.addresses, data: action.payload };
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.addresses = { ...state.addresses, isLoading: action.payload };
    },
    setIsError(state, action: PayloadAction<boolean>) {
      state.addresses = { ...state.addresses, isError: action.payload };
    },
    setCreateAddress(state, action: PayloadAction<Address[]>) {
      state.createAddress = { ...state.createAddress, data: action.payload };
    },
    setCreateAddressIsLoading(state, action: PayloadAction<boolean>) {
      state.createAddress = {
        ...state.createAddress,
        isLoading: action.payload,
      };
    },
    setCreateAddressIsError(state, action: PayloadAction<boolean>) {
      state.createAddress = {
        ...state.createAddress,
        isError: action.payload,
      };
    },
    setDeleteAddress(state, action: PayloadAction<Address[]>) {
      state.deleteAddress = { ...state.deleteAddress, data: action.payload };
    },
    setDeleteAddressIsLoading(state, action: PayloadAction<boolean>) {
      state.deleteAddress = {
        ...state.deleteAddress,
        isLoading: action.payload,
      };
    },
  },
});

export default slice.reducer;
