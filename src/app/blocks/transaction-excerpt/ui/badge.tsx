import { ArrowUpRight, ArrowDownRight } from "lucide-react"

type Props = {
  isSelf: boolean
}

function BadgeResolved({ isSelf }: Props) {
  return isSelf ? <ArrowDownRight size="36" /> : <ArrowUpRight size="36" />
}

export function Badge({ isSelf }: Props) {
  return (
    <div className="mt-2.5">
      <BadgeResolved isSelf={isSelf} />
    </div>
  )
}
