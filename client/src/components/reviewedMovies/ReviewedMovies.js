import './reviewedMovies.css'
import { Link } from 'react-router-dom'
import CatalogueItem from '../movieCatalogue/catalogueItem/CatalogueItem'
import { useAuthContext } from '../../contexts/AuthContext'
import { useMovieContext } from '../../contexts/MovieContext'

const ReviewedMovies = () => {
  const { userId } = useAuthContext()
  const { ratedMovies } = useMovieContext()

  const ownerList = ratedMovies.filter(x => x._ownerId === userId)

  return (
    <div className='flex-center'>
      <div className='container-default' id="size-large">
        <h1 style={{ textAlign: 'center' }}>My Reviewed Movies</h1>
        <div className='wrap'>
          {ownerList.map(x => (
            <Link to={`/movie/${x.imdb_id}`} className='link'><CatalogueItem key={x._id} movieId={x.imdb_id} rating={x.userRating} /></Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReviewedMovies
