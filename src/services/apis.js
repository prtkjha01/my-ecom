import axios from "axios";
import { store } from "../redux/store";
import { useSelector } from "react-redux";
import { getCookie } from "../utils/cookies";

const token = getCookie("token");

let instance = axios.create({
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

const getCurrentUser = () => instance.get("/user/current");
const register = (payload) => instance.post("/auth/register", payload);
const login = (payload) => instance.post("/auth/login", payload);
const getCarouselProducts = () => instance.get("/product/carousel");
const getProducts = (payload, type) => {
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
const getProductsByCategory = (category, page, limit) =>
  instance.get(`product/by-category/${category}?page=${page}&limit=${limit}`);
const getProduct = (id) => instance.get(`product/${id}`);
const getCart = () => instance.get("/cart");
const addToCart = (payload) => instance.patch(`/cart/add`, payload);
const removeFromCart = (id) => instance.patch(`/cart/remove/${id}`);
const updateProductQuantity = (id, payload) =>
  instance.patch(`/cart/update-count/${id}`, payload);
const getAddresses = () => instance.get("/address");
const createAddress = (payload) => instance.post("/address", payload);
const deleteAddress = (id) => instance.delete(`/address/${id}`);
const placeOrder = (payload) =>
  instance.post("/order/payment-success", payload);
const getAllOrders = () => instance.get("/order/all");
export const api = {
  getCurrentUser,
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
  // initService,
  register,
  login,
};
