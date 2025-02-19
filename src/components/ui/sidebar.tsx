import React from "react";
import {
  FaFlask,
  FaBrain,
  FaComments,
  FaChartLine,
  FaSlidersH,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaLock,
  FaShieldAlt,
  FaEdit,
  FaFileAlt
} from "react-icons/fa";

// Make setActivePage Optional
interface SidebarProps {
  setActivePage?: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActivePage = () => {} }) => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6 flex flex-col justify-between">
      {/* Upper Section */}
      <div>
        <h2 className="text-xl font-bold mb-6">DiCorner</h2>
        <nav className="space-y-4">
          <SidebarItem icon={<FaFlask />} label="A/B Testing" onClick={() => setActivePage("ab-testing")} />
          <SidebarItem icon={<FaBrain />} label="AI Insights" onClick={() => setActivePage("ai-insights")} />
          <SidebarItem icon={<FaComments />} label="Messaging" onClick={() => setActivePage("messaging")} />
          <SidebarItem icon={<FaChartLine />} label="Real-time Feedback" onClick={() => setActivePage("real-time-feedback")} />
          <SidebarItem icon={<FaSlidersH />} label="Manipulate Test" onClick={() => setActivePage("manipulate-test")} />
        </nav>

        {/* Middle Section */}
        <h3 className="text-lg font-semibold mt-6 mb-2">View Tests</h3>
        <nav className="space-y-4">
          <SidebarItem icon={<FaFileAlt />} label="UX Feedback" onClick={() => setActivePage("ux-feedback")} />
          <SidebarItem icon={<FaShieldAlt />} label="Data Security" onClick={() => setActivePage("data-security")} />
          <SidebarItem icon={<FaLock />} label="Privacy Measures" onClick={() => setActivePage("privacy-measures")} />
          <SidebarItem icon={<FaEdit />} label="Customization" onClick={() => setActivePage("customization")} />
        </nav>
      </div>

      {/* Lower Section */}
      <div className="mt-6">
        <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg">
          <FaUser className="text-xl" />
          <div>
            <p className="text-sm font-semibold">John Smith</p>
            <p className="text-xs text-gray-400">JohnSmith@gmail.abc</p>
          </div>
        </div>
        <nav className="space-y-4 mt-4">
          <SidebarItem icon={<FaCog />} label="Settings" onClick={() => setActivePage("settings")} />
          <SidebarItem icon={<FaSignOutAlt />} label="Sign Out" onClick={() => setActivePage("sign-out")} />
        </nav>
      </div>
    </div>
  );
};

// Sidebar Item Component
export const SidebarItem = ({
  icon,
  label,
  onClick
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex items-center space-x-2 w-full p-2 text-left hover:bg-gray-700 transition"
  >
    {icon} <span>{label}</span>
  </button>
);

export default Sidebar;
