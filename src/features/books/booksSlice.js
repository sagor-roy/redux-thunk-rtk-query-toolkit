import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchBooks } from "./booksAPI"

export const books = createAsyncThunk(
    'books/fetchBook',
    async () => {
        const response = await fetchBooks();
        return response;
    }
)

const initialState = {
    books: [],
    isLoading: false,
    isError: false,
    error: ''
}

const booksSlice = createSlice({
    name: 'books',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(books.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(books.fulfilled, (state, action) => {
                state.isLoading = false;
                state.books = action.payload;
            })
            .addCase(books.rejected, (state, action) => {
                state.isError = true;
                state.error = action.payload?.message
            })
    }
})


export default booksSlice.reducer;