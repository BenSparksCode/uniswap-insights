import React, { useRef, useEffect } from "react";

// Usage
function App() {
  const canvasRef = useCanvas(gl => {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clearDepth(1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }, "webgl2");

  return <canvas ref={canvasRef} width="800" height="600" />;
}

// Hook
export function useCanvas(draw, context = "2d") {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext(context);
    let animationFrameId = requestAnimationFrame(renderFrame);

    function renderFrame() {
      animationFrameId = requestAnimationFrame(renderFrame);
      draw(ctx);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return canvasRef;
}