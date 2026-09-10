import { fetchFunction } from "./fetchs"
import type {
  DetailsResponse,
  MediaImagesResponse,
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
  multiStart,
  multiEnd,
} from "./variables"

export const getUpcoming = ({ setCarouselMovie }: useStateTypes) => {
  fetchFunction<MovieListResponse>({
    apiLink: upcomingMovies,
  })
    .then((data) => {
      if (setCarouselMovie) {
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
      if (setListPopularMovie && setFirstSpinner) {
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
      if (setListPopularTV && setThirdSpinner) {
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
      if (setCarouselSeries) {
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
      if (setSecondSpinner && setTvTopRated) {
        setSecondSpinner(false)
        setTvTopRated(data.results)
      } else throw new Error("errore nella fetch")
    })
    .catch((err) => err)
}
export const getMultiFetch = ({ setResults, linkValue }: useStateTypes) => {
  if (linkValue) {
    fetchFunction<MultiSearchResponse>({
      apiLink: multiStart + linkValue + multiEnd,
    })
      .then((data) => {
        if (setResults) {
          const filteredResults = data.results.filter((person) => person.media_type !== "person")
          setResults(filteredResults)
        }
      })
      .catch((err) => err)
  }
}

export const getDetailsFetch = ({ setMediaDetails, setIsData, linkValue }: useStateTypes) => {
  if (linkValue) {
    fetchFunction<DetailsResponse>({
      apiLink: linkValue,
    })
      .then((data) => {
        if (setMediaDetails && setIsData) {
          setMediaDetails(data)
          setIsData(true)
        } else throw new Error("errore nella fetch")
      })
      .catch((err) => err)
  }
}

export const getLogosFetch = ({ setLogo, linkValue }: useStateTypes) => {
  if (linkValue) {
    fetchFunction<MediaImagesResponse>({
      apiLink: linkValue,
    })
      .then((data) => {
        if (setLogo) {
          setLogo(data.logos[0])
        } else throw new Error("errore nella fetch")
      })
      .catch((err) => err)
  }
}
