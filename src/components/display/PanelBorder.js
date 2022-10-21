import styles from "./PanelBorder.module.css";

const PanelBorder = () => {
  return (
    <>
      <div className={styles.mask}></div>
      <div className={styles.border}></div>
    </>
  );
};

export default PanelBorder;
