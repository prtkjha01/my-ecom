import axios from "axios";
import { store } from "../redux/store";
import { useSelector } from "react-redux";
import { getCookie } from '../utils/cookies'
const test = () => {
    // const state = store.auth;
    // console.log("state in apis.js =>", state);
};
const token = getCookie("token");

let instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_LOCAL,
    headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : undefined
    },
});

// const initService = () => {
//     store.subscribe(() => {
//         const auth = store.getState().auth;
//         // console.log("auth", auth);
//         const token = auth.user.token.payload;
//         // console.log("token", token);
//         if (token) {
//             instance = axios.create({
//                 baseURL: process.env.NEXT_PUBLIC_SERVER_LOCAL,
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//         }
//     });
// };
instance.interceptors.response.use(
    (response) => response.data,
    (error) => {
        // Handle errors here or re-throw them
        console.error('Axios response error:', error);
        throw error;
    }
);
// AUTH_TOKEN = useSelector((state) => state.auth.user.data.token) || "";
// instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;
const register = (payload) => instance.post("/auth/register", payload);
const login = (payload) => instance.post("/auth/login", payload);
const getProducts = (query, page, limit) => instance.get(`product/search?page=${page}&limit=${limit}&query=${query}`);
const getProductsByCategory = (category, page, limit) => instance.get(`product/by-category/${category}?page=${page}&limit=${limit}`);
const getProduct = (id) => instance.get(`product/${id}`);
const getCart = () => instance.get('/cart')
const addToCart = (payload) => instance.patch(`/cart/add`, payload)
const getAddresses = () => instance.get('/address')
const createAddress = (payload) => instance.post('/address', payload)
export const api = {
    getProducts,
    getProductsByCategory,
    getProduct,
    getCart,
    addToCart,
    getAddresses,
    createAddress,
    // initService,
    register,
    login,
};