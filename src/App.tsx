import { ThemeProvider } from "../components/theme-provider"
import Sidebar from "./components/Sidebar"
import DashboardHeader from "./components/DashboardHeader"
import GreetingSection from "./components/GreetingSection"
import StatsCard from "./components/StatsCard"
import MonthlyIssuanceChart from "./components/MonthlyIssuanceChart"
import WeeklyIncomeChart from "./components/WeeklyIncomeChart"
import CardStatusChart from "./components/CardStatusChart"
import RecentCardRequests from "./components/RecentCardRequests"
import { BankNote, CreditCardCheck, CreditCardEdit, HourGlass } from "./components/svgs"
import QuickAccess from "./components/QuickAccess"

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen">
        <div className="flex h-screen bg-[#F1F7FF]">
          <Sidebar />

          <div className="flex-1 flex flex-col overflow-hidden bg-[#F1F7FF]">
            <DashboardHeader />
            <GreetingSection />

            <main className="flex-1 overflow-y-auto p-6 pt-0">
              <QuickAccess />
              <div className="flex items-center mb-4">
                <span className="text-lg font-semibold text-[#111827] mr-4">Analytics</span>
                <div className="flex-1 h-px bg-[#D0D5DD]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <StatsCard
                  title="Total Active Cards"
                  value="26,478"
                  change={{ value: "+9%", label: "this month", positive: true }}
                  icon={<CreditCardCheck />}
                />
                <StatsCard
                  title="Total Personalized Cards"
                  value="15,703"
                  change={{ value: "+8.5%", label: "this month", positive: true }}
                  icon={<CreditCardEdit />}
                />
                <StatsCard
                  title="Today's Revenue"
                  value="₦9.3M"
                  change={{ value: "+6%", label: "vs yesterday", positive: true }}
                  icon={<BankNote />}
                />
                <StatsCard
                  title="Pending Requests"
                  value="38"
                  alert={{ text: "Requires attention", type: "warning" }}
                  icon={<HourGlass />}
                />
              </div>

              <div className="md:flex md:gap-2 justify-between">
                <div className="flex basis-1/2 flex-none flex-col gap-2">
                  <MonthlyIssuanceChart />
                  <div className="max-h-[400px]">
                    <WeeklyIncomeChart />
                  </div>
                </div>
                <div className="flex basis-1/2 flex-none flex-col gap-2">
                  <RecentCardRequests />
                  <CardStatusChart />
                </div>
              </div>

            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
