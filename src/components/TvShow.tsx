import type { TvShowArrayTypes } from "../assets/types"
import FullHeigthCar from "./Home/FullHeigthCar"
import SliderMedia from "./Home/SliderMedia"

const TvShow = function ({ thirdSpinner, listPopularTV, fhCarouselSeries }: TvShowArrayTypes) {
  return (
    <>
      <FullHeigthCar fhCarouselSeries={fhCarouselSeries} />
      <SliderMedia
        responseOK={thirdSpinner}
        title="Fresh TV Show"
        array_path={listPopularTV && listPopularTV.slice(0, 10)}
      />
      <SliderMedia
        responseOK={thirdSpinner}
        title="Another Binge Watching couldn't hurt"
        array_path={listPopularTV && listPopularTV.slice(11)}
      />
    </>
  )
}

export default TvShow
