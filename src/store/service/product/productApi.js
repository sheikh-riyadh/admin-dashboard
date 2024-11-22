import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    sellerProduct: build.query({
      query: () => ({
        url: "seller-products",
      }),
      providesTags: ["products"],
    }),
    productBySellerId: build.query({
      query: (sellerId) => ({
        url: `seller-product-by-id/${sellerId}`,
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
