import { Col } from "react-bootstrap"
import SectionTitle from "./SectionTitle"
import ListGenerator from "./ListGenerator"

const Details = [
  "Parental controls",
  "Test participation",
  "Manage download devices",
  "Activate a device",
  "Recent device streaming activity",
  "Sign out of all devices",
]

const DetailsSetting = function () {
  return (
    <>
      <Col sm={6} md={4} className="p-0 text-center text-sm-start">
        <SectionTitle sectionTitle="settings" />
      </Col>
      <Col sm={6} md={8} className="text-center text-sm-end text-md-start">
        {Details.map((listItem, i) => {
          return <ListGenerator key={listItem + i} ListItem={listItem} />
        })}
      </Col>
    </>
  )
}

export default DetailsSetting
