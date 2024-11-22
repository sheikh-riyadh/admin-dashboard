import { baseApi } from "../../api/baseApi";

const productQuestionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    productQuestions: build.query({
      query: (productId) => ({
        url: `product-questions/${productId}`,
      }),
      providesTags: ["question"],
    }),
  }),
});

export const { useProductQuestionsQuery } = productQuestionApi;
