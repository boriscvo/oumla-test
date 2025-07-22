type Props = {
  children: React.ReactNode
}

export function InfoSection({ children }: Props) {
  return <div className="w-full mx-4 flex justify-between">{children}</div>
}
