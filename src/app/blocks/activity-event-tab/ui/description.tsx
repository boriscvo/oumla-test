type Props = {
  children: React.ReactNode
}

export function Description({ children }: Props) {
  return <p className="mt-1">{children}</p>
}
