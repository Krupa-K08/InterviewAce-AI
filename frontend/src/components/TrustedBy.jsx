function TrustedBy() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "TCS",
    "Infosys",
    "Accenture",
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <p className="text-slate-400 text-sm uppercase tracking-[0.3em] mb-10">
          Trusted By Aspirants Targeting
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {companies.map((company) => (
            <div
              key={company}
              className="
                min-w-[180px]
                px-8
                py-5
                rounded-2xl
                bg-slate-800/60
                border border-slate-700
                text-white
                text-lg
                font-semibold
                hover:border-indigo-500
                hover:scale-105 active:scale-95
                transition-all
              "
            >
              {company}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TrustedBy;