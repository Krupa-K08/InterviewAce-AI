function DailyRecommendation() {
  return (
    <div
      className="
        mt-8
        bg-gradient-to-r
        from-purple-600
        via-indigo-400
        to-purple-400
        rounded-3xl
        shadow-lg
        p-8
        text-white
      "
    >
      <h2 className="text-3xl font-bold">
        🤖 AI Coach
      </h2>

      <p className="mt-3 text-purple-100 leading-relaxed max-w-3xl">
        Personalized interview guidance will unlock as you continue
        your InterviewAce journey. Complete the steps below to activate
        real AI-powered recommendations tailored specifically to you.
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        <div
          className="
            bg-white/10
            backdrop-blur-sm
            rounded-2xl
            px-5 py-3
          "
        >
          Resume Analysis:
          <span className="font-semibold ml-2">
            Pending ⭕
          </span>
        </div>

        <div
          className="
            bg-white/10
            backdrop-blur-sm
            rounded-2xl
            px-5 py-3
          "
        >
          Mock Interview:
          <span className="font-semibold ml-2">
            Pending ⭕
          </span>
        </div>
      </div>

      <button
        className="
          mt-6
          bg-white
          text-purple-700
          font-semibold
          px-6 py-3
          rounded-2xl
          hover:scale-105
          transition-all
        "
      >
        Upload Resume to Unlock AI
      </button>
    </div>
  );
}

export default DailyRecommendation;