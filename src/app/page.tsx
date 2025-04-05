"use client";

import React from "react";
import Sidebar from "../components/ui/sidebar";
import DashboardMetrics from "../components/dashboard/dashboard-metrics";
import SortMetrics from "../components/dashboard/sort-metrics";
import Filter from "../components/dashboard/filter"; // Ensures sorting & filtering are handled properly

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard Content */}
      <div className="flex-grow p-6 bg-gray-100">
        <DashboardMetrics />
      </div>

      {/* Right Section (Sort & Filter) */}
      <div className="w-1/3 p-6 bg-gray-50 border-l border-gray-200">
        <SortMetrics />
        <Filter />
      </div>
    </div>
  );
};

export default Dashboard;
