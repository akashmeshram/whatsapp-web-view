import styles from "./style.module.css";
import Message from "../../Components/Message";

import Profilebar from "../../Components/Profilebar";
import Chatbox from "../../Components/Chatbox";

function Main() {
  const allMessages = [...new Array(20)].map((_, i) => (
    <Message key={i} id={i} />
  ));
  return (
    <div className={styles.container}>
      <div>
        <Profilebar />
      </div>
      <div className={styles.messages}>{allMessages}</div>
      <div>
        <Chatbox />
      </div>
    </div>
  );
}

export default Main;
