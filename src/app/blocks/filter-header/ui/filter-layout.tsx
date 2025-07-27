type Props = {
  children: React.ReactNode
}

export function FilterLayout({ children }: Props) {
  return (
    <div className="flex md:gap-x-2 max-md:gap-y-4 max-md:flex-col">
      {children}
    </div>
  )
}
