import { createSlice } from '@reduxjs/toolkit';

export const flightSlice = createSlice({
    name: 'flight',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload); 
        },
        remove: (state, action) => {
            return state.filter((item, index) => index !== action.payload);
        }
    },
});

export const { add, remove } = flightSlice.actions;

export default flightSlice.reducer;
