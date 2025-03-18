import { createAPI, fetchBasedQuery } from "@reduxjs/toolkit/query/react";

// This function handles API requrests and manages data fetching
export const apiSlice = createApi({
  // defines how to fetch data from the API with base URL - used as a starting point for API calls
  basedQuery: fetchBasedQuery({
    basedUrl: "http://localhost:3500",
  }),
  // tagTypes are used to organize data and help with cache management
  // tag specfic data (Notes, Users) to manage their cache
  tagTypes: ["Note", "User"],
  // "endpoints" - where we define all of the actual API calls
  endpoints: (builder) => ({}),
});
