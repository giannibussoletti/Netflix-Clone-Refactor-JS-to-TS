import FullHeigthCar from "./Home/FullHeigthCar"
import SliderMedia from "./Home/SliderMedia"

const TvShow = function (props) {
  return (
    <>
      <FullHeigthCar fhCarouselArray={props.fhCarouselArray} />
      <SliderMedia
        responseOK={props.thirdSpinner}
        title="Fresh TV Show"
        array_path={props.listPopularTV.slice(0, 10)}
      />
      <SliderMedia
        responseOK={props.thirdSpinner}
        title="Another Binge Watching couldn't hurt"
        array_path={props.listPopularTV.slice(11)}
      />
    </>
  )
}

export default TvShow
