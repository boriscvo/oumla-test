"use client"

import { useTransactions } from "../hooks/use-transactions"
import { FilterHeader } from "./filter-header"
import { Group } from "./group"
import { NewTransaction, TransactionDetails } from "./modals"

export function Content() {
  const {
    filterOptions,
    isNewTransactionOpen,
    activeTransaction,
    pendingTransactions,
    nonPendingTransactions,
    filterStateNonPending,
    inputStatePending,
    inputStateNonPending,
    stateOfPendingFiltering,
    stateOfNonPendingFiltering,
    handleSelectFilterNonPending,
    handleInputFilterPendingTransactions,
    handleInputFilterNonPendingTransactions,
    handleActiveTransactionOpen,
    handleActiveTransactionClose,
    handleNewTransactionOpen,
    handleNewTransactionClose,
  } = useTransactions()
  return (
    <>
      <div className="mb-10 border-b border-muted pb-10">
        <FilterHeader
          hasSelect={false}
          inputValue={inputStatePending}
          filterState={stateOfPendingFiltering}
          handleInputChange={handleInputFilterPendingTransactions}
          handleNewTransactionOpen={handleNewTransactionOpen}
        />
        <Group
          transactions={pendingTransactions}
          handleTransactionClick={handleActiveTransactionOpen}
        />
      </div>
      <div className="mb-4">
        <FilterHeader
          hasSelect={true}
          inputValue={inputStateNonPending}
          filterState={stateOfNonPendingFiltering}
          handleInputChange={handleInputFilterNonPendingTransactions}
          handleNewTransactionOpen={handleNewTransactionOpen}
          options={filterOptions}
          selectValue={filterStateNonPending}
          handleSelectChange={handleSelectFilterNonPending}
        />
        <Group
          transactions={nonPendingTransactions}
          handleTransactionClick={handleActiveTransactionOpen}
        />
      </div>
      <TransactionDetails
        transaction={activeTransaction}
        handleClose={handleActiveTransactionClose}
      />
      <NewTransaction
        isOpen={isNewTransactionOpen}
        handleClose={handleNewTransactionClose}
      />
    </>
  )
}
