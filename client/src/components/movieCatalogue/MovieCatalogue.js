import { useEffect, useState } from 'react'
import './movieCatalogue.css'
import * as movieService from '../../services/movieService'
import CatalogueItem from './catalogueItem/CatalogueItem'
import { Link } from 'react-router-dom'

const MovieCatalogue = () => {
  const [movies, setMovies] = useState([])


  useEffect(() => {
    movieService.getMovieList()
      .then(res => {
        setMovies([...res])
      })
  }, [])

  return (
    <div className='flex-center'>
      <div className='container-default container-big'>
        <h1 style={{textAlign: 'center'}}>Movies</h1>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
          {movies.map(x => (
            <Link to={`/movie/${x.imdb_id}`} className='link'><CatalogueItem movieId={x.imdb_id} title={x.title} /></Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieCatalogue
