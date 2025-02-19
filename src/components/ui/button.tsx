import React from "react";

export function Button({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={onClick}>
      {children}
    </button>
  );
}
