import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: (status) => ({
        url: `user/${status}`,
      }),
      providesTags: ["user"],
    }),
    updateUserStatus: build.mutation({
      query: (data) => ({
        url: "update-user-status",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags:["user"]
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserStatusMutation } = userApi;
