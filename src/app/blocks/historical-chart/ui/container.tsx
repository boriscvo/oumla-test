type Props = {
  children: React.ReactNode
  height: number
}

export function Container({ children, height }: Props) {
  return (
    <div className={`relative mb-2 sm:mb-10`} style={{ height: height + "px" }}>
      {children}
    </div>
  )
}
