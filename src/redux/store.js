import {configureStore} from '@reduxjs/toolkit'
import bookReducer from './bookSLice'

export default configureStore({
    reducer: {
        books: bookReducer
    }
})