import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";

function Dashboard() {
  // Temporary mock data
  const user = {
    name: "Krupa",
    streak: 8,
    targetCompany: "Microsoft",
    interviewDays: 18,
  };

  // Change this later based on backend data
  const isOnboarded = true;

  return (
    <div className="min-h-screen bg-slate-100 flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">

        <Header user={user} />

        {!isOnboarded ? (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-slate-800">
              Complete Your Setup
            </h2>

            <p className="text-slate-500 mt-2">
              Let's prepare your InterviewAce journey.
            </p>
          </div>
        ) : (
          <div className="mt-8">
            {/* Components will come here */}
          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;