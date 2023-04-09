import './watchlist.css'
import { useAuthContext } from '../../contexts/AuthContext'
import CatalogueItem from '../movieCatalogue/catalogueItem/CatalogueItem'
import { Link } from 'react-router-dom'
import { useMovieContext } from '../../contexts/MovieContext'

const Watchlist = () => {
  const { userId } = useAuthContext()
  const { watchlist } = useMovieContext()

  const ownerList = watchlist.filter(x => x._ownerId === userId)

  return (
    <div className='flex-center'>
      <div className='container-default' id="collection-container">
        <h1>Watchlist</h1>
        <div className='wrap'>
          {ownerList.map(x => (
            <Link to={`/movie/${x.imdb_id}`} className='link'><CatalogueItem key={x._id} movieId={x.imdb_id} title={x.title} /></Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Watchlist
