function Header() {
  return (
    <header
      className="
        bg-white
        rounded-[32px]
        px-10 py-8
        flex items-center justify-between
        shadow-sm
      "
    >
      <h1 className="text-3xl font-bold text-slate-800">
        Welcome Back, Krupa! 👋
      </h1>

      <div className="flex items-center gap-6">
        {/* Streak */}
        <div className="text-2xl font-bold text-purple-700">
          8🔥
        </div>

        {/* Logout */}
        <button
          className="
            px-8 py-4
            rounded-2xl
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
    </header>
  );
}

export default Header;