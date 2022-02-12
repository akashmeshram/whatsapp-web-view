import styles from "./style.module.css";
import { ReactComponent as Send } from "./send.svg";

function Chatbox() {
  return (
    <div className={styles.container}>
      <div className={styles.inputtext}>
        <input type="text"></input>
      </div>
      <div className={styles.send}>
        <button>
          <Send />
        </button>
      </div>
    </div>
  );
}

export default Chatbox;
