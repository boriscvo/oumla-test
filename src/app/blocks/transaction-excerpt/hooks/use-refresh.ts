import { useState } from "react"

export function useRefresh(handleRefetch?: () => void) {
  const [isIconRefreshActive, setIsIconRefreshActive] = useState(false)

  const handleRefetchWithIcon = () => {
    setIsIconRefreshActive(true)
    setTimeout(() => {
      handleRefetch?.()
    }, 500)
  }

  return {
    isIconRefreshActive,
    handleRefetchWithIcon,
  }
}
