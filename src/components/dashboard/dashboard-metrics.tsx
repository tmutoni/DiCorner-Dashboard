"use client";
import React, { useState, useEffect } from "react";
import PredictiveModeling from "./predictive-modeling"; // Check this path
import DataVisualization from "./data-visualization";
import { doc, onSnapshot } from "firebase/firestore";  // from the v9+ Firestore package
import { db } from "../../firebaseConfig";

const DashboardMetrics = () => {
  // State for metrics data
  const [metrics, setMetrics] = useState({
    dropOff: 22,
    decisionFatigue: 3.4,
    churnRate: 22,
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Replace "metrics" and "currentMetrics" with your actual Firestore collection and document ID
    const docRef = doc(db, "metrics", "currentMetrics");

    // Listen for real-time updates to the document
    const unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.exists()) {
          // Update metrics state with new data
          setMetrics(snapshot.data() as typeof metrics);
          setError(null);
        } else {
          setError("No such document!");
        }
      },
      (err) => {
        console.error("Error fetching document: ", err);
        setError(err.message);
      }
    );

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);


  return (
    <div className="flex">
      {/* Main Section */}
      <div className="flex-grow p-6 bg-white">
        <h2 className="text-xl font-semibold text-gray-800">Welcome Back, John!</h2>
        <p className="text-gray-600">Your latest insights & behavioral trends are ready.</p>

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-red-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-red-600">Drop-off Rate</h3>
            <p className="text-xl font-bold text-black">{metrics.dropOff}%</p>
            <p className="text-sm text-gray-600">Users leaving before conversion</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-blue-600">Decision Fatigue</h3>
            <p className="text-xl font-bold text-black">{metrics.decisionFatigue}s</p>
            <p className="text-sm text-gray-600">Avg. time to make a choice</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-yellow-600">Churn Rate</h3>
            <p className="text-xl font-bold text-black">{metrics.churnRate}%</p>
            <p className="text-sm text-gray-600">Users not returning</p>
          </div>
        </div>

        {/* Behavioral Trends Over Time Graph */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-black">Behavioral Trends Over Time</h3>
          <DataVisualization metrics={metrics} />
        </div>
        [<div className="mt-6">
          <h3 className="text-lg font-semibold text-black">Predictive Modeling</h3>
          <PredictiveModeling />
        </div>]
        
        {/* Strategic Recommendations Section */}
        <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-black">Strategic Recommendations</h3>
          <table className="min-w-full bg-white border rounded-lg mt-4">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left text-sm font-semibold text-black">Metric Affected</th>
                <th className="p-2 text-left text-sm font-semibold text-black">Recommendation</th>
                <th className="p-2 text-left text-sm font-semibold text-black">Impact Level</th>
                <th className="p-2 text-left text-sm font-semibold text-black">Estimated Impact</th>
                <th className="p-2 text-left text-sm font-semibold text-black">Next Step</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 text-sm font-semibold text-black">Drop-off Rate</td>
                <td className="p-2 text-sm font-semibold text-black">Users are leaving before engaging. Testing a different CTA placement can improve visibility.</td>
                <td className="p-2 text-red-600 font-bold">High</td>
                <td className="p-2 text-green-600 font-bold">↓ 20% Drop-off</td>
                <td className="p-2"><button className="bg-blue-500 text-white px-3 py-1 rounded">Create A/B Test</button></td>
              </tr>
              <tr className="border-b">
                <td className="p-2 text-sm font-semibold text-black">Decision Fatigue</td>
                <td className="p-2 text-sm font-semibold text-black">Users take too long to decide. Reducing complexity can improve engagement.</td>
                <td className="p-2 text-yellow-600 font-bold">Medium</td>
                <td className="p-2 text-green-600 font-bold">↑ 15% Engagement</td>
                <td className="p-2"><button className="bg-blue-500 text-white px-3 py-1 rounded">Optimize Flow</button></td>
              </tr>
              <tr>
                <td className="p-2 text-sm font-semibold text-black">Churn Rate</td>
                <td className="p-2 text-sm font-semibold text-black">Users aren’t returning. Personalized follow-ups can increase retention.</td>
                <td className="p-2 text-green-600 font-bold">Low</td>
                <td className="p-2 text-green-600 font-bold">↓ 10% Churn</td>
                <td className="p-2"><button className="bg-blue-500 text-white px-3 py-1 rounded">Improve Retention</button></td>
              </tr>
            </tbody>
          </table>
          <p className="text-gray-600 text-sm mt-2">Tip: A/B testing should be done early in product development. Personalization efforts work best for long-term user retention.</p>
        </div>

        {error && <p className="text-red-600 mt-4">Error: {error}</p>}
      </div>
    </div>
  );
};

export default DashboardMetrics;
