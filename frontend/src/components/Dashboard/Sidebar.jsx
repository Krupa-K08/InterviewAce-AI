import {
  LayoutDashboard,
  Mic,
  FileText,
  Route,
  BarChart3,
  Settings,
  User,
} from "lucide-react";

function Sidebar({ activeSection, setActiveSection })  {
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
          section="dashboard"
          activeSection={activeSection}
          setActiveSection={setActiveSection}
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
          />

          <SidebarItem
           section="interviews"
           activeSection={activeSection}
          setActiveSection={setActiveSection}
            icon={<Mic size={20} />}
            label="Mock Interviews"
          />

          <SidebarItem
            section="resume"
            activeSection={activeSection}
          setActiveSection={setActiveSection}
            icon={<FileText size={20} />}
            label="Resume Analyzer"
          />

          <SidebarItem
            section="roadmaps"
            activeSection={activeSection}
          setActiveSection={setActiveSection}
            icon={<Route size={20} />}
            label="Career Roadmaps"
          />

          <SidebarItem
            section="analytics"
            activeSection={activeSection}
          setActiveSection={setActiveSection}
            icon={<BarChart3 size={20} />}
            label="Analytics"
          />
        </nav>
      </div>

      <div className="space-y-1">
        <SidebarItem
          section="profile"
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          icon={<User size={20} />}
          label="Profile"
        />

        <SidebarItem
          section="settings"
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          icon={<Settings size={20} />}
          label="Settings"
        />
      </div>
    </aside>
  );
}

function SidebarItem({
  section,
  activeSection,
  setActiveSection,
  icon,
  label,
}) {
  return (
    <button
      onClick={() => setActiveSection(section)}
      className={`
        w-full
        flex items-center gap-3
        px-5 py-4
        rounded-2xl
        transition-all
        font-medium
        ${
          activeSection === section
            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
            : "text-slate-600 hover:bg-purple-50 hover:text-purple-700"
        }
      `}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default Sidebar;