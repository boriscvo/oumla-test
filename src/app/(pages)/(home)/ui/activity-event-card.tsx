"use client"
import { useActivityEventCard } from "../hooks/use-activity-event-card"
import { ActivityEventTab, CardWithTitle } from "@/app/blocks"

export function ActivityEventCard() {
  const { recentActivity, userAddress } = useActivityEventCard()

  if (!userAddress) {
    return null
  }

  return (
    <CardWithTitle title="Recent Activity">
      {recentActivity.map((activity) => (
        <ActivityEventTab
          key={activity.timestamp + activity.label + activity.description}
          type={activity.type}
          label={activity.label}
          description={activity.description}
          timestamp={activity.timestamp}
        />
      ))}
    </CardWithTitle>
  )
}
