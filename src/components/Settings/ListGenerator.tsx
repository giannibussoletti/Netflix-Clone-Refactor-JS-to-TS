import type { StringTypes } from "../../assets/types"

const ListGenerator = function ({ value }: StringTypes) {
  return <p className="mb-2 text-primary">{value}</p>
}
export default ListGenerator
