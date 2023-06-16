import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gradient } from "./Gradient.js"; // Adjust the path as necessary

function GradientComponent() {
  useEffect(() => {
    // Call `initGradient` with the selector to your canvas
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <motion.canvas
      id="gradient-canvas"
      data-transition-in
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}
    />
  );
}

export default GradientComponent;
