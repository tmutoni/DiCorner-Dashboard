"use client";

import React, { useState } from "react";
import { FaCheck, FaChevronDown, FaChevronRight } from "react-icons/fa";

const sortCategories = [
  {
    title: "User Behavior Metrics",
    description: "Understand what users do",
    items: [
      "Time on Page",
      "Scroll Depth",
      "Interaction Rate",
      "Navigation Flow",
      "Conversion Rate",
      "Drop-off Points",
    ],
  },
  {
    title: "User Cognitive Metrics",
    description: "Insights into how users think",
    items: [
      "Attention Span",
      "Decision Fatigue",
      "Cognitive Load",
      "Friction Points",
      "Memory Recall Rate",
      "Perceived Effort",
    ],
  },
  {
    title: "Product Metrics",
    description: "Business growth & engagement",
    items: [
      "Churn Rate",
      "Retention Rate",
      "Engagement Score",
      "Average Session Duration",
      "Click-Through Rates",
      "Feature Adoption Rate",
      "Bounce Rate",
    ],
  },
];

const Sort: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([]);

  // Toggle expand/collapse for sections
  const toggleExpand = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
    );
  };

  // Select/Deselect metrics
  const toggleMetricSelection = (metric: string) => {
    setSelectedMetrics((prev) =>
      prev.includes(metric) ? prev.filter((item) => item !== metric) : [...prev, metric]
    );
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-md">
      {/* Generic Section Heading */}
      <h2 className="text-lg font-semibold text-black mb-2">Sort</h2>
      <p className="text-gray-500 text-sm mb-3 italic">
        Select metrics to analyze user behavior, cognitive patterns, and product performance.
      </p>

      {/* Sort Categories */}
      {sortCategories.map((category) => (
        <div key={category.title} className="mb-4">
          {/* Category Header */}
          <button
            onClick={() => toggleExpand(category.title)}
            className="w-full flex justify-between items-center text-black font-bold text-md py-2 hover:bg-gray-100 rounded-md px-2"
          >
            {category.title}
            {expandedSections.includes(category.title) ? (
              <FaChevronDown className="text-gray-600" />
            ) : (
              <FaChevronRight className="text-gray-600" />
            )}
          </button>
          {/* Italicized Description */}
          <p className="text-gray-500 text-xs italic mb-2">{category.description}</p>

          {/* Expandable Subitems */}
          {expandedSections.includes(category.title) && (
            <ul className="pl-4 space-y-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  onClick={() => toggleMetricSelection(item)}
                  className={`text-sm pl-4 cursor-pointer flex items-center ${
                    selectedMetrics.includes(item)
                      ? "bg-blue-100 text-blue-600"
                      : "text-gray-700 hover:text-black"
                  } p-1 rounded-md`}
                >
                  {selectedMetrics.includes(item) && <FaCheck className="text-blue-500 mr-2" />}
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sort;
