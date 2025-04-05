"use client";

import { useEffect } from "react";
import { getAnalytics, isSupported } from "firebase/analytics";
import { app } from "../firebaseConfig"; // wherever your Firebase app is initialized

export default function MyAnalytics() {
  useEffect(() => {
    // This code runs in the browser only
    async function enableAnalytics() {
      // Ensure we're in a browser environment
      if (typeof window !== "undefined") {
        // isSupported() checks if the environment actually supports Analytics
        const supported = await isSupported();
        if (supported) {
          getAnalytics(app);
        } else {
          console.warn("Analytics not supported in this environment");
        }
      }
    }

    enableAnalytics();
  }, []);

  // This component doesn't render anything visible
  return null;
}
