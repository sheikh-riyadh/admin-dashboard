import { baseApi } from "../../api/baseApi";

const bannerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBanner: build.query({
      query: () => ({
        url: `all-banner`,
      }),
      providesTags: ["banner"],
    }),
    createBanner: build.mutation({
      query: (data) => ({
        url: `create-banner`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["banner"],
    }),

    updateBanner: build.mutation({
      query: (data) => ({
        url: "update-banner",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["banner"],
    }),

    deleteBanner: build.mutation({
      query: (id) => ({
        url: `delete-banner/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["banner"],
    }),
  }),
});

export const {
  useGetAllBannerQuery,
  useCreateBannerMutation,
  useUpdateBannerMutation,
  useDeleteBannerMutation,
} = bannerApi;
