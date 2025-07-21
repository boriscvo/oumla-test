import { LabelValueRowProps } from "./types"
import { Container, Label, Value } from "./ui"

export function LabelValueRow({ label, value }: LabelValueRowProps) {
  return (
    <Container>
      <Label label={label} />
      <Value value={value} />
    </Container>
  )
}
