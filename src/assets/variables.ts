const urlBase = "http://localhost:5555/api"
const movieFetch = "/movie"
const tv = "/tv"
const images = "/images/"
const mediaId = "?mediaId="

const movieLink = urlBase + movieFetch
const tvShowLink = urlBase + tv

export const logoMovieLink = movieLink + images
export const logoTvShowLink = tvShowLink + images

export const detailsMovieLink = movieLink + mediaId
export const detailsTvShowLink = tvShowLink + mediaId

export const upcomingMovies = movieLink + "/upcoming"
export const popularMovie = movieLink + "/popular"
export const popularTV = tvShowLink + "/popular"
export const onTheAir = tvShowLink + "/on_the_air"
export const topRated = tvShowLink + "/top_rated"
export const multi = urlBase + "/multi?query="

export const LEFT = "left"
export const RIGHT = "right"

//String variables
export const movie = "movie"
export const serie = "serie"

export const imgLink = "http://image.tmdb.org/t/p/"

export const buttonClass =
  "fw-bold px-5 py-2 text-capitalize shadow-sm me-2 mb-2 rounded-2 border-00"
