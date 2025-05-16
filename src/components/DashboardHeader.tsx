import type React from "react"
import { Search } from "lucide-react"
import { Icon } from "./ui/icon"
import { Home, User01, Bell } from "./svgs"

export default function DashboardHeader() {
  return (
    <header className="bg-white py-3 px-6 hidden md:flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center gap-2">
        <Home stroke="#001735" />
        <span className="text-gray-700 font-medium">Dashboard</span>
      </div>

      <div className="relative flex gap-16">
        <Icon icon={Search} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#344054]" size={16} />
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 w-64 rounded-full border border-[#D0D5DD] text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <div className="flex items-center space-x-4">
          <button className="relative">
            <Bell />
            {/* notification red dot */}
            {/* <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span> */}
          </button>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <User01 />
          </div>
        </div>
      </div>
    </header>
  )
}
