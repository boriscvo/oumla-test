"use client"
import { useWalletConnector } from "@/hooks/use-wallet-connector"
import { FilterHeader, TransactionGroup } from "@/app/blocks"
import { useApprovals } from "../hooks/use-approvals"
import { ApprovalDialog } from "./approval-dialog"
import { TransactionStatusWithAll } from "@/types/common/transaction-status"

export function Content() {
  useWalletConnector()
  const {
    isLoading,
    userAddress,
    renderingTransactions,
    activeApproval,
    inputStatePending,
    stateOfFilters,
    isApprovalOpen,
    mode,
    canApprove,
    approvalMutationStatus,
    handleInputFilter,
    handleApprovalOpen,
    handleApprovalClose,
    handleApprovalConfirm,
  } = useApprovals()
  return (
    <>
      <div>
        <FilterHeader<TransactionStatusWithAll>
          hasSelect={false}
          inputValue={inputStatePending}
          filterState={stateOfFilters}
          handleInputChange={handleInputFilter}
        />
        <TransactionGroup
          variant="approval"
          isLoading={isLoading}
          transactions={renderingTransactions}
          handleTransactionClick={handleApprovalOpen}
        />
      </div>
      <ApprovalDialog
        mode={mode}
        activeApproval={activeApproval}
        isOpen={isApprovalOpen}
        canApprove={canApprove}
        userAddress={userAddress || ""}
        approvalMutationStatus={approvalMutationStatus}
        handleConfirm={handleApprovalConfirm}
        handleClose={handleApprovalClose}
      />
    </>
  )
}
