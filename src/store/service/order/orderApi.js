import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query({
      query: () => ({
        url: "user-order",
      }),
      providesTags: ["order"],
    }),
    orderBySellerId: build.query({
      query: (sellerId) => ({
        url: `order-by-sellerId/${sellerId}`,
      }),
    }),
    orderByUserId: build.query({
      query: (userId) => ({
        url: `order-by-userId/${userId}`,
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
