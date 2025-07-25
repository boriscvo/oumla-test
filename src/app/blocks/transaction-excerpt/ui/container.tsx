type Props = {
  children: React.ReactNode
}

export function Container({ children }: Props) {
  return (
    <span className="flex py-3 transition-all duration-500">{children}</span>
  )
}
