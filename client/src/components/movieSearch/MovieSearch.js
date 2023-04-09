import './movieSearch.css'
import { useMovieContext } from '../../contexts/MovieContext'
import { Link } from 'react-router-dom'
import CatalogueItem from '../movieCatalogue/catalogueItem/CatalogueItem'

const MovieSearch = () => {
  const { search } = useMovieContext()

  return (
    <div className='flex-center'>
      <div className='container-default container-big'>
      <h1 style={{textAlign: 'center'}}>Search Results</h1>
        <div className='wrap'>
        {search.map(x => (
            <Link to={`/movie/${x.imdb_id}`} className='link'><CatalogueItem movieId={x.imdb_id} title={x.title} /></Link>
          ))}
          </div>
      </div>
    </div>
  )
}

export default MovieSearch
