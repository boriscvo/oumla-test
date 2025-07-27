import { resolveContractAndProvider } from "@/utils/resolve-contract-and-provider"

export const fetchApprovalCredentials = async (address: string | null) => {
  if (!address) {
    return { canApprove: false }
  }
  const { contract } = resolveContractAndProvider()
  const isApprover = await contract.hasRole(
    await contract.APPROVER_ROLE(),
    address
  )
  const isAdmin = await contract.hasRole(await contract.ADMIN_ROLE(), address)

  const canApprove = isApprover || isAdmin
  return { canApprove }
}
