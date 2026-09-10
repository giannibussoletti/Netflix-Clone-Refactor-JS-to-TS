import { useEffect, useState } from "react"
import { Col, Container, Row, Image, Button } from "react-bootstrap"
import { useLocation, useParams } from "react-router"
import DetailsPlaceholder from "./DetailsPlaceholder"
import { movieLink, options, tvShowLink } from "./assets/variables"
import type { DetailsResponse, MovieDetailsTypes, TVShowDetailsTypes } from "./assets/types"
import { getDetailsFetch } from "./assets/functions"
const Details = function () {
  const [mediaDetails, setMediaDetails] = useState<DetailsResponse | undefined>()
  const [mediaLogo, setMediaLogo] = useState({})
  const [isData, setIsData] = useState(false)
  const params = useParams()
  const location = useLocation()

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

  const linkValue =
    params.mediaType === "movie" ? movieLink + params.uniqueId : tvShowLink + params.uniqueId

  useEffect(() => {
    getDetailsFetch({ setMediaDetails, setIsData, linkValue })
  }, [location.pathname, linkValue])

  useEffect(() => {
    getDetailsFetch({ setMediaDetails, setIsData, linkValue })
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
            <Image fluid src={"http://image.tmdb.org/t/p/" + "w342" + mediaDetails?.poster_path} />
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
                {mediaDetails && (mediaDetails as MovieDetailsTypes).title
                  ? (mediaDetails as MovieDetailsTypes).title
                  : (mediaDetails as TVShowDetailsTypes).name}
              </h2>
            )}

            <p>{mediaDetails && mediaDetails.overview}</p>

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
                  href={mediaDetails && mediaDetails.homepage}
                  target="_blank"
                  style={{ background: "#b20710" }}
                  className="rounded-5 border-0 fw-bold text-uppercase px-4 btn link-light">
                  website
                </a>
              </Col>
              <Col className="d-flex justify-content-center">
                <span className="average-vote my-3 my-md-0">
                  <h5 className="fw-bold pb-1 fs-4">
                    {mediaDetails?.vote_average.toString().slice(0, 3)}
                  </h5>
                </span>
              </Col>
            </Row>
            <Row xs={1} sm={3}>
              <Col>
                <h6 className="text-center fw-bold fs-3">
                  {mediaDetails && (mediaDetails as TVShowDetailsTypes).first_air_date
                    ? (mediaDetails as TVShowDetailsTypes).first_air_date.toString().slice(0, 4)
                    : (mediaDetails as MovieDetailsTypes).release_date.toString().slice(0, 4)}
                </h6>
              </Col>
              <Col>
                <h6 className="text-center fw-bold fs-3 my-5 my-sm-0">
                  {mediaDetails && (mediaDetails as TVShowDetailsTypes).last_episode_to_air
                    ? (mediaDetails as TVShowDetailsTypes)?.last_episode_to_air?.runtime
                    : (mediaDetails as MovieDetailsTypes).runtime}{" "}
                  min.
                </h6>
              </Col>

              <Col>
                {mediaDetails &&
                  mediaDetails.genres.slice(0, 1).map((genre) => {
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
        className="media-details-bg px-0 w-100"
        src={"http://image.tmdb.org/t/p/" + "original/" + mediaDetails?.backdrop_path}
      />
    </Container>
  )
}
export default Details
