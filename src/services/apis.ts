import axios, { AxiosInstance } from "axios";
import { getCookie } from "../utils/cookies";

interface ProductSearchPayload {
  query: string;
  min_price?: number;
  max_price?: number;
  min_discount?: number;
  max_discount?: number;
  is_assured?: boolean;
}

interface CartPayload {
  product_id: string;
  quantity: number;
}

interface AddressPayload {
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  is_default?: boolean;
}

interface OrderPayload {
  address_id: string;
  payment_method: string;
}

interface NewsletterPayload {
  email: string;
}

interface AuthPayload {
  email: string;
  password: string;
}

interface OtpPayload {
  email: string;
  otp: string;
}

const token = getCookie("token");

let instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_LOCAL,
  headers: {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : undefined,
  },
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Handle errors here or re-throw them
    console.error("Axios response error:", error);
    throw error?.response?.data;
  }
);

/********************************* Auth APIs *********************************/
// const register = (payload: AuthPayload) =>
//   instance.post("/auth/register", payload);
// const login = (payload: AuthPayload) => instance.post("/auth/login", payload);
// const sendOtp = (payload: { email: string }) =>
//   instance.post("/auth/send-otp", payload);
// const verifyOtp = (payload: OtpPayload) =>
//   instance.post("/auth/verify-otp", payload);
// const resetPassword = (payload: { email: string; password: string }) =>
//   instance.patch("/auth/reset-password", payload);

/********************************* Order APIs *********************************/
const placeOrder = (payload: OrderPayload) =>
  instance.post("/order/payment-success", payload);
const getAllOrders = () => instance.get("/order/all");

export const api = {
  placeOrder,
  getAllOrders,
  // register,
  // login,
  // sendOtp,
  // verifyOtp,
  // resetPassword,
};
