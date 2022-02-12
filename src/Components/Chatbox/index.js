import styles from "./style.module.css";

function Chatbox() {
  return (
    <div className={styles.container}>
      <div className={styles.inputtext}>
        <input type="text"></input>
      </div>
      <div className={styles.send}>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default Chatbox;
