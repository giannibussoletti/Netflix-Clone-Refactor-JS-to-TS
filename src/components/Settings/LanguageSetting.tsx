import { Col } from "react-bootstrap"
import ListGenerator from "./ListGenerator"

const languageArray = ["Language", "Playback settings", "Subtitle appearance"]
const ratingArray = ["Viewing activity", "Ratings"]
const LanguageSettings = function () {
  return (
    <>
      <Col md={4} className="offset-0 text-center text-sm-end text-md-start offset-md-4 p-0">
        {languageArray.map((listItem, i) => {
          return <ListGenerator key={listItem + i} ListItem={listItem} />
        })}
      </Col>
      <Col className="text-center text-sm-end text-md-start p-0">
        {ratingArray.map((listItem, i) => {
          return <ListGenerator key={listItem + i} ListItem={listItem} />
        })}
      </Col>
    </>
  )
}

export default LanguageSettings
