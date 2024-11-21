import { baseApi } from "../../api/baseApi";

const reportApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userReports: build.query({
      query: () => ({
        url: "user-reports",
      }),
      providesTags:["report"]
    }),
  }),
});

export const { useUserReportsQuery } = reportApi;
