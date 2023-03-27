const baseUrl = `https://moviesminidatabase.p.rapidapi.com/movie`

export const getDetails = async (movieId) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e0ea236aa8mshe6e547d84d1974dp1be153jsn2f47db048977',
      'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
    }
  };

  const response = await fetch(`${baseUrl}/id/${movieId}/`, options)
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

  const response = await fetch(`${baseUrl}/byGen/Action/`, options)
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

  const response = await fetch(`${baseUrl}/imdb_id/byTitle/${name}`, options)
  const result = (await response).json()

  return result
}


