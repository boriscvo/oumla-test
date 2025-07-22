import { PageCard } from "@/app/atoms"
import {
  Container,
  HeroMessage,
  AccountDetails,
  HistoricalChartCard,
} from "./ui"
import { ActivityEventTab } from "@/app/blocks"
import { ActivityEventCard } from "./ui/activity-event-card"

export default function Home() {
  return (
    <Container>
      <PageCard>
        <HeroMessage />
        <AccountDetails />
      </PageCard>
      <HistoricalChartCard />
      <ActivityEventCard />
    </Container>
  )
}
