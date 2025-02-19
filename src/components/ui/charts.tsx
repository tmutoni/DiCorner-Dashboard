"use client";
import { useState } from "react";
import Sidebar from "../../components/ui/sidebar";


import AIInsights from "../../components/ui/ai-insights";
import ABTesting from "../../components/ui/ab-testing";
import Messaging from "../../components/ui/messaging";
import ChatAssistant from "../../components/ui/chat-widget";
import Statistics from "../../components/ui/statistics";
import SignUpPage from "../../components/ui/sign-up";
import Dashboard from "../../components/ui/analytics-dashboard";
import Toggle from "../../components/ui/toggle";

const AIAnalyticsDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen transition-all flex`}>
      {/* Sidebar Navigation */}
      <Sidebar setActivePage={setActivePage} />

      {/* Page Content */}
      <div className="flex-1 p-6">
        {activePage === "dashboard" && <Dashboard />}
        {activePage === "ai-insights" && <AIInsights />}
        {activePage === "ab-testing" && <ABTesting />}
        {activePage === "messaging" && <Messaging />}
        {activePage === "statistics" && <Statistics />}
        {activePage === "sign-up" && <SignUpPage />}

        {/* Dark Mode Toggle */}
        <div className="mt-6">
          <Toggle checked={darkMode} onToggle={() => setDarkMode(!darkMode)} />
        </div>
      </div>
    </div>
  );
};

export default AIAnalyticsDashboard;
