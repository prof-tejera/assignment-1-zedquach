import { useState, useEffect, useRef } from "react";
import useTimer from "../../hooks/useTimer";
import styles from "./Stopwatch.module.css";
import Clock from "../display/Clock";
import TimeSelector from "../input/TimeSelector";

const XY = () => {
  const [round, setRound] = useState(1);
  const roundRef = useRef();
  const target = useRef(0);
  const [timer, setter] = useTimer();
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    if (round > 0 && timer.currentTime === 0) {
      if (round < roundRef.current.value) {
        setRound(prev => prev + 1);
        setter.runTimer();
      } else {
        setIsDone(true)
      }
    }
  }, [timer.currentTime]);

  const resetRound = () => {
    setRound(1);
    setIsDone(false)
    setter.reset();
    setter.setTargetTime(target.current);
  };

  useEffect(() => {
    resetRound()
  }, [])

  return <div className={styles.watch}>
    <Clock time={timer.currentTime}/>
    <TimeSelector setTime={(time) => {
      setter.setTargetTime(time);
      target.current = time;
    }}/>
    <div className={styles.roundInputGroup}>
      <input ref={roundRef} placeholder={"Rounds"}/>
      {timer.isRunning ? (
        <button onClick={() => setter.pauseTimer()}>Pause</button>) : (
         <button disabled={isDone} onClick={() => setter.runTimer()}>Start</button>)}
      <button onClick={() => resetRound()}>Reset</button>
    </div>
  </div>;
};

export default XY;
