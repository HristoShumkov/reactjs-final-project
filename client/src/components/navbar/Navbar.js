import { useState} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'
import SearchBar from '../searchBar/SearchBar'




const Navbar = () => {
  const { isAuthenticated, profilePic, username, onLogout} = useAuthContext()
  const [toggle, setToggle] = useState(false)
  

  return (
    <nav>
      <Link to='/'><img src="/images/logo-main.png" id="logo" alt="MovieBox Logo" /></Link>
      <SearchBar />
      <div className='align-center'>
        <Link to='/movies'><button className="button-secondary">Movie List</button></Link>
        {!isAuthenticated && (
          <Link to="/login"><button className="button-main">Sign in</button></Link>
        )}
        {isAuthenticated && (
          <div className='button-secondary' id='user-button' onClick={() => setToggle(!toggle)}>
            <p>{username}</p>
            <img src={profilePic} alt='pfp' className='pfp-icon' />
            {(toggle && isAuthenticated) && (
              <ul className='option-container'>
                <Link to='/user' style={{ textDecoration: 'none' }}><li className='button-secondary'>User details</li></Link>
                <Link to='/watchlist' style={{ textDecoration: 'none' }}><li className='button-secondary'>My Watchlist</li></Link>
                <Link to='/myreviews' style={{ textDecoration: 'none' }}><li className='button-secondary'>Reviewed Movies</li></Link>
                <div className='divider'></div>
                <li className='button-secondary' onClick={onLogout}>Logout</li>
              </ul>
            )}
          </div>
        )
        }
      </div>
    </nav>
  )
}

export default Navbar
