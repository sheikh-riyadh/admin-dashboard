import { baseApi } from "../../api/baseApi";

const sellerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllStaff: build.query({
      query: () => ({
        url: `all-staff`,
      }),
      providesTags: ["staff"],
    }),

    createStaff: build.mutation({
      query: (data) => ({
        url: "create-staff",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["staff"],
    }),

    updateStaff: build.mutation({
      query: (data) => ({
        url: "update-staff",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["staff"],
    }),

    deleteStaff: build.mutation({
      query: (id) => ({
        url: `delete-staff/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["staff"],
    }),
  }),
});

export const {
  useGetAllStaffQuery,
  useCreateStaffMutation,
  useUpdateStaffMutation,
  useDeleteStaffMutation,
} = sellerApi;
