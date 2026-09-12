import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"
import type { ButtonSliderTypes, MovieTypes } from "../../../assets/types"
import { movie, serie } from "../../../assets/variables"

const MyButtonSlider = function ({ movieObj, btnClass, variant, icon, text }: ButtonSliderTypes) {
  const navigate = useNavigate()
  return (
    <Button
      variant={variant}
      className={btnClass}
      onClick={() => {
        if (movieObj) {
          navigate(
            "/details/" +
              ((movieObj as MovieTypes).title ? `${movie}/` : `${serie}/`) +
              movieObj.id,
          )
        } else {
          return ""
        }
      }}>
      <FontAwesomeIcon icon={icon} /> {text}
    </Button>
  )
}
export default MyButtonSlider
