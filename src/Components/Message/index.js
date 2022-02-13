import styles from "./style.module.css";

function Message({ side, text, time }) {
  return (
    <div
      className={[
        styles.container,
        ...(side === "left" ? [styles.receiver] : []),
      ].join(" ")}
    >
      <div className={styles.text}>
        <p>{text}</p>
        <span className={styles.timestamp}>{time}</span>
      </div>
    </div>
  );
}

export default Message;
