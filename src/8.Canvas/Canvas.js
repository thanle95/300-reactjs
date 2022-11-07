import { createRef, useEffect, useRef, useState } from "react";
// import "./style.css";
function Canvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    
    const canvas = canvasRef.current;
    if(canvas){
    const ctx = canvas.getContext("2d")
    const width = canvas.width;
    const height = canvas.height;
    ctx.save();
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
    ctx.translate(width / 2, height / 2);
    ctx.rotate((0 * Math.PI) / 180);
    ctx.fillStyle = '#4397AC';
    ctx.fillRect(-width / 4, -height / 4, width / 2, height / 2);
    ctx.restore();
    }
  }, []);
  return (
    <div >
      <h3>Thực hành về Canvas</h3>
      <canvas
        ref={canvasRef}
        style={{
          border: '1px solid #888',
           height: '300px',
            width: '300px'
        }}
      ></canvas>
    </div>
  );
}

export default Canvas;
