import { ActivityEvent } from "@/types/api/transaction"
import { formatDistanceToNow } from "date-fns"

export function TimeStamp({ timestamp }: Pick<ActivityEvent, "timestamp">) {
  return (
    <span className="max-md:mt-2 max-md:ml-auto md:text-lg">
      {formatDistanceToNow(new Date(timestamp * 1000), { addSuffix: true })}
    </span>
  )
}
