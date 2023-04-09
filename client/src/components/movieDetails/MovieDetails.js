import { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import './movieDetails.css'
import * as movieService from '../../services/movieService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useMovieContext } from '../../contexts/MovieContext'


const MovieDetails = () => {
  const { movieId } = useParams()
  const {isAuthenticated} = useAuthContext()
  const { onMovieCollectionCheck, onWatchlistAdd, onWatchlistDelete, isAdded, isRated, ratedItem, onModalOpen, movie, onMovieDetailLoad } = useMovieContext()

  useEffect(() => {
    movieService.getDetails(movieId)
      .then(result => {
        onMovieDetailLoad(result)
      })

  }, [movieId])

  return (
    <>
    <div className='flex-center' onLoad={() => onMovieCollectionCheck(movie)}>
      <div className='container-default' id='details-container'>
        <h1>{movie.title} ({movie.year})</h1>
        <section className='ratings'>
          <p className='movie-rating'><AiFillStar style={{ color: 'var(--color-gold)' }} /> {movie.rating}</p>
          {isAuthenticated && (
            <>
              {!isAdded
                ?
                <button className='button-secondary center' onClick={() => onWatchlistAdd(movie)}><AiOutlinePlusCircle style={{ fontSize: '24px', marginRight: '5px' }} /> Add to watchlist</button>
                : <button className='button-secondary center' onClick={() => onWatchlistDelete()}><AiOutlineMinusCircle style={{ fontSize: '24px', marginRight: '5px' }} /> Remove from watchlist</button>
              }
              <button className='button-secondary center' onClick={onModalOpen}><AiFillStar style={{ fontSize: '24px', marginRight: '5px' }} />{!isRated ? 'Rate Movie' : `${ratedItem.userRating}/10`}</button>
            </>
          )}
        </section>
        <section className='visuals'>
          <img src={movie.banner} alt="poster" className='poster' />
          <iframe src={movie.trailer} title='trailer' />
        </section>
        <div className='info'>
          <p>{movie.plot}</p>
        </div>

      </div>
    </div>
    </>
  )
}

export default MovieDetails
