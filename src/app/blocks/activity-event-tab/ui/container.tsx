type Props = {
  children?: React.ReactNode
}

export function Container({ children }: Props) {
  return (
    <div className="w-full max-md:flex-col flex justify-between my-8 md:my-4 items-start">
      {children}
    </div>
  )
}
