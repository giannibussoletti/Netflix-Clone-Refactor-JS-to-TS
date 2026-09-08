import { Dropdown } from "react-bootstrap"
import type { StringTypes } from "../../assets/types"
const MenuLang = function ({ value }: StringTypes) {
  return (
    <Dropdown.Item className="text-light link-dark" href="#">
      {value}
    </Dropdown.Item>
  )
}
export default MenuLang
