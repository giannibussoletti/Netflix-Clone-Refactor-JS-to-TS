import type { MovieArrayTypes } from "../assets/types"
import FullHeigthCar from "./Home/FullHeigthCar"
import SliderMedia from "./Home/SliderMedia"

const Movies = function ({ firstSpinner, listPopularMovie, fhCarouselArrays }: MovieArrayTypes) {
  return (
    <>
      <FullHeigthCar fhCarouselArrays={fhCarouselArrays} />
      <SliderMedia
        responseOK={firstSpinner}
        title="Fresh Movies"
        array_path={listPopularMovie && listPopularMovie.slice(0, 10)}
      />
      <SliderMedia
        responseOK={firstSpinner}
        title="Top Rated"
        array_path={listPopularMovie && listPopularMovie.slice(11)}
      />
    </>
  )
}

export default Movies
