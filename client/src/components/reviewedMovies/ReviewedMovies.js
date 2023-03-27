import './reviewedMovies.css'
import poster from '../../assets/movie-placeholder.jpg'
import {FaStar} from 'react-icons/fa'

const ReviewedMovies = () => {
  return (
    <div className='flex-center'>
      <div className='container-default size-large'>
        <h1 style={{textAlign: 'center'}}>My Reviewed Movies</h1>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <div className='reviewed-movie'>
          <img src={poster} alt='poster' />
          <p>American Psycho (2000)</p>
          <p className='rating'><FaStar style={{color: 'var(--color-gold)', marginRight: '5px'}}/>8</p>
        </div>
        <div className='reviewed-movie'>
          <img src={poster} alt='poster' />
          <p>American Psycho (2000)</p>
          <p className='rating'><FaStar style={{color: 'var(--color-gold)', marginRight: '5px'}}/>8</p>
        </div>
        <div className='reviewed-movie'>
          <img src={poster} alt='poster' />
          <p>American Psycho (2000)</p>
          <p className='rating'><FaStar style={{color: 'var(--color-gold)', marginRight: '5px'}}/>8</p>
        </div>
        <div className='reviewed-movie'>
          <img src={poster} alt='poster' />
          <p>American Psycho (2000)</p>
          <p className='rating'><FaStar style={{color: 'var(--color-gold)', marginRight: '5px'}}/>8</p>
        </div>
        <div className='reviewed-movie'>
          <img src={poster} alt='poster' />
          <p>American Psycho (2000)</p>
          <p className='rating'><FaStar style={{color: 'var(--color-gold)', marginRight: '5px'}}/>8</p>
        </div>
        <div className='reviewed-movie'>
          <img src={poster} alt='poster' />
          <p>American Psycho (2000)</p>
          <p className='rating'><FaStar style={{color: 'var(--color-gold)', marginRight: '5px'}}/>8</p>
        </div>
        <div className='reviewed-movie'>
          <img src={poster} alt='poster' />
          <p>American Psycho (2000)</p>
          <p className='rating'><FaStar style={{color: 'var(--color-gold)', marginRight: '5px'}}/>8</p>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default ReviewedMovies
