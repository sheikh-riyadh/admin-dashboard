import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query({
      query: (data) => ({
        url: `user-order?${data}`,
      }),
      providesTags: ["order"],
    }),
    orderBySellerId: build.query({
      query: (data) => ({
        url: `order-by-sellerId?${data}`,
      }),
    }),
    orderByUserId: build.query({
      query: (data) => ({
        url: `order-by-userId?${data}`,
      }),
      providesTags: ["order"],
    }),
    cancelOrderByUserId: build.query({
      query: (query) => ({
        url: `cancel-order-by-userId?${query}`,
      }),
      providesTags: ["order"],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useOrderBySellerIdQuery,
  useOrderByUserIdQuery,
  useCancelOrderByUserIdQuery,
} = orderApi;
