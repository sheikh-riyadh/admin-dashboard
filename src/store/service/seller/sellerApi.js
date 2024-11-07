import { baseApi } from "../../api/baseApi";

const sellerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSeller: build.query({
      query: (status) => ({
        url: `admin-all-seller?status=${status ? status : ""}`,
      }),
      providesTags: ["admin-seller"],
    }),

    updateSeller: build.mutation({
      query: (data) => ({
        url: "admin-update-seller",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["admin-seller"],
    }),

    deleteSeller: build.mutation({
      query: (id) => ({
        url: `admin-delete-seller/${id}`,
        method: "DELETE",
      }),
      invalidatesTags:["admin-seller"]
    }),
  }),
});

export const {
  useGetAllSellerQuery,
  useUpdateSellerMutation,
  useDeleteSellerMutation,
} = sellerApi;
