import { useEffect, useState } from "react";
import "./style.css";
function Clock() {
  const [clock, setClock] = useState("");
  useEffect(() => {
    function padStart(s) {
      return s.toString().padStart(2, 0);
    }
    function startTimer() {
      const date = new Date();
      var h = date.getHours();
      const m = date.getMinutes();
      const s = date.getSeconds();
      var session = "AM";
      if (h == 0) h = 12;
      else if (h > 12) {
        h -= 12;
        session = "PM";
      }
      setClock(`${padStart(h)}:${padStart(m)}:${padStart(s)} ${session}`);
      setTimeout(startTimer, 1000);
    }
    startTimer();
  }, []);
  return <span id="clock">{clock}</span>;
}
export default Clock;
