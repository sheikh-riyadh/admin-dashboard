import { baseApi } from "../../api/baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    productReview: build.query({
      query: (productId) => ({
        url: `product-review/${productId}`,
      }),
      providesTags: ["review"],
    }),
  }),
});

export const { useProductReviewQuery } = reviewApi;
