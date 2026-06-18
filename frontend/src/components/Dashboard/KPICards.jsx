function KPICards() {
  const cards = [
    {
      title: "Interview Readiness",
      value: "78%",
      subtitle: "Almost interview ready",
      progress: 78,
      icon: "📊",
    },
    {
      title: "Resume ATS Score",
      value: "84/100",
      subtitle: "2 improvements needed",
      progress: 84,
      icon: "📄",
    },
    {
      title: "Daily Streak",
      value: "8 Days",
      subtitle: "Top 5% consistency",
      progress: 80,
      icon: "🔥",
    },
    {
      title: "Fixes Completed",
      value: "12",
      subtitle: "+3 this week",
      progress: 60,
      icon: "✅",
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="
            bg-white
            rounded-3xl
            border border-slate-200
            p-6
            shadow-sm
            hover:shadow-lg
            transition-all
          "
        >
          <div className="flex items-center justify-between">
            <p className="text-slate-500 font-medium">
              {card.title}
            </p>

            <span className="text-2xl">
              {card.icon}
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-bold text-slate-800">
            {card.value}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            {card.subtitle}
          </p>

          <div className="mt-5 h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-indigo-600
                to-purple-600
              "
              style={{
                width: `${card.progress}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default KPICards;