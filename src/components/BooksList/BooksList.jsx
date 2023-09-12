import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchBooks, changeParams } from "../../redux/bookSLice"
import BookItem from "../BookItem/BookItem"

const BooksList = () => {
    const dispatch = useDispatch()

    const params = useSelector(state => state.books.params)
    const isLoading = useSelector(state => state.books.isLoading)
    const total = useSelector(state => state.books.total)
    const books = useSelector(state => state.books.books)

    const fetchMoreBooks = () => {
        dispatch(changeParams({ startIndex: params.startIndex + 30 }))
    }
    useEffect(() => {
        dispatch(fetchBooks(params))
    }, [params])

    return (
        <div className="wrapper">
            {books?.length && !isLoading && <h1>Found {total} results</h1>}
            {!books && !isLoading && <h1>No books</h1>}
            {isLoading && <h1>Loading...</h1>}
            <div className="books-list">
                {!!books?.length && books.map(book => <BookItem key={book.id} {...book} />)}
            </div>
            {books && <button onClick={fetchMoreBooks}>More books</button>}
        </div>
    )
}

export default BooksList