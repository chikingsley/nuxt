import React, { useEffect } from "react";
import { gradient } from "./Gradient.js"; // Adjust the path as necessary

function GradientComponent() {
  useEffect(() => {
    // Call `initGradient` with the selector to your canvas
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <canvas
      id="gradient-canvas"
      data-transition-in
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        "--gradient-color-1": "#c3e4ff",
        "--gradient-color-2": "#6ec3f4",
        "--gradient-color-3": "#eae2ff",
        "--gradient-color-4": "#b9beff",
      }}
    />
  );
}

export default GradientComponent;
