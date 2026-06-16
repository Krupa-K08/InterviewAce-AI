function Footer() {
  return (
    <footer className="px-6 lg:px-20 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="InterviewAce AI"
                className="h-12 w-auto"
              />

              <span className="text-white font-bold text-xl">
                InterviewAce AI
              </span>
            </div>

            <p className="text-slate-400 mt-4 leading-relaxed">
              Your AI-powered interview companion helping you practice,
              improve, and get hired.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Product
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-white cursor-pointer transition">
                Mock Interviews
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Resume Analysis
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Career Roadmaps
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Analytics
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-white cursor-pointer transition">
                About Us
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Contact
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Privacy Policy
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Terms of Service
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Connect
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-white cursor-pointer transition">
                GitHub
              </li>

              <li className="hover:text-white cursor-pointer transition">
                LinkedIn
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Email Support
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-sm text-center md:text-left">
            © 2026 InterviewAce AI. All rights reserved.
          </p>

          <p className="text-slate-500 text-sm">
            Practice • Improve • Get Hired
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;