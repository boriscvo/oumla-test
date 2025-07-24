type Props = {
  date: number
}

export function DateStamp({ date }: Props) {
  const dateFromUnix = new Date(date * 1000)
  return (
    <span className="text-md text-muted-foreground">
      {dateFromUnix.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
      {" at "}
      {dateFromUnix.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })}
    </span>
  )
}
