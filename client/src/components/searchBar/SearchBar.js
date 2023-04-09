import { useForm } from "../../hooks/useForm"
import { FaSearch } from "react-icons/fa"
import './searchBar.css'
import { useMovieContext } from "../../contexts/MovieContext"


const SearchBar = () => {
    const {onSearchSubmit } = useMovieContext()
    const { values, changeHandler, onSubmit } = useForm({
        searchInput: ""
      }, onSearchSubmit)
  return (
    <form onSubmit={onSubmit}>
        <div className='align-center'>
          <input type='text' id='search-input' name='searchInput' placeholder='Search...' value={values.searchInput} onChange={changeHandler} />
          <button type='submit' className='search-submit'><FaSearch /></button>
        </div>
      </form>
  )
}

export default SearchBar
