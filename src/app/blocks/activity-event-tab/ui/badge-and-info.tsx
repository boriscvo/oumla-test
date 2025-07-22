type Props = {
  children: React.ReactNode
}

export function BadgeAndInfo({ children }: Props) {
  return <div className="flex">{children}</div>
}
