import {
  LayoutDashboard,
  Mic,
  FileText,
  Route,
  BarChart3,
  Settings,
  User,
  LogOut,
} from "lucide-react";

function Sidebar() {
  return (
    <aside
      className="
        w-72
        bg-white
        border-r border-slate-200
        flex flex-col
        justify-between
        min-h-screen
        px-6 py-8
      "
    >
      {/* Top */}
      <div>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-12">
          <img
            src="/logo.png"
            alt="InterviewAce AI"
            className="h-12 w-12"
          />

          <div>
            <h1 className="font-bold text-slate-800 text-lg">
              InterviewAce AI
            </h1>

            <p className="text-sm text-slate-500">
              Interview Prep
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">

          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            active
          />

          <SidebarItem
            icon={<Mic size={20} />}
            label="Mock Interviews"
          />

          <SidebarItem
            icon={<FileText size={20} />}
            label="Resume Analyzer"
          />

          <SidebarItem
            icon={<Route size={20} />}
            label="Career Roadmaps"
          />

          <SidebarItem
            icon={<BarChart3 size={20} />}
            label="Analytics"
          />

        </nav>
      </div>

      {/* Bottom */}
      <div className="space-y-2">

        <SidebarItem
          icon={<User size={20} />}
          label="Profile"
        />

        <SidebarItem
          icon={<Settings size={20} />}
          label="Settings"
        />

      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, active }) {
  return (
    <button
      className={`
        w-full flex items-center gap-3 px-4 py-3 rounded-2xl
        transition-all text-left
        ${
          active
            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
            : "text-slate-600 hover:bg-slate-100"
        }
      `}
    >
      {icon}
      <span className="font-medium">
        {label}
      </span>
    </button>
  );
}

export default Sidebar;