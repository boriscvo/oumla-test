import { LabelValueRowProps } from "../types"

export function Label({ label }: Pick<LabelValueRowProps, "label">) {
  if (typeof label === "string" || typeof label === "number") {
    return <span className="font-semibold">{label}:</span>
  }
  return label
}
