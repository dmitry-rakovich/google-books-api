import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_URL } from "../../constants"

const Book = () => {
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
                book && <div className="bookpage">
                    <div>
                        <img src={book.volumeInfo.imageLinks.medium} width={500} alt={book.volumeInfo.title} />
                    </div>
                    <div>
                        <p>{book && book.volumeInfo.categories.join('/ ')}</p>
                        <h1>{book.volumeInfo.title}</h1>
                        <p>{book && book.volumeInfo.authors.join(', ')}</p>
                        <p>{book && book.volumeInfo.description}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default Book