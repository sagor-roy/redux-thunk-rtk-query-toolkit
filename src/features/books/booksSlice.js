import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createBooks, deleteBooks, fetchBooks, updateBooks } from "./booksAPI"

// book fetch async
export const books = createAsyncThunk(
    'books/fetchBook',
    async (filter = false) => {
        const response = await fetchBooks(filter);
        return response;
    }
)

// book create async
export const create = createAsyncThunk(
    "books/createBook",
    async (data) => {
        const response = await createBooks(data)
        return response;
    }
)

// book delete async
export const deleteBook = createAsyncThunk(
    "books/deleteBook",
    async (id) => {
        const response = await deleteBooks(id)
        return response;
    }
)

// book update async
export const updateBook = createAsyncThunk(
    "books/updateBook",
    async (data) => {
        const response = await updateBooks(data)
        return response;
    }
)

// initai state
const initialState = {
    books: [],
    book: {},
    isLoading: false,
    isError: false,
    error: ''
}

// book reducer
const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        singleBook: (state, action) => {
            state.book = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            // book fetch 
            .addCase(books.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(books.fulfilled, (state, action) => {
                state.isLoading = false;
                state.books = action.payload;
            })
            .addCase(books.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.payload?.message
            })
            // book create
            .addCase(create.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(create.fulfilled, (state, action) => {
                state.isLoading = false;
                state.books.push(action.payload);
            })
            .addCase(create.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.payload?.message
            })
            // book delete
            .addCase(deleteBook.fulfilled, (state, action) => {
                state.isLoading = false;
                state.books = state.books.filter(book => book.id !== action.payload)
            })
            // book update
            .addCase(updateBook.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateBook.fulfilled, (state, action) => {
                const { id } = action.payload
                state.isLoading = false;
                state.book = {}
                const index = state.books.findIndex(book => book.id === id)
                if (index !== -1) {
                    state.books[index] = { ...state.books[index], ...action.payload }
                }
            })
            .addCase(updateBook.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.payload?.message
            })
    }
})

export const { singleBook } = booksSlice.actions;
export default booksSlice.reducer;