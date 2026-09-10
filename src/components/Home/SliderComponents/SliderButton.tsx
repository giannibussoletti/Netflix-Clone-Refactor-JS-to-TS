import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { SliderButtonTypes } from "../../../assets/types"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { LEFT, RIGHT } from "../../../assets/variables"

const SliderButton = function ({ arrowDirection, arrowPosition }: SliderButtonTypes) {
  const buttonSliderClass =
    "p-0 position-absolute top-0 text-end h-100 d-flex justify-content-center align-items-center"

  return (
    <span
      onClick={(e) => {
        const target = e.target as HTMLDivElement | null
        const targetCarousel = target?.closest(".smooth-carousel") as HTMLDivElement | null
        if (targetCarousel) {
          switch (arrowDirection) {
            case RIGHT:
              targetCarousel.scrollBy(targetCarousel.offsetWidth, 0)
              break
            case LEFT:
              targetCarousel.scrollBy(-targetCarousel.offsetWidth, 0)
              break
            default:
              break
          }
        }
      }}
      style={{ width: "10%" }}
      className={"arrow-" + arrowDirection + " " + arrowPosition + "-0 " + buttonSliderClass}>
      <FontAwesomeIcon
        size="2x"
        icon={arrowDirection !== RIGHT ? faAngleLeft : faAngleRight}
        className="mt-5"
        style={{
          color: "rgb(255, 255, 255)",
          width: "50px",
          height: "25px",
          lineHeight: "1.5em",
        }}
      />
    </span>
  )
}

export default SliderButton
