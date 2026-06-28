import {
  FileText,
  CheckCircle,
  Clock,
  Building2,
  X,
} from "lucide-react";

import { useEffect, useState } from "react";

function Analytics() {
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedInterview, setSelectedInterview] =
    useState(null);

  useEffect(() => {
    fetchInterviews();
  }, []);

  const fetchInterviews = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/interviews"
      );

      const data = await response.json();

      setInterviews(data);
    } catch (error) {
      console.error(
        "Failed to fetch interviews:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const totalInterviews = interviews.length;

  const completedInterviews =
    interviews.filter(
      (interview) => interview.completed
    ).length;

  const averageDuration = () => {
    if (!interviews.length) return "0 min";

    const totalMinutes = interviews.reduce(
      (sum, interview) => {
        return (
          sum +
          parseInt(interview.duration || "0")
        );
      },
      0
    );

    return `${Math.round(
      totalMinutes / interviews.length
    )} min`;
  };

  const favoriteCompany = () => {
    if (!interviews.length) return "-";

    const counts = {};

    interviews.forEach((interview) => {
      counts[interview.company] =
        (counts[interview.company] || 0) + 1;
    });

    return Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );
  };

  const stats = [
    {
      icon: <FileText size={28} />,
      value: totalInterviews,
      label: "Total Interviews",
    },
    {
      icon: <CheckCircle size={28} />,
      value: completedInterviews,
      label: "Completed",
    },
    {
      icon: <Clock size={28} />,
      value: averageDuration(),
      label: "Avg Duration",
    },
    {
      icon: <Building2 size={28} />,
      value: favoriteCompany(),
      label: "Favorite Company",
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-slate-800">
        📊 Analytics
      </h2>

      <p className="mt-2 text-slate-500">
        Track your interview journey and
        performance.
      </p>

      {/* Overview Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="
              bg-white/80
              backdrop-blur-md
              border border-slate-200
              rounded-3xl
              p-6
              shadow-sm
            "
          >
            <div className="text-purple-600">
              {stat.icon}
            </div>

            <h3 className="mt-5 text-3xl font-bold text-slate-800">
              {stat.value}
            </h3>

            <p className="mt-2 text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Interviews */}
      <div
        className="
          mt-10
          bg-white
          rounded-3xl
          border border-slate-200
          shadow-sm
          p-8
        "
      >
        <h3 className="text-2xl font-bold text-slate-800">
          Recent Interviews
        </h3>

        {loading ? (
          <p className="mt-6 text-slate-500">
            Loading interviews...
          </p>
        ) : interviews.length === 0 ? (
          <p className="mt-6 text-slate-500">
            No interviews found.
          </p>
        ) : (
          <div className="mt-8 space-y-5">
            {interviews.map((item) => (
              <div
                key={item._id}
                className="
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  md:justify-between
                  gap-4
                  border-b border-slate-100
                  pb-5
                "
              >
                <div>
                  <h4 className="font-semibold text-slate-800">
                    {item.company}
                  </h4>

                  <p className="text-slate-500 mt-1">
                    {new Date(
                      item.createdAt
                    ).toLocaleDateString()}
                  </p>

                  <p className="text-slate-400 text-sm">
                    Duration:{" "}
                    {item.duration}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className="
                      bg-green-100
                      text-green-700
                      px-4 py-2
                      rounded-full
                      text-sm
                      font-medium
                    "
                  >
                    Completed
                  </span>

                  <button
                    onClick={() =>
                      setSelectedInterview(
                        item
                      )
                    }
                    className="
                      bg-purple-600
                      text-white
                      px-5 py-2
                      rounded-2xl
                      hover:bg-purple-700
                      transition
                    "
                  >
                    View Report
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Report Modal */}
      {/* Professional Report Modal */}
{selectedInterview && (

<div
className="
fixed inset-0
bg-black/60
backdrop-blur-sm
flex items-center
justify-center
p-4
z-50
"
>

<div
className="
bg-white
text-slate-900
rounded-3xl
w-[95vw]
max-w-[1400px]
h-[92vh]
overflow-y-auto
p-12
shadow-2xl
relative
"
>

<button
onClick={() => setSelectedInterview(null)}
className="
absolute
top-6
right-6
text-slate-500
hover:text-black
"
>
<X size={32}/>
</button>

<div className="border-b border-slate-200 pb-6">

<h2
className="
text-4xl
font-bold
text-slate-900
"
>
Interview Performance Report
</h2>

<p
className="
mt-2
text-slate-500
"
>
Generated by InterviewAce AI
</p>

</div>


<div
className="
mt-8
grid
md:grid-cols-2
gap-8
"
>

<div>

<p
className="
uppercase
text-xs
tracking-wider
text-slate-500
"
>
Company
</p>

<p
className="
text-lg
font-semibold
text-slate-900
"
>
{selectedInterview.company}
</p>

</div>


<div>

<p
className="
uppercase
text-xs
tracking-wider
text-slate-500
"
>
Date
</p>

<p
className="
text-lg
font-semibold
text-slate-900
"
>
{
new Date(
selectedInterview.createdAt
).toLocaleDateString()
}
</p>

</div>


<div>

<p
className="
uppercase
text-xs
tracking-wider
text-slate-500
"
>
Duration
</p>

<p
className="
text-lg
font-semibold
text-slate-900
"
>
{selectedInterview.duration}
</p>

</div>


<div>

<p
className="
uppercase
text-xs
tracking-wider
text-slate-500
"
>
Status
</p>

<p
className="
text-lg
font-semibold
text-green-600
"
>
Completed
</p>

</div>

</div>



<h3
className="
mt-12
text-2xl
font-bold
text-slate-900
"
>
AI Evaluation
</h3>


<div
className="
grid
md:grid-cols-5
gap-4
mt-6
"
>

{[
{
title:"Overall",
value:selectedInterview.feedback?.overallScore||0,
bg:"bg-purple-50",
color:"text-purple-600"
},

{
title:"Communication",
value:selectedInterview.feedback?.communication||0
},

{
title:"Technical",
value:selectedInterview.feedback?.technicalKnowledge||0
},

{
title:"Confidence",
value:selectedInterview.feedback?.confidence||0
},

{
title:"Problem Solving",
value:selectedInterview.feedback?.problemSolving||0
}

].map((card,index)=>(

<div
key={index}
className={`
${card.bg || "bg-slate-50"}
rounded-2xl
p-6
`}
>

<p
className="
text-slate-600
font-medium
"
>
{card.title}
</p>

<h2
className={`
text-4xl
font-bold
mt-3
${card.color || "text-slate-900"}
`}
>
{card.value}
</h2>

</div>

))}

</div>


<div className="mt-12">

<h3
className="
text-2xl
font-bold
text-slate-900
"
>
Strengths
</h3>

<ul
className="
mt-5
space-y-3
list-disc
pl-6
text-slate-700
"
>

{
selectedInterview.feedback?.strengths?.map(

(item,index)=>(

<li key={index}>
{item}
</li>

)

)

}

</ul>

</div>


<div className="mt-12">

<h3
className="
text-2xl
font-bold
text-slate-900
"
>
Areas For Improvement
</h3>

<ul
className="
mt-5
space-y-3
list-disc
pl-6
text-slate-700
"
>

{
selectedInterview.feedback?.weaknesses?.map(

(item,index)=>(

<li key={index}>
{item}
</li>

)

)

}

</ul>

</div>



<div className="mt-12">

<h3
className="
text-2xl
font-bold
text-slate-900
"
>
Recommendation
</h3>

<p
className="
mt-4
leading-8
text-slate-700
"
>

{
selectedInterview.feedback
?.recommendation ||

"No recommendation available."

}

</p>

</div>



<div className="mt-14">

<h3
className="
text-2xl
font-bold
text-slate-900
"
>
Transcript
</h3>

<div
className="
mt-6
space-y-5
"
>

{

selectedInterview.transcript?.map(

(message,index)=>(

<div
key={index}
className="
border-b
border-slate-200
pb-5
"
>

<div
className="
font-semibold
text-slate-900
"
>

{

message.sender==="interviewer"

?

"👨‍💼 Interviewer"

:

"🧑 You"

}

</div>

<p
className="
mt-2
text-slate-700
whitespace-pre-wrap
leading-7
"
>

{

message.text

}

</p>

</div>

)

)

}

</div>

</div>

</div>

</div>

)}
    </div>
  );
}

export default Analytics;