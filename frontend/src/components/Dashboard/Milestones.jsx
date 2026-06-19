function Milestones() {
  const milestones = [
    {
      title: "Create Account",
      completed: true,
    },
    {
      title: "Set Interview Goal",
      completed: true,
    },
    {
      title: "Upload Resume",
      completed: false,
    },
    {
      title: "Complete First Mock Interview",
      completed: false,
    },
    {
      title: "Reach 80% Readiness",
      completed: false,
    },
    {
      title: "Maintain 7-Day Streak",
      completed: true,
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
        flex-1
      "
    >
      <h2 className="text-2xl font-bold text-slate-600">
        🏆 Milestones
      </h2>

      <div className="mt-4 space-y-2">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="
              flex items-center justify-between
              bg-slate-50
              rounded-xl
              px-4 py-3
            "
          >
            <span
              className={`font-medium ${
                milestone.completed
                  ? "text-slate-800"
                  : "text-slate-500"
              }`}
            >
              {milestone.title}
            </span>

            <span className="text-xl">
              {milestone.completed ? "✅" : "⭕"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Milestones;