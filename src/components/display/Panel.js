import Clock from "./Clock";
import styles from "./Panel.module.css";
import PanelBorder from "./PanelBorder";

const Panel = ({ fromTime, toTime, isStop }) => {
  return (
    <div className={styles.panel}>
      <PanelBorder />
      <Clock fromTime={fromTime} toTime={toTime} isStop={isStop} />
    </div>
  );
};

export default Panel;
