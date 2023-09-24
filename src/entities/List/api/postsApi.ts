import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DataItem } from '../types/data.interface';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<{ data: DataItem[]; count: number }, number>({
      query: (page) => ({
        url: `posts?_limit=${10}&_page=${page}`,
        method: 'GET',
      }),
      merge: (existingData = { data: [], count: 0 }, newData) => ({
        data: [...existingData.data, ...newData.data],
        count: newData.count,
      }),
      transformResponse: (
        data: DataItem[],
        meta
      ): { data: DataItem[]; count: number } => {
        return { data, count: Number(meta?.response?.headers.get('X-Total-Count')) };
      },
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
