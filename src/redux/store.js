import { configureStore } from '@reduxjs/toolkit';
import flightSlice from './toolkit/flightSlice';

export const store = configureStore({
    reducer: {
        flight: flightSlice
    }
})

export default store;
