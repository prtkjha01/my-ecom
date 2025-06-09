import { ApiResponse } from "@/types/api.types";
import { api } from "..";
import {
  CartData,
  CartPayload,
  UpdateProductQuantityPayload,
} from "./cart.types";

enum CART_ENDPOINTS {
  GET_CART = "/cart",
  ADD_TO_CART = "/cart/add",
  REMOVE_FROM_CART = "/cart/remove/:id",
  UPDATE_PRODUCT_QUANTITY = "/cart/update-count/:id",
}

export const cartApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query<ApiResponse<CartData>, void>({
      query: () => CART_ENDPOINTS.GET_CART,
    }),
    addToCart: builder.mutation({
      query: (payload: CartPayload) => ({
        url: CART_ENDPOINTS.ADD_TO_CART,
        method: "PATCH",
        body: payload,
      }),
    }),
    removeFromCart: builder.mutation({
      query: (id: string) => ({
        url: CART_ENDPOINTS.REMOVE_FROM_CART.replace(":id", id),
        method: "PATCH",
      }),
    }),
    updateProductQuantity: builder.mutation({
      query: ({ id, quantity }: UpdateProductQuantityPayload) => ({
        url: CART_ENDPOINTS.UPDATE_PRODUCT_QUANTITY.replace(":id", id),
        method: "PATCH",
        body: { quantity },
      }),
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useUpdateProductQuantityMutation,
} = cartApi;
