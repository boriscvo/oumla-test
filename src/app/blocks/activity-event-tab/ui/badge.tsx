import { ActivityEvent, ActivityStatus } from "@/types/api/transaction"
import { Clock, Loader, CheckCircle2, XCircle } from "lucide-react"

function BadgeResolved({ type }: Pick<ActivityEvent, "type">) {
  const iconProps = {
    size: 44,
    className: "text-muted-foreground rouded-md p-2",
  }

  switch (type) {
    case ActivityStatus.Pending:
      return <Clock {...iconProps} />
    case ActivityStatus.Active:
      return <Loader {...iconProps} />
    case ActivityStatus.Completed:
      return <CheckCircle2 {...iconProps} />
    case ActivityStatus.Rejected:
    default:
      return <XCircle {...iconProps} />
  }
}

export function Badge({ type }: Pick<ActivityEvent, "type">) {
  return (
    <div className="mt-2">
      <BadgeResolved type={type} />
    </div>
  )
}
