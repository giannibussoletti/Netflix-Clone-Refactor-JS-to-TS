import type { Dispatch, ForwardRefExoticComponent, RefAttributes, SetStateAction } from "react"
import type { LinkProps } from "react-router"

export type StringTypes = {
  value: string
}

export type FooterTypes = {
  footerArray: string[]
}

type DateRange = {
  maximum: string
  minimum: string
}

type GenericMediaTypes = {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  original_language: string
  overview: string
  popularity: number
  poster_path: string | null
  softcore: boolean
  vote_average: number
  vote_count: number
}

export type MovieTypes = GenericMediaTypes & {
  media_type?: "movie"
  title: string
  original_title: string
  release_date: string
  video: boolean
}

export type TvShowTypes = GenericMediaTypes & {
  media_type?: "tv"
  name: string
  original_name: string
  first_air_date: string
  origin_country: string[]
}

type PersonResultTypes = {
  adult: boolean
  id: number
  name: string
  original_name: string
  media_type: "person"
  popularity: number
  gender: number
  known_for_department: string
  profile_path: string | null
  known_for: (MovieTypes | TvShowTypes)[]
}

export type MultiSearchResult = MovieTypes | TvShowTypes | PersonResultTypes

export type MultiSearchResponse = {
  page: number
  results: MultiSearchResult[]
  total_pages: number
  total_results: number
}

type PaginatedResponse<T> = {
  page: number
  results: T[]
  total_pages: number
  total_results: number
  dates?: DateRange
}

export type MovieListResponse = PaginatedResponse<MovieTypes>
export type TvShowListResponse = PaginatedResponse<TvShowTypes>

export type PromiseTypes = {
  apiLink: string
}

export type RequestOptions = {
  headers: {
    Authorization: string
  }
}

export type useStateTypes = {
  setListPopularMovie?: Dispatch<SetStateAction<MovieTypes[] | TvShowTypes[] | undefined>>
  setCarouselMovie?: Dispatch<SetStateAction<MovieTypes[] | TvShowTypes[] | undefined>>
  setTvTopRated?: Dispatch<SetStateAction<MovieTypes[] | TvShowTypes[] | undefined>>
  setListPopularTV?: Dispatch<SetStateAction<MovieTypes[] | TvShowTypes[] | undefined>>
  setCarouselSeries?: Dispatch<SetStateAction<MovieTypes[] | TvShowTypes[] | undefined>>
  setResults?: Dispatch<SetStateAction<(MovieTypes | TvShowTypes)[] | undefined>>
  setFirstSpinner?: Dispatch<SetStateAction<boolean>>
  setSecondSpinner?: Dispatch<SetStateAction<boolean>>
  setThirdSpinner?: Dispatch<SetStateAction<boolean>>
  search?: string | undefined
}

export type FhCarouselType = {
  fhCarouselArrays?: MovieTypes[] | TvShowTypes[] | undefined
}

export type MovieArrayTypes = FhCarouselType & {
  firstSpinner: boolean
  listPopularMovie: MovieTypes[] | TvShowTypes[] | undefined
}

export type TvShowArrayTypes = FhCarouselType & {
  thirdSpinner: boolean
  listPopularTV: MovieTypes[] | TvShowTypes[] | undefined
}

export type AppComponentsTypes = FhCarouselType &
  MovieArrayTypes &
  TvShowArrayTypes & {
    secondSpinner: boolean
    tvTopRated: MovieTypes[] | TvShowTypes[] | undefined
  }

export type SliderMediaTypes = {
  responseOK: boolean
  title: string
  array_path: MovieTypes[] | TvShowTypes[] | undefined
}

export type SingleSlideTypes = {
  uniqueId: number
  posterLink: string | null
  originalTitle: string
}

export type NavBarElementTypes = {
  buttonName: string
  classObj: string
  typeOf: ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>
  pageLink: string
}

export type NavBarFetchTypes = {
  headers: RequestOptions["headers"]
}
