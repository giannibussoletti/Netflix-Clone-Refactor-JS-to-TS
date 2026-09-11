import { Col, Image } from "react-bootstrap"
import SectionTitle from "./SectionTitle"
import ListGenerator from "./ListGenerator"
import { profile } from "../../assets/arrays"

const ProfileSettings = function () {
  return (
    <>
      <Col sm={4}>
        <SectionTitle value="my profile" />
      </Col>
      <Col sm={8} md={4} className="text-sm-end p-0 text-center text-md-start mb-2 m-md-0">
        <Image style={{ width: "30px" }} src="./avatar.png" />
        <span className="fw-bold ms-3">Strive Student</span>
      </Col>
      <Col className="p-0 text-center text-sm-end">
        {profile.map((listItem, i) => {
          return <ListGenerator key={listItem + i} value={listItem} />
        })}
      </Col>
    </>
  )
}
export default ProfileSettings
