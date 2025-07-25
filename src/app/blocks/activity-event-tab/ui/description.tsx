type Props = {
  children: React.ReactNode
}

export function Description({ children }: Props) {
  return <p className="mt-2">{children}</p>
}
