import { Container } from "./ui/container"
import { InfoSection } from "./ui/info-section"
import { SecondaryProps } from "./ui/secondary-props"

export function TransactionExcerptLoading() {
  return (
    <div className="mb-2">
      <Container>
        <div className="w-9 h-9 mt-1 bg-muted rounded-md animate-pulse"></div>
        <InfoSection>
          <div className="h-5 w-[24rem] mt-1 mb-4 bg-muted rounded animate-pulse"></div>
          <SecondaryProps>
            <div className="h-3 w-[7.75rem] mr-2 bg-muted rounded mb-1 animate-pulse"></div>
            <div className="h-3 w-[7.75rem] mr-2 bg-muted rounded mb-1 animate-pulse"></div>
            <div className="h-3 w-[7.5rem] mr-2 bg-muted rounded mb-1 animate-pulse"></div>
          </SecondaryProps>
        </InfoSection>
        <div className="h-5 w-[4rem] mt-1 bg-muted rounded animate-pulse"></div>
      </Container>
    </div>
  )
}
