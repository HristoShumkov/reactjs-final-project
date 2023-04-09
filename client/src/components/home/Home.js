import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { images } from '../../constants/HomepageImages'
import SearchBar from '../searchBar/SearchBar'
import CatalogueItem from '../movieCatalogue/catalogueItem/CatalogueItem'

import * as movieService from '../../services/movieService'
import './home.css'

const Home = () => {
  const [bgImage, setBgImage] = useState('')
  const [popularMovies, setPopularMovies] = useState([])


console.log(popularMovies)

  useEffect(() => {
    setBgImage(images[Math.floor(Math.random()*images.length)])

    movieService.getMovieList()
      .then(res => {
        setPopularMovies([...res])
      })
  },[])

  return (
    <div className='flex-center'>
      <section className='content-main' style={{backgroundImage: `linear-gradient(to bottom, rgba(154, 134, 4, 0.52), rgba(210, 165, 1, 0.73)), url(${bgImage})`}}>
          <h1>Welcome to MovieBox</h1>
          <p>Discover your next favorite movie with us.</p>
          <div className='search'><SearchBar /></div>
      </section>
      <section className='popular-movies'>
        <div className='container-default'>
          <div className='movie-list-header'>
            <h2>Popular Movies</h2>
            <Link to='/movies' id='view-more'>View more</Link>
          </div>
          <div className='movie-list'>
          {popularMovies.slice(13,28).map(x => (
            <Link to={`/movie/${x.imdb_id}`} className='link'><CatalogueItem key={x._id} movieId={x.imdb_id} title={x.title} /></Link>
          ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
