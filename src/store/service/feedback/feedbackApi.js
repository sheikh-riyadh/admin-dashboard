import { baseApi } from "../../api/baseApi";

const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    feedback: build.query({
      query: () => ({
        url: "feedback",
      }),
      providesTags: ["feedback"],
    }),
  }),
});

export const { useFeedbackQuery } = feedbackApi;
