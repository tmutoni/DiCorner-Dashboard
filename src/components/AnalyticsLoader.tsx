"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

// Replace with your actual GA Measurement ID
const GA_MEASUREMENT_ID = "G-B4JHF0J3GD";

const AnalyticsLoader: React.FC = () => {
  const pathname = usePathname();

  // When the route changes, send a page_view event to GA.
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("config", GA_MEASUREMENT_ID, { page_path: pathname });
    }
  }, [pathname]);

  return (
    <>
      {/* Load the Google Analytics script after the page is interactive */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
};

export default AnalyticsLoader;
