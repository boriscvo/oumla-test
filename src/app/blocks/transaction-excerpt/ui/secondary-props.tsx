type Props = {
  children: React.ReactNode
}

export function SecondaryProps({ children }: Props) {
  return <div className="w-full mr-4 flex items-center text-md">{children}</div>
}
