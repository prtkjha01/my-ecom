import axios from "axios";

let instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_LOCAL,
});

const getProductArray = () => instance.get("products/getAll");
const getProduct = (id) => instance.get(`products/get/${id}`);

export const api = {
  getProductArray,
  getProduct,
};
