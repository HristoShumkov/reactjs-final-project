import { useState, useContext, useEffect} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { FaSearch } from 'react-icons/fa'
import * as movieService from '../../services/movieService'
import { useForm } from '../../hooks/useForm'




const Navbar = () => {
  const { isAuthenticated, profilePic, username, onLogout, onSearchSubmit, search } = useContext(AuthContext)
  const [toggle, setToggle] = useState(false)
  const {values,changeHandler,onSubmit} = useForm({
    searchInput: ""
  },onSearchSubmit)

  return (
    <nav>
      <Link to='/'><img src="/images/logo-main.png" id="logo" alt="MovieBox Logo" /></Link>
      <form onSubmit={onSubmit}>
      <div className='align-center'>
        <input type='text' id='search-input' name='searchInput' placeholder='Search...' value={values.searchInput} onChange={changeHandler}/>
        <button type='submit'  className='search-submit'><FaSearch/></button>
      </div>
      </form>
      <div className='align-center'>
        <Link to='/catalogue'><button className="button-secondary">Movie List</button></Link>
        {!isAuthenticated && (
          <Link to="/login"><button className="button-main">Sign in</button></Link>
        )}
        {isAuthenticated && (
          <div className='button-secondary' id='user-button' onClick={() => setToggle(!toggle)}>
            <p>{username}</p>
            <img src={profilePic} alt='pfp' className='pfp-icon' />
          </div>
        )}
        {toggle && (
          <ul className='option-container'>
            <Link to='/collections' style={{ textDecoration: 'none' }}><li className='button-secondary'>My Collections</li></Link>
            <Link to='/myreviews' style={{ textDecoration: 'none' }}><li className='button-secondary'>Reviewed Movies</li></Link>
            <Link to='/edit' style={{ textDecoration: 'none' }}><li className='button-secondary'>Settings</li></Link>
            <div className='divider'></div>
            <li className='button-secondary' onClick={onLogout}>Logout</li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar
