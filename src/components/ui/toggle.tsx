import React from "react";

interface ToggleProps {
  checked: boolean;
  onToggle: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ checked, onToggle }) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input type="checkbox" checked={checked} onChange={onToggle} className="hidden" />
      <div
        className={`w-10 h-5 flex items-center rounded-full p-1 transition duration-300 ${
          checked ? "bg-blue-500 dark:bg-blue-400" : "bg-gray-300 dark:bg-gray-700"
        }`}
      >
        <div
          className={`w-4 h-4 bg-white dark:bg-gray-300 rounded-full shadow-md transform transition-transform ${
            checked ? "translate-x-5" : ""
          }`}
        />
      </div>
    </label>
  );
};

export default Toggle;
