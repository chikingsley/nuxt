"use client";
import React, { useEffect, useState } from "react";
import GradientComponent from "./GradientComponent";
import "react-phone-number-input/style.css";
import AppForm from "./ReactHookForm";

export default function Home() {
  const [value, setValue] = useState();
  const [inputFocus, setInputFocus] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  return (
    <>
      <GradientComponent />
      <div
        style={{
          backgroundImage: "url('path/to/hero-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
        }}
      >
        <div
          className="text-white"
          style={{
            fontFamily: "'Libre Franklin', sans-serif",
            width: "100%",
            fontSize: "1.2em",
          }}
        >
          <h1 className="text-7xl mb-4 font-bold mix-blend-exclusion">
            Unleash Your Forms with AI
          </h1>
          <p className="text-2xl mb-8">
            Revolutionize data collection with our interactive form builder.
            Dive in and start creating.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-gray-700 px-8 py-4 rounded-md font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{ fontFamily: "'Libre Franklin', sans-serif" }}
          >
            Try It Out
          </a>
        </div>
        <form
          className="border p-12 rounded-md shadow-lg"
          style={{
            fontFamily: "'Libre Franklin', sans-serif",
            width: "100%",
          }}
        >
          <h1 className="text-2xl mb-4 font-bold text-white">
            Enter Client Contact Details
          </h1>
          <AppForm />
        </form>
      </div>
    </>
  );
}
