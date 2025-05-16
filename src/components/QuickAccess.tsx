import { CreditCard, ChevronRight } from "lucide-react"
import { CreditCardShield } from "./svgs"

interface QuickAccessItemProps {
  title: string
}

function QuickAccessItem({ title }: QuickAccessItemProps) {
  return (
    <div className="bg-[#F1F7FF] rounded-md border border-gray-100 p-2 flex items-center justify-between hover:shadow-sm transition-shadow cursor-pointer">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-[#014DAF] flex items-center justify-center mr-3">
          <CreditCardShield />
        </div>
        <span className="font-medium text-gray-800">{title}</span>
      </div>
      <ChevronRight className="text-gray-400" size={16} />
    </div>
  )
}

export default function QuickAccess() {
  return (
    <div className="bg-white border border-[#E2E2E2] rounded-lg p-4 mb-6">
      <h2 className="text-base font-medium mb-4 px-2 text-gray-800">Your Quick Access</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <QuickAccessItem title="Manage a Card" />
        <QuickAccessItem title="Issue Instant Card" />
        <QuickAccessItem title="Issue Personalized Card" />
        <QuickAccessItem title="Review Card Requests" />
      </div>
    </div>
  )
}
