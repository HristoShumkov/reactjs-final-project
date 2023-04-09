import React, { useState } from 'react'
import { FaStar} from 'react-icons/fa'
const StarRating = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1
        
        return (
            <label>
                <input type='radio' name='rating' value={ratingValue} onClick={() => setRating(ratingValue)} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}/>
                <FaStar size={100} className='star' color={ratingValue <= (hover || rating ? 'yellow' : 'gray')} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}/>
            </label>
        )
        })}
    </div>
  )
}

export default StarRating
