import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../services/apis";
import { AppDispatch } from "../store";

interface User {
  isLoggedIn: boolean;
  token: string | null;
  data: Record<string, any>;
}

interface AuthState {
  user: User;
  currentUser: Record<string, any>;
}

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

interface OtpPayload {
  email: string;
}

interface VerifyOtpPayload {
  email: string;
  otp: string;
}

interface ResetPasswordPayload {
  email: string;
  password: string;
}

interface NewsletterPayload {
  email: string;
}

const initialState: AuthState = {
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
    setToken(state, action: PayloadAction<string>) {
      state.user = { ...state.user, token: action.payload };
      document.cookie = `token=${action.payload}`;
    },
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.user = { ...state.user, isLoggedIn: action.payload };
    },
    setCurrentUser(state, action: PayloadAction<Record<string, any>>) {
      state.currentUser = action.payload;
    },
  },
});

export default slice.reducer;
