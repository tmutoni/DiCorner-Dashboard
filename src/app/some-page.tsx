"use client";

import React from "react";
import AnalyticsLoader from "../components/AnalyticsLoader";

const SomePage: React.FC = () => {
  return (
    <div>
      <AnalyticsLoader />
      <h1>Some Page</h1>
      <p>This is the content for Some Page.</p>
    </div>
  );
};

export default SomePage;
