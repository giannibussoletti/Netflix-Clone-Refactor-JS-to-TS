import { Container, Row, Spinner } from "react-bootstrap"
import SliderTitle from "./SliderComponents/SliderTitle"
import SingleSlide from "./SliderComponents/SingleSlide"
import SliderButton from "./SliderComponents/SliderButton"
import type { MovieTypes, SliderMediaTypes } from "../../assets/types"

const SliderMedia = function ({ responseOK, title, array_path }: SliderMediaTypes) {
  return (
    <Container fluid className="px-5 my-5">
      <Row className="position-relative my-5 pb-3">
        <SliderTitle value={title} />
        <Row
          xs={1}
          md={2}
          lg={3}
          xxl={5}
          className="p-0 smooth-carousel m-0 flex-nowrap overflow-scroll hiding-bar">
          {responseOK && (
            <div className="w-100 d-flex justify-content-center align-align-items-center">
              <Spinner animation="grow" variant="white" />
            </div>
          )}

          {array_path &&
            array_path.map((linkPoster) => {
              return (
                <SingleSlide
                  key={linkPoster.id}
                  uniqueId={linkPoster.id}
                  posterLink={linkPoster.poster_path}
                  originalTitle={(linkPoster as MovieTypes).title}
                />
              )
            })}
          <SliderButton arrowDirection="right" arrowPosition="end" />
          <SliderButton arrowDirection="left" arrowPosition="start" />
        </Row>
      </Row>
    </Container>
  )
}

export default SliderMedia
