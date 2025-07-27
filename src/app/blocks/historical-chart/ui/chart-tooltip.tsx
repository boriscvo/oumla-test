type Props = {
  date: number | null
  amount: number | null
}

export function ChartTooltip({ date, amount }: Props) {
  if (date === null || amount === null) {
    return null
  }

  return (
    <div className="flex absolute -top-12 max-md:left:0 md:right-0 px-2 max-md:px-0 text-sm font-medium bg-dark text-white border-b border-white shadow-lg opacity-0 animate-chart-tooltip">
      <p>
        {new Date(date).toLocaleDateString("en-US", {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
        })}
        {" accumulated amount of "}
        {amount} ETH
      </p>
    </div>
  )
}
