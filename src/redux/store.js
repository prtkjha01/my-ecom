import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

const { dispatch } = store;
const useSelector = useAppSelector;
const useDispatch = () => useAppDispatch();

export { store, dispatch, useSelector, useDispatch };
