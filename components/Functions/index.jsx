import { useCallback, useRef, useState } from "react";

export function usePomodoroTimer(initialTimerType) {
  const [timerType, setTimerType] = useState(initialTimerType);
  const [seconds, setSeconds] = useState(initialTimerType.initialValue);
  const [timerRunning, setTimerRunning] = useState(false);
  const timerRef = useRef(null);

  const clear = useCallback(() => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  }, []);

  const toggleTimerType = useCallback(
    (newTimerType) => {
      clear();
      setTimerType(newTimerType);
      setSeconds(newTimerType.initialValue);
    },
    [clear]
  );

  const toggleTimer = useCallback(() => {
    if (timerRef.current) {
      clear();
      return;
    }

    setTimerRunning(true);

    const id = setInterval(() => {
      setSeconds((oldState) => {
        if (oldState === 0) {
          clear();
          return timerType.initialValue;
        }
        return oldState - 1;
      });
    }, 1000);

    timerRef.current = id;
  }, [clear, timerType]);

  return {
    timerType,
    seconds,
    timerRunning,
    toggleTimerType,
    toggleTimer,
  };
}