import { useDispatch } from "react-redux"
import { useState } from "react"
import { changeParams } from "../../redux/bookSLice"
import { useNavigate } from "react-router-dom"

const Search = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [query, setQuery] = useState('')

  const searchBooks = (e) => {
    if (e.code === 'Enter' || e.type === 'click') {
      dispatch(changeParams({q:query, startIndex: 0}))
      navigate('/')
    }
  }


  return (
    <div className="search" onKeyDown={searchBooks}>
      <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search" />
      <button disabled={query.trim() ? false : true} onClick={searchBooks}>Search</button>
    </div>
  )
}

export default Search