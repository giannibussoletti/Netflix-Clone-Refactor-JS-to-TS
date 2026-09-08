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
library.add(fas, far, fab)

// Fetch

const App = () => {
  const [listPopularMovie, setListPopularMovie] = useState([])
  const [tvTopRated, setTvTopRated] = useState([])
  const [listPopularTV, setListPopularTV] = useState([])
  const [carouselMovies, setCarouselMovie] = useState([])
  const [carouselSeries, setCarouselSeries] = useState([])
  const [firstSpinner, setFirstSpinner] = useState(true)
  const [secondSpinner, setSecondSpinner] = useState(true)
  const [thirdSpinner, setThirdSpinner] = useState(true)

  const Auth =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2ZlOGNmMGRmZmQ1NGI0ZmFmMTRlYzkzZjliOTViZCIsIm5iZiI6MTc3MTI4MjEzNC41NzIsInN1YiI6IjY5OTM5ZWQ2OTcxN2QwZGM5ZDA2NWE0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bbMQkik7cmt6uK6yP5WsuRlItQgQkkkeoH7ycPiJKAg"

  const options = {
    headers: {
      Authorization: Auth,
    },
  }

  const upcomingMovies = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
  const popularMovie = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
  const popularTV = "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1"
  const onTheAir = "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1"
  const topRated = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"

  const fetchingPopularMovie = () => {
    fetch(popularMovie, options)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          console.log(response)
          throw new Error(response.statusText)
        }
      })
      .then((data) => {
        console.log("popularMovie", data)
        setListPopularMovie(data.results)
        setFirstSpinner(false)
      })
      .catch((err) => err)
  }

  const fetchingSearch = () => {
    fetch(topRated, options)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.statusText)
        }
      })
      .then((data) => {
        console.log("TVTopRated", data)
        setTvTopRated(data.results)
        setSecondSpinner(false)
      })
      .catch((err) => console.log(err))
  }

  const fetchingPopularTV = () => {
    fetch(popularTV, options)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.statusText)
        }
      })
      .then((data) => {
        console.log("PopoularTV", data)
        setListPopularTV(data.results)
        setThirdSpinner(false)
      })
      .catch((err) => console.log(err))
  }

  const fechingUpcomingMovies = () => {
    fetch(upcomingMovies, options)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.statusText)
        }
      })
      .then((data) => {
        console.log("Movie", data)
        setCarouselMovie(data.results)
      })
      .catch((err) => console.log(err))
  }

  const fetchingOnTheAir = () => {
    fetch(onTheAir, options)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.statusText)
        }
      })
      .then((data) => {
        console.log("OnTheAir", data)
        setCarouselSeries(data.results)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchingPopularMovie()
    fetchingPopularTV()
    fetchingSearch()
    fechingUpcomingMovies()
    fetchingOnTheAir()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
      <div className="d-flex flex-column vh-100">
        <header className="position-relative z-2">
          <MyNavBar options={options} />
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
                  fhCarouselArray={carouselMovies.slice(0, 10)}
                />
              }
            />
            <Route
              path="/movies"
              element={
                <Movies
                  firstSpinner={firstSpinner}
                  listPopularMovie={listPopularMovie}
                  fhCarouselArray={carouselMovies.slice(11)}
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

export default App
