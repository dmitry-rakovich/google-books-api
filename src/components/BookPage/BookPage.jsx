import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_URL } from "../../constants"

const BookPage = () => {
    const {id} = useParams()
    const [book, setBook] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`${API_URL}/${id}`)
            .then(response => response.json())
            .then(data => setBook(data))
            .then(() => setIsLoading(false))
    }, [id])
    return (
        <>
            {isLoading && <h1>Loading...</h1>}
            {
                book && <div className="book-page">
                    <div className="book-image">
                        {book.volumeInfo?.imageLinks && <img src={book.volumeInfo.imageLinks.thumbnail} width={300} alt={book.volumeInfo.title} />}
                    </div>
                    <div className="book-info">
                        <p>{book.volumeInfo?.categories && book.volumeInfo.categories.join('/ ')}</p>
                        <h1>{book.volumeInfo.title}</h1>
                        <p><i>{book.volumeInfo?.authors && book.volumeInfo.authors.join(', ')}</i></p>
                        <div>{book.volumeInfo.description}</div>
                    </div>
                </div>
            }
        </>
    )
}

export default BookPage