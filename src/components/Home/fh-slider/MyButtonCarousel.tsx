import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"

const MyButtonSlider = function (props) {
  const navigate = useNavigate()
  return (
    <Button
      variant={props.variant}
      className={props.btnClass}
      onClick={() => {
        props.movieObj
          ? navigate("/details/" + (props.movieObj.title ? "movie/" : "serie/") + props.movieObj.id)
          : ""
      }}>
      <FontAwesomeIcon icon={props.icon} /> {props.text}
    </Button>
  )
}
export default MyButtonSlider
