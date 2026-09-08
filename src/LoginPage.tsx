import { Container, Row, Col, Image, Button, Dropdown, Form } from "react-bootstrap"
import MenuLang from "./components/LoginPageComponents/MenuLang"
import BottomButton from "./components/LoginPageComponents/BottomButton"
import { Link } from "react-router"

const langArray = ["Italian", "English", "German", "Spanish"]
const bottomButton = ["SAVE", "CANCEL", "DELETE PROFILE"]

const LoginPage = function () {
  return (
    <div className="bg-black">
      <Container className="text-light">
        <Row>
          <Col className="border-bottom border-secondary">
            <h1 style={{ fontSize: "4em" }}>Edit Profile</h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center text-md-start pt-4" xs={12} md={3}>
            <Image fluid src="../public/kids_icon.png" />
          </Col>
          <Col>
            {/* NOME E LINGUA */}
            <div className="border-bottom border-secondary py-4">
              <Button className="bg-opacity-75 w-100 text-start mb-4 rounded-0" variant="secondary">
                <h5 className="text-light m-0 p-2">
                  <Link className="link-light" to={"/"}>
                    Strive Student
                  </Link>
                </h5>
              </Button>

              <h5 className="text-white opacity-75">Language:</h5>
              <Dropdown>
                <Dropdown.Toggle
                  className="border border-2 border-light rounded-0"
                  variant="dark"
                  id="dropdown-basic">
                  Language
                </Dropdown.Toggle>
                <Dropdown.Menu className="bg-black border border-2 border-light rounded-0">
                  {langArray.map((lang) => {
                    return <MenuLang lang={lang} />
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* MATURITY SETTING */}
            <div className="border-bottom border-secondary py-4">
              <h5 className="text-white opacity-75">Maturity Settings:</h5>
              <Button
                variant="outline-secondary"
                className="rounded-0 border-2 px-4 my-3 text-light">
                ALL MATURITY RATINGS
              </Button>
              <p>Show titles of all maturity ratings for this profile.</p>
              <Button
                variant="outline-secondary"
                className="rounded-0 border-2 px-4 my-1 text-light">
                EDIT
              </Button>
            </div>

            {/* AUTOPLAY CONTROLS */}
            <div id="checkbox-css" className="py-4">
              <h5 className="text-white opacity-75">Autoplay Controls</h5>
              <Form>
                <Form.Check
                  type="checkbox"
                  className="form-check mb-3"
                  label="Autoplay next episode In a serles on all devices."
                />
                <Form.Check
                  type="checkbox"
                  className="form-check mb-3"
                  label="Autoplay previews whlle browsing on all devices."
                />
              </Form>
            </div>
            {/* BUTTONS */}
          </Col>
        </Row>
        <Row className="mt-3 pt-4 border-top border-secondary">
          <Row className="d-flex flex-wrap justify-content-center gap-3">
            {bottomButton.map((button) => {
              return <BottomButton key={"button-" + button} button={button} />
            })}
          </Row>
        </Row>
      </Container>
    </div>
  )
}
export default LoginPage
