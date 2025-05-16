import type React from "react"
import { ArrowUpRight, Info } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  change?: {
    value: string
    label: string
    positive?: boolean
  }
  icon: React.ReactElement
  iconBg?: string // background color for icon
  alert?: {
    text: string
    type: "warning" | "info"
  }
}

export default function StatsCard({ title, value, change, icon, iconBg = "", alert }: StatsCardProps) {
  return (
    <div className="bg-white border border-[#E5EAF2] rounded-xl p-3 flex flex-col justify-between min-w-[220px]">
      <div className="flex items-center justify-between mb-2">
        <div className={`rounded-full ${iconBg} flex items-center justify-center w-8 h-8`}>{icon}</div>
      </div>
      <div className="text-xs text-[#6B7280] mb-1 font-medium">{title}</div>
      <div className="flex justify-between items-center gap-2 mb-1">
        <div className="text-3xl font-bold text-[#111827] mb-2">{value}</div>
        {change && (
          <div className="flex gap-2">
            <span className={`flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${change?.positive !== false ? "bg-[#E6F9F0] text-[#22C55E]" : "bg-[#FDEDED] text-[#F87171]"}`}>
              <ArrowUpRight size={14} className={`mr-1 ${change?.positive !== false ? "text-[#22C55E]" : "rotate-180 text-[#F87171]"}`} />
              {change?.value}
            </span>
            <span className="text-[#A0AEC0] text-xs">{change?.label}</span>
          </div>
        )}
        {alert && (
          <div className="flex items-center gap-1 mt-1 text-xs text-[#F79009] font-medium">
            <Info size={14} className="text-[#F79009]" />
            {alert.text}
          </div>
        )}
      </div>
    </div>
  )
}
