import {createContext, useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import * as movieService from '../services/movieService'

import RatingModal from '../components/movieDetails/ratingModal/RatingModal'

import { useAuthContext } from './AuthContext'

export const MovieContext = createContext()



export const MovieProvider = ({children}) => {

    const [search, setSearch] = useState([])
    const [watchlist, setWatchlist] = useState([])
    const [watchItem, setWatchItem] = useState({}) 
    const [ratedMovies, setRatedMovies] = useState([])
    const [ratedItem, setRatedItem] = useState([])
    const [movie, setMovie] = useState({
      imdb_id: "",
      banner: "",
      plot: "",
      rating: "",
      title: "",
      trailer: "",
      year: "",
  
    })
    const [isAdded, setIsAdded] = useState(false)
    const [isRated, setIsRated] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const navigate = useNavigate()
   
    const {auth} = useAuthContext()
    const watchlistService = movieService.watchlistFactory(auth.accessToken)
    const ratingService = movieService.ratingFactory(auth.accessToken)
  
    useEffect(() => {
      watchlistService.getWatchlist()
        .then(res => {
          setWatchlist(res)
        })
  
      ratingService.getReviewedMovies()
      .then(res => {
        setRatedMovies(res)
      })
  
    }, [])
  
    const onSearchSubmit = async (value) => {
      const { ...data } = value
      if (data.searchInput) {
        try {
          const result = await movieService.getSearchResult(data.searchInput)
  
          setSearch(result.results)
  
          navigate('/results')
        }
        catch (error) {
          console.log(error)
        }
      }
    }
  
  
    const onMovieCollectionCheck = (movie) => {
      const watchlistSearch = watchlist.filter(x => x._ownerId === auth._id).find(x => x.imdb_id === movie.imdb_id)
      const ratingSearch = ratedMovies.filter(x => x._ownerId === auth._id).find(x => x.imdb_id === movie.imdb_id)
  
      if (watchlistSearch) {
        setIsAdded(true)
      } else {
        setIsAdded(false)
      }
  
      if (ratingSearch) {
        setIsRated(true)
      } else {
        setIsRated(false)
      }
  
      setWatchItem(watchlistSearch)
  
      setRatedItem(ratingSearch)
    }
  
    const onWatchlistAdd = async (data) => {
      const addedMovie = await watchlistService.addToWatchlist(data)
  
      setWatchlist(state => [...state, addedMovie])
  
      setWatchItem(addedMovie)
  
      setIsAdded(true)
    }
  
    const onWatchlistDelete = () => {
      watchlistService.removeFromWatchlist(watchItem._id)
  
      setIsAdded(false)
  
      setWatchlist(state => state.filter(x => x._id !== watchItem._id))
  
      setWatchItem({})
    }
  
    const onMovieDetailLoad = (data) => {
      setMovie({...data})
    }
  
    const onModalOpen = () => {
      setModalOpen(true)
    }
  
    const onModalClose = () => {
      setModalOpen(false)
    }
  
    const onRateMovie = async (rating) => {
      const movieRating = await ratingService.rateMovie({...movie, userRating: rating})
  
      setRatedMovies(state => [...state, movieRating])
  
      setRatedItem(movieRating)
  
      setIsRated(true)
  
      setModalOpen(false)
    }
    
    const onEditRating = async (rating) => {
      const movieRating = await ratingService.editRating(ratedItem._id, {...movie, userRating: rating})
  
      setRatedMovies(state => state.map(x => x._id === movieRating._id ? movieRating : x))
  
      setRatedItem(movieRating)
  
      setIsRated(true)
  
      setModalOpen(false)
    }
  
    const onRemoveRating = async () => {
      ratingService.removeRating(ratedItem._id)
     
      setRatedMovies(state => state.filter(x => x._id !== ratedItem._id)) 
  
      setRatedItem({})
  
      setIsRated(false)
  
      setModalOpen(false)
    }

    const modalIsOpen = () => {
      if(modalOpen) {
        return true
      }
      return false
    }
    
  


    const contextValues = {
        onSearchSubmit,
        onMovieCollectionCheck,
        onWatchlistAdd,
        onWatchlistDelete,
        onRateMovie,
        onEditRating,
        onRemoveRating,
        onModalOpen,
        onModalClose,
        modalIsOpen,
        onMovieDetailLoad,
        modalOpen: modalOpen,
        movie: movie,
        isAdded: isAdded,
        search: search,
        watchlist: watchlist,
        watchItem: watchItem,
        ratedMovies: ratedMovies,
        ratedItem: ratedItem,
        isRated: isRated,
      }

  return (
    <MovieContext.Provider value={contextValues}>
        {modalOpen && <RatingModal />}
      {children}
    </MovieContext.Provider>
  )
}

export const useMovieContext = () => {
    const context = useContext(MovieContext);

    return context;
}


