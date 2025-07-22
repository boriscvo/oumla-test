type Props = {
  children?: React.ReactNode
}

export function Container({ children }: Props) {
  return (
    <div className="w-full flex justify-between my-4 items-start">
      {children}
    </div>
  )
}
