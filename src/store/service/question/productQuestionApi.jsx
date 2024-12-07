import { baseApi } from "../../api/baseApi";

const productQuestionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    productQuestions: build.query({
      query: (data) => ({
        url: `product-questions?${data}`,
      }),
      providesTags: ["question"],
    }),
  }),
});

export const { useProductQuestionsQuery } = productQuestionApi;
