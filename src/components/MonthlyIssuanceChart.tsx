import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import ChartCard from "./ChartCard"

const data = [
  { name: "May", Instant: 50, Personalized: 10 },
  { name: "Jun", Instant: 70, Personalized: 22 },
  { name: "Jul", Instant: 30, Personalized: 8 },
  { name: "Aug", Instant: 58, Personalized: 12 },
  { name: "Sep", Instant: 48, Personalized: 15 },
  { name: "Oct", Instant: 80, Personalized: 20 },
  { name: "Nov", Instant: 75, Personalized: 15 },
]

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

export default function MonthlyIssuanceChart() {
  return (
    <ChartCard title="Monthly Issuance">
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              fontSize={12}
              tick={{ fill: '#6B7280' }}
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
              cursor={{ fill: "transparent" }}
            />
            <Legend
              align="center"
              verticalAlign="bottom"
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ bottom: -10 }}
              formatter={(value) => <span className="text-xs text-gray-600">{value}</span>}
            />
            <Bar
              dataKey="Personalized"
              stackId="a"
              fill="#0052CC"
              radius={[4, 4, 0, 0]}
              barSize={40}
              name="Personalized"
            />
            <Bar
              dataKey="Instant"
              stackId="a"
              fill="#CCE2FF"
              radius={[4, 4, 0, 0]}
              barSize={40}
              name="Instant"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}
