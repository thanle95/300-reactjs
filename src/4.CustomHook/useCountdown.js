import { useEffect, useRef, useState } from "react";

function useCountdown(initValue) {
  const [countdown, setCountdown] = useState(initValue || 10);
  const timeoutId = useRef(null);
  console.log({ initValue, countdown, timeoutId: timeoutId.current });
  const start = () => {
    if (countdown > 0) {
      setCountdown((prev) => prev - 1);
      timeoutId.current = setTimeout(() => {
        start();
      }, 1000);
    } else stopCountdown();
  };
  const startCountdown = () => start();
  const stopCountdown = () => clearTimeout(timeoutId.current);
  const resetCountdown = () => {
    stopCountdown();
    setCountdown(initValue || 10);
  };
  useEffect(() => {
    setCountdown(initValue)
    return () => stopCountdown();
  }, [initValue]);
  return [countdown, startCountdown, stopCountdown, resetCountdown];
}

export default useCountdown;
