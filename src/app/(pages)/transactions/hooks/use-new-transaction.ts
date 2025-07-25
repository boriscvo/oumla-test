import { useMemo, useState } from "react"
import { z } from "zod"
import useGlobalStore from "@/store/use-global-store"
import { useMutation } from "@tanstack/react-query"
import { createNewTransaction } from "@/http/contract/create-new-transaction"
import { TransactionPlacedOutcome } from "../types"

export function useNewTransaction(handleClose: () => void) {
  const [outcome, setOutcome] = useState<TransactionPlacedOutcome | null>(null)
  const schema = z.object({
    to: z.string().regex(/^0x[a-fA-F0-9]{40}$/, "Invalid Ethereum address"),
    amount: z.string().refine((val) => {
      const num = Number(val)
      return !isNaN(num) && num > 0
    }, "Amount must be a positive number"),
    description: z.string().max(200, "Max 200 characters").optional(),
  })

  type FormData = z.infer<typeof schema>

  const userAddress = useGlobalStore((state) => state.userAddress)

  const [to, setTo] = useState("")
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("")

  const [error, setError] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  )

  const handleRecipientUpdate = (address: string) => {
    setTo(address)
  }

  const handleAmountUpdate = (value: string) => {
    setAmount(value)
  }

  const handleDescriptionUpdate = (value: string) => {
    setDescription(value)
  }

  const { mutate: newTransactionMutation, status: newTransactionStatus } =
    useMutation({
      mutationFn: async (data: FormData) => createNewTransaction(data),
      onSuccess: (data) => {
        setOutcome(data.isSuccess ? "placed" : "failed")
      },
      onError: () => {
        setOutcome("failed")
      },
    })

  const handleDialogClose = () => {
    handleClose()
    setTimeout(() => {
      setTo("")
      setAmount("")
      setDescription("")
      setError({})
      setOutcome(null)
    }, 300)
  }

  const handleSubmit = () => {
    const result = schema.safeParse({ to, amount, description })
    if (!result.success) {
      const formatted = z.treeifyError(result.error)
      setError({
        to: formatted.properties?.to?.errors?.[0],
        amount: formatted.properties?.amount?.errors?.[0],
      })
      return false
    }
    setError({})
    newTransactionMutation({
      to: result.data.to,
      amount: result.data.amount,
      description: result.data.description || "",
    })
  }

  const isSubmitInProgress = useMemo(() => {
    return newTransactionStatus === "pending"
  }, [newTransactionStatus])

  const isSubmitted = useMemo(() => {
    return !!(outcome || isSubmitInProgress)
  }, [outcome, isSubmitInProgress])

  return {
    userAddress,
    to,
    amount,
    description,
    error,
    outcome,
    newTransactionStatus,
    isSubmitInProgress,
    isSubmitted,
    handleRecipientUpdate,
    handleAmountUpdate,
    handleDescriptionUpdate,
    handleSubmit,
    handleDialogClose,
  }
}
