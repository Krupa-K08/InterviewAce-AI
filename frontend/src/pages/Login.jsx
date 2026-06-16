import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

function Login() {
  return (
    <AuthLayout
      leftContent={
        <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">

          <img
            src="/logo.png"
            alt="InterviewAce AI"
            className="h-40 xl:h-45 w-auto mb-16"
          />

          <h2
            className="
              text-6xl
              xl:text-7xl
              font-black
              tracking-[0.10em]
              text-white
            "
          >
            WELCOME
          </h2>

          <h1
            className="
              mt-4
              text-6xl
              xl:text-7xl
              font-bold
              text-white
            "
          >
            BACK
          </h1>

          <p
            className="
              mt-6
              text-2xl
              xl:text-3xl
              font-medium
              text-slate-150
            "
          >
            Continue Your Journey
          </p>

          <p
            className="
              mt-10
              max-w-xl
              text-xl
              leading-relaxed
              text-slate-200
            "
          >
            Sign in to continue practicing interviews,
            tracking your progress, and getting one step
            closer to your dream career.
          </p>

        </div>
      }
    >
      <div>

        <h2 className="text-4xl font-bold text-white">
          Sign In
        </h2>

        <p className="text-slate-400 mt-2">
          Welcome back to InterviewAce AI.
        </p>

        <form className="mt-10 space-y-5">

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

          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-indigo-400 hover:text-indigo-300"
            >
              Forgot Password?
            </Link>
          </div>

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
            Sign In
          </button>

        </form>

        <p className="text-center text-slate-400 mt-8">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-indigo-400 hover:text-indigo-300"
          >
            Create One
          </Link>
        </p>

      </div>
    </AuthLayout>
  );
}

export default Login;