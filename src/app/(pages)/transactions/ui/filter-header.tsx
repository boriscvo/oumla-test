"use client"
import { Button } from "@/components/ui/button"
import { FilterStateVariant } from "../types"
import { FilterState } from "./filter-state"
import { TransactionInput } from "./transaction-input"
import { TransactionSelect } from "./transaction-select"
import { TransactionStatusNonPending } from "@/types/common"

type Props =
  | {
      inputValue: string
      filterState: FilterStateVariant
      handleInputChange: (value: string) => void
      handleNewTransactionOpen: () => void
    } & (
      | {
          hasSelect: true
          options: TransactionStatusNonPending[]
          selectValue: TransactionStatusNonPending
          handleSelectChange: (value: TransactionStatusNonPending) => void
        }
      | {
          hasSelect?: false
          selectValue?: never
          handleSelectChange?: never
          options?: never
        }
    )

export function FilterHeader({
  options,
  selectValue,
  inputValue,
  filterState,
  hasSelect,
  handleSelectChange,
  handleInputChange,
  handleNewTransactionOpen,
}: Props) {
  return (
    <div className="w-full flex flex-col">
      <FilterState filterState={filterState} />
      <div className="flex gap-x-2">
        {hasSelect && (
          <TransactionSelect
            options={options}
            value={selectValue}
            onChange={handleSelectChange}
          />
        )}
        <TransactionInput value={inputValue} onChange={handleInputChange} />
        <Button
          className="ml-auto cursor-pointer text-base h-10 tracking-wide"
          onClick={handleNewTransactionOpen}
        >
          + New Transaction
        </Button>
      </div>
    </div>
  )
}
