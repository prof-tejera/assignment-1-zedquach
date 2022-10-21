import { useEffect, useState, useRef } from "react";
import styles from "./Clock.module.css";

const Clock = ({ fromTime, toTime, isStop }) => {
  const fromTimeUnix =
    (fromTime.hour * 60 + fromTime.minute * 60 + fromTime.second) * 1000;
  const toTimeUnix =
    (toTime.hour * 60 + toTime.minute * 60 + toTime.second) * 1000;

  const [currentTime, setCurrentTime] = useState(fromTimeUnix);
  const offset = isStop ? 0 : fromTimeUnix < toTimeUnix ? 10 : -10;

  const root = document.querySelector(":root");
  root.style.setProperty("--progress-deg", "0");

  const convertTimestamp = (timestamp) => {
    return new Date(timestamp).toISOString().substring(11, 21);
  };

  let timer = useRef();

  useEffect(() => {
    if (isStop) {
      clearInterval(timer.current);
    } else {
      timer.current = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + offset);
      }, 10);
    }
    return () => clearInterval(timer.current);
  }, [isStop]);

  useEffect(() => {
    if (currentTime >= toTimeUnix) {
      clearInterval(timer.current);
    }
    root.style.setProperty(
      "--progress-deg",
      `${((toTimeUnix - currentTime) / toTimeUnix) * 360}deg`
    );
  }, [currentTime]);

  return <div className={styles.clock}>{convertTimestamp(currentTime)}</div>;
};

export default Clock;
