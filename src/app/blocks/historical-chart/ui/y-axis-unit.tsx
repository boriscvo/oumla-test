type Props = {
  point: number
  style?: string
}

export function YaxisUnit({ point, style }: Props) {
  return (
    <div
      className={`absolute text-black right-0 text-gray600 px-1.5 py-1 rounded-sm bg-white whitespace-nowrap opacity-70 text-xs font-medium leading-none transition-all ${
        style || ""
      }`}
    >
      {point.toFixed(2)} ETH
    </div>
  )
}
