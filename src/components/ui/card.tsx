import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 rounded-lg shadow bg-white dark:bg-gray-800 dark:text-white">
      {children}
    </div>
  );
}


export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}
