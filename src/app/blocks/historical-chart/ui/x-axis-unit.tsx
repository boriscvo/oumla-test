import { formatDistanceToNow } from "date-fns"

type Props = {
  time: string
  ml?: string
}

export function XaxisUnit({ time, ml }: Props) {
  if (!ml) return <></>
  return (
    <div className={`text-gray600 text-xs font-medium`}>
      {formatDistanceToNow(new Date(Number(time)), {
        addSuffix: true,
      })}
    </div>
  )
}
