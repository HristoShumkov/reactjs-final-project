import { useEffect, useState } from "react"
import * as movieService from '../../../services/movieService'
import './catalogueItem.css'

const CatalogueItem = ({movieId,title}) => {
    const [data,setData] = useState({
        title: "",
        image_url: "",
        year: "",
    })

    useEffect(() => {
     movieService.getDetails(movieId) 
     .then(res=> {
        setData({
            ...res
        })
     })
    },[movieId])


  return (
    <div className="item-container">
        <img src={data.image_url} alt='poster' style={{height: '200px'}}/>
      <p>{data.title} ({data.year})</p>
    </div>
  )
}

export default CatalogueItem
