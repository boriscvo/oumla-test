type Props = {
  children: React.ReactNode
}

export function OneColumnContainer({ children }: Props) {
  return (
    <div className="flex flex-col gap-y-8 sm:px-5 sm:py-12 w-full min-h-[100vh] max-md:bg-card md:bg-dark text-white">
      {children}
    </div>
  )
}
