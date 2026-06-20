function Milestones() {
  const milestones = [
    {
      title: "Resume Uploaded",
      status: "completed",
    },
    {
      title: "Technical Round 1",
      status: "active",
    },
    {
      title: "Technical Round 2",
      status: "locked",
    },
    {
      title: "HR Interview",
      status: "locked",
    },
    {
      title: "Offer Preparation",
      status: "locked",
    },
  ];

  return (
    <div
      className="
        bg-white
        rounded-3xl
        border border-slate-200
        shadow-sm
        p-6
        w-full
      "
    >
      <h2 className="text-2xl font-bold text-slate-700">
        🏆 Journey Progress
      </h2>

      <div className="mt-5 space-y-3">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="
              flex items-center justify-between
              rounded-2xl
              px-5 py-4
              border
            "
          >
            <div>
              <p className="font-medium text-slate-800">
                {milestone.title}
              </p>
            </div>

            <div>
              {milestone.status === "completed" && (
                <span className="text-green-600 text-xl">
                  ✅
                </span>
              )}

              {milestone.status === "active" && (
                <span
                  className="
                    px-4 py-1
                    rounded-full
                    bg-purple-100
                    text-purple-700
                    text-sm
                    font-semibold
                  "
                >
                  Current
                </span>
              )}

              {milestone.status === "locked" && (
                <span className="text-slate-400 text-xl">
                  🔒
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Milestones;