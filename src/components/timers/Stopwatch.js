import { useEffect, useState } from "react";
import Panel from "../display/Panel";
import TimeSelector from "../form/TimeSelector";

const Stopwatch = () => {
  const [toTime, setToTime] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  const [isStop, setIsStop] = useState(true);

  const setTime = (type, value) => {
    setToTime((prev) => ({ ...prev, [type]: value }));
  };

  useEffect(() => {}, [toTime]);

  return (
    <div>
      <TimeSelector setTime={setTime} />
      <button onClick={() => setIsStop(false)}>Start</button>
      <Panel
        fromTime={{
          hour: 0,
          minute: 0,
          second: 0,
        }}
        toTime={toTime}
        isStop={isStop}
      />
    </div>
  );
};

export default Stopwatch;
