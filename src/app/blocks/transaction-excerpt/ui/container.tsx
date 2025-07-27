type Props = {
  children: React.ReactNode
}

export function Container({ children }: Props) {
  return (
    <div className="relative flex py-6 md:py-3 opacity-0 animate-page-card">
      {children}
    </div>
  )
}
