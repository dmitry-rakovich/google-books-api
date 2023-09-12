import { Link } from "react-router-dom"

const BookItem = ({id, volumeInfo: {title, imageLinks, authors, categories}}) => {
  return (
    <div className="book-item">
      <Link to={`/book/${id}`}>
        {imageLinks && <img src={imageLinks.thumbnail} alt="" />}
        {categories && <p><b>{categories[0]}</b></p>}
        <p>{title}</p>
        {authors && <p><i>{authors.join(', ')}</i></p>}
      </Link>
    </div>
  )
}

export default BookItem