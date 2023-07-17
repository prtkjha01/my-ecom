import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
// import axios from "axios";
import { api } from "../../services/apis";

// let instance = axios.create({
//   baseURL: "http://localhost:3000/",
// });
const initialState = {
  variable: 0,
  products: [],
};
const slice = createSlice({
  name: "test",
  initialState,
  reducers: {
    changeTestVar(state) {
      //   console.log("old value in store", state.variable);
      //   state.variable = "new_value";
      //   console.log("new value in store", state.variable);
      state.variable++;
    },
    decrementTestVar(state) {
      state.variable--;
    },
    setProducts(state, action) {
      state.products = action.payload;
      //   state.products;
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
  console.log("this function dispatched");
  const response = await api.getProductArray();
  // await instance.get("products/getAll");
  console.log("REPONSE IN STORE", response);
  dispatch(slice.actions.setProducts(response.data));
  //   console.log(response);
  //   return response;
  //   return async () => {
  //     try {
  //       let response = await axios.get("http://localhost:3000/products/getAll");
  //       console.log(response);
  //       dispatch(slice.actions.setProducts(response.data));
  //       return response;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
};
export default slice.reducer;
