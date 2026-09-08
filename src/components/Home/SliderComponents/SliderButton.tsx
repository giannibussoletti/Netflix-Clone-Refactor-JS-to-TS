import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SliderButton = function (props) {
  const buttonSliderClass =
    "p-0 position-absolute top-0 text-end h-100 d-flex justify-content-center align-items-center"

  return (
    <span
      onClick={(e) => {
        const targetCarousel = e.target.closest(".smooth-carousel")
        props.arrowDirection === "right"
          ? targetCarousel.scrollBy(targetCarousel.offsetWidth, 0)
          : targetCarousel.scrollBy(-targetCarousel.offsetWidth, 0)
      }}
      style={{ width: "10%" }}
      className={
        "arrow-" + props.arrowDirection + " " + props.arrowPosition + "-0 " + buttonSliderClass
      }>
      <FontAwesomeIcon
        icon={"fa-solid fa-angle-" + props.arrowDirection + " fa-2x"}
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
