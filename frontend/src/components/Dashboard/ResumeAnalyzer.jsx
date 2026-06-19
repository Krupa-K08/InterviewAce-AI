import { useState } from "react";

function ResumeAnalyzer() {
  const [uploaded, setUploaded] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setUploaded(true);
      setFileName(file.name);
      setFileSize((file.size / 1024 / 1024).toFixed(2));
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

      <h2 className="text-3xl font-bold text-slate-800">
        📄 Resume Analyzer
      </h2>

      {!uploaded ? (
        <div className="mt-8">

          <label
            className="
              flex flex-col items-center justify-center
              border-2 border-dashed border-purple-300
              rounded-3xl
              py-16
              cursor-pointer
              hover:bg-purple-50
              transition
            "
          >
            <span className="text-6xl">📄</span>

            <p className="mt-4 text-xl font-semibold text-slate-700">
              Upload Your Resume
            </p>

            <p className="text-slate-500 mt-2">
              PDF or DOCX • Max 5MB
            </p>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={handleUpload}
            />
          </label>

        </div>
      ) : (
        <div className="mt-8 space-y-6">

          {/* Uploaded Resume */}
          <div className="bg-purple-50 rounded-2xl p-5 flex justify-between items-center">

            <div>
              <h3 className="font-semibold text-slate-800">
                ✅ Resume Uploaded
              </h3>

              <p className="text-slate-600">
                {fileName}
              </p>

              <p className="text-sm text-slate-500">
                {fileSize} MB
              </p>
            </div>

            <button
              onClick={() => setUploaded(false)}
              className="
                px-4 py-2
                rounded-xl
                bg-purple-600
                text-white
                hover:bg-purple-700
              "
            >
              Replace
            </button>

          </div>

          {/* Analysis */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg">
                ATS Score
              </h3>

              <p className="text-5xl font-bold text-purple-600 mt-4">
                84%
              </p>

              <p className="text-slate-500 mt-2">
                Excellent compatibility.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg">
                Skills Found
              </h3>

              <ul className="mt-4 space-y-2 text-slate-600">
                <li>✓ React</li>
                <li>✓ JavaScript</li>
                <li>✓ Node.js</li>
                <li>✓ Git</li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg">
                Missing Skills
              </h3>

              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• TypeScript</li>
                <li>• Docker</li>
                <li>• AWS</li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg">
                Suggestions
              </h3>

              <ul className="mt-4 space-y-2 text-slate-600">
                <li>• Add measurable achievements.</li>
                <li>• Include cloud technologies.</li>
                <li>• Highlight projects.</li>
              </ul>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default ResumeAnalyzer;