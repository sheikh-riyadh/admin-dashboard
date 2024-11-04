import { baseApi } from "../../api/baseApi";

const sellerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSeller: build.query({
      query: (status) => ({
        url: `all-seller?status=${status ? status : ""}`,
      }),
      providesTags: ["seller"],
    }),

    updateSeller: build.mutation({
      query: (data) => ({
        url: "update-seller",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["seller"],
    }),

    deleteSeller: build.mutation({
      query: (id) => ({
        url: `delete-seller/${id}`,
        method: "DELETE",
      }),
      invalidatesTags:["seller"]
    }),
  }),
});

export const {
  useGetAllSellerQuery,
  useUpdateSellerMutation,
  useDeleteSellerMutation,
} = sellerApi;
