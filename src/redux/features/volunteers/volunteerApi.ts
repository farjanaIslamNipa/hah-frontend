import { baseApi } from "../../api/baseApi";

export const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getVolunteers: builder.query({
      query: () => ({
        url: "/volunteers",
        method: "GET"
      })
    }),
    addVolunteer: builder.mutation({
      query: (volunteerInfo) => ({
        url: "/add-volunteer",
        method: "POST",
        body: volunteerInfo,
      })
    })

  }),
});

export const { useGetVolunteersQuery, useAddVolunteerMutation } = volunteerApi;
