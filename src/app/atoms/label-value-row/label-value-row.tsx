import { LabelValueRowProps } from "./types"
import { Container, Label, Value } from "./ui"

export function LabelValueRow({ isColumn, label, value }: LabelValueRowProps) {
  return (
    <Container isColumn={isColumn}>
      <Label label={label} />
      <Value value={value} />
    </Container>
  )
}
