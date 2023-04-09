import requestFactory from "./requester";

const APIUrl = `https://moviesminidatabase.p.rapidapi.com/movie`
const localUrl = `http://localhost:3030/data`

export const getDetails = async (movieId) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e0ea236aa8mshe6e547d84d1974dp1be153jsn2f47db048977',
      'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
    }
  };

  const response = await fetch(`${APIUrl}/id/${movieId}/`, options)
  const result = await response.json()

  return result.results
}

export const getMovieList = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e0ea236aa8mshe6e547d84d1974dp1be153jsn2f47db048977',
      'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
    }
  }

  const response = await fetch(`${APIUrl}/order/byRating/`, options)
  const result = await response.json()

  return Object.values(result.results)
}

export const getSearchResult = async (name) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e0ea236aa8mshe6e547d84d1974dp1be153jsn2f47db048977',
      'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
    }
  };

  const response = await fetch(`${APIUrl}/imdb_id/byTitle/${name}`, options)
  const result = (await response).json()

  return result
}

export const watchlistFactory = (token) => {
  const request = requestFactory(token)
  const watchUrl = `${localUrl}/watchlist`

  const addToWatchlist = async (data) => {
    const result = request.post(`${watchUrl}`, data)

    return result
  }

  const getWatchlist = async () => {
    const result = await request.get(`${watchUrl}`);
    const movies = Object.values(result);

    return movies;
  };

  const removeFromWatchlist = (id) => request.delete(`${watchUrl}/${id}`)


  return {
    addToWatchlist,
    getWatchlist,
    removeFromWatchlist,
  }
}

export const ratingFactory = (token) => {
  const request = requestFactory(token)
  const ratingUrl = `${localUrl}/ratings`

  const getReviewedMovies = async () => {
    const result = await request.get(`${ratingUrl}`)
    const movies = Object.values(result)

    return movies
  }
  

  const rateMovie = async (data) => {
    const result = request.post(`${ratingUrl}`, data)

    return result
  }

  const editRating = async (id, data) => {
    const result = request.put(`${ratingUrl}/${id}`, data)

    return result
  }

  const removeRating = async (id) => {
    const result = request.delete(`${ratingUrl}/${id}`)

    return result
  }

  return {
    getReviewedMovies,
    rateMovie,
    editRating,
    removeRating
  }
  
}




