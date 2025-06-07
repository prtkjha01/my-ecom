import { combineReducers } from "@reduxjs/toolkit";
// slices
import searchReducer from "./slices/search";
import productReducer from "./slices/product";
import authReducer from "./slices/auth";
import cartReducer from "./slices/cart";
import addressReducer from "./slices/address";
import orderReducer from "./slices/order";

interface Storage {
  getItem: () => Promise<string | null>;
  setItem: (key: string, value: string) => Promise<string>;
  removeItem: () => Promise<void>;
}

const createNoopStorage = (): Storage => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(_key, value) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  },
});

const rootReducer = combineReducers({
  search: searchReducer,
  product: productReducer,
  auth: authReducer,
  cart: cartReducer,
  address: addressReducer,
  order: orderReducer,
});

export { rootReducer };
