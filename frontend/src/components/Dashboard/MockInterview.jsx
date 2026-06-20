import { useState, useRef } from "react";

function MockInterview() {
  const companies = [
    "Microsoft",
    "Google",
    "Amazon",
    "TCS",
    "Infosys",
  ];

  const questions = [
    "Tell me about yourself.",
    "Why do you want to join this company?",
    "Describe a challenging project you worked on.",
    "What are your strengths and weaknesses?",
    "Do you have any questions for us?",
  ];

  const [selectedCompany, setSelectedCompany] = useState("");
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [conversation, setConversation] = useState([]);

  const textareaRef = useRef(null);

  const startInterview = () => {
    if (!selectedCompany) return;

    setStarted(true);
    setCurrentQuestion(0);

    setConversation([
      {
        sender: "interviewer",
        text: questions[0],
      },
    ]);
  };

  const autoResize = () => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height =
      Math.min(textarea.scrollHeight, 160) + "px";
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);

    setTimeout(autoResize, 0);
  };

  const submitAnswer = () => {
    if (!answer.trim()) return;

    const updatedConversation = [
      ...conversation,
      {
        sender: "user",
        text: answer.trim(),
      },
    ];

    if (currentQuestion < questions.length - 1) {
      updatedConversation.push({
        sender: "interviewer",
        text: questions[currentQuestion + 1],
      });

      setCurrentQuestion((prev) => prev + 1);
    } else {
      updatedConversation.push({
        sender: "interviewer",
        text:
          "🎉 This interview session is complete. Great job! Your detailed feedback report will be available soon.",
      });
    }

    setConversation(updatedConversation);

    setAnswer("");

    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.focus();
      }
    }, 0);
  };

  const handleKeyDown = (e) => {
    /*
      Enter → Send
      Shift + Enter → New Line
    */

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submitAnswer();
    }
  };

  return (
    <div
      className="
        bg-white
        rounded-3xl
        border border-slate-200
        shadow-sm
        p-8
      "
    >
      <h2 className="text-3xl font-bold text-slate-800">
        🎤 Mock Interviews
      </h2>

      {!started && (
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <select
            value={selectedCompany}
            onChange={(e) =>
              setSelectedCompany(e.target.value)
            }
            className="
              flex-1
              border border-slate-300
              rounded-2xl
              px-5 py-3
              text-slate-700
              focus:outline-none
              focus:ring-2
              focus:ring-purple-500
            "
          >
            <option value="">
              Choose Company
            </option>

            {companies.map((company) => (
              <option key={company}>
                {company}
              </option>
            ))}
          </select>

          <button
            onClick={startInterview}
            className="
              bg-purple-600
              text-white
              px-8 py-3
              rounded-2xl
              hover:bg-purple-700
              transition
            "
          >
            Start Interview
          </button>
        </div>
      )}

      {started && (
        <>
          <div className="mt-8 space-y-5 max-h-[500px] overflow-y-auto pr-2">
            {conversation.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "interviewer"
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                <div
                  className={`
                    max-w-[75%]
                    px-5 py-4
                    rounded-2xl
                    ${
                      message.sender === "interviewer"
                        ? "bg-slate-100 text-slate-800"
                        : "bg-purple-600 text-white"
                    }
                  `}
                >
                  <div className="font-semibold mb-2">
                    {message.sender === "interviewer"
                      ? "👨‍💼 Interviewer"
                      : "🧑 You"}
                  </div>

                  <p className="whitespace-pre-wrap">
                    {message.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-4 items-end">
            <textarea
              ref={textareaRef}
              placeholder="Type your answer..."
              value={answer}
              onChange={handleAnswerChange}
              onKeyDown={handleKeyDown}
              className="
                flex-1
                border border-slate-300
                rounded-2xl
                px-5 py-3
                text-slate-700
                placeholder:text-slate-400
                resize-none
                overflow-y-auto
                min-h-[52px]
                max-h-[160px]
                focus:outline-none
                focus:ring-2
                focus:ring-purple-500
              "
            />

            <button
              onClick={submitAnswer}
              className="
                bg-purple-600
                text-white
                px-8 py-3
                rounded-2xl
                hover:bg-purple-700
                transition
                h-[52px]
              "
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default MockInterview;
