import { api } from "..";

enum USER_ENDPOINTS {
  GET_CURRENT_USER = "/user/current",
  SUBSCRIBE_TO_NEWSLETTER = "/user/subscribe-to-newsletter",
}

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => USER_ENDPOINTS.GET_CURRENT_USER,
    }),
    subscribeToNewsletter: builder.mutation({
      query: (payload: { email: string }) => ({
        url: USER_ENDPOINTS.SUBSCRIBE_TO_NEWSLETTER,
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const { useGetCurrentUserQuery, useSubscribeToNewsletterMutation } =
  userApi;
