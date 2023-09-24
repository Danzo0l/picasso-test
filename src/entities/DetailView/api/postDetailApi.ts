import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DetailView } from '../types/detailView.interface';

export const postDetailApi = createApi({
  reducerPath: 'postDetailApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPostDetail: builder.query<DetailView, number>({
      query: (postId) => ({
        url: `posts/${postId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetPostDetailQuery } = postDetailApi;
