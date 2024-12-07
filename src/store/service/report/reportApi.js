import { baseApi } from "../../api/baseApi";

const reportApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userReports: build.query({
      query: (data) => ({
        url:  `user-reports?${data}`,
      }),
      providesTags:["report"]
    }),
  }),
});

export const { useUserReportsQuery } = reportApi;
