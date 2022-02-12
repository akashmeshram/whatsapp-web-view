import styles from "./style.module.css";

function Message({ id }) {
  return (
    <div
      className={[
        styles.container,
        ...(id % 2 === 0 ? [styles.receiver] : []),
      ].join(" ")}
    >
      <p className={styles.text}>hello there how are you {id}</p>
    </div>
  );
}

export default Message;
