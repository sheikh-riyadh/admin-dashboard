import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    sellerProduct: build.query({
      query: (data) => ({
        url: `seller-products?${data}`,
      }),
      providesTags: ["products"],
    }),
    productBySellerId: build.query({
      query: (data) => ({
        url: `seller-product-by-id?${data}`,
      }),
      providesTags: ["products"],
    }),
    updateProductStatus: build.mutation({
      query: (data) => ({
        url: "update-product-status",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useSellerProductQuery,
  useUpdateProductStatusMutation,
  useProductBySellerIdQuery,
} = productApi;
