import { fetchFunction } from "./fetchs"
import type {
  MovieListResponse,
  MultiSearchResponse,
  TvShowListResponse,
  useStateTypes,
} from "./types"
import {
  upcomingMovies,
  popularMovie,
  popularTV,
  onTheAir,
  topRated,
  multiBefore,
  multiAfter,
} from "./variables"

export const getUpcoming = ({ setCarouselMovie }: useStateTypes) => {
  fetchFunction<MovieListResponse>({
    apiLink: upcomingMovies,
  })
    .then((data) => {
      if (data && setCarouselMovie) {
        setCarouselMovie(data.results)
      }
    })
    .catch((err) => err)
}

export const getPopularMovies = ({ setListPopularMovie, setFirstSpinner }: useStateTypes) => {
  fetchFunction<MovieListResponse>({
    apiLink: popularMovie,
  })
    .then((data) => {
      if (data && setListPopularMovie && setFirstSpinner) {
        setListPopularMovie(data.results)
        setFirstSpinner(false)
      } else throw new Error("errore nella fetch")
    })
    .catch((err) => err)
}
export const getPopularTvShow = ({ setListPopularTV, setThirdSpinner }: useStateTypes) => {
  fetchFunction<TvShowListResponse>({
    apiLink: popularTV,
  })
    .then((data) => {
      if (data && setListPopularTV && setThirdSpinner) {
        setListPopularTV(data.results)
        setThirdSpinner(false)
      } else throw new Error("errore nella fetch")
    })
    .catch((err) => err)
}
export const getOnTheAir = ({ setCarouselSeries }: useStateTypes) => {
  fetchFunction<TvShowListResponse>({
    apiLink: onTheAir,
  })
    .then((data) => {
      if (data && setCarouselSeries) {
        setCarouselSeries(data.results)
      } else throw new Error("errore nella fetch")
    })
    .catch((err) => err)
}
export const getTopRated = ({ setSecondSpinner, setTvTopRated }: useStateTypes) => {
  fetchFunction<TvShowListResponse>({
    apiLink: topRated,
  })
    .then((data) => {
      if (data && setSecondSpinner && setTvTopRated) {
        setSecondSpinner(false)
        setTvTopRated(data.results)
      } else throw new Error("errore nella fetch")
    })
    .catch((err) => err)
}
export const getMultiFetch = ({ setResults, search }: useStateTypes) => {
  fetchFunction<MultiSearchResponse>({
    apiLink: multiBefore + search + multiAfter,
  })
    .then((data) => {
      if (data && setResults) {
        const filteredResults = data.results.filter((person) => person.media_type !== "person")
        setResults(filteredResults)
      }
    })
    .catch((err) => err)
}
