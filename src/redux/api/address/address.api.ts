import { ApiResponse } from "@/types/api.types";
import { api } from "..";
import { Address } from "./address.types";

enum ADDRESS_ENDPOINTS {
  GET_ADDRESSES = "/address",
  CREATE_ADDRESS = "/address",
  DELETE_ADDRESS = "/address/:id",
}

export const addressApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAddresses: builder.query<ApiResponse<Address[]>, void>({
      query: () => ADDRESS_ENDPOINTS.GET_ADDRESSES,
    }),
    createAddress: builder.mutation<ApiResponse<Address>, Address>({
      query: (address) => ({
        url: ADDRESS_ENDPOINTS.CREATE_ADDRESS,
        method: "POST",
        body: address,
      }),
    }),
    deleteAddress: builder.mutation<ApiResponse<Address>, string>({
      query: (id) => ({
        url: ADDRESS_ENDPOINTS.DELETE_ADDRESS.replace(":id", id),
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAddressesQuery,
  useCreateAddressMutation,
  useDeleteAddressMutation,
} = addressApi;
