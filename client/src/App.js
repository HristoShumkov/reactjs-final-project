import { Routes, Route} from 'react-router-dom'

import Home from './components/home/Home';
import Login from './components/login/Login';
import MovieCatalogue from './components/movieCatalogue/MovieCatalogue';
import Watchlist from './components/watchlist/Watchlist';
import MovieDetails from './components/movieDetails/MovieDetails';
import MovieSearch from './components/movieSearch/MovieSearch';
import Navbar from './components/navbar/Navbar';
import Register from './components/register/Register';
import ReviewedMovies from './components/reviewedMovies/ReviewedMovies';
import UserDetails from './components/userDetails/UserDetails';
import RouteGuard from './RouteGuard';
import RatingModal from './components/movieDetails/ratingModal/RatingModal';

import { AuthProvider } from './contexts/AuthContext';
import { MovieProvider} from './contexts/MovieContext';

import './App.css';

function App() {
  
  return (
    <>
      <AuthProvider>
        <MovieProvider>
        
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/movies' element={<MovieCatalogue />} />
          <Route path='/results' element={<MovieSearch />} />
          <Route path='/movie/:movieId' element={<MovieDetails />} />
          <Route element={<RouteGuard />}>
            <Route path='/user' element={<UserDetails />} />
            <Route path='/watchlist' element={<Watchlist />} />
            <Route path='/myreviews' element={<ReviewedMovies />} />
          </Route>
        </Routes>
        </MovieProvider>
      </AuthProvider>


      {/*
      
      */}
    </>
  );
}

export default App;
