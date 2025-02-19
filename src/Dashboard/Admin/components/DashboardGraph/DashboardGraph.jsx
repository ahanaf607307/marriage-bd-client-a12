import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const DashboardGraph = ({ adminDashboard }) => {
  // Chart Data (Each column will have only 1 bar)
  const data = [
    { name: "Revenue", revenue: adminDashboard?.revenue || 0 },
    { name: "Biodata", biodata: adminDashboard?.totalBiodata || 0 },
    { name: "Male", male: adminDashboard?.totalMale || 0 },
    { name: "Female", female: adminDashboard?.totalFemale || 0 },
  ];

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-3xl mx-auto my-12">
      <h1 className="text-gray-900 font-semibold text-2xl mb-4 text-center">
        Dashboard Statistics
      </h1>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
          barCategoryGap="30%"
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="name" tick={{ fill: "#374151", fontSize: 14 }} />
          <YAxis tick={{ fill: "#374151", fontSize: 14 }} />
          <Tooltip />
          <Legend />

        
          <Bar dataKey="revenue" fill="#6366F1" barSize={50} radius={[6, 6, 0, 0]} name="Revenue" />
          <Bar dataKey="biodata" fill="#3B82F6" barSize={50} radius={[6, 6, 0, 0]} name="Biodata" />
          <Bar dataKey="male" fill="#EF4444" barSize={50} radius={[6, 6, 0, 0]} name="Male" />
          <Bar dataKey="female" fill="#10B981" barSize={50} radius={[6, 6, 0, 0]} name="Female" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardGraph;
