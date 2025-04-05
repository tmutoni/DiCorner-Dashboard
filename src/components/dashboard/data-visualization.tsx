// data-visualization.tsx

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// Register chart elements
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Define a type for the metrics prop
interface Metrics {
  dropOff: number;
  decisionFatigue: number;
  churnRate: number;
}

// Define props for your component
interface DataVisualizationProps {
  metrics: Metrics;
}

// Data visualization chart
const DataVisualization: React.FC<DataVisualizationProps> = ({ metrics }) => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // Example labels for the chart
    datasets: [
      {
        label: "Drop-off Rate",
        data: [metrics.dropOff, 25, 30, 35, 40, 38, 33], // Example data with metrics as input
        borderColor: "red",
        fill: false
      },
      {
        label: "Decision Fatigue",
        data: [metrics.decisionFatigue, 3.5, 3.2, 3.0, 2.8, 2.6, 2.4],
        borderColor: "blue",
        fill: false
      },
      {
        label: "Churn Rate",
        data: [metrics.churnRate, 19, 20, 18, 21, 22, 23],
        borderColor: "gold",
        fill: false
      }
    ]
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Line data={data} />
    </div>
  );
};

export default DataVisualization;
