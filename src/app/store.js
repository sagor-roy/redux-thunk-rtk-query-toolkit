import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
//import logger from 'redux-logger';
import { apiSlice } from '../services/book/apiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});
