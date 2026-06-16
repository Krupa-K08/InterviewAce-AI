import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

function Signup() {
  return (
    <AuthLayout
      leftContent={
        <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">
          <img
            src="/logo.png"
            alt="InterviewAce AI"
            className="h-32 xl:h-40 w-auto mb-16"
          />

          <h2
            className="
              text-6xl
              xl:text-7xl
              font-extrabold
              text-white
              tracking-[0.15em]
            "
          >
            WELCOME
          </h2>

          <h1
            className="
              mt-4
              text-3xl
              xl:text-4xl
              font-bold
              text-white
            "
          >
            InterviewAce AI
          </h1>

          <p
            className="
              mt-8
              text-xl
              xl:text-2xl
              font-medium
              text-slate-200
            "
          >
            Practice • Improve • Get Hired
          </p>

          <p
            className="
              mt-10
              max-w-md
              text-lg
              leading-relaxed
              text-slate-300
            "
          >
            Prepare smarter with AI-powered mock interviews,
            personalized feedback, and career guidance designed
            for ambitious students and professionals.
          </p>
        </div>
      }
    >
      <div>
        <h2 className="text-4xl font-bold text-white">
          Create Account
        </h2>

        <p className="text-slate-400 mt-2">
          Start your InterviewAce AI journey.
        </p>

        <form className="mt-10 space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />

          <button
            type="submit"
            className="
              w-full py-4 rounded-2xl
              bg-gradient-to-r
              from-[#4F46E5]
              to-[#7C3AED]
              text-white font-semibold
              hover:scale-[1.02]
              active:scale-[0.98]
              transition-all
            "
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-slate-400 mt-8">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-400 hover:text-indigo-300"
          >
            Sign In
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Signup;