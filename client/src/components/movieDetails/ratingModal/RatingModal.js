import './ratingModal.css'
import { useEffect, useState } from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { useMovieContext } from '../../../contexts/MovieContext'

const RatingModal = () => {
    const { onModalClose, onRateMovie, onEditRating, onRemoveRating, isRated, ratedItem } = useMovieContext()
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    useEffect(() => {
        isRated && setRating(ratedItem.userRating)
    }, [])

    return (
        <div className="flex-center modal-bg">
            <button className='button-secondary' id='button-close' onClick={onModalClose}>X</button>
            <div className="container-default container-modal">
                <h1 style={{ margin: '10px 0' }}>Rate this movie</h1>
                <ul>
                    {[...Array(10)].map((star, i) => {
                        const ratingValue = i + 1

                        return (
                            <>
                                <li
                                    onClick={() => setRating(ratingValue)}
                                    onMouseEnter={() => setHover(ratingValue)}
                                    onMouseLeave={() => setHover(null)}
                                >
                                    {i < (hover || rating) ? <FaStar size={28} className='star active' /> : <FaRegStar size={28} className='star' />}
                                    {/* <FaStar
                                className='star'
                                size={20}
                                color={ratingValue <= (hover || rating) ? 'blue' : 'yellow'}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                            />  */}
                                </li>
                            </>
                        )
                    })}
                </ul>
                <button className='button-main' onClick={() => !isRated ? onRateMovie(rating) : onEditRating(rating)}>Rate</button>
                {isRated && <button className='button-secondary' onClick={() => onRemoveRating()}>Remove rating</button>}
            </div>
        </div>
    )
}

export default RatingModal
