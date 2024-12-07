import { baseApi } from "../../api/baseApi";

const sellerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSeller: build.query({
      query: (data) => ({
        url: `admin-all-seller?${data}`,
      }),
      providesTags: ["admin-seller"],
    }),
    getSellerById: build.query({
      query: (data) => ({
        url: `admin-seller-by-id?${data}`,
      }),
      providesTags:["admin-seller"]
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
      query: (data) => ({
        url: `admin-delete-seller?${data}`,
        method: "DELETE",
      }),
      invalidatesTags: ["admin-seller"],
    }),
  }),
});

export const {
  useGetAllSellerQuery,
  useUpdateSellerMutation,
  useDeleteSellerMutation,
  useGetSellerByIdQuery
} = sellerApi;
