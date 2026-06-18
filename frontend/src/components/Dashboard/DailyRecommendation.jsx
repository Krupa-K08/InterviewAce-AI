function DailyRecommendation() {
  return (
    <div
      className="
        mt-8
        bg-white
        rounded-3xl
        border border-slate-200
        p-8
        shadow-sm
        flex flex-col md:flex-row
        md:items-center
        md:justify-between
        gap-6
      "
    >
      <div>
        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
          🎯 Today's Recommendation
        </p>

        <h2 className="mt-2 text-2xl font-bold text-slate-800">
          Practice the STAR Method
        </h2>

        <p className="mt-3 text-slate-500 max-w-2xl leading-relaxed">
          Strengthen your behavioural interview answers by practicing
          Situation, Task, Action, and Result based responses.
        </p>
      </div>

      <button
        className="
          px-6 py-4
          rounded-2xl
          bg-gradient-to-r
          from-indigo-600
          to-purple-600
          text-white
          font-semibold
          hover:scale-105
          transition-all
          shadow-lg
          whitespace-nowrap
        "
      >
        👉 Start Practice
      </button>
    </div>
  );
}

export default DailyRecommendation;