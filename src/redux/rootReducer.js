import { combineReducers } from "redux";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
// slices
import testReducer from "./slices/test";
import searchReducer from "./slices/search";
import productReducer from "./slices/product";
import authReducer from "./slices/auth";
import cartReducer from "./slices/cart";
import addressReducer from "./slices/address";
import orderReducer from "./slices/order";

const createNoopStorage = () => ({
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

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  // whitelist: ['auth', ''],
  blacklist: ["raise-capital", "auth", "home"],
  //TODO: Add whitelist array.
};

const rootReducer = combineReducers({
  test: testReducer,
  search: searchReducer,
  product: productReducer,
  auth: authReducer,
  cart: cartReducer,
  address: addressReducer,
  order: orderReducer,
});

export { rootPersistConfig, rootReducer };
