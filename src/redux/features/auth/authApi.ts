import {baseApi} from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userInfo) => ({
        url: '/register',
        method: 'POST',
        body: userInfo
      })
    }),
    loginUser: builder.mutation({
      query: (userInfo) => ({
        url: '/login',
        method: 'POST',
        body: userInfo
      })
    }),
    getUsers: builder.query({
      query: () => {
        return {
          url: '/users',
          method: 'GET'
        }
      }
    })
  })
})  


export const { useRegisterUserMutation, useLoginUserMutation, useGetUsersQuery } = authApi;