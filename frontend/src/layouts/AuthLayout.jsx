function AuthLayout({ leftContent, children }) {
  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-6 py-8">

      <div
        className="
          w-full max-w-7xl
          bg-white/5
          border border-white/10
          rounded-[32px]
          overflow-hidden
          backdrop-blur-xl
          shadow-2xl
          grid lg:grid-cols-2
        "
      >
        {/* Left Branding Panel */}
        <div
          className="
            hidden lg:flex
            relative
            flex-col
            justify-between
            p-14
            bg-gradient-to-br
            from-indigo-600/20
            via-purple-600/20
            to-cyan-600/20
          "
        >
          {leftContent}

          {/* Glow Effects */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
        </div>

        {/* Right Form Panel */}
        <div className="p-8 md:p-12">
          {children}
        </div>

      </div>

    </div>
  );
}

export default AuthLayout;