import { LabelValueRowProps } from "../types"

export function Value({ value }: Pick<LabelValueRowProps, "value">) {
  if (value === null || value === undefined) {
    return <span className="text-gray-500 font-semibold">-</span>
  }
  if (typeof value === "string" || typeof value === "number") {
    return <span className="">{value}</span>
  }
  return value
}
