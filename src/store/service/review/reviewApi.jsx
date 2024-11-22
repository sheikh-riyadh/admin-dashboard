import { baseApi } from "../../api/baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    productReview: build.query({
      query: (productId) => ({
        url: `product-review/${productId}`,
      }),
      providesTags: ["review"],
    }),
    productReviewBySellerId: build.query({
      query: (sellerId) => ({
        url: `product-review-by-sellerId/${sellerId}`,
      }),
      providesTags: ["review"],
    }),
    productReviewByUserId: build.query({
      query: (userId) => ({
        url: `product-review-by-userId/${userId}`,
      }),
      providesTags: ["review"],
    }),
  }),
});

export const {
  useProductReviewQuery,
  useProductReviewBySellerIdQuery,
  useProductReviewByUserIdQuery,
} = reviewApi;
