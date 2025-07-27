type Props = {
  children: React.ReactNode
}

export function SecondaryProps({ children }: Props) {
  return (
    <div className="w-full max-md:flex-col mr-4 flex md:items-center text-md">
      {children}
    </div>
  )
}
