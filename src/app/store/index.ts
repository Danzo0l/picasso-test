import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from '../../entities/List/api/postsApi';
import { postDetailApi } from '../../entities/DetailView/api/postDetailApi';

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [postDetailApi.reducerPath]: postDetailApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware, postDetailApi.middleware),
});
