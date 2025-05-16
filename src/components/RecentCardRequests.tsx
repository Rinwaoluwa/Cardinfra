import ChartCard from "./ChartCard"

interface CardRequest {
  branch: string
  type: "Instant" | "Personalized"
  quantity: number
  status: "Ready" | "In Progress" | "Acknowledged" | "Pending"
}

export default function RecentCardRequests() {
  const requests: CardRequest[] = [
    { branch: "Corporate", type: "Instant", quantity: 10, status: "Ready" },
    { branch: "Corporate", type: "Personalized", quantity: 10, status: "In Progress" },
    { branch: "Corporate", type: "Personalized", quantity: 10, status: "Acknowledged" },
    { branch: "Corporate", type: "Instant", quantity: 10, status: "Pending" },
  ]

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Ready":
        return "bg-green-100 text-green-800"
      case "In Progress":
        return "bg-amber-100 text-amber-800"
      case "Acknowledged":
        return "bg-blue-100 text-blue-800"
      case "Pending":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <ChartCard title="Recent Card Requests">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#F1F7FF] border border-[#E2E2E2]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Card Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {requests.map((request, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.branch}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(request.status)}`}>
                    {request.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-800">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ChartCard>
  )
}
