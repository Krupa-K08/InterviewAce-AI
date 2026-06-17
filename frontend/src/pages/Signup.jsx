import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      alert("Account created successfully! 🎉");

      navigate("/login");
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
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />

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

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />

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
            {loading ? "Creating Account..." : "Create Account"}
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