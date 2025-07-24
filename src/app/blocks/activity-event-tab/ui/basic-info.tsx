import { ActivityEvent } from "@/types/api"

export function BasicInfo({
  label,
  description,
}: Pick<ActivityEvent, "label" | "description">) {
  return (
    <div className="flex flex-col pl-2">
      <h2 className="text-2xl font-semibold">{label}</h2>
      <p className="mt-2">{description}</p>
    </div>
  )
}
