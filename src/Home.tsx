import SliderMedia from "./components/Home/SliderMedia"
import FullHeigthCar from "./components/Home/FullHeigthCar"
import type { AppComponentsTypes } from "./assets/types"

const Home = function ({
  firstSpinner,
  secondSpinner,
  thirdSpinner,
  listPopularMovie,
  tvTopRated,
  listPopularTV,
  fhCarouselArrays,
}: AppComponentsTypes) {
  return (
    <div className="bg-black">
      <FullHeigthCar fhCarouselArrays={fhCarouselArrays} />

      <SliderMedia responseOK={firstSpinner} title="Popular Movie" array_path={listPopularMovie} />

      <SliderMedia responseOK={secondSpinner} title="Top Rated" array_path={tvTopRated} />
      <SliderMedia responseOK={thirdSpinner} title="TV Show" array_path={listPopularTV} />
    </div>
  )
}

export default Home
