import { Col, Image } from "react-bootstrap"
import { useNavigate } from "react-router"

const NavBarSearch = function (props) {
  const navigate = useNavigate()
  return (
    <Col className="d-flex flex-column align-items-center">
      <Col
        style={{ cursor: "pointer" }}
        className="p-0 my-2"
        onClick={() => {
          navigate("/details/" + (props.mediaType === "movie" ? "movie/" : "serie/") + props.id)
          props.setResults(null)
        }}>
        <Image
          style={{ maxHeight: "220px" }}
          src={"https://image.tmdb.org/t/p/w500" + props.poster}
        />
      </Col>
      <Col className="p-0 ps-2 my-2 flex-grow-1">
        {" "}
        <h2
          style={{ fontSize: "1.1rem", cursor: "pointer" }}
          className="fw-bold"
          onClick={() => {
            navigate("/details/" + (props.mediaType === "movie" ? "movie/" : "serie/") + props.id)
            props.setResults(null)
          }}>
          {props.titleMovie ? props.titleMovie : props.titleSeries}
        </h2>
        <h3 style={{ fontSize: "1rem" }} className="m-0">
          {props.mediaType} - {props.year}
        </h3>
      </Col>
    </Col>
  )
}
export default NavBarSearch
