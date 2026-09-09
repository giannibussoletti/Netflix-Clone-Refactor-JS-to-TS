import "bootstrap/dist/css/bootstrap.min.css"

import { useEffect, useState } from "react"
import Home from "./Home"
import Footer from "./Footer"
import MyNavBar from "./components/MyNavBar"
import LoginPage from "./LoginPage"
import Settings from "./Settings"

import { BrowserRouter, Route, Routes } from "react-router"
import TvShow from "./components/TvShow"
import Details from "./Details"
import Movies from "./components/Movies"

// FONTAWESOME IMPORT
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fetchFunction } from "./assets/fetchs"
import type { MovieListResponse, MovieTypes, RequestOptions, TvShowListResponse, TvShowTypes } from "./assets/types"
library.add(fas, far, fab)

// Fetch

const App = () => {
  const [listPopularMovie, setListPopularMovie] = useState<MovieTypes[]>()
  const [tvTopRated, setTvTopRated] = useState<TvShowTypes[]>()
  const [listPopularTV, setListPopularTV] = useState<TvShowTypes[]>()
  const [carouselMovies, setCarouselMovie] = useState<MovieTypes[]>()
  const [carouselSeries, setCarouselSeries] = useState<TvShowTypes[]>()
  const [firstSpinner, setFirstSpinner] = useState(true)
  const [secondSpinner, setSecondSpinner] = useState(true)
  const [thirdSpinner, setThirdSpinner] = useState(true)

  const upcomingMovies = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
  const popularMovie = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
  const popularTV = "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1"
  const onTheAir = "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1"
  const topRated = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"

  const Auth =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2ZlOGNmMGRmZmQ1NGI0ZmFmMTRlYzkzZjliOTViZCIsIm5iZiI6MTc3MTI4MjEzNC41NzIsInN1YiI6IjY5OTM5ZWQ2OTcxN2QwZGM5ZDA2NWE0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bbMQkik7cmt6uK6yP5WsuRlItQgQkkkeoH7ycPiJKAg"

  const option: RequestOptions = {
    headers: {
      Authorization: Auth,
    },
  }

  const getUpcoming = () => {
    fetchFunction<MovieListResponse>({
      apiLink: upcomingMovies,
    }).then((data) => {
        setCarouselMovie(data.results)
      }).catch((err) => err)
  }

    const getPopularMovies = () => {
    fetchFunction<MovieListResponse>({
      apiLink: popularMovie,
    }).then((data) => {
        setListPopularMovie(data.results)
        setFirstSpinner(false)
      }).catch((err) => err)
  }
       const getPopularTvShow = () => {
    fetchFunction<TvShowListResponse>({
      apiLink: popularTV,
    }).then((data) => {
        setListPopularTV(data.results)
        setThirdSpinner(false)
      }).catch((err) => err)
  }
       const getOnTheAir = () => {
    fetchFunction<TvShowListResponse>({
      apiLink: onTheAir,
    }).then((data) => {
        setCarouselSeries(data.results)
      }).catch((err) => err)
  }
       const getTopRated = () => {
    fetchFunction<TvShowListResponse>({
      apiLink: topRated,
    }).then((data) => {
        setTvTopRated(data.results)
      }).catch((err) => err)
  }
      

    useEffect(() => {
      getUpcoming()
      getPopularMovies()
      getPopularTvShow()
      getOnTheAir()
      getTopRated()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <BrowserRouter>
        <div className="d-flex flex-column vh-100">
          <header className="position-relative z-2">
            <MyNavBar headers={option.headers} />
          </header>
          <main className="bg-black flex-grow-1 z-1">
            <Routes>
              <Route
                path={"/"}
                element={
                  <Home
                    firstSpinner={firstSpinner}
                    secondSpinner={secondSpinner}
                    thirdSpinner={thirdSpinner}
                    listPopularMovie={listPopularMovie}
                    tvTopRated={tvTopRated}
                    listPopularTV={listPopularTV}
                    fhCarouselArray={carouselMovies && carouselMovies.slice(0, 10)}
                  />
                }
              />
              <Route
                path="/movies"
                element={
                  <Movies
                    firstSpinner={firstSpinner}
                    listPopularMovie={listPopularMovie}
                    fhCarouselArray={carouselMovies && carouselMovies.slice(11)}
                  />
                }
              />
              <Route
                path="/tv-show"
                element={
                  <TvShow
                    thirdSpinner={thirdSpinner}
                    listPopularTV={listPopularTV}
                    fhCarouselArray={carouselSeries}
                  />
                }
              />
              <Route path="settings" element={<Settings />} />

              <Route path="login-page" element={<LoginPage />} />
              <Route path="details/:mediaType/:uniqueId" element={<Details />} />
            </Routes>
          </main>

          <footer className="bg-black">
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    )
  }
}
export default App
