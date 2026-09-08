import { Col } from "react-bootstrap"

const SliderTitle = function (props) {
  return (
    <Col xs={12} className="p-0 mb-2">
      <h4 className="fw-semibold text-light text-opacity-75">{props.sliderTitle}</h4>
    </Col>
  )
}

export default SliderTitle
