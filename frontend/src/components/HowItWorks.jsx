function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Create Profile",
      desc: "Sign up and build your AI interview profile in seconds.",
    },
    {
      id: "02",
      title: "Take Mock Interview",
      desc: "AI asks real interview questions based on your role.",
    },
    {
      id: "03",
      title: "Get Instant Feedback",
      desc: "Receive detailed analysis on answers, confidence & clarity.",
    },
    {
      id: "04",
      title: "Improve Skills",
      desc: "AI suggests what to learn and how to improve quickly.",
    },
    {
      id: "05",
      title: "Crack Interviews",
      desc: "Track progress and confidently clear real interviews.",
    },
  ];

  return (
    <section className="py-28 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">

        <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">
          HOW IT WORKS
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
          Your Journey to
          <span className="text-indigo-500"> Interview Success</span>
        </h2>

        <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
          A simple 5-step process designed to take you from preparation to placement.
        </p>

        <div className="mt-20 relative">

          {/* vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>

          <div className="space-y-16">

            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >

                {/* content */}
                <div className="w-full md:w-1/2">
                  <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl hover:border-indigo-500 transition-all">
                    <span className="text-indigo-400 font-bold">
                      STEP {step.id}
                    </span>
                    <h3 className="text-white text-2xl font-semibold mt-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 mt-3">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* circle node */}
                <div className="hidden md:flex w-10 h-10 rounded-full bg-indigo-500 items-center justify-center text-white font-bold z-10">
                  {step.id}
                </div>

                {/* empty space for alignment */}
                <div className="w-full md:w-1/2"></div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;