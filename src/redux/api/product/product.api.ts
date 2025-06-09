import { ApiResponse } from "@/types/api.types";
import { api } from "..";
import {
  CarouselProduct,
  ProductByCategoryPayload,
  ProductSearchPayload,
} from "./product.types";

enum PRODUCT_ENDPOINTS {
  GET_CAROUSEL_PRODUCTS = "/product/carousel",
  GET_PRODUCTS = "/product/search",
  GET_PRODUCTS_BY_CATEGORY = "/product/by-category/:category",
  GET_PRODUCT = "/product/:id",
}

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCarouselProducts: builder.query<ApiResponse<CarouselProduct[]>, void>({
      query: () => PRODUCT_ENDPOINTS.GET_CAROUSEL_PRODUCTS,
    }),
    getProducts: builder.query({
      query: (payload: ProductSearchPayload) => ({
        url: PRODUCT_ENDPOINTS.GET_PRODUCTS,
        method: "GET",
        params: payload,
      }),
    }),
    getProductsByCategory: builder.query({
      query: (payload: ProductByCategoryPayload) => ({
        url: PRODUCT_ENDPOINTS.GET_PRODUCTS_BY_CATEGORY.replace(
          ":category",
          payload.category
        ),
        method: "GET",
        params: payload,
      }),
    }),
    getProduct: builder.query({
      query: (id: string) => PRODUCT_ENDPOINTS.GET_PRODUCT.replace(":id", id),
    }),
  }),
});

export const {
  useGetCarouselProductsQuery,
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetProductQuery,
} = productApi;
