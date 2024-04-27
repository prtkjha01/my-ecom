import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import { api } from "../../services/apis";

const initialState = {
    orders: []
};
const slice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setOrders: (state, action) => {
            state.orders = action.payload;
        },
    },
});
export const placeOrder = (payload) => {
    return async (dispatch) => {
        try {

            const response = await api.placeOrder(payload)
            return response;

        } catch (error) {
            console.log(error);
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
        try {
            const response = await api.getAllOrders();
            if (response?.data) {
                dispatch(slice.actions.setOrders(response.data));
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export default slice.reducer;