// src/components/dashboard/dashboard-metrics.tsx

import React, { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import DataVisualization from "./data-visualization";
import PredictiveModeling from "./predictive-modeling";
import {db} from "../../firebaseConfig";


interface Metrics {
  dropOff: number;
  decisionFatigue: number;
  churnRate: number;
}

const DashboardMetrics: React.FC = () => {
  // Initial state for metrics data
  const [metrics, setMetrics] = useState<Metrics>({
    dropOff: 0,
    decisionFatigue: 0,
    churnRate: 0,
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Reference to the Firestore document for dashboard metrics
    const metricsDocRef = doc(db, "metrics", "dashboardMetrics");

    // Subscribe to real-time updates
    const unsubscribe = onSnapshot(
      metricsDocRef,
      (docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data() as Metrics;
          setMetrics({
            dropOff: data.dropOff,
            decisionFatigue: data.decisionFatigue,
            churnRate: data.churnRate,
          });
          setError(null);
        } else {
          setError("No metrics data found.");
        }
      },
      (err) => {
        console.error("Error fetching metrics: ", err);
        setError("Error fetching metrics.");
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex">
      <div className="flex-grow p-6 bg-white">
        <h2 className="text-xl font-semibold text-gray-800">
          Welcome Back, John!
        </h2>
        <p className="text-gray-600">
          Your latest insights &amp; behavioral trends are ready.
        </p>

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-red-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-red-600">
              Drop-off Rate
            </h3>
            <p className="text-xl font-bold text-black">
              {metrics.dropOff}%
            </p>
            <p className="text-sm text-gray-600">
              Users leaving before conversion
            </p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-blue-600">
              Decision Fatigue
            </h3>
            <p className="text-xl font-bold text-black">
              {metrics.decisionFatigue}s
            </p>
            <p className="text-sm text-gray-600">
              Avg. time to make a choice
            </p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-yellow-600">
              Churn Rate
            </h3>
            <p className="text-xl font-bold text-black">
              {metrics.churnRate}%
            </p>
            <p className="text-sm text-gray-600">Users not returning</p>
          </div>
        </div>

        {/* Behavioral Trends Over Time Chart */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-black">
            Behavioral Trends Over Time
          </h3>
          <DataVisualization metrics={metrics} />
        </div>

        {/* Predictive Modeling Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-black">
            Predictive Modeling
          </h3>
          <PredictiveModeling />
        </div>

        {/* Strategic Recommendations Section */}
        <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-black">
            Strategic Recommendations
          </h3>
          <table className="min-w-full bg-white border rounded-lg mt-4">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left text-sm font-semibold text-black">
                  Metric Affected
                </th>
                <th className="p-2 text-left text-sm font-semibold text-black">
                  Recommendation
                </th>
                <th className="p-2 text-left text-sm font-semibold text-black">
                  Impact Level
                </th>
                <th className="p-2 text-left text-sm font-semibold text-black">
                  Estimated Impact
                </th>
                <th className="p-2 text-left text-sm font-semibold text-black">
                  Next Step
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 text-sm font-semibold text-black">
                  Drop-off Rate
                </td>
                <td className="p-2 text-sm font-semibold text-black">
                  Test different CTA placements
                </td>
                <td className="p-2 text-red-600 font-bold">High</td>
                <td className="p-2 text-green-600 font-bold">
                  ↓ 20% Drop-off
                </td>
                <td className="p-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    Create A/B Test
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-2 text-sm font-semibold text-black">
                  Decision Fatigue
                </td>
                <td className="p-2 text-sm font-semibold text-black">
                  Simplify user choices
                </td>
                <td className="p-2 text-yellow-600 font-bold">Medium</td>
                <td className="p-2 text-green-600 font-bold">
                  ↑ 15% Engagement
                </td>
                <td className="p-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    Optimize Flow
                  </button>
                </td>
              </tr>
              <tr>
                <td className="p-2 text-sm font-semibold text-black">
                  Churn Rate
                </td>
                <td className="p-2 text-sm font-semibold text-black">
                  Personalize follow-ups
                </td>
                <td className="p-2 text-green-600 font-bold">Low</td>
                <td className="p-2 text-green-600 font-bold">
                  ↓ 10% Churn
                </td>
                <td className="p-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    Improve Retention
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-gray-600 text-sm mt-2">
            Tip: A/B testing should be done early. Personalization works best
            for long-term retention.
          </p>
        </div>

        {error && (
          <p className="text-red-600 mt-4">
            Error: {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default DashboardMetrics;
