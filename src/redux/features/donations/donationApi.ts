import { baseApi } from "../../api/baseApi";

export const donationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addDonatio: builder.mutation({
      query: (donationInfo) => ({
        url: "/donate",
        method: "POST",
        body: donationInfo,
      })
    }),

  }),
});

export const { useAddDonatioMutation } = donationApi;

