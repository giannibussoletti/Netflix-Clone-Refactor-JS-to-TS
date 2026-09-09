import { useLocation } from "react-router"
import type { NavBarElementTypes } from "../../assets/types"

const NavBarElement = function ({ buttonName, classObj, typeOf, pageLink }: NavBarElementTypes) {
  const location = useLocation()

  const pathLink = Array.from(location.pathname)
    .filter((l) => l !== "/")
    .join("")
  const CustomTag = typeOf

  return (
    <CustomTag className={classObj + (pathLink === pageLink ? " active" : "")} to={"/" + pageLink}>
      {buttonName}
    </CustomTag>
  )
}
export default NavBarElement
