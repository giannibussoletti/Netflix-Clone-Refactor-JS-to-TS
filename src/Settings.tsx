import { Container, Row, Col } from "react-bootstrap"
import AccountMember from "./components/Settings/MemberAccount"
import PlanDetails from "./components/Settings/PlanDetails"
import DetailsSetting from "./components/Settings/DetailsSettings"
import ProfileSettings from "./components/Settings/ProfileSettings"
import LanguageSettings from "./components/Settings/LanguageSetting"

const Settings = function () {
  return (
    <Container fluid className="bg-body pb-5">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center text-md-start border-secondary border-bottom mt-5 pb-3 mb-3">
              Account
            </h1>
          </Col>
        </Row>
        {/* MEMBER & ACCOUNT */}
        <Row>
          <AccountMember />
        </Row>

        {/* PLAN DETAILS */}
        <Row xs={1} sm={3} className="py-3 mb-3 border-secondary border-top border-bottom">
          <PlanDetails />
        </Row>
        {/* SETTINGS ROW */}
        <Row className="border-bottom border-secondary pb-3 mb-4">
          <DetailsSetting />
        </Row>
        {/* PROFILE ROW */}
        <Row className="mb-3">
          <ProfileSettings />
        </Row>
        {/* LANGUAGE ROW */}
        <Row>
          <LanguageSettings />
        </Row>
      </Container>
    </Container>
  )
}
export default Settings
