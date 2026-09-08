import SliderMedia from "./components/Home/SliderMedia"
import FullHeigthCar from "./components/Home/FullHeigthCar"

const Home = function (props) {
  return (
    <div className="bg-black">
      <FullHeigthCar fhCarouselArray={props.fhCarouselArray} />

      <SliderMedia
        responseOK={props.firstSpinner}
        title="Popular Movie"
        array_path={props.listPopularMovie}
      />

      <SliderMedia
        responseOK={props.secondSpinner}
        title="Top Rated"
        array_path={props.tvTopRated}
      />
      <SliderMedia
        responseOK={props.thirdSpinner}
        title="TV Show"
        array_path={props.listPopularTV}
      />
    </div>
  )
}

export default Home
