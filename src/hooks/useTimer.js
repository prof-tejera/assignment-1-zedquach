import { useState, useEffect, useRef } from "react";

const useTimer = (down = true) => {
  const targetTime = useRef(0)
  const [isRunning, setIsRunning] = useState(false)
  const [currentTime, setCurrentTime] = useState(0);
  const timer = useRef();

  const offset = down ? -10 : 10
  const root = document.querySelector(":root");

  const setTargetTime = (time) => {
    targetTime.current = time
    if (down) {
      setCurrentTime(time)
    }
    else {
      setCurrentTime(0)
    }
  }

  const runTimer = () => {
    if (currentTime === (down ? 0 : targetTime.current)){
      setCurrentTime(targetTime.current)
    }

    setIsRunning(true);
    timer.current = setInterval(() => {
      setCurrentTime(current => current + offset)
    }, 10)
  }

  useEffect(() => {
    if(currentTime === (down ? 0 :targetTime.current)) {
      setIsRunning(false)
      clearInterval(timer.current)
    }
  }, [currentTime])

  const pauseTimer = () => {
    setIsRunning(false)
    clearInterval(timer.current)
  }

  const reset = () => {
    clearInterval(timer.current)
    setIsRunning(false);
    if (down) {
      setCurrentTime(targetTime.current)
    }
    else {
      setCurrentTime(0)
    }
  };

  useEffect(() => {
    return () => clearInterval(timer.current)
  }, [])

  useEffect(() => {
    root.style.setProperty("--progress-deg", `${currentTime / targetTime.current * 360 || 0}deg`);
  }, [currentTime]);

  return [{currentTime, isRunning}, {
    setCurrentTime,
    setTargetTime,
    runTimer,
    pauseTimer,
    reset
  }];
};

export default useTimer;
