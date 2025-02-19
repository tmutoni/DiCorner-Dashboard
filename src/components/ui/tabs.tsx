import React, { useState } from "react";

export function Tabs({ children }: { children: React.ReactNode }) {
  return <div className="border-b">{children}</div>;
}

export function Tab({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="p-4">
      <strong>{label}</strong>
      <div>{children}</div>
    </div>
  );
}
