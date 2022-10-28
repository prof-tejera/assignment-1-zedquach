import { useState, useEffect, useRef } from "react";
import useTimer from "../../hooks/useTimer";
import styles from "./Stopwatch.module.css";
import Clock from "../display/Clock";
import TimeSelector from "../input/TimeSelector";

const Tabata = () => {
  const [round, setRound] = useState(0);
  const roundRef = useRef();
  const workTarget = useRef(0);
  const restTarget = useRef(0);
  const [timer, setter] = useTimer();
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    if (round > 0 && timer.currentTime <= 0) {
      if (round < parseInt(roundRef.current.value) * 2) {
        if (round % 2 === 1) {
          setter.setTargetTime(restTarget.current);
        } else {
          setter.setTargetTime(workTarget.current);
        }
        setRound(prev => prev + 1);
        setter.runTimer();
      } else {
        setIsDone(true)
      }
    }
  }, [timer.currentTime]);

  useEffect(() => {
    resetRound()
  }, [])

  const resetRound = () => {
    setRound(1);
    setIsDone(false)
    setter.reset();
    setter.setTargetTime(workTarget.current);
  };

  return (<div>
    <div className={styles.watch}>
      <TimeSelector label={"Work Time"} setTime={(time) => {
        setter.setTargetTime(time);
        workTarget.current = time;
      }}/>
      <Clock time={timer.currentTime}/>
      <TimeSelector label={"Rest Time"} setTime={(time) => restTarget.current = time}/>
    </div>
    <div className={styles.roundInputGroup}>
      <input ref={roundRef} placeholder={"Rounds"}/>
      {timer.isRunning ? (
        <button onClick={() => setter.pauseTimer()}>Pause</button>) : (
         <button disabled={isDone} onClick={() => setter.runTimer()}>Start</button>)}
      <button onClick={() => resetRound()}>Reset</button>
    </div>
  </div>);
};
export default Tabata;
