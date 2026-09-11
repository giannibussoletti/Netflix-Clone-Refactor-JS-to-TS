import { Col, Image } from "react-bootstrap"
import { useNavigate } from "react-router"
import type { SingleSlideTypes } from "../../../assets/types"
import { imgLink, movie, serie } from "../../../assets/variables"

const SingleSlide = function ({ uniqueId, posterLink, originalTitle }: SingleSlideTypes) {
  const navigate = useNavigate()
  return (
    <>
      <Col className="p-0">
        <Image
          className="w-100"
          src={imgLink + "w342/" + posterLink}
          alt={originalTitle + "-poster"}
          id={Number(uniqueId).toString()}
          onClick={() => {
            navigate("/details/" + (originalTitle ? `${movie}/` : `${serie}/`) + uniqueId)
          }}
        />
      </Col>
    </>
  )
}

export default SingleSlide
