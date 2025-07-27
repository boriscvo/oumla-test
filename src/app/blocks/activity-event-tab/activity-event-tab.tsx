import { ActivityEvent } from "@/types/api/transaction"
import {
  Badge,
  Container,
  TimeStamp,
  BadgeAndInfo,
  Info,
  Description,
} from "./ui"
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
        <Info>
          <FromOrTo to={to} from={from} isSelf={userAddress === from} />
          <Description>{description}</Description>
        </Info>
      </BadgeAndInfo>
      <TimeStamp timestamp={timestamp} />
    </Container>
  )
}
