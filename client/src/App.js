import './App.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import MovieCatalogue from './components/movieCatalogue/MovieCatalogue';
import Watchlist from './components/watchlist/Watchlist';
import MovieDetails from './components/movieDetails/MovieDetails';
import MovieSearch from './components/movieSearch/MovieSearch';
import Navbar from './components/navbar/Navbar';
import Register from './components/register/Register';
import ReviewedMovies from './components/reviewedMovies/ReviewedMovies';
import UserEdit from './components/userEdit/UserEdit';
import { Routes, Route, useNavigate} from 'react-router-dom'
import { AuthContext } from './contexts/AuthContext';
import * as userService from './services/userService';
import * as movieService from './services/movieService'
import { useState } from 'react';


function App() {
  const [auth, setAuth] = useState({})
  const [search,setSearch] = useState('')
  const navigate = useNavigate()
  const onLoginSubmit = async (values) => {
    try {
      const result = await userService.login(values)

      setAuth(result)

    } catch (error) {
      console.log(userService.login(values))
    }
    navigate('/')
  }

  const onSearchSubmit = async (value) => {
    const {...data} = value
    try {
      const result = await movieService.getSearchResult(data.searchInput)

      setSearch(data.searchInput)

      console.log(result)
    }
    catch (error) {
      console.log(error)
    }
  }
  

  const onRegisterSubmit = async (data) => {
    try {
      const result = await userService.register(data)

      setAuth(result)

    } catch (error) {
      console.log(error)
    }

    navigate('/')
  }
  
  const onLogout = async () => {
    await userService.logout()

    setAuth({})
  }
  

  const context = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    onSearchSubmit,
    search: search,
    profilePic: auth.pfp,
    username: auth.username,
    isAuthenticated: !!auth.accessToken,
  }

  return (
    <>
      <AuthContext.Provider value={context}>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/edit' element={<UserEdit />} />
          <Route path='/catalogue' element={<MovieCatalogue />} />
          <Route path='/movie/:movieId' element={<MovieDetails />} />
          <Route path='/searchresult' element={<MovieSearch />} />
          <Route path='/myreviews' element={<ReviewedMovies />} />
          <Route path='/collections' element={<Watchlist />} />
        </Routes>
      </AuthContext.Provider>


      {/*
      
      */}
    </>
  );
}

export default App;
