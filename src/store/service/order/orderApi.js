import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query({
      query: () => ({
        url: "user-order",
      }),
      providesTags:["order"]
    }),
  }),
});

export const { useGetOrdersQuery } = orderApi;
