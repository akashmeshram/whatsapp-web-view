import styles from "./style.module.css";
import { ReactComponent as LeftTick } from "./left.svg";
import { ReactComponent as RightTick } from "./right.svg";

function Message({ side, text, time }) {
  return (
    <div
      className={[
        styles.container,
        ...(side === "left" ? [styles.receiver] : []),
      ].join(" ")}
    >
      <span className={styles.arrow}>
        {side === "left" ? <LeftTick /> : ""}
      </span>
      <div className={styles.text}>
        <p>{text}</p>
        <span className={styles.timestamp}>{time}</span>
      </div>
      <span className={styles.arrow}>
        {side === "left" ? "" : <RightTick />}
      </span>
    </div>
  );
}

export default Message;
