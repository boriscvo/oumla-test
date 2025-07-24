import { Transaction, TransactionStatus, TransactionStatusNonPending } from "@/types/api/transaction"
import { useCallback, useEffect, useMemo, useState } from "react"
import { FilterStateVariant } from "../types"
import { mockedTransactions } from "../mocks/mocked-transactions"

export function useTransactions(){

    const filterOptions = ["all", "active", "completed", "rejected"] as TransactionStatusNonPending[]

    const [fullPendingTransactions, setFullPendingTransactions] = useState<Transaction[]>([])
    const [fullNonPendingTransactions, setFullNonPendingTransactions] = useState<Transaction[]>([])

    const [pendingTransactions, setPendingTransactions] = useState<Transaction[]>([])
    const [nonPendingTransactions, setNonPendingTransactions] = useState<Transaction[]>([])

    const [activeTransaction, setActiveTransaction] = useState<Transaction | null>(null)
    const [isNewTransactionOpen, setIsNewTransactionOpen] = useState<boolean>(false)

    const handleActiveTransaction = useCallback((id: number | null) => {
        const transaction = fullNonPendingTransactions.find(transaction => transaction.id === id) || fullNonPendingTransactions.find(transaction => transaction.id === id)
        setActiveTransaction(transaction || null)
    }, [fullNonPendingTransactions])

    const handleNewTransactionOpen = () => {
        setIsNewTransactionOpen(true)
    }
    const handleNewTransactionClose = () => {
        setIsNewTransactionOpen(false)
    }

    const handleSetAllPending = (transactions: Transaction[]) => {
        const pending = transactions.filter(transaction => transaction.status === 'pending')
        setFullPendingTransactions(pending)
        setPendingTransactions(pending)
    }

    const handleSetAllNonPending = (transactions: Transaction[]) => {
        const nonPending = transactions.filter(transaction => transaction.status !== 'pending')
        setFullNonPendingTransactions(nonPending)
        setNonPendingTransactions(nonPending.slice(-20))
    }

    const [filterStateNonPending, setFilterStateNonPending] = useState<TransactionStatusNonPending>("all")

    const [inputStatePending, setInputStatePending] = useState<string>("")
    const [inputStateNonPending, setInputStateNonPending] = useState<string>("")

    const handleSelectFilterNonPending = useCallback((filter: TransactionStatusNonPending) => {
        switch (filter) {
            case "active":
                setFilterStateNonPending("active")
                setNonPendingTransactions(fullNonPendingTransactions.filter(transaction => transaction.status === "active"))
                return
            case "completed":
                setFilterStateNonPending("completed")
                setNonPendingTransactions(fullNonPendingTransactions.filter(transaction => transaction.status === "completed"))
                return
            case "rejected":
                setFilterStateNonPending("rejected")
                setNonPendingTransactions(fullNonPendingTransactions.filter(transaction => transaction.status === "rejected"))
                return
            case null:
            default:
                setFilterStateNonPending("all")
                setNonPendingTransactions(fullNonPendingTransactions.slice(-20))
        }
    }, [fullNonPendingTransactions])

    const handleInputFilterPendingTransactions = (input: string) => {
        setInputStatePending(input)
        setPendingTransactions(fullPendingTransactions.filter(transaction => 
            transaction.to.includes(input) || transaction.from.includes(input)
        ))
    }

    const handleInputFilterNonPendingTransactions = (input: string) => {
        setInputStateNonPending(input)
        setNonPendingTransactions(fullNonPendingTransactions.filter(transaction => 
            transaction.to.includes(input) || transaction.from.includes(input)
        ))
    }

    const stateOfPendingFiltering: FilterStateVariant = useMemo(() => {
        if( inputStatePending && inputStatePending.length > 0) {
            return "pending-and-text"
        }
        return "pending"
    }, [inputStatePending, fullPendingTransactions])

    const stateOfNonPendingFiltering: FilterStateVariant = useMemo(() => {
        if(filterStateNonPending && !inputStateNonPending) {
            return filterStateNonPending
        }
        if(!filterStateNonPending && inputStateNonPending) {
            return "all-and-text"
        }
        if(filterStateNonPending && inputStateNonPending) {
            return `${filterStateNonPending}-and-text` as FilterStateVariant
        }
        return "all"
        
    }, [filterStateNonPending, inputStateNonPending, fullNonPendingTransactions])

    useEffect(() => {
        handleSetAllPending(mockedTransactions as Transaction[])
        handleSetAllNonPending(mockedTransactions as Transaction[])
    }, [])

    return {
        filterOptions,
        pendingTransactions,
        nonPendingTransactions,
        isNewTransactionOpen,
        activeTransaction,
        filterStateNonPending,
        inputStatePending,
        inputStateNonPending,
        stateOfPendingFiltering,
        stateOfNonPendingFiltering,
        handleSelectFilterNonPending,
        handleInputFilterPendingTransactions,
        handleInputFilterNonPendingTransactions,
        handleActiveTransaction,
        handleNewTransactionOpen,
        handleNewTransactionClose,
    }

}