type Props = {
  children: React.ReactNode
}

export function Content({ children }: Props) {
  return <div className="flex flex-col mt-2">{children}</div>
}
