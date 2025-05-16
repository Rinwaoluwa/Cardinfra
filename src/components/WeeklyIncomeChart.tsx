import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import ChartCard from "./ChartCard"

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload || !payload.length) return null
  return (
    <div className="bg-white shadow-none p-8 text=[12px]">
      <div className="font-semibold mb-4">{label}</div>
      {payload.map((entry: any, idx: number) => (
        <div key={idx} className="mb-2" style={{ color: entry.color }}>
          {entry.name}: <span className="font-medium">{entry.value}</span>
        </div>
      ))}
    </div>
  )
}

// const data = [
//   { name: "Mon", income: 40 },
//   { name: "Tue", income: 35 },
//   { name: "Wed", income: 20 },
//   { name: "Thu", income: 45 },
//   { name: "Fri", income: 35 },
//   { name: "Sat", income: 25 },
//   { name: "Sun", income: 75 },
// ]

const data = [
  { name: "Mon", income: 52 },
  { name: "Mon-2", income: 40 },
  { name: "Tue", income: 46 },
  { name: "Tue-2", income: 35 },
  { name: "Tue-3", income: 17 },
  { name: "Wed", income: 38 },
  { name: "Wed-2", income: 40 },
  { name: "Thu", income: 57 },
  { name: "Thu-2", income: 36 },
  { name: "Fri", income: 40 },
  { name: "Fri-2", income: 58 },
  { name: "Sat", income: 25 },
  { name: "Sat-2", income: 45 },
  { name: "Sun", income: 78 }
]

export default function WeeklyIncomeChart() {
  return (
    <ChartCard title="This Week's Income">
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 20 }}>
            <CartesianGrid horizontal={true} vertical={false} stroke="#f0f0f0" strokeDasharray="5 5" />
            <defs>
              <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38A169" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#38A169" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              fontSize={12}
              tick={{ fill: '#6B7280' }}
              // Only show the main day labels
              tickFormatter={(value) => value.includes("-") ? "" : value}
            />
            <YAxis
              tickCount={6}
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              fontSize={12}
              tick={{ fill: '#6B7280' }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={false}
            />
            <Line
              type="natural"
              dataKey="income"
              stroke="#38A169"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 6, fill: "#38A169" }}
              name="Income"
              isAnimationActive={false}
              // Add a slight gradient effect
              connectNulls={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}
