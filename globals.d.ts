// globals.d.ts

export {};

declare global {
  /**
   * If you are using Google Analytics 4 or Universal Analytics,
   * you can refine these parameter types to match the exact commands
   * you use (e.g. 'config' | 'event' | 'js').
   */
  function gtag(command: "config" | "event" | "js", ...args: unknown[]): void;

  /**
   * A minimal example of the gtag function signature.
   * Adjust as needed for your usage.
   */
  type GtagFn = (
    command: GtagCommand,
    measurementIdOrEventName: string,
    params?: Record<string, unknown>
  ) => void;

  interface Window {
    /**
     * GA4 dataLayer typically is an array of objects or unknown.
     * You can refine this if you have a known shape of data.
     */
    dataLayer?: unknown[];

    /**
     * The gtag function itself, if loaded.
     */
    gtag?: (...args: unknown[]) => void;
  }
}
