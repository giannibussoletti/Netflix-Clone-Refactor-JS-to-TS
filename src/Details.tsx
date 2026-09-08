import { useEffect, useState } from "react"
import { Col, Container, Row, Image, Button } from "react-bootstrap"
import { useLocation, useParams } from "react-router"
import DetailsPlaceholder from "./DetailsPlaceholder"

const Details = function () {
  const [movieDetails, setMovieDetails] = useState({})
  const [mediaLogo, setMediaLogo] = useState({})
  const [isData, setIsData] = useState(false)
  const params = useParams()
  const location = useLocation()
  const Auth =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2ZlOGNmMGRmZmQ1NGI0ZmFmMTRlYzkzZjliOTViZCIsIm5iZiI6MTc3MTI4MjEzNC41NzIsInN1YiI6IjY5OTM5ZWQ2OTcxN2QwZGM5ZDA2NWE0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bbMQkik7cmt6uK6yP5WsuRlItQgQkkkeoH7ycPiJKAg"

  const options = {
    headers: {
      Authorization: Auth,
    },
  }

  const movieLink = "https://api.themoviedb.org/3/movie/"
  const TvShowLink = "https://api.themoviedb.org/3/tv/"

  const MultiFetching = () => {
    fetch(
      params.mediaType === "movie" ? movieLink + params.uniqueId : TvShowLink + params.uniqueId,
      options,
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.statusText)
        }
      })
      .then((data) => {
        setMovieDetails(data)

        setIsData(true)
      })
      .catch((err) => err)
  }

  const movieLogos = `https://api.themoviedb.org/3/movie/${params.uniqueId}/images?include_image_language=en-US`
  const tvShowLogos = `https://api.themoviedb.org/3/tv/${params.uniqueId}/images?include_image_language=en-US`

  const LogosFetching = () => {
    fetch(params.mediaType === "movie" ? movieLogos : tvShowLogos, options)
      .then((response) => {
        if (response.ok) {
          console.log(response.json())
          return response.json()
        } else {
          throw new Error(response.statusText)
        }
      })
      .then((data) => {
        setMediaLogo(data.logos[0])
      })
      .catch((err) => err)
  }

  useEffect(() => {
    MultiFetching()
    LogosFetching()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    MultiFetching()
    LogosFetching()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  if (!isData) {
    return <DetailsPlaceholder />
  }

  return (
    <Container
      fluid
      className=" mb-5 position-relative text-white main-container-details overflow-hidden h-100">
      <Container>
        <Row className="my-4 bg-black p-4">
          <Col md={12} lg={6} className="text-center mb-3 my-lg-2">
            <Image fluid src={"http://image.tmdb.org/t/p/" + "w342" + movieDetails.poster_path} />
          </Col>
          <Col className="d-flex flex-column justify-content-center mb-5">
            {mediaLogo ? (
              <div className="text-center">
                <Image
                  fluid
                  className="mb-3"
                  src={"http://image.tmdb.org/t/p/" + "w342" + mediaLogo.file_path}
                  alt=""
                />
              </div>
            ) : (
              <h2 className="text-uppercase fw-bold">
                {movieDetails.title ? movieDetails.name : movieDetails.title}
              </h2>
            )}

            <p>{movieDetails.plotSummary ? movieDetails.overview : movieDetails.plotSummary}</p>

            <Row className="my-4 align-items-center">
              <Col xs={12} md={4} className="mb-3 mb-md-0 text-center">
                <Button
                  style={{ background: "#b20710" }}
                  className="rounded-5 border-0 fw-bold text-uppercase px-4">
                  Trailer
                </Button>
              </Col>
              <Col xs={12} md={4} className="mb-3 mb-md-0 text-center">
                <a
                  href={movieDetails.homepage}
                  target="_blank"
                  style={{ background: "#b20710" }}
                  className="rounded-5 border-0 fw-bold text-uppercase px-4 btn link-light">
                  website
                </a>
              </Col>
              <Col className="d-flex justify-content-center">
                <span className="average-vote my-3 my-md-0">
                  <h5 className="fw-bold pb-1 fs-4">
                    {movieDetails.vote_average.toString().slice(0, 3)}
                  </h5>
                </span>
              </Col>
            </Row>
            <Row xs={1} sm={3}>
              <Col>
                <h6 className="text-center fw-bold fs-3">
                  {movieDetails.first_air_date
                    ? movieDetails.first_air_date.toString().slice(0, 4)
                    : movieDetails.release_date.toString().slice(0, 4)}
                </h6>
              </Col>
              <Col>
                <h6 className="text-center fw-bold fs-3 my-5 my-sm-0">
                  {movieDetails.last_episode_to_air
                    ? movieDetails.last_episode_to_air.runtime
                    : movieDetails.runtime}{" "}
                  min.
                </h6>
              </Col>

              <Col>
                {movieDetails.genres.slice(0, 1).map((genre) => {
                  return (
                    <h6 className="text-center fw-bold fs-3" key={genre.name}>
                      {genre.name}
                    </h6>
                  )
                })}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Image
        align="center"
        className="media-details-bg px-0 w-100"
        src={"http://image.tmdb.org/t/p/" + "original/" + movieDetails.backdrop_path}
      />
    </Container>
  )
}
export default Details
