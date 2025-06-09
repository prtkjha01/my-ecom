import { api } from "..";
import { AuthPayload, OtpPayload } from "./auth.types";

enum AUTH_ENDPOINTS {
  REGISTER = "/auth/register",
  LOGIN = "/auth/login",
  SEND_OTP = "/auth/send-otp",
  VERIFY_OTP = "/auth/verify-otp",
  RESET_PASSWORD = "/auth/reset-password",
}

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (payload: AuthPayload) => ({
        url: AUTH_ENDPOINTS.REGISTER,
        method: "POST",
        body: payload,
      }),
    }),
    login: builder.mutation({
      query: (payload: AuthPayload) => ({
        url: AUTH_ENDPOINTS.LOGIN,
        method: "POST",
        body: payload,
      }),
    }),
    sendOtp: builder.mutation({
      query: (payload: { email: string }) => ({
        url: AUTH_ENDPOINTS.SEND_OTP,
        method: "POST",
        body: payload,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (payload: OtpPayload) => ({
        url: AUTH_ENDPOINTS.VERIFY_OTP,
        method: "POST",
        body: payload,
      }),
    }),
    resetPassword: builder.mutation({
      query: (payload: AuthPayload) => ({
        url: AUTH_ENDPOINTS.RESET_PASSWORD,
        method: "PATCH",
        body: payload,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
} = authApi;
