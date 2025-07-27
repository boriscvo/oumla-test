type Props = {
  children: React.ReactNode
  height: number
}

export function Container({ children, height }: Props) {
  return (
    <div
      className={`relative max-md:mt-8 mb-2 sm:mb-10`}
      style={{ height: height + "px" }}
    >
      {children}
    </div>
  )
}
