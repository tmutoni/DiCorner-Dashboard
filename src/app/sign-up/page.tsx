"use client";

import React from "react";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6"; // Use 'fa' if fa6 doesn't work
import Image from "next/image";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-blue-300 flex flex-col justify-center items-center text-center p-10 relative">
        {/* Logo & Brand Name */}
        <div className="absolute top-6 left-6 flex items-center space-x-2">
          <Image
            src="/dicorner-logo.jpg" // Make sure this is in the public/ folder
            alt="DiCorner Logo"
            width={40} 
            height={40} 
            className="rounded-md"
          />
          <h1 className="text-xl font-bold text-gray-900">DiCorner</h1>
        </div>

        {/* Headline & Subheading */}
        <h1 className="text-3xl font-bold text-black mb-4 mt-10">AI Behavioral Analytics Platform</h1>
        <p className="text-lg text-gray-700 mb-6">
          Understand user behavior through predictive modeling. Get access to real-time UX feedback, experimental testing infrastructure, and AI-driven growth strategy recommendations for your business.
        </p>

        {/* AI Avatar */}
        <Image
          src="/ai-avatar.jpeg" // Ensure this is correctly placed in public/
          alt="AI Avatar"
          width={350} // Slightly reduced size for better fit
          height={350}
          className="mb-4 opacity-99 mix-blend-soft-light drop-shadow-lg"
        />

        {/* Call to Action */}
        <p className="text-md font-notsemibold text-gray-800">
          With built-in A/B Testing, messaging insights, and cognitive-driven analytics, DiCorner empowers businesses to optimize decision-making and scale intelligently.
        </p>
      </div>

      {/* Right Section - Signup Form */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10 shadow-lg">
        <p className="text-lg text-gray-700 mb-4">Unlock actionable insights with AI technology.</p>

        <form className="w-full max-w-md">
          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Your Unique Username"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Repeat Password"
            className="w-full p-6 mb-6 border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Sign Up Button */}
          <button className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition">
            Sign Up
          </button>
        </form>
        
        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-6">
            <a href="#" className="text-gray-600 hover:text-blue-500 text-2xl">
                <FaLinkedin />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-500 text-2xl">
                 <FaInstagram />
            </a> 
            <a href="#" className="text-gray-600 hover:text-black text-2xl">
                <FaXTwitter />
            </a>
        </div>
        
        {/* Navigation to Dashboard */}
        <Link href="/" className="text-blue-500 mt-4 cursor-pointer hover:underline">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
