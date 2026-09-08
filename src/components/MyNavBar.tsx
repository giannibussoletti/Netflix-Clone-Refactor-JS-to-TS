import { Container, Nav, Navbar, Dropdown, NavItem, NavLink } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NavBarElement from "./Home/NavBarElement"
import { Link, useNavigate } from "react-router"
import SearchBar from "./Home/NavBar/SearchBar"
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons"

const MyNavBar = function (props) {
  const navigate = useNavigate()

  const menuObj = {
    menu: ["Home", "Tv Show", "Movies"],
    menuSettings: ["Settings", "Logout"],
  }

  return (
    <>
      <Navbar expand="lg" className="p-0 z-3" data-bs-theme="dark">
        <Container fluid className="bg-black text-white position-relative">
          {/* Menu Hamburger solo da mobile */}
          <Dropdown as={NavItem} className="d-flex d-lg-none burger-menu">
            <Dropdown.Toggle as={NavLink}>
              <FontAwesomeIcon icon={faBars} style={{ color: "#e2e5e9" }} />
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{ top: "100%" }}
              className="bg-black rounded-0 border-light border-1">
              {menuObj.menu.map((link) => {
                return (
                  <NavBarElement
                    key={link}
                    buttonName={link}
                    classObj={"dropdown-item"}
                    typeOf={Link}
                    pageLink={link === "Home" ? "" : link.toLocaleLowerCase().replaceAll(" ", "-")}
                  />
                )
              })}
            </Dropdown.Menu>
          </Dropdown>

          {/* Logo Netflix */}
          <Navbar.Brand
            style={{ height: "55px" }}
            className="me-auto me-lg-0 d-none d-md-inline-block">
            <img
              className="h-100"
              src="/netflix_logo.png"
              alt="Netflix Logo"
              onClick={() => {
                navigate("/")
              }}
            />
          </Navbar.Brand>

          {/* Menu Tablet / Desktop */}
          <Nav className="d-none d-lg-flex">
            {menuObj.menu.map((link) => {
              return (
                <NavBarElement
                  key={link}
                  buttonName={link}
                  classObj={"nav-link"}
                  typeOf={Link}
                  pageLink={link === "Home" ? "" : link.toLocaleLowerCase().replaceAll(" ", "-")}
                />
              )
            })}
          </Nav>

          <SearchBar options={props.options} />

          {/* Menu Destra */}
          <Nav className=" flex-row align-items-center">
            <Nav.Link className={menuObj.class + " p-2 d-none d-sm-inline-block"}>KIDS</Nav.Link>
            <Nav.Link className=" p-2 d-none d-sm-inline-block">
              <FontAwesomeIcon icon={faBell} style={{ color: "rgb(255, 255, 255)" }} />
            </Nav.Link>
          </Nav>

          {/* Menu Utente Dropdown */}
          <Dropdown align="end" as={NavItem} className="d-flex">
            <Dropdown.Toggle as={NavLink} style={{ height: "55px" }}>
              <img className="h-100 p-2" src="/avatar.png" alt="avatar-kids" />
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{ top: "100%" }}
              className="bg-black rounded-0 border-light border-1">
              <Link
                to="/settings"
                className="text-white text-decoration-none opacity-75 dropdown-item">
                Settings
              </Link>
              <Link
                to="/login-page"
                className="text-white text-decoration-none opacity-75 dropdown-item">
                Log Out
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNavBar

// text-white text-decoration-none opacity-75 dropdown-item
