import type { RequestOptions } from "./types"

const urlBase = "https://api.themoviedb.org/3"
const movie = "/movie/"
const tv = "/tv/"
const langAndPage = "?language=en-US&page=1"
export const movieLink = urlBase + movie
export const tvShowLink = urlBase + tv

export const upcomingMovies = movieLink + "upcoming" + langAndPage
export const popularMovie = movieLink + "popular" + langAndPage
export const popularTV = tvShowLink + "popular" + langAndPage
export const onTheAir = tvShowLink + "on_the_air" + langAndPage
export const topRated = tvShowLink + "top_rated" + langAndPage

export const multiStart = urlBase + "/search/multi?query="
export const multiEnd = "&include_adult=false&" + langAndPage

export const logosLinkEnd = "/images?include_image_language=en-US"

const Auth =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2ZlOGNmMGRmZmQ1NGI0ZmFmMTRlYzkzZjliOTViZCIsIm5iZiI6MTc3MTI4MjEzNC41NzIsInN1YiI6IjY5OTM5ZWQ2OTcxN2QwZGM5ZDA2NWE0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bbMQkik7cmt6uK6yP5WsuRlItQgQkkkeoH7ycPiJKAg"

export const options: RequestOptions = {
  headers: {
    Authorization: Auth,
  },
}

export const LEFT = "left"
export const RIGHT = "right"
