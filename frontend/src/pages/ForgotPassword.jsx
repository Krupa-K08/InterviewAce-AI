import { Link } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage(
      "✓ Reset link sent successfully! Please check your email."
    );

    setEmail("");
  };

  return (
    <AuthLayout
      leftContent={
        <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">

          <img
            src="/logo.png"
            alt="InterviewAce AI"
            className="h-40 xl:h-44 w-auto mb-16"
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
            RESET ACCESS
          </h2>

          <p
            className="
              mt-6
              text-2xl
              xl:text-3xl
              font-medium
              text-slate-200
            "
          >
            We've Got You Covered
          </p>

        </div>
      }
    >
      <div>

        <h2 className="text-4xl font-bold text-white">
          Reset Password
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full
              px-4
              py-4
              rounded-2xl
              bg-white/5
              border border-white/10
              text-white
              placeholder-slate-500
              focus:outline-none
              focus:border-indigo-500
            "
          />

          <button
            type="submit"
            className="
              w-full
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-[#4F46E5]
              to-[#7C3AED]
              text-white
              font-semibold
              hover:scale-[1.02]
              active:scale-[0.98]
              transition-all
            "
          >
            Send Reset Link
          </button>

          {message && (
            <p className="text-center text-sm text-indigo-300">
              {message}
            </p>
          )}

        </form>

        <p className="text-center text-slate-400 mt-8">
          Remember your password?{" "}
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

export default ForgotPassword;