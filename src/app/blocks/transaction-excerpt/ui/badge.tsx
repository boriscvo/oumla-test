import { ArrowDownToLine, ArrowUpToLine } from "lucide-react"

type Props = {
  isSelf: boolean
}

function BadgeResolved({ isSelf }: Props) {
  return isSelf ? <ArrowDownToLine size="36" /> : <ArrowUpToLine size="36" />
}

export function Badge({ isSelf }: Props) {
  return (
    <div className="mt-2.5">
      <BadgeResolved isSelf={isSelf} />
    </div>
  )
}
