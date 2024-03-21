import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://health-aid-hub-backend.vercel.app/api/v1/'}),
  tagTypes: ['supplies'],
  endpoints: () => ({})
})