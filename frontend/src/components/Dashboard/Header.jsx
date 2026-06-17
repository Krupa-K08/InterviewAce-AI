function Header({ user }) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        border border-slate-200
        px-8 py-6
        flex flex-col md:flex-row
        justify-between
        items-start md:items-center
        gap-6
      "
    >
      {/* Left */}
      <div>

        <h1 className="text-4xl font-bold text-slate-800">
          Welcome Back, {user.name}! 👋
        </h1>

        <p className="text-slate-500 mt-2 text-lg">
          Preparing for{" "}
          <span className="font-semibold text-indigo-600">
            {user.targetCompany}
          </span>{" "}
          interview in{" "}
          <span className="font-semibold">
            {user.interviewDays} days
          </span>.
        </p>

      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        <div
          className="
            px-5 py-3 rounded-2xl
            bg-orange-100
            text-orange-600
            font-semibold
          "
        >
          🔥 {user.streak} Day Streak
        </div>

        <button
          className="
            px-6 py-3 rounded-2xl
            bg-gradient-to-r
            from-indigo-600
            to-purple-600
            text-white
            font-semibold
            hover:scale-105
            active:scale-95
            transition-all
          "
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Header;