import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="px-6 lg:px-20 py-28">
      <div className="max-w-6xl mx-auto">

        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border border-white/10
            bg-gradient-to-r
            from-indigo-600/20
            via-purple-600/20
            to-cyan-600/20
            backdrop-blur-xl
            px-8
            py-16
            lg:px-16
            lg:py-20
            text-center
          "
        >

          {/* Glow Effect */}
          <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-indigo-500/20 blur-3xl"></div>

          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-purple-500/20 blur-3xl"></div>

          <div className="relative z-10">

            <span
              className="
                inline-block
                px-4 py-2
                rounded-full
                bg-white/10
                border border-white/10
                text-indigo-300
                text-sm
              "
            >
              🚀 START YOUR JOURNEY
            </span>

            <h2
              className="
                mt-8
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                text-white
                leading-tight
              "
            >
              Ready To Ace
              <br />
              Your Next Interview?
            </h2>

            <p
              className="
                mt-6
                max-w-2xl
                mx-auto
                text-slate-300
                text-lg
              "
            >
              Join InterviewAce AI and transform your interview preparation
              with personalized feedback, mock interviews, and AI-powered
              guidance.
            </p>

            <div
              className="
                mt-10
                flex
                flex-col
                sm:flex-row
                justify-center
                gap-4
              "
            >

              {/* Get Started */}
              <Link
                to="/signup"
                className="
                  px-8 py-4
                  rounded-full
                  bg-gradient-to-r
                  from-[#4F46E5]
                  to-[#7C3AED]
                  text-white
                  font-semibold
                  hover:scale-105
                  active:scale-95
                  transition-all
                  shadow-xl
                "
              >
                Get Started Free
              </Link>

              {/* Explore Features */}
              <a
                href="#features"
                className="
                  px-8 py-4
                  rounded-full
                  border border-white/20
                  text-white
                  hover:bg-white/10
                  transition-all
                "
              >
                Explore Features
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;