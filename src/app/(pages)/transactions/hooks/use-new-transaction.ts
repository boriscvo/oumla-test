import { useState } from "react"
import { z } from "zod"
import useGlobalStore from "@/store/use-global-store"

export function useNewTransaction() {
  const schema = z.object({
    to: z.string().regex(/^0x[a-fA-F0-9]{40}$/, "Invalid Ethereum address"),
    amount: z.string().refine((val) => {
      const num = Number(val)
      return !isNaN(num) && num > 0
    }, "Amount must be a positive number"),
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
    //TODO: Handle the transaction submission logic
    console.log("submitted")
  }

  return {
    userAddress,
    to,
    amount,
    description,
    error,
    handleRecipientUpdate,
    handleAmountUpdate,
    handleDescriptionUpdate,
    handleSubmit,
  }
}
