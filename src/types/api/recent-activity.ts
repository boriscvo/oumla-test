export type RecentActivity = ActivityEvent[]

export type ActivityEvent = {
    type: 'transaction' | 'approval' | 'user'
    label: string
    description: string
    timestamp: number
}