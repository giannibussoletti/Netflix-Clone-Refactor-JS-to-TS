import { Carousel } from "react-bootstrap"
import MyCarouselItem from "./fh-slider/MyCarouselItem"

const FullHeigthCar = function (props) {
  return (
    <div className="vh-100">
      <Carousel
        slide={true}
        className="vw-100 vh-100 position-absolute top-0"
        controls={true}
        indicators={false}>
        {props.fhCarouselArray.map((media, i) => {
          return (
            <Carousel.Item key={i} className="vw-100 vh-100" interval={5000}>
              <MyCarouselItem infoMedia={media} />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default FullHeigthCar
