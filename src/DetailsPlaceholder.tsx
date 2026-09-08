import { Button, Col, Container, Image, Placeholder, Row } from "react-bootstrap"

const DetailsPlaceholder = () => {
  return (
    <Container
      fluid
      className=" mb-5 position-relative text-white main-container-details overflow-hidden h-100 ">
      <Container className="bg-white">
        <Row className="my-4 bg-black p-4">
          <Col sm={12} md={6} className="text-center mb-5 mb-md-0">
            <Image fluid src="/posterhold.png" />
          </Col>
          <Col>
            <Placeholder as="h2" bg="light" xs={6} size="lg" animation="glow" />

            <div>
              <Placeholder as="p" bg="light" xs={6} size="lg" animation="glow" />
              <Placeholder as="p" bg="light" xs={5} size="lg" animation="glow" />
              <Placeholder as="p" bg="light" xs={12} size="lg" animation="glow" />
            </div>

            <Row className="my-4 align-items-center">
              <Col xs={12} md={8} className="mb-3 text-center">
                <Button
                  style={{ background: "#b20710" }}
                  className="rounded-5 border-0 fw-bold text-uppercase px-4">
                  Watch Trailer
                </Button>
              </Col>
              <Col className="d-flex justify-content-center">
                <span className="average-vote my-3 my-md-0">
                  <h5 className="fw-bold pb-1">10</h5>
                </span>
              </Col>
            </Row>
            <Row xs={1} sm={3} className="gap-4 justify-content-center">
              <Placeholder as="h6" className="w-25" bg="light" size="lg" animation="glow" />
              <Placeholder as="h6" className="w-25" bg="light" size="lg" animation="glow" />
              <Placeholder as="h6" className="w-25" bg="light" size="lg" animation="glow" />
            </Row>
          </Col>
        </Row>
      </Container>
      <Image className="media-details-bg px-0 w-100 h-100" src="/bg-white-ph.png" />
    </Container>
  )
}
export default DetailsPlaceholder
