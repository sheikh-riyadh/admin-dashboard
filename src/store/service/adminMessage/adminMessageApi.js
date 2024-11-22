import { baseApi } from "../../api/baseApi";

const adminMessageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAdminMessage: build.query({
      query: () => ({
        url: `admin-message`,
      }),
      providesTags: ["admin-message"],
    }),

    createAdminMessage: build.mutation({
      query: (data) => ({
        url: "admin-create-message",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["admin-message"],
    }),

    updateAdminMessage: build.mutation({
      query: (data) => ({
        url: `admin-update-message`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["admin-message"],
    }),

    deleteAdminMessage: build.mutation({
      query: (id) => ({
        url: `admin-delete-message/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["admin-message"],
    }),
  }),
});

export const {
  useGetAdminMessageQuery,
  useCreateAdminMessageMutation,
  useUpdateAdminMessageMutation,
  useDeleteAdminMessageMutation,
} = adminMessageApi;