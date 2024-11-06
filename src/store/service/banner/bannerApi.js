import { baseApi } from "../../api/baseApi";

const bannerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBanner: build.query({
      query: (type) => ({
        url: `banner/${type}`,
      }),
      providesTags: ["banner"],
    }),
    getDefaultBanner: build.query({
      query: () => ({
        url: `banner`,
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
  }),
});

export const {
  useGetBannerQuery,
  useCreateBannerMutation,
  useUpdateBannerMutation,
  useGetDefaultBannerQuery
} = bannerApi;
