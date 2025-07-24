type Props = {
  children: React.ReactNode
}

export function Container({ children }: Props) {
  return <span className="flex py-3">{children}</span>
}
