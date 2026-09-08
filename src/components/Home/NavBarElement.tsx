import { Link, useLocation } from "react-router"

const NavBarElement = function (props) {
  const location = useLocation()

  const pathLink = Array.from(location.pathname)
    .filter((l) => l !== "/")
    .join("")
  const CustomTag = props.typeOf

  return (
    <CustomTag
      className={props.classObj + (pathLink === props.pageLink ? " active" : "")}
      to={"/" + props.pageLink}>
      {props.buttonName}
    </CustomTag>
  )
}
export default NavBarElement
