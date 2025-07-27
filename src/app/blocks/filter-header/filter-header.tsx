"use client"
import { Button } from "@/components/ui/button"
import { FilterState } from "./ui/filter-state"
import { TransactionInput } from "./ui/transaction-input"
import { TransactionSelect } from "./ui/transaction-select"
import { FilterStateVariant } from "./types"

type Props<T extends string = string> =
  | {
      inputValue: string
      filterState: FilterStateVariant
      handleInputChange: (value: string) => void
      handleNewTransactionOpen?: () => void
    } & (
      | {
          hasSelect: true
          options: T[]
          selectValue: T
          handleSelectChange: (value: T) => void
        }
      | {
          hasSelect?: false
          selectValue?: never
          handleSelectChange?: never
          options?: never
        }
    )

export function FilterHeader<T extends string = string>({
  options,
  selectValue,
  inputValue,
  filterState,
  hasSelect,
  handleSelectChange,
  handleInputChange,
  handleNewTransactionOpen,
}: Props<T>) {
  return (
    <div className="w-full flex flex-col">
      <FilterState filterState={filterState} />
      <div className="flex gap-x-2">
        {hasSelect && (
          <TransactionSelect<T>
            options={options}
            value={selectValue}
            onChange={handleSelectChange}
          />
        )}
        <TransactionInput value={inputValue} onChange={handleInputChange} />
        {handleNewTransactionOpen && (
          <Button
            className="ml-auto cursor-pointer text-base h-10 tracking-wide"
            onClick={handleNewTransactionOpen}
          >
            + New Transaction
          </Button>
        )}
      </div>
    </div>
  )
}
