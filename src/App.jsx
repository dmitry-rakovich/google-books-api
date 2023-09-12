import { Route, Routes } from "react-router-dom"
import BooksList from "./components/BooksList/BooksList"
import BookPage from "./components/BookPage/BookPage"
import Header from "./components/Header/Header"

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<BooksList />}/>
        <Route path="/book/:id" element={<BookPage />}/>
      </Routes>
    </>
  )
}

export default App
