import { baseApi } from "../../api/baseApi";

export const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTestimonials: builder.query({
      query: () => ({
        url: "/testimonials",
        method: "GET"
      })
    }),
    addTestimonial: builder.mutation({
      query: (testimonialInfo) => ({
        url: "/add-testimonial",
        method: "POST",
        body: testimonialInfo,
      })
    })

  }),
});

export const { useGetTestimonialsQuery, useAddTestimonialMutation } = testimonialApi;
