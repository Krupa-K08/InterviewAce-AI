import {
  FileText,
  CheckCircle,
  Clock,
  Building2,
} from "lucide-react";

function Analytics() {
  const stats = [
    {
      icon: <FileText size={28} />,
      value: "12",
      label: "Total Interviews",
    },
    {
      icon: <CheckCircle size={28} />,
      value: "11",
      label: "Completed",
    },
    {
      icon: <Clock size={28} />,
      value: "18 min",
      label: "Avg Duration",
    },
    {
      icon: <Building2 size={28} />,
      value: "Microsoft",
      label: "Favorite Company",
    },
  ];

  const recentInterviews = [
    {
      company: "Microsoft",
      round: "Technical",
      date: "18 Jun 2026",
      status: "Completed",
    },
    {
      company: "Google",
      round: "Behavioral",
      date: "16 Jun 2026",
      status: "Completed",
    },
    {
      company: "Amazon",
      round: "HR",
      date: "14 Jun 2026",
      status: "Completed",
    },
  ];

  return (
    <div className="mt-8">

      <h2 className="text-3xl font-bold text-slate-800">
        📊 Analytics
      </h2>

      <p className="mt-2 text-slate-500">
        Track your interview journey and performance.
      </p>

      {/* Overview Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="
              bg-white/80
              backdrop-blur-md
              border border-slate-200
              rounded-3xl
              p-6
              shadow-sm
            "
          >
            <div className="text-purple-600">
              {stat.icon}
            </div>

            <h3 className="mt-5 text-3xl font-bold text-slate-800">
              {stat.value}
            </h3>

            <p className="mt-2 text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Interviews */}
      <div
        className="
          mt-10
          bg-white
          rounded-3xl
          border border-slate-200
          shadow-sm
          p-8
        "
      >
        <h3 className="text-2xl font-bold text-slate-800">
          Recent Interviews
        </h3>

        <div className="mt-8 space-y-5">
          {recentInterviews.map((item, index) => (
            <div
              key={index}
              className="
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-between
                gap-4
                border-b border-slate-100
                pb-5
              "
            >
              <div>
                <h4 className="font-semibold text-slate-800">
                  {item.company} • {item.round}
                </h4>

                <p className="text-slate-500 mt-1">
                  {item.date}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className="
                    bg-green-100
                    text-green-700
                    px-4 py-2
                    rounded-full
                    text-sm
                    font-medium
                  "
                >
                  {item.status}
                </span>

                <button
                  className="
                    bg-purple-600
                    text-white
                    px-5 py-2
                    rounded-2xl
                    hover:bg-purple-700
                    transition
                  "
                >
                  View Report
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Analytics;