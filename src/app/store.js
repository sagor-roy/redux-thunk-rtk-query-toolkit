import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import booksReducer from '../features/books/booksSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    books: booksReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
