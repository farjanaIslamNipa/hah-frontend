import { baseApi } from "../../api/baseApi";

export const donationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDonations: builder.query({
      query: () => ({
        url: "/leaderboard",
        method: "GET"
      }),
      providesTags: ["donations"]
    }),
    addDonatio: builder.mutation({
      query: (donationInfo) => ({
        url: "/donate",
        method: "POST",
        body: donationInfo,
      }),
      invalidatesTags: ["donations"]
    }),

  }),
});

export const { useGetDonationsQuery, useAddDonatioMutation } = donationApi;

