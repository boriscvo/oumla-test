import { OneColumnContainer } from "@/app/atoms"
import { CardWithTitle } from "@/app/blocks"
import { Content } from "./ui"

export default function Approvals() {
  return (
    <OneColumnContainer>
      <CardWithTitle title="Approvals">
        <Content />
      </CardWithTitle>
    </OneColumnContainer>
  )
}
