import { baseApi } from "../../api/baseApi";

const feedbackApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    feedback: build.query({
      query: (data) => ({
        url: `feedback?${data}`,
      }),
      providesTags: ["feedback"],
    }),
  }),
});

export const { useFeedbackQuery } = feedbackApi;
