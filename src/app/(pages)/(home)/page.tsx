import { OneColumnContainer, PageCard } from "@/app/atoms"
import { HeroMessage, AccountDetails, HistoricalChartCard } from "./ui"
import { ActivityEventCard } from "./ui/activity-event-card"

export default function Home() {
  return (
    <OneColumnContainer>
      <PageCard>
        <HeroMessage />
        <AccountDetails />
      </PageCard>
      <HistoricalChartCard />
      <ActivityEventCard />
    </OneColumnContainer>
  )
}
