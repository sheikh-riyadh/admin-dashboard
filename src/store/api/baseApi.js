import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { removeAdmin } from "../features/user/adminSlice";

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_api_url}`,
    credentials: "include",
  });
  const result = await baseQuery(args, api, extraOptions);
  if (result?.error && [401, 403].includes(result?.error?.status)) {
    api.dispatch(removeAdmin());
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: [
    "admin-seller",
    "admin-banner",
    "admin-message",
    "admin-staff",
    "categories",
    "report",
    "feedback",
    "order",
    "products",
    "question",
    "review",
    "location",
    "user",
  ],
  endpoints: () => ({}),
});
