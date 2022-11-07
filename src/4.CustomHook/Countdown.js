
import { useState } from "react";
import useCountdown from "./useCountdown";
function Countdown() {
  const [value, setValue] = useState(null)
  const [countdown, startCountdown, stopCountdown, resetCountdown] = useCountdown(Number(value ?? 0))
  return (
    <div id="container">
      <input value={value} onChange={(e)=> setValue(e.target.value)} placeholder="Nhập giá trị countdown vào đây"></input>
      {countdown}
       <div>
       <button id="start" onClick={startCountdown}>Start</button>
        <button id="stop" onClick={stopCountdown}>Stop</button>
        <button id="reset" onClick={resetCountdown}>Reset</button>
      </div>
    </div>
  );
}

export default Countdown;
