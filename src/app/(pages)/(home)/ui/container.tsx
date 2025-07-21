type Props = {
  children: React.ReactNode
}

export function Container({ children }: Props) {
  return (
    <div className="flex sm:px-5 sm:py-12 w-full h-[100vh] bg-dark text-white">
      {children}
    </div>
  )
}
