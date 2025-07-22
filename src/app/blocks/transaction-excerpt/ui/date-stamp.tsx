type Props = {
  date: number
}

export function DateStamp({ date }: Props) {
  const dateFromUnix = new Date(date)
  return (
    <span className="text-sm text-gray-500">
      {dateFromUnix.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </span>
  )
}
