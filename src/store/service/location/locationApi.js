import { baseApi } from "../../api/baseApi";

const locationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSellerLocation: build.query({
      query: (data) => ({
        url: `seller-location?${data}`,
      }),
      providesTags: ["location"],
    }),
  }),
});

export const { useGetSellerLocationQuery } = locationApi;
