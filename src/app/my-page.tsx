"use client";

import React from "react";
import AnalyticsLoader from "../components/AnalyticsLoader";

const MyPage: React.FC = () => {
  return (
    <div>
      <AnalyticsLoader />
      <h1>My Page</h1>
      <p>This is the content for My Page.</p>
    </div>
  );
};

export default MyPage;
