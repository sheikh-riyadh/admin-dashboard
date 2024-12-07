import { baseApi } from "../../api/baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    productReview: build.query({
      query: (data) => ({
        url: `product-review?${data}`,
      }),
      providesTags: ["review"],
    }),
    productReviewBySellerId: build.query({
      query: (data) => ({
        url: `product-review-by-sellerId?${data}`,
      }),
      providesTags: ["review"],
    }),
    productReviewByUserId: build.query({
      query: (data) => ({
        url: `product-review-by-userId?${data}`,
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
