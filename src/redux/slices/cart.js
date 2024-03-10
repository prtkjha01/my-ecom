import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import { api } from "../../services/apis";

const initialState = {
    cart: {},
};
const slice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart(state, action) {
            state.cart = action.payload;
        }
    },
});
export const getCart = () => {
    return async (dispatch) => {
        try {

            const response = await api.getCart()
            dispatch(slice.actions.setCart(response.data));

        } catch (error) {
            console.log(error);
        }
    };
};
export const addToCart = (payload) => {
    return async (dispatch) => {
        try {

            const response = await api.addToCart(payload)
            return response;
        } catch (error) {

            throw new Error(error);
        }
    };
};

export default slice.reducer;