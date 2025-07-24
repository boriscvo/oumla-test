type Props = {
  isColumn?: boolean
  children: React.ReactNode
}

export function Container({ isColumn, children }: Props) {
  return (
    <div
      className={`flex justify-between ${isColumn ? "flex-col gap-y-2" : ""}`}
    >
      {children}
    </div>
  )
}
