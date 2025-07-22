import { ActivityEvent } from "@/types/api"
import { User, CheckCircle, RefreshCw } from "lucide-react"

function BadgeResolved({ type }: Pick<ActivityEvent, "type">) {
  const iconProps = {
    size: 44,
    className: "text-muted-foreground rouded-md p-2",
  }

  switch (type) {
    case "transaction":
      return <RefreshCw {...iconProps} />
    case "approval":
      return <CheckCircle {...iconProps} />
    case "user":
      return <User {...iconProps} />
    default:
      return null
  }
}

export function Badge({ type }: Pick<ActivityEvent, "type">) {
  return (
    <div className="mt-2">
      <BadgeResolved type={type} />
    </div>
  )
}
