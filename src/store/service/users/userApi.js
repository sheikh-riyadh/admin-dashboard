import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: (data) => ({
        url: `user?${data}`,
      }),
      providesTags: ["user"],
    }),
    createJwt: build.mutation({
      query: (data) => ({
        url: "jwt",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    logout: build.query({
      query: () => ({
        url: `logout`,
      }),
      invalidatesTags: ["user"],
    }),
    updateUserStatus: build.mutation({
      query: (data) => ({
        url: "update-user-status",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserStatusMutation,
  useCreateJwtMutation,
  useLogoutQuery,
} = userApi;