import { baseApi } from "../../api/baseApi";

const bannerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getBanner: build.query({
      query: (data) => ({
        url: `admin-banner?${data}`,
      }),
      providesTags: ["admin-banner"],
    }),
    sellerBanner: build.query({
      query: (data) => ({
        url: `seller-banner?${data}`,
      }),
    }),
    getDefaultBanner: build.query({
      query: (email) => ({
        url: `admin-default-banner/${email}`,
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
  useSellerBannerQuery,
} = bannerApi;
