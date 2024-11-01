import { baseApi } from "../../api/baseApi";

const sellerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSeller: build.query({
      query: () => ({
        url: "all-seller",
      }),
    }),
  }),
});

export const { useGetAllSellerQuery } = sellerApi;
