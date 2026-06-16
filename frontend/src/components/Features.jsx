function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI Mock Interviews",
      description:
        "Practice real interview questions with AI and get instant feedback.",
    },
    {
      icon: "📄",
      title: "Resume Analysis",
      description:
        "Upload your resume and receive ATS-friendly improvement suggestions.",
    },
    {
      icon: "📈",
      title: "Performance Analytics",
      description:
        "Track your scores, strengths, weaknesses, and improvement trends.",
    },
    {
      icon: "🎯",
      title: "Skill Gap Detection",
      description:
        "Identify missing skills required for your dream role.",
    },
    {
      icon: "🛣️",
      title: "Career Roadmaps",
      description:
        "Get personalized learning paths, projects, and certifications.",
    },
    {
      icon: "💬",
      title: "AI Feedback",
      description:
        "Receive detailed feedback on communication, confidence, and technical skills.",
    },
  ];

  return (
    <section className="py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <span className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm">
            FEATURES
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            Everything You Need To
            <span className="text-indigo-500"> Crack Interviews</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-6">
            A complete AI-powered platform designed to prepare you,
            guide you, and help you land your dream job.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-8
                hover:border-indigo-500/50
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="text-5xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-white text-xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;