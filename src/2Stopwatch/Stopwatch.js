import { useEffect, useRef, useState } from "react";
import "./style.css"
function Stopwatch() {
  const [tens, setTens] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const intervalId = useRef(null);
  const handleStart = ()=>{
    intervalId.current = intervalId.current ?? setInterval(startTimer, 10);
  }
  const handleStop = ()=>{
    stopTimer();
  }
  const handleReset = ()=>{
    stopTimer();
    setSeconds(0)
    setTens(0)
  }
  function stopTimer() {
    clearInterval(intervalId.current);
    intervalId.current = null;
  }
  function startTimer() {
    setTens(prev=>prev+ 1)
  }
  useEffect(()=>{
    if (tens == 100) {
        setTens(0)
        setSeconds(prev => prev + 1)
      }
  }, [tens])
  return (
    <div id="container">
      <div id="stopwatch">
        <span id="seconds">{seconds < 10? '0' + seconds: seconds}</span> :
        <span id="tens">{tens.toString().padStart(2,"0")}</span>
      </div>
      <div>
        <button id="start" onClick={handleStart}>Start</button>
        <button id="stop" onClick={handleStop}>Stop</button>
        <button id="reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch
