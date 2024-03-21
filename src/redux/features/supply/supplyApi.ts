import { baseApi } from "../../api/baseApi";

export const supplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSupplies: builder.query({
      query: () => ({
        url: "/supplies",
        method: "GET",
      }),
      providesTags: ["supplies"],
    }),
    getSingleSupply: builder.query({
      query: (id) => ({
        url: `/supplies/${id}`,
        method: "GET",
      }),
      providesTags: ["supplies"],
    }),
    createSupply: builder.mutation({
      query: (supplyInfo) => ({
        url: "/create-supply",
        method: "POST",
        body: supplyInfo,
      }),
      invalidatesTags: ["supplies"],
    }),
    updateSupply: builder.mutation({
      query: (args) => {
        return {
          url: `/update-supply/${args?.id}`,
          method: "PUT",
          body: args?.data,
        }
      },
      invalidatesTags: ["supplies"],
    }),
    deleteSupply: builder.mutation({
      query: (id) => ({
        url: `/delete-supply/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["supplies"],
    }),
  }),
});

export const {
  useGetSuppliesQuery,
  useGetSingleSupplyQuery,
  useCreateSupplyMutation,
  useDeleteSupplyMutation,
  useUpdateSupplyMutation,
} = supplyApi;

