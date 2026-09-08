import { Col, Container, Image, Row } from "react-bootstrap"
import MyButtonSlider from "./MyButtonCarousel"
import { useEffect, useState } from "react"

const MyCarouselItem = function (props) {
  const [logo, setLogo] = useState("")
  const Auth =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2ZlOGNmMGRmZmQ1NGI0ZmFmMTRlYzkzZjliOTViZCIsIm5iZiI6MTc3MTI4MjEzNC41NzIsInN1YiI6IjY5OTM5ZWQ2OTcxN2QwZGM5ZDA2NWE0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bbMQkik7cmt6uK6yP5WsuRlItQgQkkkeoH7ycPiJKAg"
  const options = {
    headers: {
      Authorization: Auth,
    },
  }

  // "movie" ? movieLink + params.uniqueId : TvShowLink + params.uniqueId
  const movieLogos = `https://api.themoviedb.org/3/movie/${props.infoMedia.id}/images?include_image_language=en-US`
  const tvShowLogos = `https://api.themoviedb.org/3/tv/${props.infoMedia.id}/images?include_image_language=en-US`

  const LogosFetching = () => {
    fetch(props.infoMedia.title ? movieLogos : tvShowLogos, options)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(response.status)
        }
      })
      .then((data) => {
        setLogo(data.logos[0])
      })
      .catch((err) => err)
  }

  useEffect(() => {
    LogosFetching()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const buttonClass = "fw-bold px-5 py-2 text-capitalize shadow-sm me-2 mb-2 rounded-2 border-00"

  return (
    <Container
      fluid
      className="p-0 backdrop-fh-carousel vh-100 vw-100"
      style={{
        backgroundImage:
          "url(http://image.tmdb.org/t/p/" + "original" + props.infoMedia.backdrop_path + ")",
      }}>
      <Row className="position-absolute mt-5" style={{ bottom: "25%" }}>
        <Col className="mb-5 text-center text-md-start ms-md-5 ps-md-5" xs={12} md={6}>
          {logo ? (
            <Image
              className="w-75"
              src={"http://image.tmdb.org/t/p/" + "w342" + logo.file_path}
              alt={props.infoMedia.title + " logo"}
            />
          ) : (
            <h1 className="fw-bold bg-white text-black text-center text-uppercase rounded-1 py-2">
              {props.infoMedia.title}
            </h1>
          )}
        </Col>
        <Col xs={12} className="text-center text-md-start ms-md-5 ps-md-5">
          <MyButtonSlider
            btnClass={buttonClass}
            variant="light"
            icon="fa-solid fa-play"
            text="Play"
          />
          <MyButtonSlider
            movieObj={props.infoMedia}
            btnClass={buttonClass}
            variant="secondary"
            icon="fa-solid fa-circle-info"
            text="More Info"
          />
        </Col>
      </Row>
    </Container>
  )
}
export default MyCarouselItem
