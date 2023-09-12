import Search from "../Search/Search"
import Sorting  from "../Sorting/Sorting"
const Header = () => {
  return (
    <header>
        <h1>Search for books</h1>
        <Search/>
        <Sorting/>
    </header>
  )
}

export default Header