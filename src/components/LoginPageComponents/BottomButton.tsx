import { Button, Col } from "react-bootstrap"
import type { StringTypes } from "../../assets/types"

const BottomButton = function ({ value }: StringTypes) {
  return (
    <Col xs={12} md={3} className="p-0">
      <Button variant="outline-secondary rounded-0 border-2 px-4 w-100">{value}</Button>
    </Col>
  )
}

export default BottomButton
