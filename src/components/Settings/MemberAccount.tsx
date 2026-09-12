import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Col, Row } from "react-bootstrap"
import SectionTitle from "./SectionTitle"
import ListGenerator from "./ListGenerator"
import { faPaypal } from "@fortawesome/free-brands-svg-icons"
import {
  studentSecondSection,
  paymentFirstSection,
  paymentSecondSection,
} from "../../assets/arrays"

const AccountMember = function () {
  return (
    <>
      <Col
        md={4}
        className="text-center
            text-md-start
            mb-4
            ms-md-0
            ">
        <SectionTitle value="Membership &amp; billing" />
        <Button
          variant="dark"
          className="px-4 shadow-sm rounded-0 border-bottom border-secondary opacity-50 border-opacity-50 border-1">
          Cancel Membership
        </Button>
      </Col>
      <Col md={8} className="mb-3">
        {/* STUDENT */}
        <Row className="mb-3 border-secondary text-center text-sm-start border-bottom">
          <Col className="p-0" sm={6}>
            <p className="mb-2 fw-bold">student&#64;strive.school</p>
            <p className="mb-2 text-secondary">Password:*******</p>
            <p className="mb-2 text-secondary">Phone: 321 044 1279</p>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            {studentSecondSection.map((listItem, i) => {
              return <ListGenerator key={listItem + i} value={listItem} />
            })}
          </Col>
        </Row>
        {/* PAY PAL & PAYMENT */}
        <Row className="mb-3 border-secondary border-bottom">
          <Col sm={6} className="text-center text-sm-start mb-2 mb-sm-0">
            <FontAwesomeIcon icon={faPaypal} /> admin&#64;strive.school
          </Col>
          <Col className="p-0 text-center text-sm-end" sm={6}>
            {paymentFirstSection.map((listItem, i) => {
              return <ListGenerator key={listItem + i} value={listItem} />
            })}
          </Col>
        </Row>
        {/* REDEEM GIFT */}
        <Row>
          <Col className="p-0 text-center text-sm-end">
            {paymentSecondSection.map((listItem, i) => {
              return <ListGenerator key={listItem + i} value={listItem} />
            })}
          </Col>
        </Row>
      </Col>
    </>
  )
}

export default AccountMember
