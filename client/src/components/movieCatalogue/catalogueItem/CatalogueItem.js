import { useEffect, useState } from "react"
import * as movieService from '../../../services/movieService'
import './catalogueItem.css'
import { FaStar } from "react-icons/fa"

const CatalogueItem = ({ movieId, rating }) => {
  const [data, setData] = useState({
    title: "",
    image_url: "",
    year: "",
  })

  useEffect(() => {
    movieService.getDetails(movieId)
      .then(res => {
        setData({
          ...res
        })
      })
  }, [movieId])


  return (
    <div className="item-container">
      <img src={data.image_url} alt='poster' style={{ height: '200px' }} />
      {rating && (<p style={{marginBottom: 0}}><FaStar style={{ color: 'var(--color-gold)' }} />{rating}</p>)}
      <p>{data.title} ({data.year})</p>
    </div>
  )
}

export default CatalogueItem
