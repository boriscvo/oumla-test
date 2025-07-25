type Props = {
  children: React.ReactNode
}

export function Info({ children }: Props) {
  return <div className="flex-col ml-2">{children}</div>
}
