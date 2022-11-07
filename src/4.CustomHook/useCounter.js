import { useState } from "react";

function useCounter(initValue) {
  const [count, setCount] = useState(initValue || 0)
  const increase = ()=> setCount(prev => prev + 1)
  const decrease = ()=> setCount(prev => prev - 1)
  const reset = ()=> setCount(initValue || 0)
  return [count, increase, decrease, reset]
}

export default useCounter;
