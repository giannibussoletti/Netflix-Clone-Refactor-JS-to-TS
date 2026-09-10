import "bootstrap/dist/css/bootstrap.min.css"

import type { UnionMediaTypes } from "./assets/types"
import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./Home"
import Footer from "./Footer"
import MyNavBar from "./components/MyNavBar"
import LoginPage from "./LoginPage"
import Settings from "./Settings"
import TvShow from "./components/TvShow"
import Details from "./Details"
import Movies from "./components/Movies"

//Function IMPORT
import {
  getUpcoming,
  getOnTheAir,
  getPopularMovies,
  getPopularTvShow,
  getTopRated,
} from "./assets/functions"
// FONTAWESOME IMPORT
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fas, far, fab)

// Fetch

const App = () => {
  const [listPopularMovie, setListPopularMovie] = useState<UnionMediaTypes>()
  const [carouselMovies, setCarouselMovie] = useState<UnionMediaTypes>()
  const [tvTopRated, setTvTopRated] = useState<UnionMediaTypes>()
  const [listPopularTV, setListPopularTV] = useState<UnionMediaTypes>()
  const [carouselSeries, setCarouselSeries] = useState<UnionMediaTypes>()
  const [firstSpinner, setFirstSpinner] = useState(true)
  const [secondSpinner, setSecondSpinner] = useState(true)
  const [thirdSpinner, setThirdSpinner] = useState(true)

  useEffect(() => {
    getUpcoming({ setCarouselMovie })
    getPopularMovies({ setListPopularMovie, setFirstSpinner })
    getPopularTvShow({ setListPopularTV, setThirdSpinner })
    getOnTheAir({ setCarouselSeries })
    getTopRated({ setSecondSpinner, setTvTopRated })
  }, [])

  return (
    <BrowserRouter>
      <div className="d-flex flex-column vh-100">
        <header className="position-relative z-2">
          <MyNavBar />
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
                  fhCarouselArrays={carouselMovies && carouselMovies.slice(0, 10)}
                />
              }
            />
            <Route
              path="/movies"
              element={
                <Movies
                  firstSpinner={firstSpinner}
                  listPopularMovie={listPopularMovie}
                  fhCarouselArrays={carouselMovies && carouselMovies.slice(11)}
                />
              }
            />
            <Route
              path="/tv-show"
              element={
                <TvShow
                  thirdSpinner={thirdSpinner}
                  listPopularTV={listPopularTV}
                  fhCarouselArrays={carouselSeries}
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
