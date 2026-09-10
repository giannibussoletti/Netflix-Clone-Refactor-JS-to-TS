import { Col, Container, Image, Row } from "react-bootstrap"
import MyButtonSlider from "./MyButtonCarousel"
import { useEffect, useState } from "react"
import type { CarouselMediaTypes, ImageItem, MovieTypes } from "../../../assets/types"
import { movieLink, tvShowLink, logosLinkEnd } from "../../../assets/variables"
import { getLogosFetch } from "../../../assets/functions"
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons"
const MyCarouselItem = function ({ infoMedia }: CarouselMediaTypes) {
  const [logo, setLogo] = useState<ImageItem | undefined>()

  const movieLogos = movieLink + infoMedia.id + logosLinkEnd
  const tvShowLogos = tvShowLink + infoMedia.id + logosLinkEnd

  useEffect(() => {
    getLogosFetch({
      setLogo,
      linkValue: (infoMedia as MovieTypes).title ? movieLogos : tvShowLogos,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const buttonClass = "fw-bold px-5 py-2 text-capitalize shadow-sm me-2 mb-2 rounded-2 border-00"

  return (
    <Container
      fluid
      className="p-0 backdrop-fh-carousel vh-100 vw-100"
      style={{
        backgroundImage:
          "url(http://image.tmdb.org/t/p/" + "original" + infoMedia.backdrop_path + ")",
      }}>
      <Row className="position-absolute mt-5" style={{ bottom: "25%" }}>
        <Col className="mb-5 text-center text-md-start ms-md-5 ps-md-5" xs={12} md={6}>
          {logo ? (
            <Image
              className="w-75"
              src={"http://image.tmdb.org/t/p/" + "w342" + logo.file_path}
              alt={(infoMedia as MovieTypes).title + " logo"}
            />
          ) : (
            <h1 className="fw-bold bg-white text-black text-center text-uppercase rounded-1 py-2">
              {(infoMedia as MovieTypes).title}
            </h1>
          )}
        </Col>
        <Col xs={12} className="text-center text-md-start ms-md-5 ps-md-5">
          <MyButtonSlider btnClass={buttonClass} variant="light" icon={faPlay} text="Play" />
          <MyButtonSlider
            movieObj={infoMedia}
            btnClass={buttonClass}
            variant="secondary"
            icon={faCircleInfo}
            text="More Info"
          />
        </Col>
      </Row>
    </Container>
  )
}
export default MyCarouselItem
