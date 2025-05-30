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

/******************************* User APIs *********************************/
const getCurrentUser = () => instance.get("/user/current");
const subscribeToNewsletter = (payload: NewsletterPayload) =>
  instance.post("/user/subscribe-to-newsletter", payload);

/********************************* Auth APIs *********************************/
const register = (payload: AuthPayload) =>
  instance.post("/auth/register", payload);
const login = (payload: AuthPayload) => instance.post("/auth/login", payload);
const sendOtp = (payload: { email: string }) =>
  instance.post("/auth/send-otp", payload);
const verifyOtp = (payload: OtpPayload) =>
  instance.post("/auth/verify-otp", payload);
const resetPassword = (payload: { email: string; password: string }) =>
  instance.patch("/auth/reset-password", payload);

/********************************* Product APIs *********************************/
const getCarouselProducts = () => instance.get("/product/carousel");
const getProducts = (payload: ProductSearchPayload, type?: string) => {
  if (type === "WITHOUT_FILTERS") {
    return instance.get(
      `product/search?page=${1}&limit=${100}&query=${payload.query}`
    );
  } else {
    return instance.get(
      `product/search?page=${1}&limit=${100}&query=${payload.query}${
        payload.min_price && payload.max_price
          ? `&min_price=${payload.min_price}&max_price=${payload.max_price}`
          : ""
      }${
        payload.min_discount && payload.max_discount
          ? `&min_discount=${payload.min_discount}&max_discount=${payload.max_discount}`
          : ""
      }${payload.is_assured ? `&is_assured=${payload.is_assured}` : ""}`
    );
  }
};
const getProductsByCategory = (category: string, page: number, limit: number) =>
  instance.get(`product/by-category/${category}?page=${page}&limit=${limit}`);
const getProduct = (id: string) => instance.get(`product/${id}`);

/********************************* Cart APIs *********************************/
const getCart = () => instance.get("/cart");
const addToCart = (payload: CartPayload) =>
  instance.patch(`/cart/add`, payload);
const removeFromCart = (id: string) => instance.patch(`/cart/remove/${id}`);
const updateProductQuantity = (id: string, payload: { quantity: number }) =>
  instance.patch(`/cart/update-count/${id}`, payload);

/********************************* Address APIs *********************************/
const getAddresses = () => instance.get("/address");
const createAddress = (payload: AddressPayload) =>
  instance.post("/address", payload);
const deleteAddress = (id: string) => instance.delete(`/address/${id}`);

/********************************* Order APIs *********************************/
const placeOrder = (payload: OrderPayload) =>
  instance.post("/order/payment-success", payload);
const getAllOrders = () => instance.get("/order/all");

export const api = {
  getCurrentUser,
  subscribeToNewsletter,
  getCarouselProducts,
  getProducts,
  getProductsByCategory,
  getProduct,
  getCart,
  addToCart,
  removeFromCart,
  updateProductQuantity,
  getAddresses,
  createAddress,
  deleteAddress,
  placeOrder,
  getAllOrders,
  register,
  login,
  sendOtp,
  verifyOtp,
  resetPassword,
};
