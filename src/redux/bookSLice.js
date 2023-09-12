import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../constants";
const API_KEY = import.meta.env.VITE_API_KEY

const initialState = {
    books: [],
    isLoading: false,
    error: null,
    total: 0,
    params: {
        q: '_',
        subject: 'all',
        orderBy: 'relevance',
        startIndex: 0
    }
}

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async ({
        q,
        subject = 'all',
        orderBy = 'relevance',
        startIndex = 0
    }) => {
        const data = await fetch(`${API_URL}?q=${q}&subject=${subject}&orderBy=${orderBy}&maxResults=30&startIndex=${startIndex}&key=${API_KEY}`).then(response => response.json())
        return data
    }
)

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        changeParams: (state, action) => {
            state.params = {...state.params, ...action.payload}
        }
    },
    extraReducers: {
        [fetchBooks.pending]: (state) => {
            state.isLoading = true
            state.error = null
        },
        [fetchBooks.fulfilled]: (state, action) => {
            state.isLoading = false
            if(state.params.startIndex === 0) {
                state.books = action.payload.items
            } else state.books = [...state.books, ...action.payload.items]
            state.total = action.payload.totalItems
        },
        [fetchBooks.rejected]: (state, action) => {
            state.error = action.payloads
        },
    }
})



export const {changeParams} = bookSlice.actions
export default bookSlice.reducer