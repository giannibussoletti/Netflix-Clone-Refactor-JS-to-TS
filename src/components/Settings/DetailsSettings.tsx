import { Col } from "react-bootstrap"
import SectionTitle from "./SectionTitle"
import ListGenerator from "./ListGenerator"
import { DetailStrings } from "../../assets/arrays"

const DetailsSetting = function () {
  return (
    <>
      <Col sm={6} md={4} className="p-0 text-center text-sm-start">
        <SectionTitle value="settings" />
      </Col>
      <Col sm={6} md={8} className="text-center text-sm-end text-md-start">
        {DetailStrings.map((listItem, i) => {
          return <ListGenerator key={listItem + i} value={listItem} />
        })}
      </Col>
    </>
  )
}

export default DetailsSetting
