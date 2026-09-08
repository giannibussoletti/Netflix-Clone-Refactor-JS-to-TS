import FullHeigthCar from "./Home/FullHeigthCar"
import SliderMedia from "./Home/SliderMedia"

const Movies = function (props) {
  return (
    <>
      <FullHeigthCar fhCarouselArray={props.fhCarouselArray} />
      <SliderMedia
        responseOK={props.firstSpinner}
        title="Fresh Movies"
        array_path={props.listPopularMovie.slice(0, 10)}
      />
      <SliderMedia
        responseOK={props.firstSpinner}
        title="Top Rated"
        array_path={props.listPopularMovie.slice(11)}
      />
    </>
  )
}

export default Movies
