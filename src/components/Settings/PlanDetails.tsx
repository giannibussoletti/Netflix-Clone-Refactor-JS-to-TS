import { Col, Image } from "react-bootstrap"
import SectionTitle from "./SectionTitle"

const PlanDetails = function () {
  return (
    <>
      <Col className="p-0 text-center text-sm-start">
        <SectionTitle sectionTitle="plan details" />
      </Col>
      <Col className="text-center text-sm-start">
        <span className="mb-2 fw-bold">Premium</span>
        <Image src="../public/icon-tag-4K.png" alt="4K icon" />
      </Col>
      <Col className="p-0 text-sm-end text-center text-primary">Change plan</Col>
    </>
  )
}
export default PlanDetails
