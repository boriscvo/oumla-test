type Props = {
  mode: "approve" | "reject" | null
}

export function Sentiment({ mode }: Props) {
  if (mode === "approve") {
    return (
      <>
        <span>Do you really want to</span>
        <span className="text-positive font-semibold"> approve </span>
        <span>this transaction?</span>
      </>
    )
  }
  if (mode === "reject") {
    return (
      <>
        <span>You are about to</span>
        <span className="text-negative font-semibold"> reject </span>
        <span>this transaction.</span>
      </>
    )
  }
  return <span className="text-muted-foreground">No action selected</span>
}
