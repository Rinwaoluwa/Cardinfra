import type React from "react"
import { LucideIcon } from "lucide-react"

interface IconProps extends React.ComponentProps<LucideIcon> {
  icon: LucideIcon
}

export function Icon({ icon: Icon, ...props }: IconProps) {
  return <Icon {...props} />
} 