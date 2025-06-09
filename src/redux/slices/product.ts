import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../services/apis";
import { AppDispatch } from "../store";

interface Product {
  _id: string;
  product_name: string;
  brand: string;
  images: string[];
  price: number;
  currency_symbol: string;
  rating?: number;
  active?: boolean;
}

interface ProductState {
  product: {
    isLoading: boolean;
    data: Product | null;
    isError: boolean;
  };
  products: {
    isLoading: boolean;
    data: Product[];
    isError: boolean;
  };
  carouselProducts: Product[];
}

const initialState: ProductState = {
  product: {
    isLoading: false,
    data: null,
    isError: false,
  },
  products: {
    isLoading: false,
    data: [],
    isError: false,
  },
  carouselProducts: [],
};

const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct(state, action: PayloadAction<Product>) {
      state.product = { ...state.product, data: action.payload };
    },
    setProductLoading(state, action: PayloadAction<boolean>) {
      state.product = { ...state.product, isLoading: action.payload };
    },
    setProductError(state, action: PayloadAction<boolean>) {
      state.product = { ...state.product, isError: action.payload };
    },
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = { ...state.products, data: action.payload };
    },
    setProductsLoading(state, action: PayloadAction<boolean>) {
      state.products = { ...state.products, isLoading: action.payload };
    },
    setProductsError(state, action: PayloadAction<boolean>) {
      state.products = { ...state.products, isError: action.payload };
    },
    setCarouselProducts(state, action: PayloadAction<Product[]>) {
      state.carouselProducts = action.payload || [];
    },
  },
});

export const sortProducts = createAsyncThunk(
  "product/sortProducts",
  async (
    { products, type }: { products: Product[]; type: string },
    { dispatch }
  ) => {
    let sortedProducts = [...products];

    switch (type) {
      case "PHTL":
        sortedProducts.sort((a, b) => b.price - a.price); // Price High to Low
        break;
      case "PLTH":
        sortedProducts.sort((a, b) => a.price - b.price); // Price Low to High
        break;
      case "RHTL":
        sortedProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0)); // Rating High to Low
        break;
      case "RLTH":
        sortedProducts.sort((a, b) => (a.rating || 0) - (b.rating || 0)); // Rating Low to High
        break;
      default:
        break;
    }
    dispatch(slice.actions.setProducts(sortedProducts));
    return sortedProducts;
  }
);

export default slice.reducer;
