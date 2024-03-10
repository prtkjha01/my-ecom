import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import { api } from "../../services/apis";

const initialState = {
    addresses: [],
};
const slice = createSlice({
    name: "address",
    initialState,
    reducers: {
        setAddresses(state, action) {
            state.addresses = action.payload;
        }
    },
});
export const getAddresses = () => {
    return async (dispatch) => {
        try {

            const response = await api.getAddresses()

            dispatch(slice.actions.setAddresses(response.data));

        } catch (error) {
            console.log(error);
        }
    };
};

export const createAddress = (payload) => {
    return async (dispatch) => {
        try {
            const response = await api.createAddress(payload);
            dispatch(slice.actions.setAddresses(response.data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default slice.reducer;