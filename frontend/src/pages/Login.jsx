import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      // Store authentication data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert(`Welcome back, ${data.user.fullName}! 🎉`);

      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

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

        {error && (
          <p className="mt-4 text-red-400 text-sm">
            {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
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
            disabled={loading}
            className="
              w-full py-4 rounded-2xl
              bg-gradient-to-r
              from-[#4F46E5]
              to-[#7C3AED]
              text-white font-semibold
              hover:scale-[1.02]
              active:scale-[0.98]
              transition-all
              disabled:opacity-70
            "
          >
            {loading ? "Signing In..." : "Sign In"}
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