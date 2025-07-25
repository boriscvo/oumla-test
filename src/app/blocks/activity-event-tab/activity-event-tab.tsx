import { ActivityEvent } from "@/types/api"
import { Badge, Container, TimeStamp, BadgeAndInfo } from "./ui"
import { Description } from "./ui/description"
import { FromOrTo } from "@/app/atoms"

export function ActivityEventTab({
  type,
  to,
  from,
  description,
  timestamp,
  userAddress,
}: ActivityEvent & { userAddress: string }) {
  return (
    <Container>
      <BadgeAndInfo>
        <Badge type={type} />
        <FromOrTo to={to} from={from} isSelf={userAddress === from} />
        <Description>{description}</Description>
      </BadgeAndInfo>
      <TimeStamp timestamp={timestamp} />
    </Container>
  )
}
