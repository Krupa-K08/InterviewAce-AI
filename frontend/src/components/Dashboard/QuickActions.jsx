function QuickActions() {
  const actions = [
    {
      icon: "🎙️",
      title: "Mock Interview",
    },
    {
      icon: "📄",
      title: "Upload Resume",
    },
    {
      icon: "🛣️",
      title: "Roadmap",
    },
    {
      icon: "📈",
      title: "Analytics",
    },
    {
      icon: "👤",
      title: "Profile",
    },
    {
      icon: "⚙️",
      title: "Settings",
    },
  ];

  return (
    <div
      className="
        bg-white
        rounded-3xl
        border border-slate-200
        shadow-sm
        p-8
        flex-1
        flex flex-col
      "
    >
      <h2 className="text-2xl font-bold text-slate-800">
        ⚡ Quick Actions
      </h2>

      <div className="mt-4 grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className="
              bg-gradient-to-br from-purple-50 to-indigo-50
              rounded-2xl
              p-5
              flex flex-col items-center justify-center
              border border-purple-100
              hover:from-purple-100 hover:to-indigo-100
              hover:shadow-md
              hover:-translate-y-1
              transition-all
            "
          >
            <span className="text-2xl">
              {action.icon}
            </span>

            <span className="mt-3 font-medium text-slate-700 text-center">
              {action.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;