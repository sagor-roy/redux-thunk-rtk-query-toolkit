// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
    tagTypes: ['Books'],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => `/books`,
            providesTags: (result) =>
                result ? [...result.map(({ id }) => ({ type: 'Books', id })), { type: 'Books', id: 'LIST' }] : [{ type: 'Books', id: 'LIST' }],
        }),
        addBooks: builder.mutation({
            query: (data) => ({
                url: '/books',
                method: 'POST',
                body: data
            }),
            invalidatesTags: [{ type: 'Books', id: 'LIST' }],
        }),
        getBook: builder.query({
            query: (id) => `/books/${id}`,
            providesTags: (result, error, id) => [{ type: 'Books', id }],
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: (result, error, id) => [{ type: 'Books', id }]
        })
    })
})

export const {
    useGetBooksQuery,
    useAddBooksMutation,
    useGetBookQuery,
    useDeleteBookMutation
} = apiSlice