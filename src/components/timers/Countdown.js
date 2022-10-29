import Clock from "../display/Clock";
import TimeSelector from "../input/TimeSelector";
import styles from "./Stopwatch.module.css"
import useTimer from "../../hooks/useTimer";
import { useRef } from "react";

const Countdown = ({down=true}) => {
  const [timer, setter] = useTimer(down)

  return <div className={styles.watch}>
    <Clock time={timer.currentTime}/>
    {!timer.isRunning ?  (<button onClick={() => setter.runTimer()}>Start</button>):(<button onClick={() => setter.pauseTimer()}>Pause</button>)}
    <button onClick={() => setter.reset()}>Reset</button>
    <TimeSelector setTime={(time) => setter.setTargetTime(time)}/>
  </div>
};

export default Countdown;
