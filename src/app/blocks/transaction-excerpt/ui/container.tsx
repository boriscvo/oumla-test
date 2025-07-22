type Props = {
  children: React.ReactNode
}

export function Container({ children }: Props) {
  return (
    <span className="py-2 border-1 border-secondary rounded-md">
      {children}
    </span>
  )
}
