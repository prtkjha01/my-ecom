import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import { api } from "../../services/apis";

const initialState = {
  variable: 0,
  products: [],
};
const slice = createSlice({
  name: "test",
  initialState,
  reducers: {
    changeTestVar(state) {
      state.variable++;
    },
    decrementTestVar(state) {
      state.variable--;
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const testFunction = () => {
  dispatch(slice.actions.changeTestVar());
};
export const testFunction2 = () => {
  dispatch(slice.actions.decrementTestVar());
};
export const getProducts = async () => {
  const response = await api.getProductArray();
  dispatch(slice.actions.setProducts(response.data));
};
export default slice.reducer;
