import {
  FileText,
  CheckCircle,
  Clock,
  Building2,
  X,
} from "lucide-react";

import { useEffect, useState } from "react";

function Analytics() {
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedInterview, setSelectedInterview] =
    useState(null);

  useEffect(() => {
    fetchInterviews();
  }, []);

  const fetchInterviews = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/interviews"
      );

      const data = await response.json();

      setInterviews(data);
    } catch (error) {
      console.error(
        "Failed to fetch interviews:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const totalInterviews = interviews.length;

  const completedInterviews =
    interviews.filter(
      (interview) => interview.completed
    ).length;

  const averageDuration = () => {
    if (!interviews.length) return "0 min";

    const totalMinutes = interviews.reduce(
      (sum, interview) => {
        return (
          sum +
          parseInt(interview.duration || "0")
        );
      },
      0
    );

    return `${Math.round(
      totalMinutes / interviews.length
    )} min`;
  };

  const favoriteCompany = () => {
    if (!interviews.length) return "-";

    const counts = {};

    interviews.forEach((interview) => {
      counts[interview.company] =
        (counts[interview.company] || 0) + 1;
    });

    return Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );
  };

  const stats = [
    {
      icon: <FileText size={28} />,
      value: totalInterviews,
      label: "Total Interviews",
    },
    {
      icon: <CheckCircle size={28} />,
      value: completedInterviews,
      label: "Completed",
    },
    {
      icon: <Clock size={28} />,
      value: averageDuration(),
      label: "Avg Duration",
    },
    {
      icon: <Building2 size={28} />,
      value: favoriteCompany(),
      label: "Favorite Company",
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-slate-800">
        📊 Analytics
      </h2>

      <p className="mt-2 text-slate-500">
        Track your interview journey and
        performance.
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

        {loading ? (
          <p className="mt-6 text-slate-500">
            Loading interviews...
          </p>
        ) : interviews.length === 0 ? (
          <p className="mt-6 text-slate-500">
            No interviews found.
          </p>
        ) : (
          <div className="mt-8 space-y-5">
            {interviews.map((item) => (
              <div
                key={item._id}
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
                    {item.company}
                  </h4>

                  <p className="text-slate-500 mt-1">
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString()}
                  </p>

                  <p className="text-slate-400 text-sm">
                    Duration:{" "}
                    {item.duration}
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
                    Completed
                  </span>

                  <button
                    onClick={() =>
                      setSelectedInterview(
                        item
                      )
                    }
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
        )}
      </div>

      {/* Report Modal */}
      {/* Professional Report Modal */}
{selectedInterview && (
  <div
  className="
    fixed inset-0
    bg-black/50
    flex items-center justify-center
    p-4
    z-50
  "
>
  <div
    className="
      bg-white
      rounded-3xl
      w-[95vw]
      max-w-[1400px]
      h-[92vh]
      overflow-y-auto
      p-12
      shadow-2xl
      relative
    "
  >
    {/* Close Button */}
    <button
      onClick={() => setSelectedInterview(null)}
      className="
        absolute
        top-6
        right-6
        text-slate-500
        hover:text-slate-900
        transition
      "
    >
      <X size={32} strokeWidth={2.5} />
    </button>

    {/* Header */}
    <div className="border-b border-slate-200 pb-6">
      <h2 className="text-3xl font-bold text-slate-900">
        Interview Performance Report
      </h2>

      <p className="mt-2 text-slate-500">
        Generated by InterviewAce AI
      </p>
    </div>

    {/* Basic Details */}
    <div className="mt-8 grid md:grid-cols-2 gap-6 text-slate-700">
      <div>
        <p className="text-sm uppercase tracking-wide text-slate-500">
          Company
        </p>

        <p className="mt-1 font-semibold text-lg text-slate-900">
          {selectedInterview.company}
        </p>
      </div>

      <div>
        <p className="text-sm uppercase tracking-wide text-slate-500">
          Interview Date
        </p>

        <p className="mt-1 font-semibold text-lg text-slate-900">
          {new Date(
            selectedInterview.createdAt
          ).toLocaleDateString()}
        </p>
      </div>

      <div>
        <p className="text-sm uppercase tracking-wide text-slate-500">
          Duration
        </p>

        <p className="mt-1 font-semibold text-lg text-slate-900">
          {selectedInterview.duration}
        </p>
      </div>

      <div>
        <p className="text-sm uppercase tracking-wide text-slate-500">
          Status
        </p>

        <p className="mt-1 font-semibold text-green-600">
          Completed
        </p>
      </div>
    </div>

    {/* Summary */}
    <div className="mt-10">
      <h3 className="text-xl font-bold text-slate-900">
        Interview Summary
      </h3>

      <p className="mt-4 leading-8 text-slate-700">
        The candidate successfully completed the
        mock interview and attempted all scheduled
        questions. The session demonstrated
        consistency, engagement, and commitment
        throughout the interview process.
      </p>
    </div>

    {/* Performance Snapshot */}
    <div className="mt-10">
      <h3 className="text-xl font-bold text-slate-900">
        Performance Snapshot
      </h3>

      <div className="mt-6 border border-slate-200 rounded-2xl overflow-hidden">

        <div className="grid grid-cols-2 border-b border-slate-200">
          <div className="p-4 font-medium text-slate-600">
            Completion Rate
          </div>

          <div className="p-4 text-slate-900 font-semibold">
            100%
          </div>
        </div>

        <div className="grid grid-cols-2 border-b border-slate-200">
          <div className="p-4 font-medium text-slate-600">
            Questions Attempted
          </div>

          <div className="p-4 text-slate-900 font-semibold">
            {
              selectedInterview.transcript.filter(
                (msg) =>
                  msg.sender === "user"
              ).length
            }
            /
            {
              selectedInterview.transcript.filter(
                (msg) =>
                  msg.sender === "user"
              ).length
            }
          </div>
        </div>

        <div className="grid grid-cols-2 border-b border-slate-200">
          <div className="p-4 font-medium text-slate-600">
            Interview Duration
          </div>

          <div className="p-4 text-slate-900 font-semibold">
            {selectedInterview.duration}
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="p-4 font-medium text-slate-600">
            Status
          </div>

          <div className="p-4 text-green-600 font-semibold">
            Completed
          </div>
        </div>

      </div>
    </div>

    {/* Strengths */}
    <div className="mt-10">
      <h3 className="text-xl font-bold text-slate-900">
        Key Strengths
      </h3>

      <ul className="mt-4 space-y-3 text-slate-700 leading-7 list-disc pl-6">
        <li>
          Successfully completed the interview.
        </li>

        <li>
          Demonstrated consistency throughout
          the session.
        </li>

        <li>
          Maintained engagement until completion.
        </li>
      </ul>
    </div>

    {/* Improvements */}
    <div className="mt-10">
      <h3 className="text-xl font-bold text-slate-900">
        Areas for Improvement
      </h3>

      <ul className="mt-4 space-y-3 text-slate-700 leading-7 list-disc pl-6">
        <li>
          Use STAR methodology for behavioural
          responses.
        </li>

        <li>
          Include more measurable examples.
        </li>

        <li>
          Improve answer structure and clarity.
        </li>
      </ul>
    </div>
  </div>
</div>
)}
    </div>
  );
}

export default Analytics;