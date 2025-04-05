"use client";

import React from "react";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Panel */}
      <div className="w-1/2 bg-blue-200 flex flex-col justify-center items-center p-8 relative">
        {/* Logo in top-left (optional) */}
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <Image
            src="/dicorner-logo.jpg" // Adjust if needed
            alt="DiCorner Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <h1 className="text-xl font-bold text-gray-900">DiCorner</h1>
        </div>

        {/* Main Illustration/Image */}
        <div className="mt-8 mb-4">
          <Image
            src="/ai-illustration.png" // Replace with your actual illustration
            alt="AI Behavioral Analytics"
            width={350}
            height={350}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Headline & Subheading */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mt-4">
          AI Behavioral Analytics Platform
        </h2>
        <p className="text-lg text-gray-700 text-center mt-2 px-4">
          Unlock real-time UX feedback, experimental testing, and AI-driven
          insights to drive growth and engagement for your business.
        </p>
      </div>

      {/* Right Panel (Sign-Up Form) */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Create Your Account
          </h3>
          <p className="text-center text-gray-600 mb-6">
            Unlock actionable insights with AI technology.
          </p>
          <form>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-semibold transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
