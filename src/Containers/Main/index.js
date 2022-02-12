import styles from "./style.module.css";
import Message from "../../Components/Message";

import Chatbox from "../../Components/Chatbox";

function Main() {
  const allMessages = [...new Array(20)].map((_, i) => (
    <Message key={i} id={i} />
  ));
  return (
    <div className={styles.container}>
      <div className={styles.messages}>{allMessages}</div>
      <Chatbox />
    </div>
  );
}

export default Main;
