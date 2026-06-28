import { useState, useRef } from "react";

function MockInterview() {
  const companies = [
    "Microsoft",
    "Google",
    "Amazon",
    "TCS",
    "Infosys",
  ];

  const [selectedCompany, setSelectedCompany] =
    useState("");

  const [started, setStarted] =
    useState(false);

  const [answer, setAnswer] =
    useState("");

  const [conversation, setConversation] =
    useState([]);

  const [
    interviewCompleted,
    setInterviewCompleted,
  ] = useState(false);

  const [
    showTranscript,
    setShowTranscript,
  ] = useState(false);

  const [duration, setDuration] =
    useState("");

  const [startTime, setStartTime] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const textareaRef = useRef(null);

  const autoResize = () => {
    const textarea =
      textareaRef.current;

    if (!textarea) return;

    textarea.style.height =
      "auto";

    textarea.style.height =
      Math.min(
        textarea.scrollHeight,
        160
      ) + "px";
  };

  const handleAnswerChange = (
    e
  ) => {
    setAnswer(e.target.value);

    setTimeout(autoResize, 0);
  };

  //////////////////////////////////

  const startInterview =
    async () => {
      if (!selectedCompany)
        return;

      setStarted(true);

      setInterviewCompleted(
        false
      );

      setShowTranscript(false);

      setConversation([]);

      setAnswer("");

      setStartTime(new Date());

      setLoading(true);

      try {
        const response =
          await fetch(
            "http://localhost:5000/api/gemini/ask",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                company:
                  selectedCompany,

                conversation:
                  "Start the interview",
              }),
            }
          );

        const data =
          await response.json();

        setConversation([
          {
            sender:
              "interviewer",

            text:
              data.reply,
          },
        ]);
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };

  //////////////////////////////////

  const submitAnswer =
    async () => {
      if (
        !answer.trim()
      )
        return;

      const updated =
        [
          ...conversation,

          {
            sender:
              "user",

            text:
              answer.trim(),
          },
        ];

      setConversation(updated);

      setAnswer("");

      setLoading(true);

      try {
        const response =
          await fetch(
            "http://localhost:5000/api/gemini/ask",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                company:
                  selectedCompany,

                conversation:
                  updated
                    .map(
                      (
                        msg
                      ) =>
                        `${msg.sender}: ${msg.text}`
                    )
                    .join(
                      "\n"
                    ),
              }),
            }
          );

        const data =
          await response.json();

        setConversation([
          ...updated,

          {
            sender:
              "interviewer",

            text:
              data.reply,
          },
        ]);
      } catch (err) {
        console.log(err);
      }

      setLoading(false);

      if (
        textareaRef.current
      ) {
        textareaRef.current.style.height =
          "auto";
      }
    };

  //////////////////////////////////

  const endInterview =
    async () => {
      const endTime =
        new Date();

      const mins =
        Math.max(
          1,

          Math.round(
            (
              endTime -
              startTime
            ) /
              60000
          )
        );

      const interviewDuration =
        `${mins} min`;

      setDuration(
        interviewDuration
      );

      try {
        await fetch(
          "http://localhost:5000/api/interviews",

          {
            method:
              "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              {
                userId:
                  null,

                company:
                  selectedCompany,

                duration:
                  interviewDuration,

                transcript:
                  conversation,
              }
            ),
          }
        );
      } catch (err) {
        console.log(err);
      }

      setInterviewCompleted(
        true
      );
    };

  //////////////////////////////////

  const handleKeyDown =
    (e) => {
      if (
        e.key ===
          "Enter" &&
        !e.shiftKey
      ) {
        e.preventDefault();

        submitAnswer();
      }
    };

  return (
    <div
      className="
bg-white
rounded-3xl
border
border-slate-200
shadow-sm
p-8
"
    >
      <h2
        className="
text-3xl
font-bold
text-slate-800
"
      >
        🎤 Mock
        Interviews
      </h2>

      {!started && (
        <div
          className="
mt-6
flex
flex-col
md:flex-row
gap-4
"
        >
          <select
            value={
              selectedCompany
            }
            onChange={(
              e
            ) =>
              setSelectedCompany(
                e.target
                  .value
              )
            }
            className="
flex-1
border
border-slate-300
rounded-2xl
px-5
py-3
"
          >
            <option value="">
              Choose
              Company
            </option>

            {companies.map(
              (
                company
              ) => (
                <option
                  key={
                    company
                  }
                >
                  {
                    company
                  }
                </option>
              )
            )}
          </select>

          <button
            onClick={
              startInterview
            }
            className="
bg-purple-600
text-white
px-8
py-3
rounded-2xl
"
          >
            Start
            Interview
          </button>
        </div>
      )}

      {started &&
        !interviewCompleted && (
          <>
            <div
              className="
mt-6
flex
justify-between
"
            >
              <div>
                <span
                  className="
font-semibold
"
                >
                  Company:
                </span>{" "}
                {
                  selectedCompany
                }
              </div>

              <button
                onClick={
                  endInterview
                }
                className="
bg-red-500
text-white
px-5
py-2
rounded-xl
"
              >
                End
                Interview
              </button>
            </div>

            <div
              className="
mt-8
space-y-5
max-h-[500px]
overflow-y-auto
"
            >
              {conversation.map(
                (
                  message,
                  index
                ) => (
                  <div
                    key={
                      index
                    }
                    className={`flex ${
                      message.sender ===
                      "interviewer"
                        ? "justify-start"
                        : "justify-end"
                    }`}
                  >
                    <div
                      className={`

max-w-[75%]

px-5

py-4

rounded-2xl

${
  message.sender ===
  "interviewer"
    ? "bg-slate-100 text-slate-800"
    : "bg-purple-600 text-white"
}
`}
                    >
                      <div
                        className="
font-semibold
mb-2
"
                      >
                        {message.sender ===
                        "interviewer"
                          ? "👨‍💼 Interviewer"
                          : "🧑 You"}
                      </div>

                      <p>
                        {
                          message.text
                        }
                      </p>
                    </div>
                  </div>
                )
              )}

              {loading && (
                <div
                  className="
text-slate-500
"
                >
                  Gemini is
                  thinking...
                </div>
              )}
            </div>

            <div
              className="
mt-8
flex
gap-4
"
            >
              <textarea
                ref={
                  textareaRef
                }
                value={
                  answer
                }
                onChange={
                  handleAnswerChange
                }
                onKeyDown={
                  handleKeyDown
                }
                placeholder="Type your answer..."
                className="
flex-1
border
rounded-2xl
px-5
py-3
resize-none
min-h-[52px]
max-h-[160px]
"
              />

              <button
                onClick={
                  submitAnswer
                }
                className="
bg-purple-600
text-white
px-8
rounded-2xl
"
              >
                Send
              </button>
            </div>
          </>
        )}

      {interviewCompleted && (
        <div
          className="
mt-8
bg-purple-50
rounded-3xl
p-10
text-center
"
        >
          <h2
            className="
text-3xl
font-bold
"
          >
            🎉
            Interview
            Completed
          </h2>

          <p
            className="
mt-4
"
          >
            {
              selectedCompany
            }
          </p>

          <p>
            Duration:
            {" "}
            {duration}
          </p>

          <button
            onClick={() =>
              setShowTranscript(
                !showTranscript
              )
            }
            className="
mt-6
bg-purple-600
text-white
px-8
py-3
rounded-2xl
"
          >
            {showTranscript
              ? "Hide Transcript"
              : "View Transcript"}
          </button>

          {showTranscript && (
            <div
              className="
mt-8
space-y-5
text-left
"
            >
              {conversation.map(
                (
                  msg,
                  i
                ) => (
                  <div
                    key={
                      i
                    }
                  >
                    <strong>
                      {msg.sender ===
                      "interviewer"
                        ? "👨‍💼 Interviewer"
                        : "🧑 You"}
                    </strong>

                    <p>
                      {
                        msg.text
                      }
                    </p>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MockInterview;