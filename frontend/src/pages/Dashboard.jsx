import { useState } from "react";

import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
import DailyRecommendation from "../components/Dashboard/DailyRecommendation";
import KPICards from "../components/Dashboard/KPICards";
import Milestones from "../components/Dashboard/Milestones";
import QuickActions from "../components/Dashboard/QuickActions";
import ResumeAnalyzer from "../components/Dashboard/ResumeAnalyzer";
import CareerRoadmap from "../components/Dashboard/CareerRoadmap";
import MockInterview from "../components/Dashboard/MockInterview";

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

  // Controls which middle section is shown
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="min-h-screen bg-slate-100 flex">
      
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

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

            {activeSection === "dashboard" ? (

              <>
                <DailyRecommendation />

                <KPICards />

                <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-6 items-stretch">

                  <div className="xl:col-span-2 flex">
                    <Milestones />
                  </div>

                  <div className="flex">
                    <QuickActions />
                  </div>

                </div>
              </>

            ) : activeSection === "resume" ? (

              <ResumeAnalyzer />

            ) : activeSection === "roadmaps" ? (

              <CareerRoadmap />

            ) : activeSection === "interviews" ? (

              <MockInterview />

            ) : (

              <div className="bg-white rounded-3xl p-10 shadow-sm">

                <h2 className="text-3xl font-bold text-slate-800">
                  Coming Soon 🚀
                </h2>

                <p className="mt-3 text-slate-500">
                  This section is under development.
                </p>

              </div>

            )}

          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;