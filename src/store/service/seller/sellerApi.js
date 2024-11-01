import { baseApi } from "../../api/baseApi";

const sellerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSeller: build.query({
      query: () => ({
        url: "all-seller",
      }),
      providesTags: ["seller"],
    }),

    updateSeller: build.mutation({
      query: (data) => ({
        url: "update-seller",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllSellerQuery, useUpdateSellerMutation } = sellerApi;
