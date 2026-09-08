import { Col, Image, Modal, Container, Row } from "react-bootstrap"
import { useState } from "react"
import { useNavigate } from "react-router"

const SingleSlide = function (props) {
  // const [show, setShow] = useState(false)
  // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)

  const navigate = useNavigate()
  return (
    <>
      <Col className="p-0">
        <Image
          className="w-100"
          src={"http://image.tmdb.org/t/p/" + "w342/" + props.posterLink}
          alt=""
          id={props.uniqueId}
          // onClick={handleShow}
          onClick={() => {
            navigate("/details/" + (props.originalTitle ? "movie/" : "serie/") + props.uniqueId)
          }}
        />
      </Col>

      {/* <Modal show={show} onHide={handleClose} size="lg" data-bs-theme="dark">
        <div
          className="modal-details pb-4"
          style={{
            backgroundImage: "url(http://image.tmdb.org/t/p/" + "original/" + props.backdrop + ")",
          }}>
          <Modal.Body>
            <div className="mb-4 mt-2">
              <Modal.Title className="fw-bold text-center">
                {props.originalTitle}
                {props.seriesName}
              </Modal.Title>
            </div>
            <Container>
              <Row xs={1} lg={2}>
                <Col className="text-center">
                  <Image
                    fluid
                    src={"http://image.tmdb.org/t/p/" + "w342/" + props.posterLink}
                    className="rounded-3 shadow-lg mx-auto"
                  />
                </Col>
                <Col>
                  <p style={{ lineHeight: "2em" }} className="bg-black p-3 rounded-2 bg-opacity-75">
                    {props.plotSummary}
                  </p>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </div>
      </Modal> */}
    </>
  )
}

export default SingleSlide
