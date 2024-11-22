import { baseApi } from "../../api/baseApi";

const locationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSellerLocation: build.query({
      query: (sellerId) => ({
        url: `seller-location/${sellerId}`,
      }),
      providesTags: ["location"],
    }),
  }),
});

export const { useGetSellerLocationQuery } = locationApi;
