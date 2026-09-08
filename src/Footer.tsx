import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import FooterColComponent from "./components/FooterColComponent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Col, Container, Row, Button } from "react-bootstrap"

const Footer = function () {
  const footerIcon = [faFacebook, faInstagram, faTwitter, faYoutube]
  const firstColFooter = ["Audio and Subtitles", "Media Center", "Privacy", "Contact Us"]
  const secondColFooter = ["Audio Description", "Investor Relations", "Legal Notices"]
  const thirdColFooter = ["Help Center", "Jobs", "Cookie Preferences"]
  const fourthColFooter = ["Gift Cards", "Terms of Use", "Corporate Information"]

  return (
    <Container>
      <Row className="text-center text-md-start" xs={1} sm={2} md={4}>
        <Col className="w-100 my-4">
          {footerIcon.map((icon) => (
            <FontAwesomeIcon
              size="2xl"
              className="me-3"
              icon={icon}
              style={{ color: "#808080" }}
              key={"fa-2x fa-brands fa-square-" + icon}
            />
          ))}
        </Col>
        <FooterColComponent footerArray={firstColFooter} />
        <FooterColComponent footerArray={secondColFooter} />
        <FooterColComponent footerArray={thirdColFooter} />
        <FooterColComponent footerArray={fourthColFooter} />
      </Row>

      <Row xs={1} className="text-center text-md-start">
        <Col className="mt-4">
          <Button variant="outline-secondary" className="rounded-0 border-2 border-secondary">
            Service Code
          </Button>
        </Col>
        <Col className="pt-4 text-light text-opacity-75">
          <p>&#169; 1997-2019 Netflix, inc.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
