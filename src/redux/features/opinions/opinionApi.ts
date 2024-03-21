import { baseApi } from "../../api/baseApi";

export const opinionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOpinions: builder.query({
      query: () => ({
        url: "/opinions",
        method: "GET"
      }),
      providesTags: ["opinions"]
    }),
    addOpinion: builder.mutation({
      query: (opinionInfo) => ({
        url: "/add-opinion",
        method: "POST",
        body: opinionInfo,
      }),
      invalidatesTags: ["opinions"]
    }),
    addComment: builder.mutation({
      query: (args) => ({
        url: `/add-comment/${args.id}`,
        method: "PUT",
        body: args?.data,
      }),
      invalidatesTags: ["opinions"]
    }),

  }),
});

export const { useGetOpinionsQuery, useAddOpinionMutation, useAddCommentMutation } = opinionApi;
