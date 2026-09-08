import { Col } from "react-bootstrap"
import type { FooterTypes } from "../assets/types"
const FooterColComponent = function ({ footerArray }: FooterTypes) {
  return (
    <Col className="text-light text-opacity-75">
      {footerArray.map((link, i) => (
        <p key={link + i}> {link}</p>
      ))}
    </Col>
  )
}
export default FooterColComponent
