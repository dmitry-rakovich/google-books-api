import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const API_KEY = import.meta.env.API_KEY
const API_URL = "https://www.googleapis.com/books/v1/volumes?"

const initialState = {
    books: [],
    isLoading: false,
    error: null,
    params: {
        q: '',
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
        const data = await fetch(`${API_URL}q=${q}&subject=${subject}&orderBy=${orderBy}&startIndex=${startIndex}&key=${API_KEY}`).then(response => response.json())
        return data.items
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
                state.books = action.payload
            } else state.books = [...state.books, ...action.payload]
        },
        [fetchBooks.rejected]: (state, action) => {
            state.error = action.payloads
        },
    }
})



export const {changeParams} = bookSlice.actions
export default bookSlice.reducer