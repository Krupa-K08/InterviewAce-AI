import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // shared button style (same for Login + Get Started)
  const primaryButton =
    "px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:scale-105 active:scale-95 transition";

  return (
    <div className="flex justify-center px-4 fixed top-0.5 left-0 w-full z-50">
      <nav className="w-full max-w-6xl">
        <div
          className="
            flex items-center justify-between
            px-6 py-4
            rounded-full
            bg-white/5
            backdrop-blur-lg
            border border-white/10
            shadow-lg
          "
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="InterviewAce AI"
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-white text-lg">
              InterviewAce AI
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-slate-300">
            <li>
              <a href="#" className="hover:text-white transition">Home</a>
            </li>
            <li>
              <a href="#features" className="hover:text-white transition">Features</a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-white transition">
                Mock Interviews
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-white transition">
                Roadmaps
              </a>
            </li>
            <li>
              <a href="#cta" className="hover:text-white transition">Pricing</a>
            </li>
          </ul>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">

            {/* Login (now same style as Get Started) */}
            <Link to="/login" className={primaryButton}>
              Login
            </Link>

            <Link to="/signup" className={primaryButton}>
              Get Started
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="
              md:hidden
              mt-3
              rounded-3xl
              bg-white/5
              backdrop-blur-lg
              border border-white/10
              p-6
            "
          >
            <div className="flex flex-col gap-4 text-slate-300">

              <a href="#" onClick={() => setIsOpen(false)} className="hover:text-white transition">
                Home
              </a>

              <a href="#features" onClick={() => setIsOpen(false)} className="hover:text-white transition">
                Features
              </a>

              <a href="#how-it-works" onClick={() => setIsOpen(false)} className="hover:text-white transition">
                Mock Interviews
              </a>

              <a href="#features" onClick={() => setIsOpen(false)} className="hover:text-white transition">
                Roadmaps
              </a>

              <a href="#cta" onClick={() => setIsOpen(false)} className="hover:text-white transition">
                Pricing
              </a>

              {/* Mobile Login */}
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className={primaryButton}
              >
                Login
              </Link>

              {/* Mobile Get Started */}
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className={primaryButton}
              >
                Get Started
              </Link>

            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;