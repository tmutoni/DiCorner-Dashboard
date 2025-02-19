import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DataVisualization = ({ metrics }) => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Drop-off Rate",
        data: [40, 42, 41, 43, 42, 38, 30],
        borderColor: "red",
        fill: false,
      },
      {
        label: "Decision Fatigue",
        data: [3.5, 3.2, 3.1, 3.0, 2.9, 2.7, 2.5],
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Churn Rate",
        data: [15, 16, 17, 16, 17, 18, 19],
        borderColor: "gold",
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Line data={data} />
    </div>
  );
};

export default DataVisualization;
