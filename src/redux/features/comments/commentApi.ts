import { baseApi } from "../../api/baseApi";

export const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => ({
        url: "/comments",
        method: "GET"
      }),
      providesTags: ["comments"]
    }),
    addComment: builder.mutation({
      query: (commentInfo) => ({
        url: "/add-comment",
        method: "POST",
        body: commentInfo,
      }),
      invalidatesTags: ["comments"]
    })

  }),
});

export const { useGetCommentsQuery, useAddCommentMutation } = commentApi;
