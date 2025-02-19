"use client";

import React, { useState } from "react";
import { FaUser, FaUsers, FaCheck } from "react-icons/fa";

const filterOptions = [
  { title: "Predictive Modeling", description: "Forecast user behavior" },
  { title: "Real-time UX Feedback", description: "Capture instant insights" },
  { title: "Experimental Testing", description: "Test & optimize strategies" },
  { title: "AI-driven Growth Strategies", description: "Data-backed decisions" },
];

const contributorOptions = [
  { title: "User", description: "Individual insights", icon: <FaUser /> },
  { title: "Collaboration", description: "Team-generated insights", icon: <FaUsers /> },
];

const Filter: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedContributors, setSelectedContributors] = useState<string[]>([]);

  // Toggle filter selection
  const toggleFilterSelection = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((item) => item !== filter) : [...prev, filter]
    );
  };

  // Toggle contributor selection
  const toggleContributorSelection = (contributor: string) => {
    setSelectedContributors((prev) =>
      prev.includes(contributor) ? prev.filter((item) => item !== contributor) : [...prev, contributor]
    );
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-md">
      {/* Generic Section Heading */}
      <h2 className="text-lg font-semibold text-black mb-2">Filter</h2>
      <p className="text-gray-500 text-sm mb-3 italic">
        Select filters to refine your data insights and customize the analysis experience.
      </p>

      {/* Filter Options */}
      {filterOptions.map((option) => (
        <div
          key={option.title}
          onClick={() => toggleFilterSelection(option.title)}
          className={`cursor-pointer flex items-center justify-between p-2 rounded-md ${
            selectedFilters.includes(option.title) ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100 text-black"
          }`}
        >
          <div>
            <p className="font-bold">{option.title}</p>
            <p className="text-xs italic text-gray-500">{option.description}</p>
          </div>
          {selectedFilters.includes(option.title) && <FaCheck className="text-blue-500" />}
        </div>
      ))}

      {/* Contributors Section */}
      <div className="mt-6">
        <h3 className="text-md font-semibold text-black mb-2">Contributors</h3>
        <p className="text-gray-500 text-sm italic mb-3">
          Choose insights based on individual contributions or team collaborations.
        </p>

        {contributorOptions.map((contributor) => (
          <div
            key={contributor.title}
            onClick={() => toggleContributorSelection(contributor.title)}
            className={`cursor-pointer flex items-center justify-between p-2 rounded-md ${
              selectedContributors.includes(contributor.title) ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100 text-black"
            }`}
          >
            <div className="flex items-center space-x-3">
              {contributor.icon}
              <div>
                <p className="font-bold">{contributor.title}</p>
                <p className="text-xs italic text-gray-500">{contributor.description}</p>
              </div>
            </div>
            {selectedContributors.includes(contributor.title) && <FaCheck className="text-blue-500" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
