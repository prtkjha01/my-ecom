import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "@/utils/cookies";

// Define a base API configuration
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SERVER_LOCAL || "api-base-url",
    prepareHeaders: (headers) => {
      // Get the token from the state
      const token = getCookie("token");

      // If we have a token, add it to the headers
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Product", "Category", "Cart", "Order", "User"],
  endpoints: () => ({}),
});

export default api;
