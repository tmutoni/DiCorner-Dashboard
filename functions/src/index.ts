// functions/src/index.ts

import { onRequest } from "firebase-functions/v2/https";
import { logger } from "firebase-functions";
import { authApi } from "./authFunctions"; // Correct relative path

// A sample function for testing (optional)
export const helloWorld = onRequest((req, res) => {
  logger.log("Hello from Firebase Functions!");
  res.send("Hello from Firebase!");
});

// Export the consolidated auth API
export { authApi };
