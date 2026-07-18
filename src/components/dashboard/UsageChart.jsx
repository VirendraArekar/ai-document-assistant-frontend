import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", questions: 8 },
  { day: "Tue", questions: 15 },
  { day: "Wed", questions: 10 },
  { day: "Thu", questions: 24 },
  { day: "Fri", questions: 18 },
  { day: "Sat", questions: 30 },
  { day: "Sun", questions: 26 },
];

function UsageChart() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <h2 className="text-xl font-bold mb-5">AI Questions</h2>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="questions"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UsageChart;
