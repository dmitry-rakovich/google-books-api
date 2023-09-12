import { Route, Routes } from "react-router-dom"
import BooksList from "./components/BooksList/BooksList"
import Book from "./components/Book/Book"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<BooksList />}/>
        <Route path="/book/:id" element={<Book />}/>
      </Routes>
    </>
  )
}

export default App
