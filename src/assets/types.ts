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
  title: string
  original_title: string
  release_date: string
  video: boolean
}

export type TvShowTypes = GenericMediaTypes & {
  origin_country: string[]
  first_air_date: string
  name: string
  original_name: string
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
  headers: HeadersInit
}
