import { forwardRef, useState } from "react";
import "./style.css";
const Counter = forwardRef((props, ref) => {
  const [count, setCount] = useState(0)
  return (
    <div>
    Count: {count}
    <button ref={ref} onClick={() => setCount(prev => prev + 1)}>
      Increment
    </button>
  </div>
  );
})

export default Counter;
