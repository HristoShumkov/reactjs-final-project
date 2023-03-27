import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar, AiOutlinePlusCircle } from 'react-icons/ai'
import './movieDetails.css'
import * as movieService from '../../services/movieService';


const MovieDetails = () => {
  const { movieId } = useParams()

  const [movie, setMovie] = useState({
    imdb_id: "",
    banner: "",
    plot: "",
    rating: "",
    title: "",
    trailer: "",
    year: "",

  })

  useEffect(() => {
    movieService.getDetails(movieId)
      .then(result => {
        setMovie({ ...result })
      })
  }, [movieId])




  return (
    <div className='flex-center'>
      <div className='container-default size-large' id='details-container'>
        <h1>{movie.title} ({movie.year})</h1>
        <section className='ratings'>
          <p className='movie-rating'><AiFillStar style={{color: 'var(--color-gold)'}}/> {movie.rating}</p>
          <button className='button-secondary center'><AiOutlinePlusCircle style={{ fontSize: '24px', marginRight: '5px' }} /> Add to watchlist</button>
          <button className='button-secondary center'><AiFillStar style={{ fontSize: '24px', marginRight: '5px' }} />Rate Movie</button>
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
  )
}

export default MovieDetails
