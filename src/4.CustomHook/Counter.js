
import useCounter from "./useCounter";
function Counter() {
  const [count, increase, decrease, reset] = useCounter(5)
  return (
    <div id="container">
      {count}
       <div>
        <button id="start" onClick={increase}>Increase</button>
        <button id="stop" onClick={decrease}>Decrease</button>
        <button id="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
