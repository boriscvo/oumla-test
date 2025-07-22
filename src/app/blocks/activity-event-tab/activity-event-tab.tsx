import { ActivityEvent } from "@/types/api"
import { Badge, BasicInfo, Container, TimeStamp, BadgeAndInfo } from "./ui"

export function ActivityEventTab({
  type,
  label,
  description,
  timestamp,
}: ActivityEvent) {
  return (
    <Container>
      <BadgeAndInfo>
        <Badge type={type} />
        <BasicInfo label={label} description={description} />
      </BadgeAndInfo>
      <TimeStamp timestamp={timestamp} />
    </Container>
  )
}
