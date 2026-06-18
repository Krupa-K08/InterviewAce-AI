import {
  LayoutDashboard,
  Mic,
  FileText,
  Route,
  BarChart3,
  Settings,
  User,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside
      className="
        w-72
        bg-white
        border-r border-slate-200
        flex flex-col justify-between
        min-h-screen
        px-2 py-4
      "
    >
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <img
            src="/logo.png"
            alt="InterviewAce AI"
            className="h-25 w-25 object-contain"
          />

          <h1 className="font-bold text-xl text-slate-900">
            InterviewAce AI
          </h1>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">

          <SidebarItem
            to="/dashboard"
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
          />

          <SidebarItem
            to="/mock-interviews"
            icon={<Mic size={20} />}
            label="Mock Interviews"
          />

          <SidebarItem
            to="/resume-analyzer"
            icon={<FileText size={20} />}
            label="Resume Analyzer"
          />

          <SidebarItem
            to="/career-roadmaps"
            icon={<Route size={20} />}
            label="Career Roadmaps"
          />

          <SidebarItem
            to="/analytics"
            icon={<BarChart3 size={20} />}
            label="Analytics"
          />
        </nav>
      </div>

      <div className="space-y-1">
        <SidebarItem
          to="/profile"
          icon={<User size={20} />}
          label="Profile"
        />

        <SidebarItem
          to="/settings"
          icon={<Settings size={20} />}
          label="Settings"
        />
      </div>
    </aside>
  );
}

function SidebarItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        flex items-center gap-3
        px-5 py-4
        rounded-2xl
        transition-all
        font-medium
        ${
          isActive
            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
            : "text-slate-600 hover:bg-purple-50 hover:text-purple-700"
        }
      `
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}

export default Sidebar;