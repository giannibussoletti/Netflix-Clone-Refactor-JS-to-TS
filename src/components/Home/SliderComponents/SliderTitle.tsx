import { Col } from "react-bootstrap"
import type { StringTypes } from "../../../assets/types"

const SliderTitle = function ({ value }: StringTypes) {
  return (
    <Col xs={12} className="p-0 mb-2">
      <h4 className="fw-semibold text-light text-opacity-75">{value}</h4>
    </Col>
  )
}

export default SliderTitle
