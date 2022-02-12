import styles from "./style.module.css";

function Message({ id }) {
  return (
    <div
      className={[
        styles.container,
        ...(id % 2 === 0 ? [styles.receiver] : []),
      ].join(" ")}
    >
      <p>hello there {id}</p>
    </div>
  );
}

export default Message;
