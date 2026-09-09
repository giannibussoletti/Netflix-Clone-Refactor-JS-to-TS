import type { RequestOptions } from "./types"

export const upcomingMovies = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
export const popularMovie = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
export const popularTV = "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1"
export const onTheAir = "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1"
export const topRated = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"
export const multiBefore = `https://api.themoviedb.org/3/search/multi?query=`
export const multiAfter = `&include_adult=false&language=en-US&page=1`

const Auth =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2ZlOGNmMGRmZmQ1NGI0ZmFmMTRlYzkzZjliOTViZCIsIm5iZiI6MTc3MTI4MjEzNC41NzIsInN1YiI6IjY5OTM5ZWQ2OTcxN2QwZGM5ZDA2NWE0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bbMQkik7cmt6uK6yP5WsuRlItQgQkkkeoH7ycPiJKAg"

export const options: RequestOptions = {
  headers: {
    Authorization: Auth,
  },
}
