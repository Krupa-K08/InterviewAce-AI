import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="px-6 lg:px-20 pt-16 lg:pt-24">
      <div className="max-w-7xl mx-auto text-center">

        <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-6">
          🚀 AI-Powered Interview Preparation Platform
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Ace Every Interview
          <br />
          With
          <span className="text-indigo-500"> AI Guidance</span>
        </h1>

        <p className="mt-8 text-slate-400 text-lg max-w-3xl mx-auto">
          Practice mock interviews, analyze resumes,
          identify skill gaps, receive AI-powered feedback,
          and track your progress — all in one place.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          {/* Start Practicing */}
          <Link
            to="/signup"
            className="
              px-8 py-4
              rounded-full
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
            Start Practicing
          </Link>

          {/* Watch Demo */}
          <a
            href="#features"
            className="
              px-8 py-4
              rounded-full
              border border-white/10
              text-white
              hover:bg-white/5
              transition-all
            "
          >
            Watch Demo
          </a>

        </div>

        <div className="mt-20 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-[#1E293B] rounded-2xl p-6">
                <p className="text-slate-400 text-sm">Resume Score</p>
                <h2 className="text-4xl font-bold text-green-400 mt-2">
                  92%
                </h2>
              </div>

              <div className="bg-[#1E293B] rounded-2xl p-6">
                <p className="text-slate-400 text-sm">Interview Score</p>
                <h2 className="text-4xl font-bold text-indigo-400 mt-2">
                  88%
                </h2>
              </div>

              <div className="bg-[#1E293B] rounded-2xl p-6">
                <p className="text-slate-400 text-sm">Confidence Score</p>
                <h2 className="text-4xl font-bold text-purple-400 mt-2">
                  95%
                </h2>
              </div>

            </div>

            <div className="mt-8 bg-[#1E293B] rounded-2xl p-6 text-left">
              <h3 className="text-white font-semibold">
                AI Feedback Summary
              </h3>

              <p className="text-slate-400 mt-3">
                Strong communication skills detected.
                Improve technical depth in React,
                Node.js and System Design questions.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;