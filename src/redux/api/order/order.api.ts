import { ApiResponse } from "@/types/api.types";
import { api } from "..";
import { Order, OrderPayload } from "./order.types";

enum ORDER_ENDPOINTS {
  PLACE_ORDER = "/order/payment-success",
  GET_ORDERS = "/order/all",
}

export const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation<ApiResponse<{}>, OrderPayload>({
      query: (payload) => ({
        url: ORDER_ENDPOINTS.PLACE_ORDER,
        method: "POST",
        body: payload,
      }),
    }),
    getOrders: builder.query<ApiResponse<Order[]>, void>({
      query: () => ORDER_ENDPOINTS.GET_ORDERS,
    }),
  }),
});

export const { usePlaceOrderMutation, useGetOrdersQuery } = orderApi;
