import styles from "./style.module.css";
import { useState } from "react";
import { ReactComponent as Send } from "./send.svg";

function Chatbox({ sendMessage }) {
  const [chatText, setChatText] = useState("");

  const handleSubmit = (e) => {
    if (e.keyCode === 13 || !e.keyCode) {
      sendMessage(chatText);
      setChatText("");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputtext}>
        <input
          type="text"
          value={chatText}
          onInput={(e) => setChatText(e.target.value)}
          onKeyDown={handleSubmit}
        />
      </div>
      <div className={styles.send}>
        <button onClick={handleSubmit}>
          <Send />
        </button>
      </div>
    </div>
  );
}

export default Chatbox;
