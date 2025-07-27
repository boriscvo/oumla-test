"use client"
import { Button } from "@/components/ui/button"
import { FilterState } from "./ui/filter-state"
import { TransactionInput } from "./ui/transaction-input"
import { TransactionSelect } from "./ui/transaction-select"
import { FilterStateVariant } from "./types"
import { Container, FilterLayout } from "./ui"

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
    <Container>
      <FilterState filterState={filterState} />
      <FilterLayout>
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
            className="md:ml-auto cursor-pointer text-base h-10 tracking-wide"
            onClick={handleNewTransactionOpen}
          >
            + New Transaction
          </Button>
        )}
      </FilterLayout>
    </Container>
  )
}
