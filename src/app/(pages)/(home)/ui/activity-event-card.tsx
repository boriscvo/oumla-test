"use client"
import { useActivityEventCard } from "../hooks/use-activity-event-card"
import { ActivityEventTab, CardWithTitle } from "@/app/blocks"

export function ActivityEventCard() {
  const { recentActivity, userAddress } = useActivityEventCard()

  if (!userAddress) {
    return null
  }

  if (recentActivity.length === 0) {
    return (
      <CardWithTitle title="Recent Activity">
        <p className="text-medim text-lg">No recent activity recorded.</p>
      </CardWithTitle>
    )
  }

  return (
    <CardWithTitle title="Recent Activity">
      {recentActivity.reverse().map((activity) => (
        <ActivityEventTab
          key={activity.timestamp + activity.description}
          type={activity.type}
          to={activity.to}
          from={activity.from}
          description={activity.description}
          timestamp={activity.timestamp}
          userAddress={userAddress}
        />
      ))}
    </CardWithTitle>
  )
}
