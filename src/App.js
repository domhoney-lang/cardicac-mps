import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  Line,
} from "recharts";
import {
  Users,
  MessageSquare,
  Share2,
  MonitorSmartphone,
  Award,
  Target,
  Video,
  MousePointerClick,
  TrendingUp,
} from "lucide-react";

// --- Data Extraction & Preparation ---

const sessionData = [
  { name: "Live Q&A 1", viewers: 81 },
  { name: "Live Q&A 3", viewers: 78 },
  { name: "Pathophysiology...", viewers: 77 },
  { name: "Ischaemia testing in 2026...", viewers: 77 },
  { name: "Stress Testing...", viewers: 75 },
  { name: "Referrers want to know...", viewers: 74 },
  { name: "Role in subgroups...", viewers: 74 },
  { name: "Live Q&A 2", viewers: 74 },
  { name: "Rb PET & added value...", viewers: 73 },
  { name: "SPECT Reconstruction...", viewers: 73 },
  { name: "Non-invasive vs invasive...", viewers: 69 },
  { name: "Welcome & Introduction", viewers: 67 },
  { name: "Closing Quiz", viewers: 56 },
  { name: "Stream 1 Live Case Review", viewers: 52 },
  { name: "NM Stress Test Procedure...", viewers: 51 },
  { name: "MPS Acquisition...", viewers: 35 },
  { name: "Staff Competencies...", viewers: 34 },
  { name: "Stream 2 Live Q&A 4", viewers: 33 },
];

const commData = [
  { name: "Invite Email", openRate: 85, clickRate: 72 },
  { name: "Reminder", openRate: 76, clickRate: 51 },
  { name: "Event Start", openRate: 77, clickRate: 54 },
  { name: "Event End", openRate: 17, clickRate: 7 },
];

const platformData = [
  { name: "Live Now", visitors: 92, views: 1397 },
  { name: "Stream 1", visitors: 83, views: 822 },
  { name: "Stream 2", visitors: 71, views: 789 },
  { name: "Attendees", visitors: 67, views: 335 },
  { name: "System Check", visitors: 71, views: 291 },
  { name: "Speakers", visitors: 52, views: 284 },
];

const appUsageData = [
  { name: "Web App", value: 96, color: "#4f46e5" }, // Indigo-600
  { name: "Android", value: 5, color: "#10b981" }, // Emerald-500
  { name: "iOS", value: 4, color: "#f59e0b" }, // Amber-500
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-slate-200 shadow-lg rounded-lg">
        <p className="font-semibold text-slate-800 mb-1">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: <span className="font-bold">{entry.value}</span>
            {entry.name.includes("Rate") ? "%" : ""}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-800">
      {/* Header */}
      <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Cardiac MPS Course 2026
          </h1>
          <p className="text-slate-500 mt-1">
            Post-Event Engagement Report • 26 February 2026
          </p>
        </div>
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200 flex items-center gap-3">
          <span className="text-sm text-slate-500 font-medium">
            Sponsored by
          </span>
          <span className="font-bold text-lg tracking-wider text-slate-800">
            BRACCO
          </span>
        </div>
      </header>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Active Users</p>
            <p className="text-2xl font-bold text-slate-900">
              92%{" "}
              <span className="text-sm font-normal text-slate-500">
                (94/102)
              </span>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">
              Messages Exchanged
            </p>
            <p className="text-2xl font-bold text-slate-900">212</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
            <Share2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Contacts Made</p>
            <p className="text-2xl font-bold text-slate-900">
              14{" "}
              <span className="text-sm font-normal text-slate-500">
                by 9 people
              </span>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="p-3 bg-amber-100 text-amber-600 rounded-lg">
            <MonitorSmartphone className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">
              Connected Users
            </p>
            <p className="text-2xl font-bold text-slate-900">
              10%{" "}
              <span className="text-sm font-normal text-slate-500">(9/94)</span>
            </p>
          </div>
        </div>
      </div>

      {/* Highlights & Top Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-indigo-200" />
            <h3 className="font-semibold text-indigo-100">Best Speaker</h3>
          </div>
          <p className="text-2xl font-bold mb-1">Arum Parthipun</p>
          <p className="text-indigo-200 text-sm">21 profile views</p>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-emerald-200" />
            <h3 className="font-semibold text-emerald-100">
              Most Contacted Attendee
            </h3>
          </div>
          <p className="text-2xl font-bold mb-1">Rob Foley</p>
          <p className="text-emerald-200 text-sm">1 connection</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl p-6 text-white shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Video className="w-5 h-5 text-blue-200" />
            <h3 className="font-semibold text-blue-100">
              Most Popular Session
            </h3>
          </div>
          <p className="text-lg font-bold mb-1 leading-tight">
            Pathophysiology of ischaemic heart disease...
          </p>
          <p className="text-blue-200 text-sm mt-2">84 registrations & views</p>
        </div>
      </div>

      {/* Charts Grid - Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Sessions Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Video className="w-5 h-5 text-slate-500" />
            All Sessions by Viewers
          </h3>
          <div className="h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={sessionData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 140, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={true}
                  vertical={false}
                  stroke="#e2e8f0"
                />
                <XAxis
                  type="number"
                  tick={{ fill: "#64748b" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={135}
                  tick={{ fill: "#475569", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "#f1f5f9" }}
                />
                <Bar
                  dataKey="viewers"
                  fill="#3b82f6"
                  radius={[0, 4, 4, 0]}
                  barSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Email Comms Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-slate-500" />
            Email Communications Performance
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={commData}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0"
                />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#475569", fontSize: 13 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#64748b" }}
                  axisLine={false}
                  tickLine={false}
                  unit="%"
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "#f1f5f9" }}
                />
                <Legend
                  iconType="circle"
                  wrapperStyle={{ paddingTop: "20px" }}
                />
                <Bar
                  dataKey="openRate"
                  name="Opened %"
                  fill="#8b5cf6"
                  radius={[4, 4, 0, 0]}
                  barSize={30}
                />
                <Bar
                  dataKey="clickRate"
                  name="Clicked %"
                  fill="#ec4899"
                  radius={[4, 4, 0, 0]}
                  barSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Charts Grid - Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Platform Usage */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 lg:col-span-2">
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-slate-500" />
            Platform Usage (Top Modules)
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={platformData}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              >
                <CartesianGrid
                  stroke="#e2e8f0"
                  strokeDasharray="3 3"
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#475569", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  yAxisId="left"
                  tick={{ fill: "#64748b" }}
                  axisLine={false}
                  tickLine={false}
                  label={{
                    value: "Total Views",
                    angle: -90,
                    position: "insideLeft",
                    fill: "#94a3b8",
                  }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  tick={{ fill: "#64748b" }}
                  axisLine={false}
                  tickLine={false}
                  label={{
                    value: "Unique Visitors",
                    angle: 90,
                    position: "insideRight",
                    fill: "#94a3b8",
                  }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  iconType="circle"
                  wrapperStyle={{ paddingTop: "10px" }}
                />
                <Bar
                  yAxisId="left"
                  dataKey="views"
                  name="Total Views"
                  fill="#0ea5e9"
                  radius={[4, 4, 0, 0]}
                  barSize={40}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="visitors"
                  name="Unique Visitors"
                  stroke="#f59e0b"
                  strokeWidth={3}
                  dot={{
                    r: 5,
                    fill: "#f59e0b",
                    strokeWidth: 2,
                    stroke: "#fff",
                  }}
                  activeDot={{ r: 8 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Device Usage & Sponsor */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex-1">
            <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
              <MonitorSmartphone className="w-5 h-5 text-slate-500" />
              Device Logins
            </h3>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={appUsageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {appUsageData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        stroke="transparent"
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} Users`, ""]} />
                  <Legend
                    iconType="circle"
                    layout="vertical"
                    verticalAlign="middle"
                    align="right"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex-1">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <MousePointerClick className="w-5 h-5 text-slate-500" />
              Sponsor Ad Performance
            </h3>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-100 flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">
                  Total Views
                </p>
                <p className="text-2xl font-bold text-slate-900">757</p>
              </div>
              <div className="h-10 w-px bg-slate-200"></div>
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">
                  Total Clicks
                </p>
                <p className="text-2xl font-bold text-slate-900">20</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">Advertiser</span>
              <span className="font-semibold text-slate-800">Bracco UK</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Event Results Logo */}
      <footer className="mt-4 bg-slate-900 rounded-2xl p-10 flex justify-center items-center shadow-lg border border-slate-800">
        <a
          href="https://eventresults.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 hover:opacity-90 transition-all duration-200"
        >
          <img
            src="https://img1.wsimg.com/isteam/ip/5b7625ff-6c52-45c9-9cab-97ffc620e66e/er_logo.png/:/rs=w:379,h:64,cg:true,m/cr=w:379,h:64/qt=q:100/ll"
            alt="Event Results"
            className="h-10 md:h-12 w-auto"
          />
        </a>
      </footer>
    </div>
  );
}
