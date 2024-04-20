import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import { api } from "../../services/apis";

const initialState = {

};
const slice = createSlice({
    name: "order",
    initialState,
    reducers: {

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

export default slice.reducer;