type Props = {
  children?: React.ReactNode
}

export function Container({ children }: Props) {
  return <div className="flex flex-col w-full gap-y-4">{children}</div>
}
