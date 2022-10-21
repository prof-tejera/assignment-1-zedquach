import styles from "./TimeSelector.module.css";
import Input from "./Input";

const TimeSelector = ({ setTime }) => {
  return (
    <div className={styles.inputGroup}>
      <Input maxChoice={24} setTime={(val) => setTime("hour", val)} />
      <Input maxChoice={60} setTime={(val) => setTime("minute", val)} />
      <Input maxChoice={60} setTime={(val) => setTime("second", val)} />
    </div>
  );
};

export default TimeSelector;
