import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import { api } from "../../services/apis";
import { getCookie } from '../../utils/cookies'
const initialState = {
    user: {
        isLoggedIn: false,
        token: null,
        data: {},
    },
};
const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken(state, payload) {

            // console.log("in set Token");
            state.user = {...state.user, token: payload };

            document.cookie = `token=${payload.payload}`;

        },
        setIsLoggedIn(state, payload) {
            console.log("inside isLoggedIn");
            state.user = {...state.user, isLoggedIn: payload };
        },
    },
});

export const login = (payload) => {
    return async(dispatch) => {
        try {
            api.initService();
            let response = await api.login(payload);
            console.log(response);
            await dispatch(slice.actions.setToken(response.data.token));
            await dispatch(slice.actions.setIsLoggedIn(true));
            // console.log(state.user);
            // console.log("here");
            return response;
        } catch (error) {
            console.log(error);
        }
    };
};
export const signUp = (payload) => {
    return async(dispatch) => {
        try {
            let response = await api.signUp(payload);
            console.log(response);
        } catch (error) {
            console.log(error);
        } finally {
            console.log("ok !");
        }
    };
};
export default slice.reducer;