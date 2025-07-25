import { ActivityEvent } from "@/types/api"
import { Clock, Loader, CheckCircle2, XCircle } from "lucide-react"

function BadgeResolved({ type }: Pick<ActivityEvent, "type">) {
  const iconProps = {
    size: 44,
    className: "text-muted-foreground rouded-md p-2",
  }

  switch (type) {
    case 0:
      return <Clock {...iconProps} />
    case 1:
      return <Loader {...iconProps} />
    case 2:
      return <CheckCircle2 {...iconProps} />
    case 3:
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
