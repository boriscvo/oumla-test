import { LoadingSkeletonProps } from "./types"

export function LoadingSkeleton({ width, className }: LoadingSkeletonProps) {
  return (
    <div
      className={`h-4 ${width} bg-muted animate-pulse rounded ${className}`}
    />
  )
}
