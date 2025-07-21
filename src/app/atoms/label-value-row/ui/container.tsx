type Props = {
  children: React.ReactNode
}

export function Container({ children }: Props) {
  return <div className="flex justify-between">{children}</div>
}
