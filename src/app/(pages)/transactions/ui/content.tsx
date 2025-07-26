"use client"
import { useWalletConnector } from "@/hooks/use-wallet-connector"
import { FilterHeader, TransactionGroup } from "@/app/blocks"
import { useTransactions } from "../hooks/use-transactions"
import { NewTransaction, TransactionDetails } from "./modals"

export function Content() {
  useWalletConnector()
  const {
    isLoading,
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
        <TransactionGroup
          isLoading={isLoading}
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
        <TransactionGroup
          isLoading={isLoading}
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
