import { baseApi } from "../../api/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: (data) => ({
        url: `categories?${data}`,
      }),
      providesTags:["categories"]
    }),
    createCategory: build.mutation({
      query: (data) => ({
        url: `create-category`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["categories"],
    }),
    updateCategory: build.mutation({
      query: (data) => ({
        url: `update-category`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["categories"],
    }),
    deleteCategory: build.mutation({
      query: (data) => ({
        url: `delete-category?${data}`,
        method:"DELETE"
      }),
      invalidatesTags: ["categories"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
