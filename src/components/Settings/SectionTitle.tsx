import type { StringTypes } from "../../assets/types"

const SectionTitle = function ({ value }: StringTypes) {
  return <h5 className="text-uppercase text-secondary">{value}</h5>
}
export default SectionTitle
