import React, { useRef, useEffect } from "react";

function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set your gradient or other drawing here using the context
    // This is a simple example of filling the canvas with a solid color
    context.fillStyle = "red";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}

export default BackgroundCanvas;
