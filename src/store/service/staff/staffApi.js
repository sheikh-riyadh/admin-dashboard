import { baseApi } from "../../api/baseApi";

const sellerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllStaff: build.query({
      query: (email) => ({
        url: `admin-all-staff/${email}`,
      }),
      providesTags: ["admin-staff"],
    }),
    getAdmin: build.query({
      query: (email) => ({
        url: `admin-by-email/${email}`,
      }),
      providesTags: ["admin-staff"],
    }),
    createStaff: build.mutation({
      query: (data) => ({
        url: "admin-create-staff",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["admin-staff"],
    }),

    updateStaff: build.mutation({
      query: (data) => ({
        url: "admin-update-staff",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["admin-staff"],
    }),

    deleteStaff: build.mutation({
      query: (id) => ({
        url: `admin-delete-staff/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["admin-staff"],
    }),
  }),
});

export const {
  useGetAllStaffQuery,
  useCreateStaffMutation,
  useUpdateStaffMutation,
  useDeleteStaffMutation,
  useLazyGetAdminQuery,
} = sellerApi;
