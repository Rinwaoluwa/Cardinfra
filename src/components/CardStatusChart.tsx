import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import ChartCard from "./ChartCard"

const data = [
  { name: "Active", value: 65, color: "#01A4AF" },
  { name: "Expired", value: 15, color: "#FFBA24" },
  { name: "Inactive", value: 10, color: "#014DAF" },
  { name: "Blocked", value: 5, color: "#8020E7" },
  { name: "Lost", value: 5, color: "#FF4457" },
]

export default function CardStatusChart() {
  const totalCards = 2450

  return (
    <ChartCard title="Card Status Distribution">
      <div className="h-[300px] w-full relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-gray-500 text-sm">Total Cards</p>
          <p className="text-2xl font-medium">{totalCards.toLocaleString()}</p>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={100}
              outerRadius={110}
              paddingAngle={1}
              strokeWidth={0}
              cornerRadius={10}
              startAngle={-270}
              endAngle={90}
              dataKey="value"
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => {
                const percentage = ((value as number) / data.reduce((sum, item) => sum + item.value, 0)) * 100
                return [`${percentage.toFixed(0)}%`, name]
              }}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ paddingTop: "20px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  )
}
