"use client";
import React, { useEffect } from "react";
import GradientComponent from "./GradientComponent";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <GradientComponent />
      <div className="min-h-screen flex flex-col">
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1 className="text-5xl font-bold text-gray-800 bg-yellow-200 p-4 rounded-md">
            Welcome to My Page!
          </h1>
          <form className="border p-12 rounded-md shadow-lg">
            <div className="mb-6 relative">
              <input
                type="text"
                name="input1"
                placeholder="Input 1"
                required
                className="w-full border-2 border-gray-200 rounded-md p-4 transition-colors duration-300 hover:border-blue-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6 relative">
              <input
                type="text"
                name="input2"
                placeholder="Input 2"
                required
                className="w-full border-2 border-gray-200 rounded-md p-4 transition-colors duration-300 hover:border-blue-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6 relative">
              <input
                type="text"
                name="input3"
                placeholder="Input 3"
                required
                className="w-full border-2 border-gray-200 rounded-md p-4 transition-colors duration-300 hover:border-blue-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6 relative">
              <input
                type="text"
                name="input4"
                placeholder="Input 4"
                required
                className="w-full border-2 border-gray-200 rounded-md p-4 transition-colors duration-300 hover:border-blue-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6 relative">
              <input
                type="text"
                name="input5"
                placeholder="Input 5"
                required
                className="w-full border-2 border-gray-200 rounded-md p-4 transition-colors duration-300 hover:border-blue-500 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
