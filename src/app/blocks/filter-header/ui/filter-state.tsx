import React from "react"
import { FilterStateVariant } from "../types"

type Props = {
  filterState: FilterStateVariant
}

const FilterStateLabel = React.memo(({ filterState }: Props) => {
  switch (filterState) {
    case "all-and-text":
      return <span>All Non-Pending Transactions, filtered by user input</span>
    case "active":
      return <span>Active Transactions</span>
    case "active-and-text":
      return <span>Active Transactions, filtered by user input</span>
    case "pending":
      return <span>Pending Transactions</span>
    case "pending-and-text":
      return <span>Pending Transactions, filtered by user input</span>
    case "completed":
      return <span>Completed Transactions</span>
    case "completed-and-text":
      return <span>Completed Transactions, filtered by user input</span>
    case "rejected":
      return <span>Rejected Transactions</span>
    case "rejected-and-text":
      return <span>Rejected Transactions, filtered by user input</span>
    case "all":
    default:
      return <span>All Non-Pending Transactions, max 20 most recent</span>
  }
})
FilterStateLabel.displayName = "FilterStateLabel"

export function FilterState({
  filterState,
}: {
  filterState: FilterStateVariant
}) {
  return (
    <div className="text-xl mb-4 font-medium">
      Showing: <FilterStateLabel filterState={filterState} />
    </div>
  )
}
