import type React from "react"
import { Maximize2 } from "lucide-react"

interface ChartCardProps {
  title: string
  children: React.ReactNode
}

export default function ChartCard({ title, children }: ChartCardProps) {
  return (
    <div className="bg-white border border-[#E2E2E2] rounded-lg shadow-sm h-full">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-medium">{title}</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <Maximize2 size={18} />
        </button>
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}
