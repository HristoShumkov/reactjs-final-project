import './watchlist.css'
import poster from '../../assets/movie-placeholder.jpg'

const Watchlist = () => {
  return (
    <div className='flex-center'>
      <div className='container-default collection-container'>
        <h1>Watchlist</h1>
        <div className='list-container'>
        <div className='collection-list'>
          <img src={poster} alt='poster' />
          <p>My Movie</p>
        </div>
        <div className='collection-list'>
          <img src={poster} alt='poster' />
          <p>My Movie</p>
        </div>
        <div className='collection-list'>
          <img src={poster} alt='poster' />
          <p>My Movie</p>
        </div>
        <div className='collection-list'>
          <img src={poster} alt='poster' />
          <p>My Movie</p>
        </div>
        <div className='collection-list'>
          <img src={poster} alt='poster' />
          <p>My Movie</p>
        </div>
        <div className='collection-list'>
          <img src={poster} alt='poster' />
          <p>My Movie</p>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Watchlist
