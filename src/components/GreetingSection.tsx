import { Calendar } from "lucide-react"


export default function GreetingSection() {
  return (
    <div className="md:flex justify-between items-center py-4 px-6">
      <div>
        <h1 className="text-xl font-medium text-gray-800">Hi Nazeer, what would you like to do today?</h1>
        <p className="text-sm text-gray-500">Last login: 26/11/2024 14:39:58</p>
      </div>

      <div className="flex items-center space-x-2 border border-[#D0D5DD] rounded-md px-3 py-1.5 ">
        <button className="flex items-center gap-1 text-sm"><Calendar size={16}/> Today</button>
        <div className="border h-4 border-[#D0D5DD]"></div>
        <span className="text-sm text-gray-500">11 Nov 2024</span>
      </div>
    </div>
  )
}
