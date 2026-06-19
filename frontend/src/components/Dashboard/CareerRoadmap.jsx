import { useState } from "react";

function CareerRoadmap() {
  const [role, setRole] = useState("");
  const [roadmap, setRoadmap] = useState([]);

  const generateRoadmap = () => {
    const input = role.toLowerCase();

    if (input.includes("frontend")) {
      setRoadmap([
        "Learn HTML & CSS",
        "Master JavaScript",
        "Learn React",
        "Learn Tailwind CSS",
        "Build Projects",
        "Learn Git & GitHub",
        "Prepare for Interviews",
        "Apply to Companies",
      ]);
    } else if (input.includes("backend")) {
      setRoadmap([
        "Learn Node.js",
        "Master Express.js",
        "Learn MongoDB",
        "Understand REST APIs",
        "Authentication & Security",
        "Build Backend Projects",
        "Practice Interview Questions",
        "Apply to Companies",
      ]);
    } else if (input.includes("data")) {
      setRoadmap([
        "Learn Excel",
        "Master SQL",
        "Learn Python",
        "Study Statistics",
        "Learn Power BI/Tableau",
        "Build Data Projects",
        "Practice Case Studies",
        "Apply to Companies",
      ]);
    } else {
      setRoadmap([
        "Research the role",
        "Identify required skills",
        "Take relevant courses",
        "Build practical projects",
        "Create a portfolio",
        "Network with professionals",
        "Prepare for interviews",
        "Apply consistently",
      ]);
    }
  };

  return (
    <div className="mt-8 bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

      <h2 className="text-3xl font-bold text-slate-800">
        🛣️ Career Roadmaps
      </h2>

      <p className="mt-2 text-slate-500">
        Enter your dream role and generate a learning roadmap.
      </p>

      <div className="mt-8 flex flex-col md:flex-row gap-4">

 <input
  type="text"
  value={role}
  onChange={(e) => setRole(e.target.value)}
  placeholder="e.g. Frontend Developer"
  className="
    flex-1
    px-5 py-4
    rounded-2xl
    border border-slate-300
    bg-white
    text-slate-800
    placeholder:text-slate-400
    outline-none
    focus:ring-2 focus:ring-purple-300
    focus:border-purple-400
  "
/>

        <button
          onClick={generateRoadmap}
          className="
            px-8 py-4
            rounded-2xl
            bg-gradient-to-r
            from-indigo-600
            to-purple-600
            text-white
            font-semibold
            hover:opacity-90
            transition
          "
        >
          Generate
        </button>

      </div>

      {roadmap.length > 0 && (
        <div className="mt-10 space-y-4">

          <h3 className="text-2xl font-bold text-slate-800">
            🎯 Your Roadmap
          </h3>

          {roadmap.map((step, index) => (
            <div
              key={index}
              className="
                bg-purple-50
                rounded-2xl
                p-4
                flex items-center gap-4
              "
            >
              <div
                className="
                  h-10 w-10
                  rounded-full
                  bg-purple-600
                  text-white
                  flex items-center justify-center
                  font-bold
                "
              >
                {index + 1}
              </div>

              <span className="font-medium text-slate-700">
                {step}
              </span>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default CareerRoadmap;
