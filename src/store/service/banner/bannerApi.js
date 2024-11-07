import { baseApi } from "../../api/baseApi";

const bannerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBanner: build.query({
      query: (type) => ({
        url: `admin-banner/${type}`,
      }),
      providesTags: ["admin-banner"],
    }),

    getDefaultBanner: build.query({
      query: () => ({
        url: `admin-default-banner`,
      }),
      providesTags: ["admin-banner"],
    }),

    createBanner: build.mutation({
      query: (data) => ({
        url: `admin-create-banner`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["admin-banner"],
    }),

    updateBanner: build.mutation({
      query: (data) => ({
        url: "admin-update-banner",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["admin-banner"],
    }),
  }),
});

export const {
  useGetBannerQuery,
  useCreateBannerMutation,
  useUpdateBannerMutation,
  useGetDefaultBannerQuery,
} = bannerApi;
