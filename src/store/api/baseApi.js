import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/",
  // credentials: "include",
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
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
  ],
  endpoints: () => ({}),
});
