import { OneColumnContainer } from "@/app/atoms"
import { CardWithTitle } from "@/app/blocks"
import { Content } from "./ui"

export default function Transactions() {
  return (
    <OneColumnContainer>
      <CardWithTitle title="Transactions">
        <Content />
      </CardWithTitle>
    </OneColumnContainer>
  )
}
