import { LoadingSkeleton } from "@/app/atoms"

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full md:w-[40%] mt-8 pt-1 flex flex-col space-y-4">
      {children}
    </div>
  )
}

export function AccountDetailsLoading() {
  return (
    <Container>
      <LoadingSkeleton className="w-[9rem] h-5 mb-4" />
      <div className="flex justify-between">
        <LoadingSkeleton className="w-[4rem]" />
        <LoadingSkeleton className="w-[4rem]" />
      </div>
      <div className="flex justify-between">
        <LoadingSkeleton className="w-[4rem]" />
        <LoadingSkeleton className="w-[4rem]" />
      </div>
      <div className="flex justify-between">
        <LoadingSkeleton className="w-[9rem]" />
        <LoadingSkeleton className="w-[2rem]" />
      </div>
      <div className="flex justify-between">
        <LoadingSkeleton className="w-[9rem]" />
        <LoadingSkeleton className="w-[2rem]" />
      </div>
    </Container>
  )
}
