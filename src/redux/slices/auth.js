import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
import { api } from "../../services/apis";
import { getCookie } from "../../utils/cookies";
const initialState = {
  user: {
    isLoggedIn: false,
    token: null,
    data: {},
  },
  currentUser: {},
};
const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, payload) {
      state.user = { ...state.user, token: payload };

      document.cookie = `token=${payload.payload}`;
    },
    setIsLoggedIn(state, payload) {
      state.user = { ...state.user, isLoggedIn: payload };
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});
export const getCurrentUser = () => {
  return async (dispatch) => {
    try {
      const response = await api.getCurrentUser();
      await dispatch(slice.actions.setCurrentUser(response.data));
    } catch (error) {
      throw new Error(error);
    }
  };
};
export const login = (payload) => {
  return async (dispatch) => {
    try {
      // api.initService();
      const response = await api.login(payload);
      await dispatch(slice.actions.setToken(response.data.token));
      await dispatch(slice.actions.setIsLoggedIn(true));
      return response;
    } catch (error) {
      throw new Error(error);
    }
  };
};
export const register = (payload) => {
  return async (dispatch) => {
    try {
      await api.register(payload);
    } catch (error) {
      throw new Error(error);
    }
  };
};
export default slice.reducer;
