import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import type { Dispatch, ForwardRefExoticComponent, RefAttributes, SetStateAction } from "react"
import type { LinkProps } from "react-router"

export type StringTypes = {
  value: string
}

export type FooterTypes = {
  footerArray: string[]
}

//Main Api Call
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

export type UnionMediaTypes = MovieTypes[] | TvShowTypes[] | undefined
export type CarouselMediaTypes = { infoMedia: MovieTypes | TvShowTypes }

//Use state type for fetch functions
export type useStateTypes = {
  setListPopularMovie?: Dispatch<SetStateAction<UnionMediaTypes>>
  setCarouselMovie?: Dispatch<SetStateAction<UnionMediaTypes>>
  setTvTopRated?: Dispatch<SetStateAction<UnionMediaTypes>>
  setListPopularTV?: Dispatch<SetStateAction<UnionMediaTypes>>
  setCarouselSeries?: Dispatch<SetStateAction<UnionMediaTypes>>
  setResults?: Dispatch<SetStateAction<(MovieTypes | TvShowTypes)[] | undefined>>
  setMediaDetails?: Dispatch<SetStateAction<DetailsResponse | undefined>>
  setLogo?: Dispatch<SetStateAction<ImageItem | undefined>>
  setIsData?: Dispatch<SetStateAction<boolean>>
  setFirstSpinner?: Dispatch<SetStateAction<boolean>>
  setSecondSpinner?: Dispatch<SetStateAction<boolean>>
  setThirdSpinner?: Dispatch<SetStateAction<boolean>>
  linkValue?: string
}

export type FhCarouselType = {
  fhCarouselArrays?: UnionMediaTypes
}

export type MovieArrayTypes = FhCarouselType & {
  firstSpinner: boolean
  listPopularMovie: UnionMediaTypes
}

export type TvShowArrayTypes = FhCarouselType & {
  thirdSpinner: boolean
  listPopularTV: UnionMediaTypes
}

export type AppComponentsTypes = FhCarouselType &
  MovieArrayTypes &
  TvShowArrayTypes & {
    secondSpinner: boolean
    tvTopRated: UnionMediaTypes
  }

export type SliderMediaTypes = {
  responseOK: boolean
  title: string
  array_path: UnionMediaTypes
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

export type SliderButtonTypes = {
  arrowDirection: string
  arrowPosition: string
}

export type NavBarSearchTypes = {
  poster: string | null
  mediaType: "movie" | "tv" | undefined
  year: string
  titleMovie: string
  titleSeries: string
  id: number
  setResults: Dispatch<SetStateAction<(MovieTypes | TvShowTypes)[] | undefined>>
}

// Details page type

type BaseDetailsTypes = {
  adult: boolean
  backdrop_path: string | null
  genres: Genre[]
  homepage: string | undefined
  id: number
  origin_country: string[]
  original_language: string
  overview: string | null
  popularity: number
  poster_path: string | null
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string | null
  vote_average: number
  vote_count: number
}

// Movie Details
type Collection = {
  id: number
  name: string
  poster_path: string | null
  backdrop_path: string | null
}

type Genre = {
  id: number
  name: string
}

type ProductionCompany = {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

type ProductionCountry = {
  iso_3166_1: string
  name: string
}

type SpokenLanguage = {
  english_name: string
  iso_639_1: string
  name: string
}

export type MovieDetailsTypes = BaseDetailsTypes & {
  belongs_to_collection: Collection | null
  original_title: string
  imdb_id: string | null
  title: string
  video: boolean
  release_date: string
  revenue: number
  runtime: number | null
  budget: number
}

//TV Show Details

export type Creator = {
  id: number
  credit_id: string
  name: string
  gender: number
  profile_path: string | null
}

export type Network = {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

export type Episode = {
  id: number
  name: string
  overview: string | null
  vote_average: number
  vote_count: number
  air_date: string
  episode_number: number
  production_code: string
  runtime: number | null
  season_number: number
  show_id: number
  still_path: string | null
}

export type Season = {
  air_date: string | null
  episode_count: number
  id: number
  name: string
  overview: string | null
  poster_path: string | null
  season_number: number
  vote_average: number
}

export type TVShowDetailsTypes = BaseDetailsTypes & {
  type: string
  created_by: Creator[]
  episode_run_time: number[]
  original_name: string
  seasons: Season[]
  networks: Network[]
  number_of_episodes: number
  number_of_seasons: number
  next_episode_to_air: Episode | null
  last_episode_to_air: Episode | null
  in_production: boolean
  name: string
  languages: string[]
  last_air_date: string
  first_air_date: string
}

export type DetailsResponse = TVShowDetailsTypes | MovieDetailsTypes

export type ImageItem = {
  aspect_ratio: number
  height: number
  iso_639_1: string | null
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}

export type MediaImagesResponse = {
  id: number
  backdrops: ImageItem[]
  logos: ImageItem[]
  posters: ImageItem[]
}

export type ButtonSliderTypes = {
  movieObj?: CarouselMediaTypes["infoMedia"]
  btnClass: string
  variant: string
  icon: IconDefinition
  text: string
}
