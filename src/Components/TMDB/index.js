import fetch from 'node-fetch';
const apiKey = "5b4f53fd4b071f315fa4481379073ee7";
const apiUrl = "https://api.themoviedb.org/3/";

const searchMovie = (searchTerm) => {
    console.time('timer1')
    let result
    return fetch(apiUrl + 'search/movie?query=' + searchTerm + '&api_key=' + apiKey)
        .then(res => {
            return res
        }).then(async res => {
            let searchReturn = await res.json()
            return result = await getMovieDetails(searchReturn.results[0].id);
        })
}

const getMovieDetails = (movieID) => {
    let movieData = {}
    return fetch(apiUrl + "movie/" + movieID + "?api_key=" + apiKey)
        .then(res => {
            return res
        }).then(async res => {
            let searchReturn = await res.json()
            movieData.title = searchReturn.title,
                movieData.tagline = searchReturn.tagline,
                movieData.overview = searchReturn.overview,
                movieData.backdropPath = searchReturn.backdrop_path,
                movieData.posterPath = searchReturn.poster_path,
                movieData.releaseDate = searchReturn.release_date,
                movieData.runtime = searchReturn.runtime,
                movieData.revenue = searchReturn.revenue,
                movieData.voteAverage = searchReturn.vote_average
            console.timeEnd('timer1')
            return movieData
        })

}

export default searchMovie;