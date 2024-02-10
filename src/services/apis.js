import axios from "axios";
import { store } from "../redux/store";
import { useSelector } from "react-redux";

const test = () => {
    // const state = store.auth;
    // console.log("state in apis.js =>", state);
};

let instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_LOCAL,
});

const initService = () => {
    store.subscribe(() => {
        const auth = store.getState().auth;
        // console.log("auth", auth);
        const token = auth.user.token.payload;
        // console.log("token", token);
        if (token) {
            instance = axios.create({
                baseURL: process.env.NEXT_PUBLIC_SERVER_LOCAL,
                headers: { Authorization: `Bearer ${token}` },
            });
        }
    });
};
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
const signUp = (payload) => instance.post("/auth/signup", payload);
const login = (payload) => instance.post("/auth/login", payload);
const getProductArray = () => instance.get("products/get-all");
const getProduct = (id) => instance.get(`products/get/${id}`);

export const api = {
    getProductArray,
    getProduct,
    initService,
    signUp,
    login,
};