import { Col, Image } from "react-bootstrap"
import { useNavigate } from "react-router"
import type { SingleSlideTypes } from "../../../assets/types"

const SingleSlide = function ({ uniqueId, posterLink, originalTitle }: SingleSlideTypes) {
  const navigate = useNavigate()
  return (
    <>
      <Col className="p-0">
        <Image
          className="w-100"
          src={"http://image.tmdb.org/t/p/" + "w342/" + posterLink}
          alt=""
          id={Number(uniqueId).toString()}
          onClick={() => {
            navigate("/details/" + (originalTitle ? "movie/" : "serie/") + uniqueId)
          }}
        />
      </Col>
    </>
  )
}

export default SingleSlide
